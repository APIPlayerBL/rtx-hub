#!/usr/bin/env python3
"""Minimal static + form backend for RTX HUB."""
import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
DATA = ROOT / "data"
SUBMISSIONS = DATA / "submissions.json"
PORT = int(os.environ.get("PORT", "8000"))


def load_submissions():
    if SUBMISSIONS.exists():
        try:
            return json.loads(SUBMISSIONS.read_text(encoding="utf-8"))
        except Exception:
            return []
    return []


def save_submissions(items):
    DATA.mkdir(parents=True, exist_ok=True)
    SUBMISSIONS.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=str(ROOT), **k)

    def _send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path.rstrip("/") != "/api/contact":
            self._send_json(404, {"ok": False, "message": "Not found"})
            return
        length = int(self.headers.get("Content-Length", "0") or 0)
        raw = self.rfile.read(length) if length else b""
        try:
            payload = json.loads(raw.decode("utf-8") or "{}")
        except Exception:
            self._send_json(400, {"ok": False, "message": "Некорректный JSON"})
            return
        name = str(payload.get("name", "")).strip()
        email = str(payload.get("email", "")).strip()
        if not name or "@" not in email:
            self._send_json(400, {"ok": False, "message": "Заполните имя и корректный email"})
            return
        items = load_submissions()
        items.append(payload)
        save_submissions(items)
        self._send_json(200, {"ok": True, "message": "Спасибо! Заявка отправлена — мы скоро свяжемся с вами."})

    def log_message(self, *args):
        super().log_message(*args)


if __name__ == "__main__":
    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"RTX HUB server running at http://127.0.0.1:{PORT}/")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()

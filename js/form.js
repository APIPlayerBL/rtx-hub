window.submitForm = async function () {
  const btn = document.getElementById("submit-btn");
  const err = document.getElementById("form-error");
  const status = document.getElementById("form-status");
  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const companyInput = document.getElementById("form-company");
  const serviceInput = document.getElementById("form-service");
  const messageInput = document.getElementById("form-message");
  const formPanel = document.querySelector(".form-panel");

  const name = (nameInput && nameInput.value.trim()) || "";
  const email = (emailInput && emailInput.value.trim()) || "";
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const showError = function (msg) {
    if (err) { err.textContent = msg; err.style.display = "block"; }
  };

  if (err) err.style.display = "none";
  if (status) status.textContent = "";

  if (!name) { showError("Укажите имя."); return; }
  if (!emailOk) { showError("Укажите корректный email."); return; }

  const payload = {
    name: name,
    email: email,
    company: (companyInput && companyInput.value.trim()) || "",
    service: (serviceInput && serviceInput.value) || "",
    message: (messageInput && messageInput.value.trim()) || ""
  };

  if (btn) { btn.disabled = true; btn.textContent = "Отправляем…"; }
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("network");
    const data = await response.json().catch(function () { return {}; });
    if (status) status.textContent = data.message || "Спасибо! Заявка отправлена — мы скоро свяжемся с вами.";
    if (formPanel) formPanel.reset();
  } catch (e) {
    // Fallback for static/file:// hosting without backend: open the user's mail client
    const subject = encodeURIComponent("Заявка RTX HUB");
    const body = encodeURIComponent(
      "Имя: " + payload.name + "\n" +
      "Email: " + payload.email + "\n" +
      "Задача/игра: " + payload.company + "\n" +
      "Модель RTX: " + payload.service + "\n" +
      "Бюджет/примечания: " + payload.message
    );
    window.location.href = "mailto:hello@rtxhub.example?subject=" + subject + "&body=" + body;
    if (status) status.textContent = "Бэкенд недоступен — открыли почтовый клиент для отправки заявки.";
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Отправить заявку"; }
  }
};

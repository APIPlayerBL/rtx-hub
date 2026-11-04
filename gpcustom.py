import io
s=io.open("index.html",encoding="utf-8").read()
old = '''                <select id="gpu-pick" class="gpu-pick" aria-label="Выбор видеокарты RTX">
                    <optgroup label="RTX 20 series">
                        <option value="rtx-2060">GeForce RTX 2060</option>
                        <option value="rtx-2070s">GeForce RTX 2070 Super</option>
                        <option value="rtx-2080ti">GeForce RTX 2080 Ti</option>
                    </optgroup>
                    <optgroup label="RTX 30 series">
                        <option value="rtx-3060">GeForce RTX 3060</option>
                        <option value="rtx-3070">GeForce RTX 3070</option>
                        <option value="rtx-3080">GeForce RTX 3080</option>
                        <option value="rtx-3090">GeForce RTX 3090</option>
                    </optgroup>
                    <optgroup label="RTX 40 series">
                        <option value="rtx-4060">GeForce RTX 4060</option>
                        <option value="rtx-4060ti">GeForce RTX 4060 Ti</option>
                        <option value="rtx-4070">GeForce RTX 4070</option>
                        <option value="rtx-4070s">GeForce RTX 4070 Super</option>
                        <option value="rtx-4070ti-s">GeForce RTX 4070 Ti Super</option>
                        <option value="rtx-4080s">GeForce RTX 4080 Super</option>
                        <option value="rtx-4090">GeForce RTX 4090</option>
                    </optgroup>
                    <optgroup label="RTX 50 series">
                        <option value="rtx-5090">GeForce RTX 5090</option>
                    </optgroup>
                </select>'''
new = '''                <select id="gpu-pick" class="sr-only" aria-hidden="true" tabindex="-1">
                    <option value="rtx-2060">GeForce RTX 2060</option>
                    <option value="rtx-2070s">GeForce RTX 2070 Super</option>
                    <option value="rtx-2080ti">GeForce RTX 2080 Ti</option>
                    <option value="rtx-3060">GeForce RTX 3060</option>
                    <option value="rtx-3070">GeForce RTX 3070</option>
                    <option value="rtx-3080">GeForce RTX 3080</option>
                    <option value="rtx-3090">GeForce RTX 3090</option>
                    <option value="rtx-4060" selected>GeForce RTX 4060</option>
                    <option value="rtx-4060ti">GeForce RTX 4060 Ti</option>
                    <option value="rtx-4070">GeForce RTX 4070</option>
                    <option value="rtx-4070s">GeForce RTX 4070 Super</option>
                    <option value="rtx-4070ti-s">GeForce RTX 4070 Ti Super</option>
                    <option value="rtx-4080s">GeForce RTX 4080 Super</option>
                    <option value="rtx-4090">GeForce RTX 4090</option>
                    <option value="rtx-5090">GeForce RTX 5090</option>
                </select>
                <div class="custom-select interactable" id="gpu-custom">
                    <div class="custom-select-trigger" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false">
                        <span>GeForce RTX 4060</span>
                        <div class="custom-select-arrow"><svg viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></div>
                    </div>
                    <div class="custom-select-options" role="listbox" tabindex="-1">
                        <div class="custom-select-group">RTX 20 series</div>
                        <div class="custom-select-option" role="option" data-value="rtx-2060">GeForce RTX 2060</div>
                        <div class="custom-select-option" role="option" data-value="rtx-2070s">GeForce RTX 2070 Super</div>
                        <div class="custom-select-option" role="option" data-value="rtx-2080ti">GeForce RTX 2080 Ti</div>
                        <div class="custom-select-group">RTX 30 series</div>
                        <div class="custom-select-option" role="option" data-value="rtx-3060">GeForce RTX 3060</div>
                        <div class="custom-select-option" role="option" data-value="rtx-3070">GeForce RTX 3070</div>
                        <div class="custom-select-option" role="option" data-value="rtx-3080">GeForce RTX 3080</div>
                        <div class="custom-select-option" role="option" data-value="rtx-3090">GeForce RTX 3090</div>
                        <div class="custom-select-group">RTX 40 series</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4060" aria-selected="true" class="selected">GeForce RTX 4060</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4060ti">GeForce RTX 4060 Ti</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4070">GeForce RTX 4070</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4070s">GeForce RTX 4070 Super</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4070ti-s">GeForce RTX 4070 Ti Super</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4080s">GeForce RTX 4080 Super</div>
                        <div class="custom-select-option" role="option" data-value="rtx-4090">GeForce RTX 4090</div>
                        <div class="custom-select-group">RTX 50 series</div>
                        <div class="custom-select-option" role="option" data-value="rtx-5090">GeForce RTX 5090</div>
                    </div>
                </div>'''
assert old in s
s=s.replace(old,new)
# add group CSS into inline style
anchor="      .gpu-pick option { color:#fff; background:rgba(10,10,18,0.98); }"
addition=anchor+"\n      .custom-select-group { padding:0.5rem 1.2rem; font-size:0.7rem; text-transform:uppercase; letter-spacing:0.12em; color:#76b900; background:rgba(118,185,0,0.08); border-bottom:1px solid rgba(255,255,255,0.04); }"
assert anchor in s
s=s.replace(anchor,addition,1)
# hide sr-only select visually but keep for semantics
if ".sr-only {" not in s:
    s=s.replace(anchor, addition+"\n      .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }", 1)
io.open("index.html","w",encoding="utf-8").write(s)
print("done")

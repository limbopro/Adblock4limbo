(function() {
    const VERSION = "v3.4.4";
    const STORAGE_KEY = 'js_manager_v2';

    // === 第一部分：核心执行引擎 ===
    function execute(type, code) {
        try {
            if (type === 'inline') {
                eval(code);
            } else {
                const s = document.createElement('script');
                s.src = code;
                document.head.appendChild(s);
            }
        } catch (e) { 
            console.error(`[${VERSION} Engine] 执行出错:`, e); 
        }
    }

    const runScripts = (mode) => {
        const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        history.forEach(item => {
            if (mode === 'load' && item.autoRun) execute(item.type, item.content);
            if (mode === 'monitor' && item.liveMonitor) execute(item.type, item.content);
        });
    };

    const initManager = () => {
        runScripts('load');
        let timer = null;
        const observer = new MutationObserver(() => {
            clearTimeout(timer);
            timer = setTimeout(() => runScripts('monitor'), 800);
        });
        observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
    };

    if (document.readyState === 'complete') { initManager(); } 
    else { window.addEventListener('load', initManager); }

    // === 第二部分：管理面板封装 ===
    window.showJsManager = function() {
        if (document.getElementById('script-panel-v3')) return;

        const style = document.createElement('style');
        style.innerHTML = `
            #script-panel-v3 {
                position: fixed !important; top: 10px !important; right: 10px !important;
                width: 360px !important; background: #fff !important; border: 1px solid #ccc !important;
                padding: 12px 12px 0 12px !important; z-index: 2147483647 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
                font-family: -apple-system, sans-serif !important; border-radius: 12px !important;
                max-height: 90vh !important; overflow-y: auto !important; color: #333 !important;
                touch-action: none !important; display: flex !important; flex-direction: column !important;
            }
            @media (max-width: 480px) { #script-panel-v3 { width: 94% !important; right: 3% !important; left: 3% !important; } }
            .panel-header { display: flex !important; justify-content: space-between !important; align-items: center !important; border-bottom: 1px solid #eee !important; cursor: move !important; background: #f8f9fa !important; margin: -12px -12px 10px -12px !important; padding: 12px !important; border-radius: 12px 12px 0 0 !important; user-select: none !important; }
            .panel-footer-drag { height: 35px !important; background: #f8f9fa !important; margin: 10px -12px 0 -12px !important; cursor: move !important; display: flex !important; justify-content: center !important; align-items: center !important; border-top: 1px solid #eee !important; border-radius: 0 0 12px 12px !important; }
            .drag-dot { width: 40px !important; height: 5px !important; background: #ddd !important; border-radius: 3px !important; }
            .close-btn { cursor: pointer !important; font-size: 28px !important; color: #999 !important; border: none !important; background: none !important; line-height: 0.8 !important; }
            textarea { width: 100% !important; box-sizing: border-box !important; border: 1px solid #ddd !important; padding: 10px !important; border-radius: 8px !important; font-size: 16px !important; min-height: 80px !important; }
            select { width: 100% !important; padding: 10px !important; border-radius: 8px !important; border: 1px solid #ddd !important; background: #fff !important; margin-bottom: 8px !important; }
            .btn-save { background: #007bff !important; color: white !important; width: 100% !important; padding: 12px !important; font-weight: bold !important; border-radius: 8px !important; }
            .history-item { border-bottom: 1px solid #eee !important; padding: 12px 0 !important; }
            .item-actions { margin-top: 8px !important; display: flex !important; align-items: center !important; gap: 8px !important; flex-wrap: wrap !important; }
            .btn-action { padding: 6px 10px !important; border-radius: 4px !important; color: white !important; font-size: 13px !important; }
            .btn-run { background: #28a745 !important; }
            .btn-edit { background: #ffc107 !important; color: black !important; }
            .btn-delete { background: #dc3545 !important; }
            .btn-confirm-delete { background: #000 !important; }
            .badge { padding: 2px 5px !important; border-radius: 4px !important; font-size: 10px !important; font-weight: bold !important; margin-left: 4px !important; }
            .badge-auto { background: #e7f3ff !important; color: #007bff !important; }
            .badge-live { background: #fff3e0 !important; color: #ef6c00 !important; }
            .option-row { display: flex !important; gap: 15px !important; margin: 8px 0 !important; flex-wrap: wrap !important; }
            
            /* v3.4.4：增加 margin-left: 4px */
            .hint { font-size: 11px !important; color: #888 !important; display: block !important; margin-bottom: 8px !important; margin-left: 4px !important; }
        `;
        document.head.appendChild(style);

        const container = document.createElement('div');
        container.id = 'script-panel-v3';
        container.className = 'notranslate';
        container.setAttribute('translate', 'no');
        
        container.innerHTML = `
            <div class="panel-header drag-handle">
                <span style="font-weight:bold;">脚本管理器 ${VERSION}</span>
                <button id="panel-close-x" class="close-btn">&times;</button>
            </div>
            <div style="flex:1;">
                <select id="script-type">
                    <option value="inline">内联脚本 (Eval)</option>
                    <option value="external">外部脚本 (URL)</option>
                </select>
                <textarea id="script-content" rows="3"></textarea>
                <div class="option-row">
                    <label style="font-size:13px;"><input type="checkbox" id="auto-run-check"> 自动启动</label>
                    <label style="font-size:13px;"><input type="checkbox" id="live-monitor-check"> 实时监听</label>
                </div>
                <span class="hint">自动启动：页面加载时运行。实时监听：页面内容发生变化时运行。</span>
                <input type="hidden" id="edit-index" value="-1">
                <button id="save-btn" class="btn-save">保存并执行一次</button>
                <div id="history-list"></div>
            </div>
            <div class="panel-footer-drag drag-handle"><div class="drag-dot"></div></div>
        `;
        document.body.appendChild(container);

        const typeSelect = document.getElementById('script-type');
        const contentInput = document.getElementById('script-content');
        const autoRunCheck = document.getElementById('auto-run-check');
        const liveMonitorCheck = document.getElementById('live-monitor-check');
        const saveBtn = document.getElementById('save-btn');
        const historyList = document.getElementById('history-list');
        const editIndexInput = document.getElementById('edit-index');

        document.getElementById('panel-close-x').onclick = () => container.remove();

        const placeholders = {
            inline: "请在此输入 JS 代码，例如：alert('Hello');",
            external: "请在此输入脚本 URL，例如：https://cdn.com/script.js"
        };
        const updatePlaceholder = () => { contentInput.placeholder = placeholders[typeSelect.value]; };
        typeSelect.addEventListener('change', updatePlaceholder);
        updatePlaceholder();

        function renderHistory() {
            const history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            historyList.innerHTML = '<div style="margin-top:15px; font-weight:bold; font-size:13px; color:#666;">脚本列表</div>';
            [...history].reverse().forEach((item, revIndex) => {
                const index = history.length - 1 - revIndex;
                const div = document.createElement('div');
                div.className = 'history-item';
                div.innerHTML = `
                    <div style="word-break: break-all; font-size: 14px;">
                        <b>[${item.type === 'inline' ? '内' : '外'}]</b> ${item.content.substring(0, 25)}...
                        ${item.autoRun ? '<span class="badge badge-auto">自启</span>' : ''}
                        ${item.liveMonitor ? '<span class="badge badge-live">监听</span>' : ''}
                    </div>
                    <div class="item-actions">
                        <label style="font-size:11px;"><input type="checkbox" ${item.autoRun ? 'checked' : ''} onchange="window._panelAction('toggleAuto', ${index})">自启</label>
                        <label style="font-size:11px;"><input type="checkbox" ${item.liveMonitor ? 'checked' : ''} onchange="window._panelAction('toggleLive', ${index})">监听</label>
                        <button class="btn-action btn-run" onclick="window._panelAction('run', ${index})">运行</button>
                        <button class="btn-action btn-edit" onclick="window._panelAction('edit', ${index})">改</button>
                        <button class="btn-action btn-delete" id="del-btn-${index}" onclick="window._panelAction('preDel', ${index})">删</button>
                    </div>
                `;
                historyList.appendChild(div);
            });
        }

        window._panelAction = function(action, idx) {
            let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            const delBtn = document.getElementById(`del-btn-${idx}`);
            if (action === 'preDel') {
                delBtn.innerText = "确定？"; delBtn.className = "btn-action btn-delete btn-confirm-delete";
                delBtn.onclick = () => window._panelAction('del', idx);
                setTimeout(() => { if(delBtn) renderHistory(); }, 3000); return;
            }
            if (action === 'del') history.splice(idx, 1);
            else if (action === 'edit') {
                const item = history[idx];
                typeSelect.value = item.type; contentInput.value = item.content;
                autoRunCheck.checked = !!item.autoRun; liveMonitorCheck.checked = !!item.liveMonitor;
                editIndexInput.value = idx; saveBtn.innerText = "更新并执行"; 
                updatePlaceholder(); return;
            } 
            else if (action === 'run') execute(history[idx].type, history[idx].content);
            else if (action === 'toggleAuto') history[idx].autoRun = !history[idx].autoRun;
            else if (action === 'toggleLive') history[idx].liveMonitor = !history[idx].liveMonitor;
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
            renderHistory();
        };

        saveBtn.onclick = () => {
            const content = contentInput.value.trim();
            if (!content) return;
            let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            const item = { type: typeSelect.value, content, autoRun: autoRunCheck.checked, liveMonitor: liveMonitorCheck.checked };
            const idx = parseInt(editIndexInput.value);
            if (idx > -1) { history[idx] = item; editIndexInput.value = "-1"; saveBtn.innerText = "保存并执行一次"; } 
            else { history.push(item); }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
            execute(item.type, item.content);
            contentInput.value = ""; autoRunCheck.checked = false; liveMonitorCheck.checked = false;
            renderHistory();
        };

        let isDragging = false, startX, startY, initialLeft, initialTop;
        const dragStart = (e) => {
            if (!e.target.closest('.drag-handle') || ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(e.target.tagName)) return;
            isDragging = true;
            const evt = e.type === 'touchstart' ? e.touches[0] : e;
            const rect = container.getBoundingClientRect();
            startX = evt.clientX; startY = evt.clientY;
            initialLeft = rect.left; initialTop = rect.top;
            container.style.setProperty('right', 'auto', 'important');
        };
        const dragMove = (e) => {
            if (!isDragging) return;
            const evt = e.type === 'touchmove' ? e.touches[0] : e;
            container.style.setProperty('left', `${initialLeft + (evt.clientX - startX)}px`, 'important');
            container.style.setProperty('top', `${initialTop + (evt.clientY - startY)}px`, 'important');
        };
        container.addEventListener('mousedown', dragStart);
        container.addEventListener('touchstart', dragStart, { passive: true });
        window.addEventListener('mousemove', dragMove);
        window.addEventListener('touchmove', dragMove, { passive: false });
        window.addEventListener('mouseup', () => isDragging = false);
        window.addEventListener('touchend', () => isDragging = false);

        renderHistory();
    };

    console.log(`[${VERSION}] UI 细节优化已完成。`);
})();

// --- 固定功能常量和状态管理 ---
window.PIN_KEY = 'webDebuggerPinned';

/**
 * 获取固定状态 (默认为 true，即显示)
 */
window.getPinState = function getPinState() {
    // 在浏览器环境中，直接使用 localStorage
    const state = localStorage.getItem(PIN_KEY);
    // 默认首次加载为 true，即显示
    return state === null ? true : state === 'true';
}

/**
 * 核心渲染和面板创建函数
 */


// 暴露初始化函数到全局
window.initWebDebugger = function showDebuggerPanel() {
    if (typeof body_build == 'function') {
        body_build('false')
    }
    // 如果面板已存在，则刷新内容并退出
    if (document.getElementById('storage-control-panel')) {
        if (window.__debugRender) {
            window.__debugRender();
        }
        return;
    }

    // --- 样式定义 ---
    const panelStyle = `
            #storage-control-panel {
                position: fixed !important; 
                top: 10px;    
                right: 10px;  
                width: 400px !important; 
                max-width: 95vw !important;
                height: 500px !important;
                max-height: 95vh !important;
                overflow: hidden !important; 
                background-color: #ffffff !important;
                border: 1px solid #e0e0e0 !important; 
                border-radius: 12px !important;
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1) !important;
                z-index: 114120 !important;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
                font-size: 13px !important;
                color: #333 !important;
                resize: both !important;
                min-width: 300px !important;
                display: flex !important;
                flex-direction: column !important; 
            }
            /* H3 - 主标题样式固定 */
            #storage-control-panel h3 {
                flex-shrink: 0 !important;
                margin: 0 !important;
                padding: 12px 15px !important;
                background-color: #f7f7f7 !important;
                border-bottom: 1px solid #e0e0e0 !important;
                cursor: grab !important;
                user-select: none !important;
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                font-size: 15px !important;
                font-weight: 600 !important;
                color: #333 !important; /* 固定颜色 */
                border-radius: 12px 12px 0 0 !important;
                z-index: 2 !important; 
            }
            #storage-control-panel .header-controls {
                display: flex !important;
                align-items: center !important;
                gap: 10px !important; 
            }
            #storage-control-panel button.close-btn,
            #storage-control-panel button.pin-btn {
                background: none !important;
                border: none !important;
                font-size: 20px !important; 
                line-height: 1 !important;
                cursor: pointer !important;
                color: #888 !important; /* 固定颜色 */
                padding: 0 !important;
                transition: color 0.2s !important;
            }
            #storage-control-panel button.pin-btn.pinned {
                color: #007bff !important; 
            }
            #storage-control-panel .content {
                flex-grow: 1 !important; 
                padding: 10px !important;
                display: flex !important; 
                flex-direction: column !important; 
                gap: 0 !important;
                overflow-y: auto !important; 
            }
            #storage-control-panel .section {
                flex-shrink: 0 !important; 
                margin-bottom: 15px !important;
                padding: 0 5px !important;
                border-bottom: 1px solid #f0f0f0 !important; 
                display: flex !important;
                flex-direction: column !important;
                overflow: visible !important; 
            }
            #storage-control-panel .section:last-child {
                border-bottom: none !important;
                margin-bottom: 0 !important;
            }
            /* H4 - 分区标题样式固定 */
            #storage-control-panel h4 {
                position: sticky !important;
                top: -12px !important; 
                z-index: 1 !important; 
                margin: 0 !important; 
                padding: 10px 0 5px 0 !important; 
                background-color: #ffffff !important;
                border-bottom: 2px solid #007bff !important;
                font-size: 14px !important;
                font-weight: bold !important;
                color: #007bff !important; /* 固定颜色 */
            }
            #storage-control-panel .data-list-wrapper {
                flex-grow: 1 !important; 
                overflow-y: visible !important; 
                padding-right: 0 !important; 
            }
            #storage-control-panel .storage-item {
                display: grid !important;
                grid-template-areas: 
                    "key key"
                    "value actions" !important;
                grid-template-columns: 1fr 64px !important; 
                gap: 5px !important;
                padding: 8px 0 !important;
                border-bottom: 1px dotted #e0e0e0 !important;
                align-items: center !important;
            }
            #storage-control-panel .json-display {
                padding: 10px !important;
                background-color: #f8f8f8 !important;
                border: 1px solid #eee !important;
                border-radius: 6px !important;
                font-family: Consolas, Monaco, 'Courier New', monospace !important;
                font-size: 12px !important;
                white-space: pre-wrap !important; 
                word-wrap: break-word !important; 
                max-height: 300px !important;
                overflow-y: auto !important;
            }
            #storage-control-panel .json-item {
                margin-bottom: 15px !important;
                padding-bottom: 5px !important;
                border-bottom: 1px dashed #ccc !important;
            }
            #storage-control-panel .json-item:last-child {
                border-bottom: none !important;
                margin-bottom: 0 !important;
            }
            #storage-control-panel .json-title {
                font-weight: bold !important;
                color: #a00 !important;
                margin-bottom: 5px !important;
                display: block !important;
            }
            #storage-control-panel .storage-item:last-child {
                border-bottom: none !important;
            }
            #storage-control-panel .key-label {
                grid-area: key !important; 
                font-weight: 500 !important;
                overflow: hidden !important;
                text-overflow: ellipsis !important;
                white-space: nowrap !important;
                color: #555 !important;
                cursor: pointer !important; 
                text-decoration: underline !important; 
                text-decoration-color: #ccc !important;
            }
            #storage-control-panel input[type="text"] {
                grid-area: value !important; 
                width: 100% !important;
                padding: 6px 8px !important;
                border: 1px solid #ccc !important;
                border-radius: 4px !important;
                box-sizing: border-box !important;
                font-size: 13px !important;
            }
            #storage-control-panel .action-buttons {
                grid-area: actions !important; 
                display: flex !important;
                gap: 4px !important;
                justify-content: flex-end !important;
                flex-shrink: 0 !important; 
            }
            #storage-control-panel button.action-btn {
                width: 30px !important; 
                height: 30px !important;
                padding: 0 !important;
                cursor: pointer !important;
                border: none !important;
                border-radius: 4px !important;
                color: white !important;
                font-size: 14px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                transition: background-color 0.2s, transform 0.1s !important;
            }
            #storage-control-panel button.save-btn {
                background-color: #007bff !important;
            }
            #storage-control-panel button.delete-btn {
    background-color: #dc3545 !important; 
    /* 删除或注释掉 pointer-events: none */
    /* pointer-events: none !important; */
    pointer-events: auto !important;  /* 或者显式开启 */
}


#storage-control-panel button.delete-btn:hover {
    background-color: #c82333 !important;
    transform: scale(1.1) !important;
}
#storage-control-panel button.save-btn:hover {
    background-color: #0069d9 !important;
    transform: scale(1.1) !important;
}

            .key-tooltip {
                position: fixed !important; 
                max-width: 400px !important;
                padding: 10px !important;
                background-color: #333 !important;
                color: #fff !important;
                border-radius: 4px !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2) !important;
                z-index: 100000 !important;
                font-size: 13px !important;
                line-height: 1.4 !important;
                pointer-events: none !important; 
                opacity: 0 !important;
                transition: opacity 0.2s !important;
            }
            .key-tooltip.visible {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            @media (max-width: 450px) { 
                #storage-control-panel {
                    width: 100vw !important; 
                    min-width: 100vw !important;
                    height: 100vh !important; 
                    top: 0vh !important;
                    right: 0vw !important;
                    left: 0vw !important;
                    border-radius: 4px !important;
                }
                #storage-control-panel .storage-item {
                    grid-template-columns: 1fr !important;
                    grid-template-areas: 
                        "key"
                        "value"
                        "actions" !important;
                }
                #storage-control-panel .action-buttons {
                    justify-content: flex-start !important;
                    gap: 8px !important; 
                    margin-top: 5px !important;
                }
                #storage-control-panel button.action-btn {
                    width: auto !important; 
                    padding: 5px 10px !important;
                }
            }
        `;

    // --- DOM 结构创建 和 拖拽功能 ---
    const panel = document.createElement('div');
    panel.id = 'storage-control-panel';
    panel.className = 'notranslate';

    const header = document.createElement('h3');
    header.innerHTML = '⚙️ Web 存储调试器 (Cookies/Local/Session/Config)';

    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'header-controls';

    // 固定按钮逻辑
    let isCurrentlyPinned = getPinState();
    const pinBtn = document.createElement('button');
    pinBtn.className = 'pin-btn';

    const updatePinButtonVisual = () => {
        pinBtn.textContent = isCurrentlyPinned ? '📌' : '📍';
        pinBtn.title = isCurrentlyPinned ? '点击取消固定 (关闭后隐藏)' : '点击固定 (下次刷新页面显示)';
        if (isCurrentlyPinned) {
            pinBtn.classList.add('pinned');
        } else {
            pinBtn.classList.remove('pinned');
        }
    };

    updatePinButtonVisual();

    pinBtn.onclick = () => {
        isCurrentlyPinned = !isCurrentlyPinned;
        localStorage.setItem(PIN_KEY, isCurrentlyPinned.toString());
        updatePinButtonVisual();
    };

    // 关闭按钮逻辑
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.title = '关闭调试器';
    closeBtn.onclick = () => {
        if (!isCurrentlyPinned) {
            // 只有在非固定状态下，关闭才意味着下次刷新时不显示
            localStorage.setItem(PIN_KEY, 'false');
        }
        panel.remove();
        document.getElementById('storage-control-style')?.remove();
        document.getElementById('key-tooltip')?.remove();
        document.removeEventListener('click', hideTooltipOutside);
    };

    controlsContainer.appendChild(pinBtn);
    controlsContainer.appendChild(closeBtn);

    header.appendChild(controlsContainer);
    panel.appendChild(header);

    const content = document.createElement('div');
    content.className = 'content';
    panel.appendChild(content);

    // 样式注入
    let style = document.getElementById('storage-control-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'storage-control-style';
        document.head.appendChild(style);
    }
    style.innerHTML = panelStyle;

    // 确保 body 存在
    if (document.body) {
        document.body.appendChild(panel);
    } else {
        console.error("无法找到 body 元素来插入调试器面板。请确保在 body 加载后调用 initWebDebugger()。");
        return;
    }

    // --- 拖拽功能实现 ---
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        if (window.innerWidth <= 450) return;
        isDragging = true;

        const rect = panel.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        panel.style.right = 'auto';
        panel.style.bottom = 'auto';
        panel.style.left = rect.left + 'px';
        panel.style.top = rect.top + 'px';

        panel.style.cursor = 'grabbing';
        e.preventDefault();
        e.stopPropagation();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        panel.style.left = Math.max(0, Math.min(window.innerWidth - panel.offsetWidth, newX)) + 'px';
        panel.style.top = Math.max(0, Math.min(window.innerHeight - panel.offsetHeight, newY)) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        if (window.innerWidth > 450) {
            panel.style.cursor = 'grab';
        }
    });

    // --- 浮窗逻辑 (保持不变) ---
    let tooltip = document.getElementById('key-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'key-tooltip';
        tooltip.className = 'key-tooltip';
        document.body.appendChild(tooltip);
    }

    const hideTooltipOutside = (e) => {
        if (tooltip.classList.contains('visible') &&
            !tooltip.contains(e.target) &&
            e.target.className !== 'key-label') {
            tooltip.classList.remove('visible');
        }
    };

    document.removeEventListener('click', hideTooltipOutside);
    document.addEventListener('click', hideTooltipOutside);

    window.showTooltip = function showTooltip(fullText, targetEl) {
        tooltip.textContent = fullText;
        const rect = targetEl.getBoundingClientRect();
        let top = rect.top + rect.height / 2 - 10;
        let left = rect.right + 10;

        if (left + tooltip.offsetWidth > window.innerWidth - 10) {
            left = rect.left;
            top = rect.bottom + 5;
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
        tooltip.classList.add('visible');
    }

    // --- 核心存储操作函数 (保持不变) ---
    window.getCookieswebDebug = function getCookieswebDebug() {
        const cookies = document.cookie.split('; ').filter(c => c);
        return cookies.map(cookie => {
            const [key, ...rest] = cookie.split('=');
            return { key: decodeURIComponent(key), value: decodeURIComponent(rest.join('=')) };
        });
    }

    window.fcsetCookie = function fcsetCookie(key, value) {
        document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;
    }

    window.deleteCookie = function deleteCookie(key) {
        document.cookie = `${encodeURIComponent(key)}=; Max-Age=0; path=/`;
    }

    window.getLocalStorage = function getLocalStorage() {
        const items = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            items.push({ key: key, value: localStorage.getItem(key) });
        }
        return items;
    }

    window.setLocalStorage = function setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }

    window.deleteLocalStorage = function deleteLocalStorage(key) {
        localStorage.removeItem(key);
    }

    window.getSessionStorage = function getSessionStorage() {
        const items = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            items.push({ key: key, value: sessionStorage.getItem(key) });
        }
        return items;
    }

    window.setSessionStorage = function setSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
    }

    window.deleteSessionStorage = function deleteSessionStorage(key) {
        sessionStorage.removeItem(key);
    }

    window.getEmbeddedData = function getEmbeddedData() {
        const scripts = document.querySelectorAll('script[type="application/json"]');
        const data = [];

        scripts.forEach((script, index) => {
            const content = script.textContent.trim();
            if (content) {
                let parsedData;
                let error = null;

                try {
                    parsedData = JSON.parse(content);
                } catch (e) {
                    error = '解析失败：不是有效的 JSON 格式';
                }

                const formattedJson = parsedData
                    ? JSON.stringify(parsedData, null, 2)
                    : content;

                data.push({
                    id: script.id || `(script-${index + 1})`,
                    content: formattedJson,
                    error: error
                });
            }
        });
        return data;
    }

    // --- 渲染存储项目列表 (保持不变) ---
    window.renderStorage = function renderStorage(container, data, setter, deleter, renderer) {
        container.innerHTML = '';

        if (data.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#999; padding: 10px 0;">(当前没有存储数据)</p>';
            return;
        }

        data.forEach(item => {
            const row = document.createElement('div');
            row.className = 'storage-item';

            const keyLabel = document.createElement('div');
            keyLabel.className = 'key-label';
            keyLabel.title = item.key;
            keyLabel.textContent = item.key;

            keyLabel.addEventListener('click', (e) => {
                e.stopPropagation();
                showTooltip(item.key, keyLabel);
            });

            const valueInput = document.createElement('input');
            valueInput.type = 'text';
            valueInput.value = item.value;
            valueInput.title = item.value;

            const buttonGroup = document.createElement('div');
            buttonGroup.className = 'action-buttons';

            const saveBtn = document.createElement('button');
            saveBtn.className = 'action-btn save-btn';
            saveBtn.innerHTML = '✔';
            saveBtn.title = '修改/保存';
            saveBtn.onclick = () => { setter(item.key, valueInput.value); renderer(); };


            saveBtn.onclick = () => {
                console.log('保存:', item.key, valueInput.value);
                setter(item.key, valueInput.value);
                renderer();
            };

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'action-btn delete-btn';
            deleteBtn.innerHTML = '🗑️';
            deleteBtn.title = '删除';
            deleteBtn.onclick = () => {
                if (confirm(`确定要删除键名为 "${item.key}" 的项目吗?`)) {
                    deleter(item.key);
                    renderer();
                }
            };

            buttonGroup.appendChild(saveBtn);
            buttonGroup.appendChild(deleteBtn);

            row.appendChild(keyLabel);
            row.appendChild(valueInput);
            row.appendChild(buttonGroup);
            container.appendChild(row);
        });
    }

    window.renderEmbeddedData = function renderEmbeddedData() {
        const configData = getEmbeddedData();
        const container = embeddedListWrapper;
        container.innerHTML = '';

        if (configData.length === 0) {
            container.innerHTML = '<p style="text-align:center; color:#999; padding: 10px 0;">(未找到内嵌的 JSON 配置数据)</p>';
            return;
        }

        configData.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'json-item';

            const title = document.createElement('span');
            title.className = 'json-title';
            title.textContent = `标签 ID: ${item.id}`;
            itemDiv.appendChild(title);

            const pre = document.createElement('pre');
            pre.className = 'json-display';

            if (item.error) {
                pre.style.color = 'red';
                pre.textContent = item.error + ':\n' + item.content;
            } else {
                pre.textContent = item.content;
            }

            itemDiv.appendChild(pre);
            container.appendChild(itemDiv);
        });
    }

    // --- DOM 渲染和初始化 ---

    // 1. Cookies Section
    const cookieSection = document.createElement('div');
    cookieSection.className = 'section';
    cookieSection.innerHTML = '<h4>🍪 站点 Cookies</h4>';
    content.appendChild(cookieSection);

    const cookieListWrapper = document.createElement('div');
    cookieListWrapper.id = 'cookie-list';
    cookieListWrapper.className = 'data-list-wrapper';
    cookieSection.appendChild(cookieListWrapper);

    window.renderCookies = function renderCookies() {
        try {
            const cookies = getCookieswebDebug();
            renderStorage(cookieListWrapper, cookies, fcsetCookie, deleteCookie, renderCookies);
        } catch (error) {
            cookieListWrapper.innerHTML = '<p style="color:red;">读取 Cookie 失败。</p>';
        }
    }

    // 2. LocalStorage Section
    const localSection = document.createElement('div');
    localSection.className = 'section';
    localSection.innerHTML = '<h4>💾 LocalStorage</h4>';
    content.appendChild(localSection);

    const localListWrapper = document.createElement('div');
    localListWrapper.id = 'local-list';
    localListWrapper.className = 'data-list-wrapper';
    localSection.appendChild(localListWrapper);

    window.renderLocalStorage = function renderLocalStorage() {
        try {
            const localStorageData = getLocalStorage();
            renderStorage(localListWrapper, localStorageData, setLocalStorage, deleteLocalStorage, renderLocalStorage);
        } catch (error) {
            localListWrapper.innerHTML = '<p style="color:red;">读取 LocalStorage 失败。</p>';
        }
    }

    // 3. SessionStorage Section
    const sessionSection = document.createElement('div');
    sessionSection.className = 'section';
    sessionSection.innerHTML = '<h4>⏱️ Session Storage</h4>';
    content.appendChild(sessionSection);

    const sessionListWrapper = document.createElement('div');
    sessionListWrapper.id = 'session-list';
    sessionListWrapper.className = 'data-list-wrapper';
    sessionSection.appendChild(sessionListWrapper);

    window.renderSessionStorage = function renderSessionStorage() {
        try {
            const sessionStorageData = getSessionStorage();
            renderStorage(sessionListWrapper, sessionStorageData, setSessionStorage, deleteSessionStorage, renderSessionStorage);
        } catch (error) {
            sessionListWrapper.innerHTML = '<p style="color:red;">读取 Session Storage 失败。</p>';
        }
    }

    // 4. Embedded Config Data Section
    const embeddedSection = document.createElement('div');
    embeddedSection.className = 'section';
    embeddedSection.innerHTML = '<h4>⚙️ 内嵌配置数据 (JSON-Scripts)</h4>';
    content.appendChild(embeddedSection);

    const embeddedListWrapper = document.createElement('div');
    embeddedListWrapper.id = 'embedded-list';
    embeddedListWrapper.className = 'data-list-wrapper';
    embeddedSection.appendChild(embeddedListWrapper);


    // --- 核心渲染函数 ---
    window.globalRenderAll = function globalRenderAll() {
        renderCookies();
        renderLocalStorage();
        renderSessionStorage();
        renderEmbeddedData();
        console.log("Web Debugger 已刷新所有存储数据。");
    }

    // 首次初始化渲染
    globalRenderAll();

    // **将渲染函数暴露给宿主页面**
    const script = document.createElement('script');
    script.textContent = `
            // 确保 window.__debugRender 存在，用于外部调用刷新
            window.__debugRender = () => {
                document.dispatchEvent(new CustomEvent('GM_DEBUG_RENDER_ALL'));
            };
        `;
    document.head.appendChild(script);

    // **监听宿主页面事件，并在沙盒中执行渲染**
    document.removeEventListener('GM_DEBUG_RENDER_ALL', globalRenderAll);
    document.addEventListener('GM_DEBUG_RENDER_ALL', globalRenderAll);
}



window.addEventListener('load', (event) => {
    console.log('页面所有资源已加载完成');
    // 在这里执行你的核心函数，例如你之前提到的悬浮窗初始化
    if (localStorage.getItem('webDebuggerPinned') == 'true') {
        initWebDebugger()
    }
});

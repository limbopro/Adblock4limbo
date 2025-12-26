

window.showPageScriptsFloatWindow = function showPageScriptsFloatWindow() {
    if (typeof body_build == 'function') {
        body_build('false')
    } // 关闭导航页以便查看
    const WINDOW_ID = 'script-viewer-float-window-Gemini';
    const STYLE_ID = 'script-viewer-style';
    const floatWindow = document.getElementById(WINDOW_ID);

    // 1. 检查并移除（如果已存在）
    if (floatWindow) {
        console.log("脚本查看悬浮窗已存在，现在将其移除。");
        floatWindow.remove();
        document.getElementById(STYLE_ID)?.remove();
        return;
    }

    // === XPath 生成辅助函数 ===
    function generateXPath(element) {
        if (!element || element.nodeType !== 1) return ''; // 确保是元素节点

        // 停止于 HTML 根节点
        if (element.tagName.toLowerCase() === 'html') {
            return '/html';
        }

        const parent = element.parentNode;
        if (!parent) return '';

        let index = 1;
        // 计算当前元素在其父节点下的同类型兄弟节点中的位置索引
        for (let sibling = parent.firstElementChild; sibling; sibling = sibling.nextElementSibling) {
            if (sibling === element) {
                // 递归调用生成父节点的 XPath，然后附加当前节点的标签和索引
                const path = generateXPath(parent) + '/' + element.tagName.toLowerCase() + '[' + index + ']';
                return path;
            }
            if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                index++;
            }
        }
        return '';
    }
    // ===========================

    // 2. 获取所有的 <script> 标签数据
    const scripts = Array.from(document.querySelectorAll('script'));
    const scriptData = scripts.map((script, index) => {
        let src = script.getAttribute('src');
        const content = script.innerHTML.trim();
        const isInline = !src;

        // 自动补全域名逻辑
        if (src && src.startsWith('/')) {
            src = window.location.origin + src;
        }

        const copyText = isInline ? content : src;

        return {
            index: index,
            type: script.getAttribute('type') || 'text/javascript',
            src: src || '内联脚本',
            content: content,
            copyText: copyText,
            isInline: isInline,
            // **新增：计算 XPath**
            xpath: generateXPath(script)
        };
    });

    // 3. 注入 CSS 样式 (新增 XPath 样式)
    if (!document.getElementById(STYLE_ID)) {
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.innerHTML = `
            /* 桌面端/默认样式 */
            #${WINDOW_ID} {
                position: fixed; top: 50px; right: 50px; width: 400px; height: 600px; 
                background-color: #fff; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 115156; padding: 10px; font-family: Arial, sans-serif; font-size: 14px;
                display: flex; flex-direction: column; resize: both; overflow: auto; 
                min-width: 300px; min-height: 200px;
            }
            #script-viewer-header {
                font-weight: bold; margin-bottom: 10px; cursor: move; padding: 5px;
                background-color: #f4f4f4; border-bottom: 1px solid #eee; user-select: none;
                touch-action: none; display: flex; justify-content: space-between; align-items: center;
            }
            #script-viewer-close-btn {
                position: static; order: 2; cursor: pointer; font-size: 20px; color: #aaa;
                padding: 0 5px; line-height: 1;
            }
            #script-viewer-close-btn:hover { color: #c00; }

            /* 内容样式 */
            #script-viewer-content { flex-grow: 1; overflow-y: auto; }
            .script-item { border: 1px solid #ddd; padding: 8px; margin-bottom: 10px; background-color: #f9f9f9; border-radius: 4px; }
            .script-item-info { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px; }
            .script-item-header { font-weight: bold; color: #333; font-size: 13px; flex-grow: 1; }
            
            /* 外联 SRC 链接样式 */
            .script-item-src a {
                color: #007bff; word-break: break-all; font-size: 11px;
                text-decoration: underline;
            }
            .script-item-src { margin-bottom: 5px; }

            /* 新增 XPath 容器样式 */
            .script-item-xpath {
                font-size: 10px; 
                color: #6a0dad; /* 紫色突出显示 XPath */
                background-color: #f1e9f8;
                padding: 3px 5px;
                border-radius: 3px;
                word-break: break-all;
                display: block;
                margin-top: 5px;
            }

            /* 脚本内容区容器 */
            .script-content-container { position: relative; margin-top: 5px; }
            .script-item-content {
                background-color: #eee; padding: 5px; border: 1px solid #ccc;
                max-height: 120px; overflow-y: auto; 
                white-space: pre-wrap; font-family: monospace; font-size: 10px; color: #444;
            }

            /* 复制按钮样式 */
            .copy-btn {
                background-color: #007bff; color: white; border: none;
                padding: 2px 5px; font-size: 10px; cursor: pointer;
                border-radius: 4px; opacity: 0.8; transition: opacity 0.2s;
                user-select: none; margin-left: 5px;
            }
            .copy-btn:hover { opacity: 1; }
            .copy-btn:active { background-color: #0056b3; }
            
            /* 针对内联脚本内容区的复制按钮定位 */
            .inline-content-copy-btn {
                position: absolute;
                top: 0px; right: 0px; 
                border-radius: 0 4px 0 4px;
            }


            /* 移动端优化：屏幕宽度小于 600px 时应用 */
            @media (max-width: 600px) {
                #${WINDOW_ID} {
                    top: 0; right: 0; bottom: 0; left: 0; width: 100vw; height: 100vh; 
                    border: none; border-radius: 0; padding: 0; box-shadow: none; resize: none; cursor: default;
                    /* 移动端底部留出 100px 空间 */
                    padding-bottom: 100px; 
                    box-sizing: border-box; 
                }
                
                /* 移动端关闭按钮优化 (醒目) */
                #script-viewer-close-btn {
                    position: absolute; top: 5px; right: 5px;
                    background-color: #dc3545; color: white; border-radius: 50%;
                    width: 30px; height: 30px; line-height: 30px; text-align: center;
                    font-size: 24px; z-index: 100000; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                }
                #script-viewer-header {
                    padding: 15px 10px; margin-bottom: 0; cursor: default; justify-content: center;
                }
                #script-viewer-content { 
                    padding: 10px; 
                    height: 100%; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 通用复制功能函数
    const handleCopy = async (textToCopy, buttonElement, originalText) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            buttonElement.textContent = '已复制!';
            setTimeout(() => { buttonElement.textContent = originalText; }, 1500);
        } catch (err) {
            console.error('复制失败:', err);
            buttonElement.textContent = '失败!';
            setTimeout(() => { buttonElement.textContent = originalText; }, 1500);
        }
    };


    // 4. 创建 DOM 结构 (省略重复代码...)
    const newFloatWindow = document.createElement('div');
    newFloatWindow.id = WINDOW_ID;
    newFloatWindow.className = 'notranslate';

    const header = document.createElement('div');
    header.id = 'script-viewer-header';

    const headerTitle = document.createElement('span');
    headerTitle.textContent = `页面脚本查看器 (共 ${scripts.length} 个)`;
    header.appendChild(headerTitle);

    const closeBtn = document.createElement('span');
    closeBtn.id = 'script-viewer-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function () {
        newFloatWindow.remove();
        document.getElementById(STYLE_ID)?.remove();
    };
    header.appendChild(closeBtn);

    const contentArea = document.createElement('div');
    contentArea.id = 'script-viewer-content';

    // 5. 填充内容和添加复制按钮 (新增 XPath 显示)
    scriptData.forEach(data => {
        const item = document.createElement('div');
        item.className = 'script-item';

        // 头部信息（包含复制按钮）
        const infoRow = document.createElement('div');
        infoRow.className = 'script-item-info';

        const headerText = document.createElement('div');
        headerText.className = 'script-item-header';
        headerText.textContent = `[${data.index}] Type: ${data.type}`;
        infoRow.appendChild(headerText);

        // 只对外部脚本显示复制 SRC 按钮
        if (!data.isInline) {
            const primaryCopyBtn = document.createElement('button');
            const primaryCopyText = '复制 SRC';
            primaryCopyBtn.className = 'copy-btn';
            primaryCopyBtn.textContent = primaryCopyText;
            primaryCopyBtn.onclick = () => handleCopy(data.copyText, primaryCopyBtn, primaryCopyText);
            infoRow.appendChild(primaryCopyBtn);
        }

        item.appendChild(infoRow);

        // 脚本来源展示
        const srcDisplay = document.createElement('div');
        srcDisplay.className = 'script-item-src';

        if (data.isInline) {
            srcDisplay.textContent = `Source: ${data.src}`;
        } else {
            const link = document.createElement('a');
            link.href = data.src;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = data.src;

            const label = document.createTextNode('Source: ');
            srcDisplay.appendChild(label);
            srcDisplay.appendChild(link);
        }
        item.appendChild(srcDisplay);

        // **新增：XPath 显示和复制**
        const xpathDisplay = document.createElement('span');
        xpathDisplay.className = 'script-item-xpath';
        xpathDisplay.title = '点击复制 XPath';
        xpathDisplay.textContent = `XPath: ${data.xpath}`;

        // 添加 XPath 复制事件 (使用 data.xpath 作为复制内容)
        xpathDisplay.onclick = () => handleCopy(data.xpath, xpathDisplay, `XPath: ${data.xpath}`);

        item.appendChild(xpathDisplay);


        // 内联脚本内容
        if (data.isInline && data.content) {
            const contentContainer = document.createElement('div');
            contentContainer.className = 'script-content-container';

            const contentDisplay = document.createElement('div');
            contentDisplay.className = 'script-item-content';
            contentDisplay.textContent = data.content;
            contentContainer.appendChild(contentDisplay);

            // 内联脚本的内容框右上角复制按钮
            const contentCopyBtn = document.createElement('button');
            contentCopyBtn.className = 'copy-btn inline-content-copy-btn';
            contentCopyBtn.textContent = '复制';
            contentCopyBtn.onclick = () => handleCopy(data.content, contentCopyBtn, '复制');
            contentContainer.appendChild(contentCopyBtn);

            item.appendChild(contentContainer);
        } else if (data.isInline && !data.content) {
            const emptyContent = document.createElement('div');
            emptyContent.className = 'script-item-content';
            emptyContent.textContent = '(空内联脚本)';
            item.appendChild(emptyContent);
        }

        contentArea.appendChild(item);
    });

    newFloatWindow.appendChild(header);
    newFloatWindow.appendChild(contentArea);
    document.body.appendChild(newFloatWindow);

    // 6. 实现拖动功能 (保持不变)
    let isDragging = false;
    let offsetX, offsetY;

    const getClientCoords = (e) => (e.touches && e.touches.length) ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };

    const startDrag = (e) => {
        if (window.innerWidth <= 600) return;
        isDragging = true;
        const coords = getClientCoords(e);
        offsetX = coords.x - newFloatWindow.offsetLeft;
        offsetY = coords.y - newFloatWindow.offsetTop;
        newFloatWindow.style.cursor = 'grabbing';
        e.preventDefault();
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        const coords = getClientCoords(e);
        let newX = coords.x - offsetX;
        let newY = coords.y - offsetY;

        const maxX = window.innerWidth - newFloatWindow.offsetWidth;
        const maxY = window.innerHeight - newFloatWindow.offsetHeight;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        newFloatWindow.style.left = newX + 'px';
        newFloatWindow.style.top = newY + 'px';
    };

    const endDrag = () => {
        isDragging = false;
        newFloatWindow.style.cursor = 'default';
    };

    header.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    header.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', onDrag);
    document.addEventListener('touchend', endDrag);

    console.log(`脚本查看悬浮窗已创建，共发现 ${scripts.length} 个脚本。`);
}

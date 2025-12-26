
/**
 * 查找当前页面中所有满足以下条件的外部链接，并在悬浮窗中列出：
 * 1. 域名与当前页面域名不一致。
 * 2. 域名不属于 'limbopro.com' (及其子域名)。
 * 3. 链接不在指定的排除容器 (#dh_pageContainer) 内部。
 * 4. 支持点击列表项复制链接。
 * * @param {string} [excludeContainerId='dh_pageContainer'] 要排除链接的容器元素的 ID。
 */

function findAndDisplayExternalLinks(excludeContainerId = 'dh_pageContainer') {

    // --- 辅助函数：复制文本到剪贴板 ---
    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                alert('链接已复制到剪贴板: ' + text);
            }).catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制: ' + text);
            });
        } else {
            // 兼容性回退方案（不推荐，现代浏览器应支持）
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed'; // 防止滚动
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
                alert('链接已复制到剪贴板 (回退方法): ' + text);
            } catch (err) {
                console.error('回退复制失败:', err);
                alert('复制失败，请手动复制: ' + text);
            }
            document.body.removeChild(textarea);
        }
    }
    // ------------------------------------

    // 1. 定义常量和环境检测
    const DOMAIN_TO_EXCLUDE = 'limbopro.com';
    const currentHostname = window.location.hostname;
    const floatWindowId = 'externalLinkFloatWindow';
    const isMobile = window.innerWidth <= 600;

    // 2. 初始化
    const allLinks = document.querySelectorAll('a');
    const externalLinks = [];
    const containerToExclude = document.getElementById(excludeContainerId);

    // 3. 遍历所有 <a> 标签并筛选链接
    allLinks.forEach(link => {

        // 优先排除条件 A: 检查链接是否在指定的容器内部
        if (containerToExclude && containerToExclude.contains(link)) {
            return;
        }

        try {
            const url = new URL(link.href);
            const linkHostname = url.hostname;

            if (!url.protocol.startsWith('http')) return;
            const isExternal = linkHostname && linkHostname !== currentHostname;
            const isExcludedDomain = linkHostname.endsWith(DOMAIN_TO_EXCLUDE);

            if (isExternal && !isExcludedDomain) {
                if (!externalLinks.some(item => item.href === url.href)) {
                    externalLinks.push({
                        href: url.href,
                        text: link.textContent.trim() || url.href
                    });
                }
            }
        } catch (e) {
            // 忽略无效的 href 属性
        }
    });

    // 4. 创建和显示悬浮窗 (如果已存在，则先移除)
    if (document.getElementById(floatWindowId)) {
        document.getElementById(floatWindowId).remove();
    }

    const floatWindow = document.createElement('div');
    floatWindow.id = floatWindowId;

    // 5. 根据设备应用不同的样式
    let baseCss = `
        max-height: 80vh; 
        overflow-y: auto;
        padding: 10px;
        background-color: #f7f7f7;
        border: 2px solid #3498db;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        z-index: 114122;
        font-family: Arial, sans-serif;
        color: #333;
        transition: opacity 0.3s;
    `;

    if (isMobile) {
        floatWindow.style.cssText = `
            ${baseCss}
            position: fixed;
            top: 10px; 
            left: 10px;
            right: 10px;
            width: auto; 
            font-size: 14px;
        `;
    } else {
        floatWindow.style.cssText = `
            ${baseCss}
            position: fixed;
            top: 20%;
            right: 20px;
            width: 320px;
            font-size: 14px;
        `;
    }

    // 6. 悬浮窗内容生成
    let contentHTML = '<h4>🌐 外部链接列表 (' + externalLinks.length + ' 个)</h4>';

    // 列表容器 ID
    const listContainerId = 'externalLinkList';

    if (externalLinks.length > 0) {
        contentHTML += `<ul id="${listContainerId}" style="list-style: none; margin: 0; padding-left: 0;">`;
        externalLinks.forEach((item, index) => {
            let displayUrl = '无效链接';
            try {
                displayUrl = new URL(item.href).hostname;
            } catch (e) { }

            const displayText = item.text.length > 40 ? item.text.substring(0, 40) + '...' : item.text;

            // 关键修改：将链接信息存储在 data-href 属性中，并添加 cursor: pointer 样式
            contentHTML += `
                <li class="external-link-item" data-href="${item.href}" style="
                    margin-bottom: 8px; 
                    padding: 5px; 
                    border-bottom: 1px dashed #ccc; 
                    cursor: pointer; 
                    transition: background-color 0.1s;"
                    onmouseover="this.style.backgroundColor='#e0e0e0'"
                    onmouseout="this.style.backgroundColor='transparent'"
                    title="点击复制链接: ${item.href}">
                    <a href="${item.href}" target="_blank" 
                       style="color: #2980b9; text-decoration: none; font-size: ${isMobile ? '12px' : '13px'}; display: block;"> 
                       ${displayText}
                    </a>
                    <span style="display: block; font-size: 10px; color: #7f8c8d; margin-top: 2px;">(${displayUrl})</span>
                </li>`;
        });
        contentHTML += '</ul>';
    } else {
        contentHTML += '<p style="font-style: italic; font-size: 14px;">未发现符合条件的外部链接。</p>';
    }

    // 关闭按钮
    contentHTML += '<button id="closeFloatWindow" style="margin-top: 10px; padding: 6px 12px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer; float: right; font-size: 14px;">关闭</button>';

    floatWindow.innerHTML = contentHTML;
    document.body.appendChild(floatWindow);

    // 7. 添加事件监听器 (关闭和复制)

    // 关闭事件
    document.getElementById('closeFloatWindow').addEventListener('click', () => {
        floatWindow.style.opacity = '0';
        setTimeout(() => {
            floatWindow.remove();
        }, 300);
    });

    // 复制事件：监听列表容器，实现事件委托
    const listContainer = document.getElementById(listContainerId);
    if (listContainer) {
        listContainer.addEventListener('click', (event) => {
            let clickedElement = event.target;

            // 确保点击的是 LI 元素或其内部元素，并且能够向上找到 LI
            const listItem = clickedElement.closest('.external-link-item');

            if (listItem) {
                // 如果点击到 <a> 标签，阻止默认跳转行为，只处理复制
                if (clickedElement.tagName === 'A') {
                    event.preventDefault();
                }

                const linkToCopy = listItem.getAttribute('data-href');
                if (linkToCopy) {
                    copyToClipboard(linkToCopy);
                }
            }
        });
    }
}
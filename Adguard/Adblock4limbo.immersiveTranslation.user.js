// ==UserScript==
// @name          沉浸式双语翻译 (Google Translate & Dual Wrapper) - 简洁滚动控制 - 纯JS版本 (可拖拽优化版 - 修复移动端拖拽 V6)
// @namespace    http://tampermonkey.net/
// @version      2025-12-15_Final_V17_ScrollSimple_CloseButton_Stable_Draggable_V6_FixedMobile
// @description  基于 Google Translate，采用双包裹结构实现沉浸式双语对照翻译。包含：Trusted Types兼容加载、SPA路由变化监控、滚动时自动隐藏 UI、以及浮动按钮切换“双语/原文”模式，并支持移动端垂直拖拽移动和正常点击。
// @author       limbopro
// @match        https://*/*
// @require       https://translate.google.com/translate_a/element.js?cb=google.translate.TranslateElementInit
// @icon         https://www.google.com/s2/favicons?sz=64&domain=translate.google.com/
// @grant        none
// ==/UserScript==

/**
 * 加载并初始化谷歌翻译用户界面组件。
 * 兼容 Trusted Types 环境，以避免 'TrustedScriptURL' 错误。
 */

document.cookie = "googtrans=/auto/zh-CN; path=/";
window.loadGoogleTranslateUI = function loadGoogleTranslateUI() {

    // 如果 UI 已存在，直接返回
    const uiContainerId = 'google_translate_element';
    const googleWidget = document.querySelector('.skiptranslate.goog-te-gadget');
    const ybyfyvalue = document.getElementById("translation-button")?.classList?.contains('translated')

    // 如果元素已存在，则直接返回
    //if (!ybyfyvalue) return;
    if (document.getElementById(uiContainerId) && googleWidget && ybyfyvalue) return;

    // --- 1. 谷歌翻译初始化函数配置 ---

    // 确保全局对象存在
    window.google = window.google ||
        {};
    window.google.translate = window.google.translate || {};

    // 定义回调函数，供谷歌脚本加载后调用
    window.google.translate.TranslateElementInit = function () {
        new google.translate.TranslateElement({
            includedLanguages: 'zh-CN,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, uiContainerId);
    };

    // --- 2. 创建 UI 容器 DOM 元素 ---

    let uiContainer = document.getElementById(uiContainerId);
    if (!uiContainer) {
        uiContainer = document.createElement('div');
        uiContainer.id = uiContainerId;
        document.body.appendChild(uiContainer);
        // 设置样式以创建浮动翻译组件容器
        uiContainer.classList.add('notranslate');
        uiContainer.style.position = 'fixed';
        uiContainer.style.top = '40px';
        uiContainer.style.right = '0px';
        uiContainer.style.zIndex = '9999';
        uiContainer.style.backgroundColor = '#f8f8f8';
        uiContainer.style.padding = '8px 12px';
        uiContainer.style.borderRadius = '10px 0px 0px 10px';
        uiContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        uiContainer.style.border = '1px solid #ddd';
        uiContainer.style.transition = 'box-shadow 0.3s ease-in-out';
        uiContainer.style.lineHeight = '0';
    }

    // --- 3. 动态加载谷歌翻译脚本 (Trusted Types 兼容处理) ---

    const scriptUrl = '//translate.google.com/translate_a/element.js?cb=google.translate.TranslateElementInit';
    const script = document.createElement('script');
    script.type = 'text/javascript';

    let finalScriptSrc = scriptUrl;
    // 检查并应用 Trusted Types
    if (window.trustedTypes && trustedTypes.createPolicy) {
        try {
            // 创建一个 Trusted Script URL Policy
            const policy = trustedTypes.createPolicy('google-translate-loader', {
                // 仅允许加载谷歌翻译的脚本
                createScriptURL: (url) => {

                    if (url.startsWith('//translate.google.com/')) {
                        return url;
                    }
                    throw new Error("Attempted to load untrusted script URL.");
                }

            });
            // 将 URL 字符串转换为 TrustedScriptURL 对象
            finalScriptSrc = policy.createScriptURL(scriptUrl);
            console.log("[Trusted Types] 成功使用 TrustedScriptURL 加载谷歌翻译脚本。");
        } catch (e) {
            console.warn("[Trusted Types] 无法创建或应用 TrustedScriptURL 策略，回退到普通字符串赋值。如果环境开启了严格 Trusted Types，这可能导致加载失败。", e);
            finalScriptSrc = scriptUrl;
        }
    }

    // 赋值给 script.src。如果 finalScriptSrc 是 TrustedScriptURL，则安全；否则是原始字符串。
    script.src = finalScriptSrc;
    // 注入脚本
    document.head.appendChild(script);

    // --- 4. 超时检查和清理机制 ---

    const checkDelay = 8000;
    const successSelector = '.skiptranslate.goog-te-gadget';

    setTimeout(() => {

        const isLoaded = document.querySelector(successSelector);

        if (!isLoaded) {
            console.warn(`%c[Google Translate] 警告：脚本可能加载失败或超时 (${checkDelay / 1000} 秒)。`,
                'color: #FF9800; font-weight: bold; background: #fff3e0; padding: 4px 8px; border-radius: 4px;');
        }

    }, checkDelay);
}



// --- II. 双包裹体创建逻辑 ---

window.applyDualWrapperProtection = function applyDualWrapperProtection() {
    (() => {
        console.clear();

        document.querySelectorAll('.cjsfy-original, .cjsfy-translated, .spacer').forEach(e => e.remove());

        const targetsToProcess = [];

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {

                acceptNode: node => {

                    const text = node.nodeValue.trim();
                    if (!text) return NodeFilter.FILTER_REJECT;

                    // 1. 纯数字或符号 (例如 123.45)

                    const pureNumericOrSymbolic = /^\s*[\d\s.,]+\s*$/.test(text)
                    if (pureNumericOrSymbolic) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    // 2. 日期格式 (例如 2025-12-12)

                    const dateformat = /\b(\d{1,4}[-\/.]\d{1,2}[-\/.]\d{1,4})\b/.test(text)
                    if (dateformat) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    // **【新增过滤规则：纯时间格式 (例如 45:00, 1:23:45)】**
                    const timeFormat = /^\s*(\d{1,2}:\d{2}(:\d{2})?)\s*$/.test(text);
                    if (timeFormat) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    const parent = node.parentElement;
                    if (!parent) return NodeFilter.FILTER_REJECT;

                    const excludedTags = 'script, style, noscript, textarea';
                    if (parent.closest(excludedTags)) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (parent.closest('.notranslate, .cjsfy-original, .cjsfy-translated, font[dir], svg, video')) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    if (parent.dataset._textDuplicated) return NodeFilter.FILTER_REJECT;
                    if (text.length < 2) return NodeFilter.FILTER_REJECT; // 字符长度
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );
        let textNode;

        while (textNode = walker.nextNode()) {
            const target = textNode.parentElement;
            target.dataset._textDuplicated = 'pending';
            targetsToProcess.push({
                originalText: target.innerText,
                target: target
            });
        }

        // 2. 统一处理：创建并插入 双包裹体 + 分隔符
        const results = [];
        targetsToProcess.forEach(({ originalText, target }, i) => {


            function wrapTarget() { // 打包函数开始 包裹 对于普通节点

                console.log(target.innerText)

                // 1. 创建 原文副本 (克隆：保留原结构和内容)
                const originalWrapper = target.cloneNode(true);
                originalWrapper.classList.add('notranslate', 'Original', 'ori');


                // 创建 分隔符
                const separator = document.createElement('p');
                separator.className = 'spacer';

                // 2. 创建 译文包裹层
                //// const translatedWrapper = document.createElement('font');

                const translatedWrapper = originalWrapper.cloneNode(true)
                translatedWrapper.className = 'cjsfy-translated';


                // 5. 清空 target 元素，并按顺序插入
                target.innerText = ''
                target.appendChild(originalWrapper);
                target.appendChild(separator);

                target.appendChild(translatedWrapper);

                // 标记为已处理
                target.dataset._textDuplicated = 'true';
                if (i === 0) {
                    target.style.outline = '3px solid #00bcd4';
                    target.scrollIntoView({ block: 'center', behavior: 'smooth' });
                    setTimeout(() => target.style.outline = '', 3000);
                }

                results.push({ target });
            } // 打包函数结束


            // 克隆函数开始

            window.cloneThat = function cloneAndModifyElements(originalElements) { // 对于含有 br 的节点
                originalElements.forEach(originalElement => {
                    const clonedElement = originalElement.cloneNode(true);
                    clonedElement.classList.remove('notranslate');

                    clonedElement.classList.add('cjsfy-translated');
                    originalElement.insertAdjacentElement('afterend', clonedElement);
                });
                console.log(`成功处理了 ${originalElements.length} 个元素。`);
            }

            window.cloneThats = function cloneAndModifyElements(originalElement) { // 对于含有 br 的节点
                const clonedElement = originalElement.cloneNode(true);
                clonedElement.classList.add('notranslate');
                originalElement.parentElement.insertBefore(clonedElement, originalElement);
                originalElement.classList.add('cjsfy-translated')
            }

            // 克隆函数结束


            // 删除冗余
            window.redundancy = function redundancyRemove() {

                document.querySelectorAll('.notranslate.ori').forEach(parentElement => {
                    if (parentElement.querySelector('.cjsfy-translated')) {

                        parentElement.querySelector('.cjsfy-translated').remove();
                    }

                    if (parentElement.querySelector('.spacer')) {
                        parentElement.querySelector('.spacer').remove();

                    }
                });
                document.querySelectorAll('.cjsfy-translated').forEach(parentElement => {
                    if (parentElement.querySelector('.notranslate')) {
                        parentElement.querySelector('.notranslate').remove();
                    }

                    if (parentElement.querySelector('.spacer')) {

                        parentElement.querySelector('.spacer').remove();
                    }
                });
            }

            // 不要遗忘那个没被包裹的元素

            window.last = function lastForgotten() {
                if (document.querySelectorAll('[data-_text-duplicated=pending]').length > 0)
                    document.querySelectorAll('[data-_text-duplicated=pending]').forEach((x) => {
                        if (x.className.indexOf('notranslate') == -1 && x.className.indexOf('cjsfy-translated')
                            == -1) {
                            if (x.querySelectorAll('.notranslate').length == 0) {
                                if (x.parentElement.className.indexOf('notranslate') == -1 && x.parentElement.className.indexOf('cjsfy-translated') == -1) {

                                    if (x.parentElement.parentElement.className.indexOf('notranslate') == -1 && x.parentElement.parentElement.className.indexOf('cjsfy-translated') == -1) {
                                        cloneThats(x)
                                    }

                                }

                            }
                        }
                    })

            }

            // 删除重复的 br 标签
            function removeDuplicateBr(target) {
                const brElements = target.querySelectorAll('br');
                for (let i = brElements.length - 1; i >= 0; i--) {
                    const currentBr = brElements[i];
                    const nextSibling = currentBr.nextSibling;
                    if (nextSibling && nextSibling.tagName === 'BR') {

                        currentBr.parentNode.removeChild(currentBr);
                    }
                }

                (function () { const brs = target.querySelectorAll('br'); const lastBr = brs.length > 0 ? brs[brs.length - 1] : null; if (lastBr && !lastBr.nextSibling) { lastBr.remove(); } })();
            }


            // 拆分函数开始 拆分 含有 br 的节点 转为 p

            function brToParagraphs(target, innerHTMLString) {
                let cleanedString = innerHTMLString.trim();
                const newParaDelimiter = '___NEW_PARA___';
                let processedString = cleanedString.replace(/(\s*<br\s*\/?>\s*)+/gi, newParaDelimiter);
                processedString = processedString.replace(new RegExp(`^${newParaDelimiter}`), '').replace(new RegExp(`${newParaDelimiter}$`), '');
                const paragraphs = processedString.split(newParaDelimiter);
                const validParagraphs = paragraphs.filter(p => p.trim().length > 0);
                const resultHTML = validParagraphs
                    .map(p => `<p class='immersive brToParagraphs cut notranslate'>${p.trim()}</p>`)
                    .join('');
                target.innerHTML = resultHTML
            }

            // 拆分br函数结束

            // 判断是否存在 br 然后开始包裹
            if (target.querySelectorAll('br').length == 0) {
                wrapTarget(target)
            } else if (target.querySelectorAll('br').length > 0) {

                removeDuplicateBr(target)
                brToParagraphs(target, target.innerHTML)
            } else {
                wrapTarget(target)
                console.log('wtf')
            }

        });
        cloneThat(document.querySelectorAll('.brToParagraphs.notranslate'));
        redundancy()
        setTimeout(() => {
            last()
        }, 500)

        console.log(`%c 成功为 ${results.length} 个元素创建了双包裹结构`,
            'color:#fff;background:#00bcd4;padding:8px 16px;border-radius:8px;font-size:16px;');
        window.REVERT_DUAL_WRAPPER = () => {
            document.querySelectorAll('[data-_textDuplicated]').forEach(el => {
                const translatedWrapper = el.querySelector('.cjsfy-translated');
                const separator = el.querySelector('.spacer');
                const Original = el.querySelector('.Original.ori');

                separator?.remove();

                Original?.remove();

                if (translatedWrapper) {
                    while (translatedWrapper.firstChild) {
                        el.appendChild(translatedWrapper.firstChild);
                    }

                    translatedWrapper.remove();
                }

                delete el.dataset._textDuplicated;
                el.style.outline = '';
            });
            console.log('已撤销所有双包裹结构');
        };

        console.log('%c 如需撤销包裹，执行：REVERT_DUAL_WRAPPER()',
            'background:#ff9800;color:#fff;padding:6px 12px;border-radius:4px;');
        console.log("[Immersive Translate] Google Translate UI 加载已触发。");

        // **【修改点 A: 条件启动和存储 ID】**

        loadGoogleTranslateUI()

        setTimeout(() => {
            if (wtfIntervalId === null) {
                wtfIntervalId = setInterval(() => {
                    skiptrs()

                    loadGoogleTranslateUI()
                }, 4000);
                console.log(`[Immersive Translate] Google Translate UI 循环加载已启动 (ID: ${wtfIntervalId})。`);
            } else {
                console.log(`[Immersive Translate] Google Translate UI 循环加载已在运行中 (ID: ${wtfIntervalId})。`);
            }

        }, 4000)

    })();
}


function protectPreTags() { // 排除
    document.querySelectorAll('button:not(:has(> *)),span.label,#jable-skip-panel,button:has(svg),svg,video,div.plyr__controls,[data-fancybox="ajax"],#dh_pageContainer,div.house,input,label,table,pre,td').forEach((element) => {
        element.classList.add('notranslate');
    });
}

// --- III. 流程控制与用户交互 ---

function initiateTranslationFlow() {
    // 所有资源（图片、css、js 等）都加载完毕
    console.log("[Immersive Translate] 翻译流程开始...");
    // 如果 按钮 已存在，直接返回
    protectPreTags();
    applyDualWrapperProtection();
    //loadGoogleTranslateUI();
    console.log("[Immersive Translate] 翻译流程执行完毕。");
}

function loadExternalCss(cssUrl) {
    // 1. 创建一个新的 <link> 元素
    const link = document.createElement('link');
    // 2. 设置 link 元素的属性
    link.rel = 'stylesheet';  // 必须是 stylesheet
    link.type = 'text/css';
    // 设置 MIME 类型
    link.href = cssUrl;      // 设置 CSS 文件的 URL

    document.head.appendChild(link);
    console.log(`外部 CSS 文件已加载: ${cssUrl}`);
}

// --- VI. 拖拽功能实现 (V6 - 修复被动监听器问题) ---
function makeDraggable(element) {
    let startY;            // 初始点击 Y 位置
    let offsetX;           // 初始点击 X 位置 (用于判断是否是拖拽)
    let offsetY;           // 手指/鼠标在元素内部的 Y 抓取偏移量
    let isDragging = false; // 拖拽标记
    const clickThreshold = 5; // 允许的最小移动距离（小于此值视为点击）

    // Handlers need to be defined outside closeDragElement to be removable
    let moveHandler;
    let endHandler;

    // 辅助函数：获取统一的客户端坐标
    function getClientCoords(e) {
        if (e.touches && e.touches.length > 0) {
            return {
                clientX: e.touches[0].clientX,
                clientY: e.touches[0].clientY
            };
        }
        return {
            clientX: e.clientX,
            clientY: e.clientY
        };
    }

    // 统一处理移动事件 (鼠标移动或手指移动)
    function elementDrag(e) {
        const coords = getClientCoords(e);
        const currentY = coords.clientY;
        const currentX = coords.clientX;

        // 计算相对起始点的总位移量（用于判断是点击还是拖拽）
        const displacementFromStart = Math.sqrt(
            (currentX - offsetX) ** 2 + (currentY - startY) ** 2
        );

        // 只有当移动距离超过阈值时，才执行拖拽逻辑
        if (displacementFromStart > clickThreshold) {
            isDragging = true; // 设置拖拽标记

            // 关键修复：一旦确认是拖拽，立即阻止默认行为（防止移动端滚动）
            if (e.type.includes('touch')) {
                e.preventDefault();
            }

            // 1. 计算新的元素左上角绝对 Y 位置 (当前触摸点 - 抓取偏移)
            let newY = currentY - offsetY;

            // 2. 应用 Y 轴边界检查
            let elementHeight = element.offsetHeight;
            let windowHeight = window.innerHeight;

            if (newY < 0) newY = 0;
            if (newY + elementHeight > windowHeight) newY = windowHeight - elementHeight;

            // 3. 应用新的位置 - 仅设置 Top
            element.style.top = newY + 'px';
            // 强制水平锁定：不设置 element.style.left
        }
    }

    // 统一处理释放事件 (鼠标松开或手指离开)
    function closeDragElement() {
        // 清理监听器
        document.removeEventListener('mouseup', endHandler);
        document.removeEventListener('mousemove', moveHandler);

        // 关键：移除时也需要指定 { passive: false } 来匹配绑定
        document.removeEventListener('touchend', endHandler);
        document.removeEventListener('touchmove', moveHandler, { passive: false });

        // 核心修复逻辑：如果发生了拖拽，需要临时阻止后续的 click 事件
        if (isDragging) {
            // 如果是拖拽，我们需要临时在捕获阶段阻止随后可能触发的 click 事件。
            function suppressClick(event) {
                event.stopPropagation();
                event.preventDefault();
                // 在事件处理完成后，立即移除自身监听器
                element.removeEventListener('click', suppressClick, true);
            }

            // 监听器在捕获阶段 (true) 运行，确保在按钮自己的 click 监听器之前执行
            element.addEventListener('click', suppressClick, true);
        }

        isDragging = false; // 重置状态
    }

    // 统一处理开始事件 (鼠标按下或手指触摸开始)
    function dragStart(e) {

        // 鼠标事件可以立即阻止默认行为（如文本选择），但触摸事件不行，
        // 触摸事件的 e.preventDefault() 必须延迟到确认拖拽后，以避免阻止 click。
        if (!e.type.includes('touch')) {
            e.preventDefault();
        }

        const coords = getClientCoords(e);
        offsetX = coords.clientX; // 用于判断拖拽的总位移
        startY = coords.clientY;
        isDragging = false;

        // 1. 确保定位属性设置正确，只允许 Right: 0px，并切换到像素定位
        element.style.position = 'fixed';
        element.style.right = '0px';
        element.style.left = 'auto'; // 锁定水平位置
        element.style.removeProperty('bottom');

        // 2. 计算元素相对于视口的位置矩形
        const rect = element.getBoundingClientRect();

        // 3. 计算 Y 轴抓取偏移量 (用于精确拖拽)
        offsetY = coords.clientY - rect.top;

        // 4. 绑定移动和释放事件

        // 定义可移除的处理器
        moveHandler = elementDrag;
        endHandler = closeDragElement;

        if (e.type.includes('touch')) {
            // CRITICAL FIX: 使用 { passive: false } 强制阻止浏览器默认滚动行为
            document.addEventListener('touchend', endHandler);
            document.addEventListener('touchmove', moveHandler, { passive: false });
        } else {
            document.addEventListener('mouseup', endHandler);
            document.addEventListener('mousemove', moveHandler);
        }
    }

    // 绑定初始事件 - 使用 addEventListener
    element.addEventListener('mousedown', dragStart);
    // 绑定触摸事件，通常不需要 passive: false，因为主要的 preventDefault 在 touchmove 中
    element.addEventListener('touchstart', dragStart);

    // 确保按钮创建后立即移除 bottom 属性，防止初始化定位冲突
    element.style.removeProperty('bottom');
}




function createFloatingButton() {

    // 调用函数，传入您提供的 CSS 文件 URL
    const cssFileUrl = 'https://limbopro.com/CSS/Adblock4limbo.user.css';
    // 含 Adguard 通用广告元素选择器 看外网网页会非常干净
    loadExternalCss(cssFileUrl);
    document.cookie = "googtrans=/auto/zh-CN; path=/";
    const css = `

    /* 该死的广告 */
    .Ad-label,
    .ad-label,
    .widget.ad,
    [class*="acm_ad"],
    [id*="ad-unit"],
    [class*="ad-unit"],
    [data*="ad-unit"],
    [data-name*="ad-unit"],
    [data-testid*="ad-unit"],
    [class*='ads'],
    [id*='ads'] {
        display: none !important;
        pointer-events: none !important;
        opacity:0;
    }

    .Original {
    /*margin: 0px;*/
    padding:0px;
    /*display: none !important;*/
    }

    .showOriginal {
    /*display: none !important;*/
    }

    .spacer {
        height:1px;
        margin:0px !important;
        padding:0px;
        border:0px;
    }

    .dual-wrapper-hidden {
        display: none !important;
        height: 0px !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }

    .cjsfy-original, .cjsfy-translated {
        pointer-events: none;
        font-size:inherit;
        margin: 0px !important;
        color: inherit;
        word-break: break-word;
        user-select: text;
        /*display: block !important;*/
    }

    /* 滚动隐藏/显示所需的样式 */
    #translation-button, #google_translate_element {
        /* 添加过渡效果，让隐藏和显示更平滑 */
        transition: opacity 0.5s ease-in-out !important, visibility 0.5s ease-in-out !important;
        pointer-events: auto; /* 确保默认可点击 */
        visibility: visible;
    }

    /* 滚动隐藏时的类 */
    .scroll-hidden {
        opacity: 0 !important;
        visibility: hidden !important; /* 新增 visibility 确保元素不占用空间或阻止交互 */
        /* 使用 pointer-events: none 确保隐藏时无法被点击 */
        pointer-events: none !important;
    }

    /* ********** 拖拽功能和默认定位修改点 ********** */
    #translation-button {
        padding: 0px;
        border:1px solid #1a73e8;
        position: fixed;
        right: 0px; /* 默认右侧 */
        left: auto;
        top: 50%; /* 默认垂直居中 */
        height: auto;
        z-index: 10000;
        width: 45px;
        height: 36px;
        line-height: 36px;
        border-radius: 5px 0px 0px 5px;
        background-color:#fff;
        color:#1a73e8;
        font-size: x-small;
        font-weight: bold;
        text-align: center;
        user-select: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: grab; /* 添加拖拽手势 */
    }
    /* ************************************ */

    /* 交互效果 */
        #translation-button:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15) !important;
    }

        #translation-button:active {  transform: scale(0.98);
    }

        #translation-button.translated {
            border: 1px solid #34a853;
            /* 绿色，代表完成 */
            background-color: #34a853;
            color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* 新增：关闭按钮样式 */
        #translation-close-btn {
            position: absolute;
            top: -8px; /* 调整位置 */
            right: -8px;
            /* 调整位置 */
            width: 18px;
            height: 18px;
            line-height: 16px;
            font-size: 12px;
            background-color: #f44336; /* 红色背景 */
            color: white;
            border: 1px solid white;
            border-radius: 50%; /* 圆形 */
            cursor: pointer;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
            z-index: 10001;
            /* 确保在主按钮之上 */
            font-weight: normal;
            transition: all 0.2s;
            opacity: 0.9;
        }

        #translation-close-btn:hover {
            opacity: 1;
            transform: scale(1.1);
        }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    const button = document.createElement('button');
    button.id = 'translation-button';
    button.className = 'notranslate cjsfy btx';
    button.textContent = '双语';
    document.body.appendChild(button);

    // ********** 拖拽功能调用点 **********
    makeDraggable(button);
    // ************************************

    // 保护主按钮不被双包裹逻辑处理
    button.setAttribute('data-_textDuplicated', 'true');
    // =======================================================
    // 新增：创建关闭按钮的函数，以便在需要时调用
    // =======================================================
    const createCloseButton = () => {


        let closeButton = document.getElementById('translation-close-btn');
        if (!closeButton) {
            closeButton = document.createElement('div');
            closeButton.id = 'translation-close-btn';
            closeButton.textContent = '×';
            closeButton.className = 'notranslate';
            // 确保按钮被添加到主按钮中
            document.getElementById('translation-button')?.appendChild(closeButton);
            // 重新绑定事件监听器
            closeButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const buttonEl = document.getElementById('translation-button');

                if (buttonEl) {
                    buttonEl.classList.add('scroll-hidden');

                    console.log("[UI Control] 浮动按钮及关闭按钮已隐藏。");
                }

                window.SHOW_TRANSLATION_BUTTON = () => {
                    document.getElementById('translation-button')?.classList.remove('scroll-hidden');
                    console.log("[UI Control] 浮动按钮已重新显示。");

                };
                console.log('%c如需重新显示浮动按钮，请在控制台执行：SHOW_TRANSLATION_BUTTON()', 'background:#2196F3;color:#fff;padding:6px 12px;border-radius:4px;');
            });
            console.log("✅ 关闭按钮已重建并重新绑定事件。");
            return true;
        }
        return false;
    };
    // =======================================================

    // 1. 初始创建关闭按钮
    createCloseButton();
    // 4. 点击事件监听器 (V12 修正逻辑)
    button.addEventListener('click', () => {
        const ori = document.querySelectorAll('.notranslate.ori');
        const translatedElements = document.querySelectorAll('.cjsfy-translated, .spacer');


        const isWrapped = ori.length > 0;
        const isTranslatedHidden = translatedElements.length > 0 && translatedElements[0].classList.contains('dual-wrapper-hidden');

        if (isWrapped && !isTranslatedHidden) {

            button.textContent = '双语';

            localStorage.setItem('immersiveTranslate', 'false')
            button.classList.remove('translated');
            translatedElements.forEach((e) => { e.classList.add('dual-wrapper-hidden') });

            ori.forEach((e) => {
                e.classList.add('showOriginal')
                e.classList.remove('Original')
            });

            console.log('切换成原文模式...')


            // **【修改点 B: 停止循环】**
            if (wtfIntervalId !== null) {
                clearInterval(wtfIntervalId);
                console.log(`[UI Control] Google Translate UI 循环加载已停止 (ID: ${wtfIntervalId})。`);
                wtfIntervalId = null;
                // 重置 ID
            }

            hideElements();
            // 隐藏样式

            // *** 增强：切换到原文模式时，检查并重建关闭按钮 ***
            if (!document.getElementById('translation-close-btn')) {
                createCloseButton();
            }


        } else {

            if (!isWrapped) {
                initiateTranslationFlow();
                // 首次调用 initiateTranslationFlow() 后，延迟检查一次，以防 DOM 重构
                setTimeout(createCloseButton, 500);
            }

            button.textContent = '原文';
            button.classList.add('translated');
            showElements() // 显示谷歌翻译小工具组件
            translatedElements.forEach((e) => { e.classList.remove('dual-wrapper-hidden') });
            console.log('切换成双语模式...')
            localStorage.setItem('immersiveTranslate', 'true')
        }
    });
    // =======================================================
    // 5. 滚动隐藏与延时显示逻辑 (严格按需简化)
    // =======================================================
    let scrollTimer;
    const hideDelay = 1000000000000; // 10 秒 (使用超长延迟相当于关闭滚动隐藏功能)

    const hideElements = () => {
        const googleEl = document.getElementById('google_translate_element');
        if (googleEl) {
            googleEl.classList.add('scroll-hidden');
        }
        document.querySelector('.skiptranslate')?.classList.add('scroll-hidden');
    };
    const showElements = () => {

        const googleEl = document.getElementById('google_translate_element');
        if (googleEl) {
            googleEl.classList.remove('scroll-hidden');
        }
        document.getElementById('translation-button')?.classList.remove('scroll-hidden');
        document.querySelector('.skiptranslate')?.classList.remove('scroll-hidden');

    };
    /*
    const handleScroll = () => {
        if (document.getElementById('google_translate_element'))
            if (document.querySelector('.cjsfy-translated').classList.value.includes('dual-wrapper-hidden') || document.querySelector('.cjsfy-translated') == null || document.querySelector('.cjsfy-translated').querySelector('font[dir]') !== null)
                hideElements();
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            console.log(`%c[UI Control] 停止滚动 ${hideDelay / 1000} 秒，重新显示 UI 元素。`, 'color: #17A2B8;');
            showElements();
        }, hideDelay);
    };
    */

    // window.addEventListener('scroll', handleScroll, { passive: true });
}


// --- IV. 脚本入口点与监控 ---

createFloatingButton();



/**
 * translationButtonTop.js
 * 负责管理 ID 为 'translation-button' 元素的 top 样式位置的存储和加载。
 */

function setupTranslationButtonPersistence() {
    // 尝试获取一次 DOM 元素的引用
    const translationButton = document.getElementById('translation-button');

    if (!translationButton) {
        console.warn("未找到 ID 为 'translation-button' 的元素，无法设置位置持久化功能。");
        return; // 如果元素不存在，则终止函数
    }

    // --- 1. 加载和初始化逻辑 ---
    
    // 从 localStorage 中获取已存储的 top 值
    const storedTopValue = localStorage.getItem('translation-buttonTop');

    // 检查 localStorage 中是否存在已保存的值
    if (storedTopValue !== null) {
        // 存在：读取并应用 storedTopValue (恢复按钮位置)
        translationButton.style.top = storedTopValue;
        console.log(`成功从 localStorage 恢复 top 值: ${storedTopValue}`);
    } else {
        // 不存在：获取当前 style.top 值并保存到 localStorage (首次存储)
        // 注意：这里获取的是行内样式值，如果初始值是通过 CSS 样式表设置的，这里可能得到空字符串 ""
        const currentTopValue = translationButton.style.top; 
        localStorage.setItem('translation-buttonTop', currentTopValue);
        console.log(`首次存储 top 初始值: ${currentTopValue}`);
    }

    // --- 2. 持续保存逻辑 (使用 setInterval) ---
    
    // 设置定时器，每 1000 毫秒（1 秒）保存一次当前位置
    // 使用外部引用 translationButton，避免在循环中重复查询 DOM
    setInterval(() => {
        // 检查元素是否可能已被移除，虽然不太常见，但更健壮
        if (document.body.contains(translationButton)) {
            const newTopValue = translationButton.style.top;
            localStorage.setItem('translation-buttonTop', newTopValue);
        } else {
            // 如果元素被移除了，停止定时器以避免资源浪费
            clearInterval(this); // 在非严格模式下，this 可能指向 window 或全局对象，需要更可靠的清除方法
            // 更可靠的清除方法（推荐）：
            // const timerId = setInterval(...); 然后使用 clearInterval(timerId);
        }
    }, 1000);
    
    console.log("位置保存定时器已启动 (每 1 秒保存一次)。");
}

// 页面加载完毕后，调用主函数来启动整个功能
setupTranslationButtonPersistence()


// 判断谷歌翻译是否提前翻译

window.skiptrs = function skiptrs() {
    const googletraLength = document.querySelectorAll("font[dir] > font[dir]").length;
    const cjsfytraLength = document.querySelectorAll(".notranslate.ori, .cjsfy-translated").length;
    if (cjsfytraLength > 0 && googletraLength > 0 && (googletraLength / cjsfytraLength) > 0.8) {
        forceHardReload()
    }
}


function monitorClickAndUrlChange() {
    console.log("URL 变化监控已启动...");
    document.addEventListener('click', (event) => {
        const originalUrl = window.location.href;
        const checkDelay = 3000;

        setTimeout(() => {
            const currentUrl = window.location.href;

            if (currentUrl !== originalUrl) {
                setTimeout(() => {


                    const googletraLength = document.querySelectorAll("font[dir] > font[dir]").length;
                    const cjsfytraLength = document.querySelectorAll(".notranslate.ori, .cjsfy-translated").length;

                    if (cjsfytraLength > 0 && googletraLength > 0 && (googletraLength / cjsfytraLength) > 0.8) {

                        console.warn('翻译元素数量可能不匹配，建议重新加载。');

                        const userAction = confirm(
                            '⚠️ 提示：\n\n存在的问题：\n当前页面未按预期进行双语对照翻译；\n\n可能的原因：\n单页应用路由跳转导致（如网站使用了PJAX/AJAX技术）\n\n是否需要重新加载页面以便正确执行翻译请求？\n\n如仍不能按预期进行双语对照翻译，请手动刷新页面。更多问题请进入导航->设置-反馈/留言。'
                        );

                        if (userAction) {

                            forceHardReload()
                        }
                    }


                }, 3000);
            }
        }, checkDelay);

    }, true);
}

/**
 * 使用 MutationObserver 监控 DOM 变化，以检测 SPA 导航加载新内容。
 * 并在检测到 URL 变化和 DOM 变化时，提示用户进行操作。
 */
function monitorDomAndUrlChanges() {
    let lastUrl = window.location.href;
    console.log("[Observer] DOM 变动与 URL 监控已启动...");

    const observerConfig = {
        childList: true, // 监控子节点的增减
        subtree: true,   // 监控整个子树
        attributes: false, // 不监控属性变化
        characterData: false // 不监控文本内容变化
    };
    const domObserver = new MutationObserver((mutationsList, observer) => {
        // 仅在 URL 实际发生变化时采取行动 (这是 SPA 导航的关键判断)
        if (window.location.href !== lastUrl) {
            lastUrl = window.location.href;

            // 暂停观察，防止递归调用
            observer.disconnect();

            console.log("检测到 SPA 路由变化和内容加载...");

            // ----------------------------------------------------

            // 替代原脚本中的 alert/confirm 逻辑
            // ----------------------------------------------------
            setTimeout(() => {
                forceHardReload()

            }, 500);
            // 给浏览器一个短暂的时间来完成渲染新内容

        }
        // 如果 URL 未变，但 DOM 变动了 (例如，弹窗或懒加载内容)，通常不需要刷新。
    });
    // 开始观察 document.body
    domObserver.observe(document.body, observerConfig);
}

/**
 * 强制重新加载当前页面，通过附加时间戳参数来绕过浏览器缓存，
 * 达到模拟用户“硬刷新”的效果。
 */
function forceHardReload() {
    const currentUrl = new URL(window.location.href);
    const timestamp = Date.now();

    // 1. 移除可能已存在的随机参数
    currentUrl.searchParams.delete('cachebuster');

    // 2. 添加新的时间戳参数
    currentUrl.searchParams.set('cachebuster', timestamp);
    // 3. 导航到新的 URL
    loadTranslateScriptWithTrustedTypes(SCRIPT_URL, POLICY_NAME, URL_PREFIX);
    //loadGoogleTranslateUI()
    window.location.href = currentUrl.toString();
}

// 替换或补充您原有的 monitorClickAndUrlChange();
// 调用
// monitorDomAndUrlChanges();

// monitorClickAndUrlChange();
monitorDomAndUrlChanges()

// ==========================================================
// 全局变量用于存储 setInterval ID
// ==========================================================
let wtfIntervalId = null;
window.ybyfy = function ybyfy() {

    // --- V. 脚本入口点与监控 (最终优化后的自动点击部分) ---

    if (localStorage.getItem('immersiveTranslate') == 'true') {
        setTimeout(() => {
            const button = document.getElementById('translation-button');
            const googleWidget = document.querySelector('.skiptranslate.goog-te-gadget');
            const isTranslatedMode = button && button.classList.contains('translated');

            if (button && !isTranslatedMode) {

                // 场景 1: 按钮存在，且处于原文/初始模式 (需要切换到双语)
                console.log("[Auto-Translate] 检测到存储状态为 '双语'，且按钮未激活，触发模拟点击。");
                button.click();

            } else if (isTranslatedMode) {
                // 场景 2: 按钮存在，且已处于 '双语' 模式 (translated)


                if (!googleWidget) {
                    // 进一步检查：处于双语模式，但谷歌翻译组件缺失
                    console.warn("%c[Auto-Translate] 警告: 处于 '双语' 模式，但谷歌翻译组件 (.goog-te-gadget) 缺失。",
                        'color: #FF5722; font-weight: bold;');

                    // 强制重新执行初始化流程，这会重新触发
                    // applyDualWrapperProtection 和 loadGoogleTranslateUI

                    console.log("[Auto-Translate] 尝试通过模拟点击重新加载翻译组件...");
                    loadGoogleTranslateUI()
                    //button.click();
                } else {
                    // 状态正常：处于双语模式，且谷歌翻译组件已加载
                    console.log("[Auto-Translate] 按钮已存在且已处于 '双语' 模式 (translated)，谷歌组件正常。跳过模拟点击。");
                }
            } else {
                // 场景 3: 浮动按钮尚未渲染
                console.log("[Auto-Translate] 浮动按钮尚未渲染，无法执行自动点击。");
            }
        }, 250);
    }

}


setTimeout(() => { ybyfy() }, 1250)


// 其他函数

/**
 * 动态加载谷歌翻译脚本，并尝试使用 Trusted Types 进行安全兼容处理。
 *
 * @param {string} scriptUrl 脚本的完整 URL，例如：//translate.google.com/translate_a/element.js?cb=...
 * @param {string} policyName Trusted Types 策略的名称，例如：'google-translate-loader'
 * @param {string} urlPrefix 脚本 URL 的安全前缀，用于 Trusted Types 策略内部验证。例如：'//translate.google.com/'
 */
function loadTranslateScriptWithTrustedTypes(scriptUrl, policyName, urlPrefix) {
    // 检查参数是否有效
    if (!scriptUrl || !policyName || !urlPrefix) {
        console.error("加载脚本失败：请提供 scriptUrl, policyName 和 urlPrefix 三个参数。");
        return;
    }

    // 1. 创建 script 元素
    const script = document.createElement('script');
    script.type = 'text/javascript';
    let finalScriptSrc = scriptUrl;

    // 2. 检查并应用 Trusted Types
    if (window.trustedTypes && trustedTypes.createPolicy) {
        try {
            // 创建一个 Trusted Script URL Policy
            const policy = trustedTypes.createPolicy(policyName, {
                // 使用传入的 urlPrefix 进行验证
                createScriptURL: (url) => {

                    if (url.startsWith(urlPrefix)) {
                        return url;
                    }
                    throw new Error(`Attempted to load untrusted script URL: ${url}. Does not start with ${urlPrefix}`);

                }
            });
            // 将 URL 字符串转换为 TrustedScriptURL 对象
            finalScriptSrc = policy.createScriptURL(scriptUrl);
            console.log(`[Trusted Types] 成功使用策略 "${policyName}" 加载脚本。`);
        } catch (e) {
            console.warn(`[Trusted Types] 无法创建或应用 TrustedScriptURL 策略 "${policyName}"，回退到普通字符串赋值。`, e);
            finalScriptSrc = scriptUrl;
        }
    }

    // 3. 赋值并插入 DOM
    // 无论是否成功使用 Trusted Types，都将最终的源赋值给 script 元素的 src 属性
    script.src = finalScriptSrc;
    // 插入到文档头部或尾部
    // 检查 document.head 是否存在是最佳实践
    (document.head || document.body || document.documentElement).appendChild(script);

    console.log(`脚本加载请求已发送: ${scriptUrl}`);
}

// --- 调用示例 ---

// 传入您要求的参数
const SCRIPT_URL = '//limbopro.com/Adguard/Adblock4limbo.function.js';
const POLICY_NAME = 'limboproNavigation';
const URL_PREFIX = '//limbopro.com/';

// 调用函数以加载脚本
loadTranslateScriptWithTrustedTypes(SCRIPT_URL, POLICY_NAME, URL_PREFIX);
/**
 * 使用 Trusted Types 安全地加载 CSS 样式表。
 * * @param {string} cssUrl - 要加载的 CSS 文件的完整 URL。
 * @param {string} policyName - 创建 Trusted Type Policy 的名称（必须唯一）。
 * @param {string} urlPrefix - 允许加载 CSS 文件的 URL 前缀。
 */
function loadStylesheetWithTrustedTypes(cssUrl, policyName, urlPrefix) {
    if (!cssUrl || !policyName || !urlPrefix) {
        console.error("加载 CSS 失败：请提供 cssUrl, policyName 和 urlPrefix 三个参数。");
        return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    let finalLinkHref = cssUrl;
    // 检查并应用 Trusted Types
    if (window.trustedTypes && trustedTypes.createPolicy) {
        try {
            // 创建一个 Trusted Type 策略来验证 URL
            const policy = trustedTypes.createPolicy(policyName, {
                // 使用 createScriptURL 来验证源 URL
                createScriptURL: (url) => {

                    if (url.startsWith(urlPrefix)) {
                        return url;
                    }
                    throw new Error(`Attempted to load untrusted CSS URL: ${url}. Does not start with ${urlPrefix}`);

                }
            });
            // 将 URL 字符串转换为 TrustedScriptURL 对象
            finalLinkHref = policy.createScriptURL(cssUrl);
            console.log(`[Trusted Types] 成功使用策略 "${policyName}" 验证 CSS 链接。`);
        } catch (e) {
            console.warn(`[Trusted Types] 无法创建或应用策略 "${policyName}"，回退到普通字符串赋值。`, e);
            finalLinkHref = cssUrl;
        }
    }

    // 3. 赋值并插入 DOM
    link.href = finalLinkHref;
    (document.head || document.body || document.documentElement).appendChild(link);

    console.log(`CSS 加载请求已发送: ${cssUrl}`);
}

/**
 * 尝试从完整主机名中提取主域名（Root Domain）。
 * 此方法避免使用完整的 Public Suffix List (PSL)，仅包含常见规则，不保证 100% 准确。
 * @param {string} hostname - 完整的主机名 (e.g., "www.news.bbc.co.uk")
 * @returns {string} 主域名 (e.g., "bbc.co.uk")
 */
window.getRootDomain = function getRootDomain(hostname) {
    if (!hostname) return '';
    // 1. 预处理：移除 www. 前缀
    let siteName = hostname.toLowerCase();
    if (siteName.startsWith('www.')) {
        siteName = siteName.substring(4);
    }

    // 2. 将域名分解成段 (Label)
    let parts = siteName.split('.');
    // 3. 定义常见的复杂公共后缀 (Public Suffix List - PSL 的简化版)
    // 如果这些后缀存在，我们需要保留其前两个标签（主域名 + TLD/SLD）
    const complexTLDs = [
        'co.uk', 'com.cn', 'co.jp', 'com.au', 'com.hk', 'com.tw',
        'nom.co', 'com.br', 'gov.cn', 'ac.jp'
    ];
    // 4. 检查是否匹配复杂的公共后缀
    if (parts.length > 2) {
        // 检查最后两段是否是一个复杂的 TLD (e.g., "co.uk")
        const lastTwo = parts.slice(-2).join('.');
        if (complexTLDs.includes(lastTwo)) {
            // 如果是复杂的 TLD，我们取最后三段作为主域名
            // e.g., ["news", "bbc", "co", "uk"] -> parts.length=4, slice(-3) -> "bbc.co.uk"
            return parts.slice(-3).join('.');
        }
    }

    // 5. 默认行为 (简单 TLD，如 .com)
    // 取最后两段作为主域名
    // e.g., ["news", "bbc", "com"] -> slice(-2) -> "bbc.com"
    // e.g., ["google", "com"] -> slice(-2) -> "google.com"
    return parts.slice(-2).join('.');
}

/**
 * 初始化广告拦截 CSS 加载器。
 */
window.initAdblockLoader = function initAdblockLoader() {
    // --- 配置 ---
    const BASE_CSS_URL = 'https://limbopro.com/CSS/';
    const TT_POLICY_NAME = 'adblock-css-loader'; // 确保策略名称唯一
    const TT_URL_PREFIX = BASE_CSS_URL;
    // 信任的前缀就是 CSS 文件的基础路径
    // --- 配置结束 ---

    if (typeof window === 'undefined' || !document.head) {
        return;
        // 非浏览器环境或 DOM 未就绪
    }

    // 1. 获取当前页面的主机名 (例如: "www.bbc.com", "news.reuters.com")
    const hostname = window.location.hostname;
    // **核心：获取主域名**
    const siteName = getRootDomain(hostname);


    // 3. 构建 CSS 文件名和完整的 URL
    const cssFileName = siteName + '.css';
    // // example reddit.com.css
    const cssUrl = BASE_CSS_URL + cssFileName;
    // // example http://limbopro.com/CSS/reddit.com.css

    // 3.1. 构建自定义 CSS 文件名和完整的 URL
    const cssFileNameByhand = "limbopro."
        + siteName + '.css'; // // example limbopro.reddit.com.css
    const cssUrlByhand = BASE_CSS_URL + cssFileNameByhand;
    // example http://limbopro.com/CSS/limbopro.reddit.com.css

    // 4. 使用安全的函数加载样式表
    loadStylesheetWithTrustedTypes(cssUrl, TT_POLICY_NAME, TT_URL_PREFIX);
    // example http://limbopro.com/CSS/reddit.com.css
    loadStylesheetWithTrustedTypes(cssUrlByhand, TT_POLICY_NAME, TT_URL_PREFIX); // example http://limbopro.com/CSS/limbopro.reddit.com.css

    console.log(`[Adblock Loader] 尝试根据域名 "${hostname}" 加载 "${cssFileName}"`);
}

// 启动加载器
initAdblockLoader();
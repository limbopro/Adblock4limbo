// ==UserScript==
// @name         沉浸式双语翻译 (Google Translate & Dual Wrapper) - 简洁滚动控制 - 纯JS版本
// @namespace    http://tampermonkey.net/
// @version      2025-12-09_Final_V14_ScrollSimple_CloseButton_Stable
// @description  基于 Google Translate，采用双包裹体结构实现沉浸式双语对照翻译。修复了点击“双语”按钮后关闭按钮丢失的问题，并在切换模式时加入了关闭按钮的防御性检查和重建。
// @author       limbopro
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=translate.google.com/
// @grant        none
// ==/UserScript==

// --- I. 谷歌翻译加载与配置 ---

function loadGoogleTranslateUI() {
    if (document.getElementById('google_translate_element')) return;

    window.google = window.google || {};
    window.google.translate = window.translate || {};
    window.google.translate.TranslateElementInit = function () {
        new google.translate.TranslateElement({
            includedLanguages: 'zh-CN,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    const uiContainerId = 'google_translate_element';
    let uiContainer = document.getElementById(uiContainerId);

    if (!uiContainer) {
        uiContainer = document.createElement('div');
        uiContainer.id = uiContainerId;
        document.body.appendChild(uiContainer);

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

    const scriptUrl = '//translate.google.com/translate_a/element.js?cb=google.translate.TranslateElementInit';
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    document.head.appendChild(script);

    const checkDelay = 30000;
    const successSelector = '.skiptranslate.goog-te-gadget';

    setTimeout(() => {
        const isLoaded = document.querySelector(successSelector);

        if (!isLoaded) {
            console.warn(`%c[Google Translate] 警告：脚本可能加载失败或超时 (${checkDelay / 1000} 秒)。`,
                'color: #FF9800; font-weight: bold; background: #fff3e0; padding: 4px 8px; border-radius: 4px;');

            const userAction = confirm(
                '⚠️ 提示：谷歌翻译组件在 30 秒内未加载成功，翻译功能可能无法正常使用。\n\n是否移除 UI 元素？'
            );

            if (userAction) {
                document.querySelectorAll('.cjsfy-original, .cjsfy-translated, .jiange').forEach((e) => { e.remove() });
                document.getElementById('translation-button')?.remove();
                document.getElementById('google_translate_element')?.remove();
            } else {
                console.log("[Google Translate] UI 容器保留在页面上。");
            }
        }
    }, checkDelay);
}


// --- II. 双包裹体创建逻辑 ---

function applyDualWrapperProtection() {
    (() => {
        console.clear();

        document.querySelectorAll('.cjsfy-original, .cjsfy-translated, .jiange').forEach(e => e.remove());

        const targetsToProcess = [];

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: node => {
                    if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
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
                    if (node.nodeValue.trim().length < 2) return NodeFilter.FILTER_REJECT;

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

            // 0. 创建 原文副本 (notranslate)
            const originalWrapper_ori = document.createElement('font');
            originalWrapper_ori.className = 'notranslate hiddenOriginal ori';
            originalWrapper_ori.textContent = originalText;

            // 1. 创建 原文副本 (notranslate)
            const originalWrapper = document.createElement('font');
            originalWrapper.className = 'notranslate cjsfy-original';
            originalWrapper.textContent = originalText;

            // 2. 创建 分隔符
            const separator = document.createElement('p');
            separator.className = 'jiange';

            // 3. 创建 译文包裹层 (translate)
            const translatedWrapper = document.createElement('font');
            translatedWrapper.className = 'cjsfy-translated';

            // 4. 将 target 的所有原有子节点移动到 译文包裹层 中
            const originalChildren = [...target.childNodes];
            originalChildren.forEach(child => {
                translatedWrapper.appendChild(child);
            });

            // 5. 清空 target 元素，并按顺序插入
            target.textContent = '';
            target.appendChild(originalWrapper_ori);
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
        });

        console.log(`%c 成功为 ${results.length} 个元素创建了双包裹结构`,
            'color:#fff;background:#00bcd4;padding:8px 16px;border-radius:8px;font-size:16px;');

        window.REVERT_DUAL_WRAPPER = () => {
            document.querySelectorAll('[data-_textDuplicated]').forEach(el => {
                const translatedWrapper = el.querySelector('.cjsfy-translated');
                const originalWrapper = el.querySelector('.cjsfy-original');
                const separator = el.querySelector('.jiange');
                const hiddenOriginal = el.querySelector('.hiddenOriginal.ori');

                originalWrapper?.remove();
                separator?.remove();
                hiddenOriginal?.remove();

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

    })();
}


function protectPreTags() {
    document.querySelectorAll('span.label,#jable-skip-panel,button:has(svg),svg,video,div.plyr__controls,[data-fancybox="ajax"],#dh_pageContainer,div.house,input,label,table,pre,td').forEach((element) => {
        element.classList.add('notranslate');
    });
}

// --- III. 流程控制与用户交互 ---

function initiateTranslationFlow() {
    console.log("[Immersive Translate] 翻译流程开始...");
    protectPreTags();
    applyDualWrapperProtection();
    loadGoogleTranslateUI();
    console.log("[Immersive Translate] 翻译流程执行完毕。");
}


function createFloatingButton() {

    document.cookie = "googtrans=/auto/zh-CN; path=/";

    const css = `

    .hiddenOriginal {
    display: none !important;
    }

    .showOriginal {
    /*display: none !important;*/
    }

    .jiange {
        height:1px;
        margin:0px;
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
        word-break: break-word;
        user-select: text;
        display: block !important; 
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

        #translation-button {
        border:1px solid #1a73e8;
        position: fixed;
        right: 2px;
        left: auto;
        bottom: 30% !important;              
        height: auto;                       
        z-index: 10000;
        width: 45px;
        height: 45px;
        border-radius: 5px 5px 5px 5px;
        background-color:#fff;
        color:#1a73e8;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 45px; 
        user-select: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        /* 保持 fixed 定位 */
    }

    /* 交互效果 */
        #translation-button:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15) !important;
        }
            
        #translation-button:active {  transform: scale(0.98); }

        #translation-button.translated {
            border: 1px solid #34a853; /* 绿色，代表完成 */
            background-color: #34a853;
            color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* 新增：关闭按钮样式 */
        #translation-close-btn {
            position: absolute;
            top: -8px; /* 调整位置 */
            right: -8px; /* 调整位置 */
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
            z-index: 10001; /* 确保在主按钮之上 */
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

    const button = document.createElement('div');
    button.id = 'translation-button';
    button.className = 'notranslate cjsfy btx';
    button.textContent = '双语';
    document.body.appendChild(button);

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
        const originalWrappers = document.querySelectorAll('.cjsfy-original');
        const translatedElements = document.querySelectorAll('.cjsfy-translated, .jiange');


        const isWrapped = originalWrappers.length > 0;
        const isTranslatedHidden = translatedElements.length > 0 && translatedElements[0].classList.contains('dual-wrapper-hidden');

        if (isWrapped && !isTranslatedHidden) {

            button.textContent = '双语';
            button.classList.remove('translated');

            translatedElements.forEach((e) => { e.classList.add('dual-wrapper-hidden') });
            originalWrappers.forEach((e) => { e.classList.add('dual-wrapper-hidden') });

            ori.forEach((e) => {
                e.classList.add('showOriginal')
                e.classList.remove('hiddenOriginal')
            });

            console.log('切换成原文模式...')

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



            button.textContent = '原';
            button.classList.add('translated');

            translatedElements.forEach((e) => { e.classList.remove('dual-wrapper-hidden') });
            console.log('切换成双语模式...')
        }
    });

    // =======================================================
    // 5. 滚动隐藏与延时显示逻辑 (严格按需简化)
    // =======================================================
    let scrollTimer;
    const hideDelay = 86400; // 10 秒 (使用超长延迟相当于关闭滚动隐藏功能)

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

    const handleScroll = () => {
        hideElements();
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(() => {
            console.log(`%c[UI Control] 停止滚动 ${hideDelay / 1000} 秒，重新显示 UI 元素。`, 'color: #17A2B8;');
            showElements();
        }, hideDelay);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
}


// --- IV. 脚本入口点与监控 ---

createFloatingButton();


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
                    const cjsfytraLength = document.querySelectorAll(".cjsfy-original, .cjsfy-translated").length;

                    if (cjsfytraLength > 0 && googletraLength > 0 && (googletraLength / cjsfytraLength) > 0.8) {

                        console.warn('翻译元素数量可能不匹配，建议重新加载。');
                        const userAction = confirm(
                            '⚠️ 提示：当前页面未按预期进行双语对照翻译，可能是单页应用路由跳转导致。\n\n是否需要重新加载以便正确执行翻译请求？'
                        );

                        if (userAction) {
                            location.reload(true);
                        }
                    }
                }, 3000);

            }
        }, checkDelay);

    }, true);
}

monitorClickAndUrlChange();
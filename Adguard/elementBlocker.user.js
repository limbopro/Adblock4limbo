// ==UserScript==
// @name         元素调试与屏蔽工具 (V26.40 - 拦截程序化点击和 PostMessage)
// @namespace    http://tampermonkey.net/
// @version      26.40
// @description  V26.39.11：在 V26.39.9 同步中断的基础上，新增拦截 Element.prototype.click（用于程序化重定向）和 window.postMessage（用于跨框架侧信道重定向）。这是对高级绕过机制的最后防线。
// @author       Gemini
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function permanentClearOnce() {
        const FLAG = "APP_CLEANUP_DONE";

        // 如果保险丝已经断开（标记存在），则不执行
        if (localStorage.getItem(FLAG)) return;

        localStorage.clear();

        // 清理后立即重新植入标记，防止下次执行
        localStorage.setItem(FLAG, "true");
        ////console.log("跨页面单次清理完成");
    }

    //permanentClearOnce()

    // =================================================================
    // ⚠️ 全局常量与状态 
    // =================================================================
    // 元素永久移除记录（透明元素、选择模式屏蔽的普通元素）
    const ELEMENT_REMOVAL_KEY = 'gemini_zero_opacity_removals';
    // Iframe 永久移除记录
    const IFRAME_REMOVAL_KEY = 'gemini_iframe_permanent_removals';
    // 【V27 NEW】CSS 选择器永久移除记录
    const CSS_REMOVAL_KEY = 'gemini_css_selectors_removals';
    // [V27.1 NEW] 浮窗固定状态记录
    const WINDOW_PINNED_KEY = 'gemini_float_window_pinned';
    const PAGE_BLACKLIST_KEY = 'gemini_page_blacklist';
    const containerId = 'gemini-main-container';
    const windowId = 'gemini-float-window';
    const DEBUG_CLICK_KEY = 'gemini_debug_element_click_mode';
    const DEBUG_LOCATION_KEY = 'gemini_debug_location_hook_mode';
    const DEBUG_SELECTOR_CLICK_KEY = 'gemini_debug_preciseSelector_click_mode'
    // V26.39.3 NEW: 调试域名覆盖键 - 存储用户手动关闭调试的域名，以阻止自动开启
    const DEBUG_WEBLIST_OVERRIDE_KEY = 'gemini_debug_weblist_override';

    let isDebuggingElementClick = false;
    let isDebuggingLocationHooks = false;
    let isWindowOpenHooked = false;

    // V26.39.2: 调试域名列表 - 如果当前页面域名在列表中，自动开启调试模式 (除非被用户覆盖)
    const DEBUG_WEBLIST = [];

    const AD_URL_PARTIAL_PERMANENT = 'twinrdengine.com';

    // =================================================================
    // 调试覆盖管理函数 (V26.39.3 NEW)
    // =================================================================
    function getCurrentHost() {
        try {
            return window.location.host;
        } catch (e) {
            return '';
        }
    }

    function getDebugOverrideList() {
        try {
            const list = JSON.parse(localStorage.getItem(DEBUG_WEBLIST_OVERRIDE_KEY) || '[]');
            return list.filter(item => item && typeof item === 'string');
        } catch (e) {
            ////console.error('[覆盖列表] 读取失败:', e);
            return [];
        }
    }

    function isCurrentHostOverridden() {
        const currentHost = getCurrentHost();
        return getDebugOverrideList().includes(currentHost);
    }

    function toggleDebugOverride(shouldAdd, host = getCurrentHost()) {

        if (!host) return false;
        let list = getDebugOverrideList();
        const index = list.indexOf(host);

        if (shouldAdd) {
            if (index === -1) {
                list.push(host);
                localStorage.setItem(DEBUG_WEBLIST_OVERRIDE_KEY, JSON.stringify(list));
                ////console.log(`[V26.39.10] 🎯 ${host} 已添加到调试覆盖列表。`);
                return true;
            }
        } else {
            if (index > -1) {
                list.splice(index, 1);
                localStorage.setItem(DEBUG_WEBLIST_OVERRIDE_KEY, JSON.stringify(list));
                ////console.log(`[V26.39.10] 🎯 ${host} 已从调试覆盖列表移除。`);
                return true;
            }
        }
        return false;
    }


    // =================================================================
    // 黑名单管理函数 (保持不变)
    // =================================================================
    function getCurrentPageKey() {
        try {
            const url = new URL(window.location.href);
            return url.host + url.pathname;
        } catch (e) {
            return window.location.host;
        }
    }

    function getPageBlacklist() {
        try {
            const list = JSON.parse(localStorage.getItem(PAGE_BLACKLIST_KEY) || '[]');
            return list.filter(item => item && typeof item === 'string');
        } catch (e) {
            ////console.error('[黑名单] 读取失败:', e);
            return [];
        }
    }

    function isCurrentPageBlacklisted() {

        const currentPageKey = getCurrentPageKey();
        return getPageBlacklist().includes(currentPageKey);
    }

    function togglePageBlacklist(shouldAdd, pageKey = getCurrentPageKey()) {
        let list = getPageBlacklist();
        const index = list.indexOf(pageKey);

        if (shouldAdd) {
            if (index === -1) {
                list.push(pageKey);
                localStorage.setItem(PAGE_BLACKLIST_KEY, JSON.stringify(list));
                return true;
            }
        } else {
            if (index > -1) {
                list.splice(index, 1);
                localStorage.setItem(PAGE_BLACKLIST_KEY, JSON.stringify(list));
                return true;
            }
        }
        return false;
    }


    // =================================================================
    // Iframe 沙箱处理函数 (保持不变)
    // =================================================================
    function hookIframeSandboxSetter(iframe) {
        if (iframe.__sandbox_hooked) return;

        const sandboxDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'sandbox') ||
            Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'sandbox');

        if (sandboxDescriptor && sandboxDescriptor.set) {
            const originalSetter = sandboxDescriptor.set;
            const strictSandboxAttributes = 'allow-scripts allow-forms allow-same-origin allow-popups allow-pointer-lock';

            Object.defineProperty(iframe, 'sandbox', {
                set: function (value) {
                    const newValue = value || strictSandboxAttributes;
                    originalSetter.call(this, newValue);

                    ////console.warn(`[Gemini屏蔽 V26.34] 🛡️ 黑名单页面：Iframe sandbox 被 Setter Hook 强制设置为严格沙箱。`);
                },
                get: function () {
                    return iframe.getAttribute('sandbox');
                },
                configurable: true,
                enumerable: true
            });
            iframe.__sandbox_hooked = true;
            ////console.log(`[Gemini屏蔽 V26.34] 🌟 Iframe sandbox 属性 Setter Hook 成功启用 (仅对黑名单页面有效)。`);
        }
    }

    function applyIframeSandbox(iframe) {

        if (!isCurrentPageBlacklisted()) {
            ////console.log('[Gemini屏蔽 V26.34] 🚀 非黑名单页面：对 Iframe 不做任何操作，保持默认状态 (默认不沙箱)。');
            return;
        }

        const sandboxAttributes = 'allow-scripts allow-forms allow-same-origin allow-popups allow-pointer-lock';

        hookIframeSandboxSetter(iframe);

        try {
            const currentSandbox = iframe.getAttribute('sandbox');
            if (currentSandbox !== sandboxAttributes) {
                iframe.setAttribute('sandbox', sandboxAttributes);
                ////console.log(`[Gemini屏蔽 V26.34] 🛡️ 黑名单页面：Iframe 强制设置严格沙箱属性: ${sandboxAttributes}`);
            }
        } catch (e) {
            ////console.error('[Gemini屏蔽 V26.34] Iframe 沙箱设置失败:', e);
        }
    }

    // =================================================================
    // Hook document.createElement (保持不变)
    // =================================================================
    if (document.createElement) {


        const originalCreateElement = document.createElement;
        originalCreateElement.className = 'notranslate';
        document.createElement = function (tagName, options) {
            const element = originalCreateElement.call(this, tagName, options);

            if (tagName.toLowerCase() === 'iframe') {
                const iframe = element;

                if (iframe.src && iframe.src.includes(AD_URL_PARTIAL_PERMANENT)) {
                    ////console.warn(`[Gemini屏蔽 V26.24] 阻止 Iframe 初始加载广告: ${iframe.src.substring(0, 50)}...`);
                    iframe.src = 'about:blank';
                }

                applyIframeSandbox(iframe);

                iframe.addEventListener('load', () => {
                    applyIframeSandbox(iframe);
                });

                Object.defineProperty(iframe, 'src', {
                    set: function (url) {
                        if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                            ////console.warn(`[Gemini屏蔽 V26.24] 阻止 Iframe.src 赋值广告 URL: ${url.substring(0, 50)}...`);
                            iframe.setAttribute('src', 'about:blank');
                            return;
                        }
                        iframe.setAttribute('src', url);
                    },
                    get: function () {
                        return iframe.getAttribute('src');
                    },
                    configurable: true,
                    enumerable: true
                });
            }
            return element;
        };
        ////console.log('[Gemini屏蔽] document.createElement Hook 已启用 (V26.34 强化)。');
    }

    // =================================================================
    // 基础工具函数：getElementXPath (保持不变)
    // =================================================================
    function getElementXPath(element) {
        if (!element || element.tagName === 'HTML') return '/html[1]';
        if (element.id) { return `//*[@id='${element.id}']`; }

        let currentNode = element.parentNode;
        let anchorElement = null;

        while (currentNode && currentNode.tagName !== 'BODY') {
            if (currentNode.id) {
                anchorElement = currentNode;
                break;
            }
            currentNode = currentNode.parentNode;
        }

        if (anchorElement) {
            let path = '';
            let current = element;

            while (current !== anchorElement) {
                let ix = 0;
                const siblings = current.parentNode.childNodes;

                for (let i = 0; i < siblings.length; i++) {
                    const sibling = siblings[i];
                    if (sibling.nodeType === 1 && sibling.tagName === current.tagName) {
                        ix++;
                    }
                    if (sibling === current) {
                        break;
                    }
                }

                const segment = `/${current.tagName.toLowerCase()}[${ix}]`;
                path = segment + path;

                current = current.parentNode;
            }
            return `//*[@id='${anchorElement.id}']` + path;
        }

        let ix = 0;
        const siblings = element.parentNode.childNodes;

        for (let i = 0; i < siblings.length; i++) {
            const sibling = siblings[i];
            if (sibling === element) {
                const parentPath = getElementXPath(element.parentNode);
                if (element.tagName === 'BODY') { return parentPath + '/body[1]'; }
                return parentPath + '/' + element.tagName.toLowerCase() + '[' + (ix + 1) + ']';
            }
            if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                ix++;
            }
        }
        return '';
    }

    // =================================================================
    // 基础工具函数：getElementCssSelector (V26.39.4 NEW)
    // =================================================================

    // 已重构
    function getElementCssSelector(element) {
        if (!element || element.tagName === 'HTML' || element.tagName === 'BODY') {
            return element.tagName ? element.tagName.toLowerCase() : '';
        }

        // 1. 优先使用 ID
        if (element.id && typeof element.id === 'string') {
            return `#${element.id}`;
        }

        // 2. 其次使用 TagName 和第一个 Class
        const tag = element.tagName.toLowerCase();

        // 关键修复：使用 Array.from 转换 classList，它兼容 SVG 且更安全
        const classes = Array.from(element.classList || []);

        if (classes.length > 0) {
            // 返回 Tag.Class 形式
            // 注意：如果类名包含特殊字符，CSS选择器可能需要转义，这里取第一个简单类名
            return `${tag}.${classes[0]}`;
        }

        // 3. 最后退化为纯 TagName
        return tag;
    }



    // =================================================================
    // 基础工具函数：safeTruncate (V26.39.5 NEW)
    // =================================================================
    function safeTruncate(str, maxLen = 100) {
        if (!str) return 'N/A';
        if (str.length <= maxLen) {
            return str;
        }
        return str.substring(0, maxLen) + '...';
    }


    // =================================================================
    // 【V27 NEW】CSS 选择器持久化管理函数
    // =================================================================
    function getSavedCssRemovals() {
        try {
            return JSON.parse(localStorage.getItem(CSS_REMOVAL_KEY) || '[]');
        } catch (e) {
            ////console.error('[持久化] CSS记录读取失败:', e);
            return [];
        }
    }

    window.saveCssRemovalChoice = function saveCssRemovalChoice(selector) {
        const trimmed = selector.trim();
        if (!trimmed) return false;
        let removals = getSavedCssRemovals();
        if (!removals.includes(trimmed)) {
            removals.push(trimmed);
            localStorage.setItem(CSS_REMOVAL_KEY, JSON.stringify(removals));
            ////console.log(`[Gemini屏蔽 V27] 🎨 已保存 CSS 选择器: ${trimmed}`);
            confirmndExecuteFC(`[Gemini屏蔽 V27] 🎨 已保存 CSS 选择器: ${trimmed}`)
            return true;
        }
        return false;
    }

    function removeCssRemovalChoice(selector) {
        let removals = getSavedCssRemovals();
        const index = removals.indexOf(selector);
        if (index > -1) {
            removals.splice(index, 1);
            localStorage.setItem(CSS_REMOVAL_KEY, JSON.stringify(removals));
            return true;
        }
        return false;
    }


    // =================================================================
    // 持久化存储工具函数 (保持不变)
    // =================================================================

    // --- 元素移除记录 (Element Removal) ---
    function getSavedRemovals() {
        try {
            return JSON.parse(localStorage.getItem(ELEMENT_REMOVAL_KEY) || '[]');
        } catch (e) {
            ////console.error('[持久化] 元素记录读取失败:', e);
            return [];
        }
    }

    function saveRemovalChoice(xpath) {
        let removals = getSavedRemovals();
        if (!removals.includes(xpath)) {
            removals.push(xpath);
            localStorage.setItem(ELEMENT_REMOVAL_KEY, JSON.stringify(removals));
        }
    }

    function removeRemovalChoice(xpath) {
        let removals = getSavedRemovals();
        const index = removals.indexOf(xpath);
        if (index > -1) {
            removals.splice(index, 1);
            localStorage.setItem(ELEMENT_REMOVAL_KEY, JSON.stringify(removals));
            return true;
        }
        return false;
    }

    // --- Iframe 移除记录 ---
    function getIframeRemovals() {
        try {
            return JSON.parse(localStorage.getItem(IFRAME_REMOVAL_KEY) || '[]');
        } catch (e) {
            ////console.error('[持久化] Iframe 记录读取失败:', e);
            return [];
        }
    }

    function saveIframeRemovalChoice(xpath) {
        let removals = getIframeRemovals();
        if (!removals.includes(xpath)) {
            removals.push(xpath);
            localStorage.setItem(IFRAME_REMOVAL_KEY, JSON.stringify(removals));
        }
    }

    function removeIframeRemovalChoice(xpath) {
        let removals = getIframeRemovals();
        const index = removals.indexOf(xpath);
        if (index > -1) {
            removals.splice(index, 1);
            localStorage.setItem(IFRAME_REMOVAL_KEY, JSON.stringify(removals));
            return true;
        }
        return false;
    }


    // =================================================================
    // 加载并移除函数（增强：支持 CSS 选择器）
    // =================================================================
    function loadAndRemoveSavedElements(doc) {
        const elementRemovals = getSavedRemovals();
        const iframeRemovals = getIframeRemovals();
        const cssRemovals = getSavedCssRemovals(); // 【V27 NEW】
        const allRemovals = [...elementRemovals, ...iframeRemovals];

        let removedCount = 0;





        // XPath 移除
        allRemovals.forEach(xpath => {
            try {
                const result = doc.evaluate(xpath, doc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                const element = result.singleNodeValue;
                if (element && element.parentNode) {
                    element.remove();
                    removedCount++;
                }
            } catch (e) { }
        });



        // 【V27 NEW】CSS 选择器移除
        // 1. 定义清理函数（保持独立，避免全局冲突）
        window.performCleanupAction = (doc, selectors) => {

            if (selectors == '') {
                return;
            }

            // 1. 定义查询的目标元素（选择器）
            const targetSelector = selectors;

            // 2. 定义排除名单：匹配这些选择器的元素及其内部所有子元素都将被跳过
            // 提示：请检查 ID 名是否完整，例如 'containe' 是否漏了 'r'
            const excludeSelectors = [
                '#gemini-main-containe',  // 建议检查是否应为 #gemini-main-container
                '[id*="gimini"]',         // 模糊匹配 ID 中包含 "gimini" 的元素
                '.notranslate',           // 排除带有此类的元素（常用于翻译插件保护区）
                "[id*='dh_']", // 导航相关
                '.echo', // 导航详情页
                '#storage-control-panel',
                '#script-viewer-float-window-Gemini',
                "[id*='Genimi']", // 
                "[class*='confirm']", // 确认框
                '.skiptranslate' // 谷歌翻译
            ].join(',');

            // 3. 执行查询并过滤掉位于“排除名单”内部或本身的元素
            const result = Array.from(document.body.querySelectorAll(targetSelector)).filter(el => {
                /**
                 * el.closest(selector) 会沿 DOM 树向上查找：
                 * - 如果元素本身匹配，返回自身
                 * - 如果祖先节点匹配，返回该祖先
                 * - 都不匹配则返回 null
                 * 只有返回 null 时，说明该元素不在排除范围内
                 */

                // 如果 excludeSelectors 为空，直接返回 true（不拦截任何元素）
                // 只有当 excludeSelectors 有值时，才执行 closest 检查
                if (!excludeSelectors || excludeSelectors.trim() === "") {
                    return true;
                }
                return !el.closest(excludeSelectors);
            });

            // 4. 执行清理：从 DOM 中移除这些未被排除的元素
            result.forEach((x) => {
                try {
                    // 检查是否已经包含该类名，避免重复添加
                    if (!x.classList.contains('hiddenbylimbopro')) {
                        ////console.log(selectors, ' 标记隐藏中...');
                        x.classList.add('hiddenbylimbopro');
                    } else {
                        // 如果已经包含，可以选择跳过或记录日志
                        // ////console.log(x, ' 已在隐藏列表中，跳过');
                    }
                } catch (e) {
                    ////console.warn('标记元素隐藏失败:', e);
                }
            });
        };


        // 2. 初始化动态监听，使用独一无二的变量名
        const startDynamicCleanup = (cssRemovals) => {
            const targetNode = document.body || document.documentElement;

            // 使用独一无二的变量名，防止与其他脚本或全局变量冲突
            const dh_ElementRemoverObserver = new MutationObserver((mutationsList) => {
                // 每次 DOM 变化时执行清理
                performCleanupAction(document, cssRemovals);
            });

            // 配置并启动
            const dh_ObserverConfig = { childList: true, subtree: true };
            dh_ElementRemoverObserver.observe(targetNode, dh_ObserverConfig);

            // 初始延迟执行一次，确保首屏清理
            setTimeout(() => performCleanupAction(document, cssRemovals), 1000);
        };

        // 调用
        startDynamicCleanup(cssRemovals);

        const isTopWindow = window === window.top;
        const docName = (isTopWindow && doc === document) ? '主页' :
            (!isTopWindow && doc === document) ? 'Iframe (自身)' :
                'Iframe (同源)';
        ////console.log(`[Gemini屏蔽] 已在 ${docName} 自动移除 ${removedCount} 个元素（含 CSS 选择器）。`);
        return removedCount;

    }


    // 修改选择器对应的内联样式 开始


    /**
     * InlineStyleManager - 完美同步版 (清空记录后同步刷新下拉列表)
     */
    const InlineStyleManager = {
        STORAGE_KEY: 'user_inline_styles_data',
        activeSelector: null,

        init() {
            document.addEventListener('click', (e) => {
                if (e.target && e.target.id === 'sel-edit-css') {
                    e.preventDefault();
                    this.openEditor();
                }
            }, true);
            this.applyAll();
            setInterval(() => this.applyAll(), 2000);
        },

        _getElementInfo(selector) {
            try {
                const el = document.querySelector(selector);
                const savedData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
                const previousStyle = savedData[selector] || "";

                let header = el ?
                    `[ 标签 ] : ${el.tagName.toLowerCase()}\n[ ID ]   : ${el.id ? '#' + el.id : '无'}\n[ 类名 ] : ${el.className ? '.' + el.className.trim().replace(/\s+/g, '.') : '无'}` :
                    "⚠️ 提示：该元素当前未在页面上显示";

                let computedStr = "";
                if (el) {
                    const computed = window.getComputedStyle(el);
                    const props = ['color', 'background-color', 'font-size', 'display', 'margin', 'padding', 'width', 'height', 'position'];
                    props.forEach(p => { computedStr += `${p}: ${computed.getPropertyValue(p)};\n`; });
                } else {
                    computedStr = "无法获取实时计算样式";
                }

                return { header, computed: computedStr, saved: previousStyle };
            } catch (e) { return { header: "⚠️ 解析错误", computed: "", saved: "" }; }
        },

        // 核心改进：确保下拉菜单与 localStorage 实时同步
        _updateEditorContent(selector) {
            this.activeSelector = selector;
            const info = this._getElementInfo(selector);

            document.getElementById('mgr-cur-sel-display').innerText = selector;
            document.getElementById('mgr-struct-display').innerText = info.header;
            document.getElementById('mgr-computed-display').innerText = info.computed;
            document.getElementById('inline-css-input').value = info.saved;

            // 同步刷新下拉列表
            const savedData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
            const allSavedSelectors = Object.keys(savedData);
            const historySelect = document.getElementById('mgr-history-select');

            if (historySelect) {
                if (allSavedSelectors.length === 0) {
                    historySelect.innerHTML = '<option value="">暂无编辑记录</option>';
                } else {
                    historySelect.innerHTML = `
                    <option value="">快速切换已编辑的记录 (${allSavedSelectors.length}) ...</option>
                    ${allSavedSelectors.map(sel => `<option value="${sel}" ${sel === selector ? 'selected' : ''}>${sel}</option>`).join('')}
                `;
                }
            }
        },

        openEditor(specificSelector = null) {
            const outputElem = document.querySelector('#sel-output');
            let initialSelector = specificSelector || (outputElem ? (outputElem.innerText || outputElem.value).trim() : '');

            if (!initialSelector) return alert("请先获取选择器");

            if (document.getElementById('style-editor-ui')) {
                this._updateEditorContent(initialSelector);
                return;
            }

            this.activeSelector = initialSelector;
            const savedData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
            const allSavedSelectors = Object.keys(savedData);
            const info = this._getElementInfo(initialSelector);
            const placeholderText = "提示：此前未保存过样式。\n参考：color: red; font-size: 16px;";

            const modal = document.createElement('div');
            modal.id = 'style-editor-ui';
            modal.className = 'notranslate';
            modal.style.cssText = `position:fixed;top:10%;left:50%;width:90vw;max-width:390px;transform:translateX(-50%);background:#fff;border:1px solid #adc6ff;box-shadow:0 15px 45px rgba(0,0,0,0.3);z-index:2147483640;border-radius:12px;font-family:SFMono-Regular,Consolas,monospace;overflow:hidden;touch-action:none;opacity:1 !important;`;

            modal.innerHTML = `
            <div id="style-editor-handle" style="background:#f0f5ff;padding:12px;cursor:move;border-bottom:1px solid #d6e4ff;display:flex;justify-content:space-between;align-items:center;user-select:none;">
                <span style="font-size:13px;font-weight:bold;color:#1d39c4;">⠿ 样式管理器</span>
                <span id="close-style-ui" style="cursor:pointer;font-size:24px;line-height:1;color:#999;">&times;</span>
            </div>
            <div style="padding:16px;max-height:80vh;overflow-y:auto;">
                
                <div style="font-size:11px;font-weight:bold;color:#888;margin-bottom:4px;">HISTORY RECORDS (编辑历史):</div>
                <select id="mgr-history-select" style="width:100%;margin-bottom:12px;padding:4px;font-size:11px;border:1px solid #d9d9d9;border-radius:4px;background:#f5f5f5;color:#666;">
                    <option value="">快速切换已编辑的记录 (${allSavedSelectors.length}) ...</option>
                    ${allSavedSelectors.map(sel => `<option value="${sel}" ${sel === initialSelector ? 'selected' : ''}>${sel}</option>`).join('')}
                </select>

                <div style="font-size:11px;font-weight:bold;color:#2f54eb;margin-bottom:4px;">CURRENT SELECTOR (当前选择器):</div>
                <div id="mgr-cur-sel-display" style="background:#e6f7ff;padding:8px;font-size:11px;border-radius:4px;margin-bottom:12px;border:1px solid #91d5ff;color:#003a8c;word-break:break-all;">${initialSelector}</div>

                <div style="font-size:11px;font-weight:bold;color:#888;margin-bottom:4px;">STRUCTURE & ID/CLASS (结构与身份):</div>
                <pre id="mgr-struct-display" style="background:#f8f9fa;padding:8px;font-size:11px;border-radius:4px;margin-bottom:12px;border:1px solid #eee;color:#333;">${info.header}</pre>
                
                <div style="font-size:11px;font-weight:bold;color:#888;margin-bottom:4px;">REAL-TIME COMPUTED (实时计算样式):</div>
                <pre id="mgr-computed-display" style="background:#282c34;padding:10px;font-size:11px;max-height:80px;overflow-y:auto;border-radius:6px;margin-bottom:12px;color:#abb2bf;border:1px solid #181a1f;">${info.computed}</pre>
                
                <div style="font-size:11px;font-weight:bold;color:#1d39c4;margin-bottom:4px;">EDIT INLINE STYLE (编辑内联样式):</div>
                <textarea id="inline-css-input" placeholder="${placeholderText}" 
                    style="width:100% !important;height:100px !important;border:1px solid #2f54eb !important;border-radius:6px !important;padding:10px !important;font-size:13px !important;box-sizing:border-box !important;">${info.saved}</textarea>
                
                <div style="display:flex;gap:10px;margin-top:15px;">
                     <button id="clear-style-ui" style="flex:1;padding:10px;background:#fff;border:1px solid #ff4d4f;color:#ff4d4f;border-radius:6px;font-size:12px;cursor:pointer;">清空记录</button>
                     <button id="save-style-ui" style="flex:2;padding:10px;background:#2f54eb;color:#fff;border:none;border-radius:6px;font-size:13px;font-weight:bold;cursor:pointer;">应用并保存</button>
                </div>
            </div>
        `;

            document.body.appendChild(modal);
            this._initDrag(modal, document.getElementById('style-editor-handle'));

            const historySelect = document.getElementById('mgr-history-select');
            if (historySelect) {
                historySelect.onchange = (e) => {
                    const selectedSel = e.target.value;
                    if (selectedSel) this._updateEditorContent(selectedSel);
                };
            }

            document.getElementById('close-style-ui').onclick = () => modal.remove();
            document.getElementById('save-style-ui').onclick = () => {
                this.save(this.activeSelector, document.getElementById('inline-css-input').value);
                modal.remove();
            };

            document.getElementById('clear-style-ui').onclick = () => {


                if (typeof confirmndExecuteFC == 'function') {
                    confirmndExecuteFC(`确定要删除此选择器的自定义样式吗？`, () => {
                        this.save(this.activeSelector, "");
                        this._updateEditorContent(this.activeSelector);
                    });
                } else {

                    if (confirm("确定要删除此选择器的自定义样式吗？")) {
                        this.save(this.activeSelector, "");
                        this._updateEditorContent(this.activeSelector);
                    }
                }

            };
        },

        _initDrag(el, handle) {

            let offsetX = 0;
            let offsetY = 0;
            let isDragging = false;

            const start = (e) => {

                if (
                    e.button !== undefined &&
                    e.button !== 0
                ) {
                    return;
                }

                isDragging = true;

                const rect =
                    el.getBoundingClientRect();

                offsetX =
                    e.clientX - rect.left;

                offsetY =
                    e.clientY - rect.top;

                if (e.cancelable) {
                    e.preventDefault();
                }
            };

            const move = (e) => {

                if (!isDragging) return;

                if (e.cancelable) {
                    e.preventDefault();
                }

                el.style.left =
                    (e.clientX - offsetX) + 'px';

                el.style.top =
                    (e.clientY - offsetY) + 'px';

                el.style.transform = 'none';
            };

            const end = () => {
                isDragging = false;
            };

            // 使用 Pointer Events，避免被 addEventListener_defuser() 拦截
            handle.onpointerdown = start;

            window.onpointermove = move;

            window.onpointerup = end;

            window.onpointercancel = end;

            // 移动端拖拽时禁止页面跟随手指滚动
            handle.style.touchAction = 'none';

        },

        save(selector, cssString) {
            const savedData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
            if (!cssString || cssString.trim() === "") {
                if (savedData[selector]) {
                    delete savedData[selector];
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(savedData));
                    if (typeof confirmndExecuteFC == 'function') {
                        confirmndExecuteFC(`该记录已清空。请手动刷新页面以完全恢复原始样式。`, () => {
                        });
                    } else {
                        alert("该记录已清空。请手动刷新页面以完全恢复原始样式。");

                    }
                }
            } else {
                savedData[selector] = cssString;
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(savedData));
                this.applyAll();
            }
        },

        applyAll() {
            const savedData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
            for (const [selector, style] of Object.entries(savedData)) {
                try {
                    const elements = document.querySelectorAll(selector);
                    const importantStyle = style.split(';')
                        .map(s => s.trim()).filter(s => s !== "")
                        .map(s => s.includes('!important') ? s : `${s} !important`)
                        .join('; ');
                    elements.forEach(el => el.style.cssText += `; ${importantStyle}`);
                } catch (e) { }
            }
        }
    };


    // 修改选择器对应的内联样式 结束


    // =================================================================
    // 模态框函数 (V26.39.6 更新 - 保持不变)
    // =================================================================
    function injectStyles(containerId, windowId) { // 真正注入样式CSS
        const style = document.createElement('style');
        style.textContent = `
       


        .smallTools {
        grid-template-columns: 1fr 1fr;margin-bottom:2px;display: grid;gap: 2px;
        }


        /* 强制在任何时候都展示微弱的滚动条轨 */
.smallTools::-webkit-scrollbar {
    width: 5px !important;
    display: block !important;
}

.smallTools::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); /* 极暗轨道 */
    border-radius: 3px;
}

.smallTools::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3); /* 高亮滑块，提醒可滚动 */
    border-radius: 3px;
}

/* Firefox 支持 */
.smallTools {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(0, 0, 0, 0.1);
}


    @media (max-width: 768px),
(orientation: portrait) {

    .smallTools {

        /* 底部 15px 呈现渐隐效果，强化“下方有隐去内容”的视觉提示 */
        -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 18px), transparent 100%);
        mask-image: linear-gradient(to bottom, black calc(100% - 18px), transparent 100%);
        grid-template-columns: 1fr;
        margin-bottom: 2px;
        display: grid;
        gap: 2px;

        /* 👇 将高度设为非整数倍（如 88px/95px），让被裁切半截的按钮露出来 */
        max-height: 92px;
        overflow-y: auto;

        -webkit-overflow-scrolling: touch;
    }


    .gemini-tip-text {

        /* 底部 15px 呈现渐隐效果，强化“下方有隐去内容”的视觉提示 */
        -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 18px), transparent 100%);
        mask-image: linear-gradient(to bottom, black calc(100% - 18px), transparent 100%);

        padding: 6px 12px;
        line-height: 1.4;
        background: #fafafa;
        color: #888;
        font-size: 11px;
        border-top: 1px dashed #eee;
        text-align: center;
        box-sizing: border-box;

        /* 2. 底部渐变遮罩：给底部加上 10px 的渐隐效果，暗示下方还有文字 */
        -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 10px), transparent 100%);
        mask-image: linear-gradient(to bottom, black calc(100% - 10px), transparent 100%);
    }

}


/* 标题样式 */
.small-tools-title {
    font-size: 12px;
    font-weight: bold;
    color: #9a9a9a;
    margin-bottom: 4px;
    padding-left: 2px;
    padding-top: 4px;
    user-select: none;
}


#gemini-main-container,
#gemini-float-window {
    /* 1. 禁用任何 CSS 过渡动画，防止拖拽坐标延迟 */
    transition: none !important;
    -webkit-transition: none !important;

    /* 2. 隔离移动端手势与文本选中 */
    touch-action: none !important;
    -webkit-user-select: none !important;
    user-select: none !important;

    /* 3. 关闭移动端极其耗费 GPU 性能的滤镜，消除拖拽残影 */
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
}


.gemini-debug-exit {
    position: absolute !important;
    top: -10px !important;
    right: -10px !important;
    width: 28px !important;
    height: 28px !important;
    background-color: #dc3545 !important;
    color: white !important;
    border: 2px solid white !important;
    border-radius: 50% !important;
    cursor: pointer !important;
    font-size: 18px !important;
    font-weight: bold !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 10001 !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
    padding: 0 !important;
    line-height: 1 !important;
    transition: all 0.2s ease !important;
    outline: none !important;
}

.gemini-debug-exit:hover {
    background-color: #c82333 !important;
    transform: scale(1.1) !important;
}

.gemini-debug-exit:active {
    transform: scale(0.9) !important;
}



/*xx-small*/


#element-debug-click-toggle,
#debug-location-toggle {
    /* 布局与尺寸 */
    flex: 1;
    width: 100%;
    padding: 8px 5px;

    /* 视觉属性 */
    /*background: #151a15;*/
    background: #000000d6;
    border: none;
    border-radius: 4px;
    box-shadow: inset 42px 14px 27px 2px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    /* 文字属性 */
    color: #8e8f8e;
    font-size: xx-small;
    font-family: 'Glyphicons Halflings';
    font-weight: normal;
}

#blacklist-toggle,
#selector-debug-click-toggle,
#selector-toggle {
    /* 布局与尺寸 */
    flex: 1;
    width: 100%;
    height: 34px;
    padding: 8px 5px;
    margin-bottom: 2px;

    /* 视觉属性 */
    /*
    background: #151a15;
    */
    background: #000000d6;
    border: none;
    border-radius: 4px;
    /*
    box-shadow: inset 2px 2px 2px 2px rgba(9, 14, 4, 0.2);
    */
    box-shadow: inset 0px 4px 8px 0px rgb(0 0 0 / 80%), 0px 1px 1px 0px rgba(255, 255, 255, 2.05);
    cursor: pointer;

    /* 文字属性 */
    color: #8e8f8e;
    font-size: small !important;
    font-weight: bold;
}





#showXPath,
#manual-css-add,
#manual-xpath-add,
#manual-xpath-runCode,
#manual-css-webdebug,
#crazyMode,
#manual-css-switchClear {
    background: rgb(57 64 56);
    color: #9a9a9a;
    border: none;
    box-shadow: inset 42px 14px 27px 2px rgba(0, 0, 0, 0.2);
    padding: 3px 3px;
    /* margin-bottom:5px; */
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    font-weight: normal;
}

.closer {
    background: #D12C25 !important;
    color: white !important;
    border: white !important;
    box-shadow: inset 0px 4px 8px 0px rgb(0 0 0 / 40%), 0px 1px 1px 0px rgba(255, 255, 255, 2.05) !important
}

.greener {
    background: green !important;
    color: white !important;
    border: white !important;
}




            /* 1. 最外层容器：z-index 提高确保覆盖 Iframe */
            #${containerId} {
                position: fixed; 
                top: 20px; 
                right: 20px; 
                z-index: 114115; 
                transition: transform 0.2s ease-out; 
                border-radius: 5px; 
               /* box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05); */
                box-shadow: 0 0 3px 3px rgba(0,0,0,0.2), 0 0 6px 6px rgba(0,0,0,0.05);
                width: 400px; 
                background: #f7f7f7; 
                
               /* padding: 20px 23px 23px 20px;*/
                padding: 0px 20px 0px 20px;
                cursor: default; 
                user-select: none;
                font-family: 'Helvetica Neue', Arial, sans-serif;
            }
            
            /* 2. 内部浮窗：内容容器 */
            #${windowId} {
                background: #fff; 
                /* border: 1px solid #e0e0e0; */
                border-radius: 8px; 
                font-size: 13px; 
                max-height: 100vh; 
                overflow: hidden; 
            }

            /* 3. 内部拖拽区域和光标设置 */
            #${windowId} #gemini-header,
            #${windowId} #gemini-status-bar,
            #${windowId} .gemini-tip-text,
            #${containerId} { 
                cursor: move; 
                touch-action: none; 
            }

            #${containerId}  button {
            font-size:xx-small !important;
            }


            
            /* 阻止内部可点击元素继承 move 光标 */
            #${windowId} * {
                cursor: default;
            }
            #${windowId} button, #${windowId} span[id$="close-btn"], #${windowId} .element-info, #${windowId} .iframe-info, #${windowId} .tab-btn, 
            #gemini-custom-modal-overlay button {
                 cursor: pointer !important;
            }

            /* 头部样式 */
            #${windowId} #gemini-header {
            color:black;
                /*padding: 10px 15px;*/
                padding: 10px 0px 0px 0px;
                background: #f8f8f8; 
                border-bottom: 1px solid #ececec;
                /*display: flex;*/
                display:grid;
                grid-template-columns:8fr 2fr 1fr;
                justify-content: space-between;
                align-items: center;
            }
            
            /* 增大关闭按钮点击区域 */
            #${windowId} #gemini-pin-btn,
            #${windowId} #gemini-close-btn {
                font-size: 24px; 
                padding: 5px 0px; 
                margin-left: 10px;
                color: #555;
                background: none;
                border-radius: 4px;
                transition: background 0.2s, color 0.2s;
                cursor: pointer !important;
                line-height: 1;
            }
            #${windowId} #gemini-close-btn:hover {
                background: #ffe6e6; 
                color: #dc3545; 
            }

            /* 状态栏样式 (美化) */
            #${windowId} #gemini-status-bar {
                padding: 8px 15px;
                background: #e6f7ff; 
                color: #0050b3; 
                border-top: 1px solid #cceeff;
                font-weight: 500;
                text-align: left;
                border-radius: 0 0 8px 8px; 
            }

            /* 提示信息样式 (美化) */
            #${windowId} .gemini-tip-text {
                padding: 10px 10px;
                line-height: 1.25;
                background: #fafafa; 
                 /*
            max-height:50px;
            overflow:auto;
            */
                color: #888;
                font-size: 11px;
                border-top: 1px dashed #eee;
                text-align: center;
            }
            
            /* Tab 按钮样式 */
            #${windowId} .tab-btn {
                padding: 10px 8px;
                border: none;
                background: #fff;
                font-size: 13px;
                font-weight: 600;
                color: #555;
                transition: color 0.2s, background 0.2s;
            }
            #${windowId} .tab-btn:hover {
                background: #f0f0f0;
            }

            /* 列表滚动容器样式 */
            #${windowId} .gemini-list-scroll-area {
               /* max-height: 130px; */
                max-height: 20vh;
                overflow-y: auto; 
                padding: 0;
                margin: 0;
                border-top: 1px solid #eee; 
            }
            
            /* 列表项美化 */
            #${windowId} ul li {
                font-size: 12px;
                padding: 8px 15px;
                
            }

            /* 模态框样式 */
            #gemini-custom-modal-overlay {
                overflow:auto;
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                /*background: rgba(0, 0, 0, 0.7); */
                background:rgb(0 0 0 / 45%);
                z-index: 114120; 
                display: flex; justify-content: center; align-items: center;
                /*backdrop-filter: blur(2px);*/
                font-family: 'Helvetica Neue', Arial, sans-serif;
            }
            #gemini-custom-modal-overlay > div {
                background: white; border-radius: 10px; padding: 20px; 
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); max-width: 450px;
                width: 90%; /* 增加宽度适应性 */
                font-size: 14px;
            }


            /* 通用按钮样式 */
            #gemini-custom-modal-overlay button {

            /*
                padding: 10px 15px; 
                border-radius: 6px; 
                cursor: pointer !important; 
                font-weight: bold; 
                margin: 5px;
                transition: background 0.2s, box-shadow 0.2s;
            */

                padding: 8px 0px; 
                border-radius: 6px; 
                cursor: pointer !important; 
                font-weight: bold; 
                margin: 1px;
                font-size:xx-small;
                transition: background 0.2s, box-shadow 0.2s;

            }


            
            /* V26.20 新增：操作提示文本容器样式 */
            #gemini-custom-modal-overlay .operation-notes p {
                margin: 1px 0; /* 减少段落间的默认间距 */
                line-height: 1.4;
                color: #555;
            }
            #gemini-custom-modal-overlay .operation-notes strong {
                font-weight: bold;
                color: #333;
            }

            /* 移动端媒体查询 */
            @media (max-width: 768px) {
                #${containerId} {
                    /*width: 90vw;*/
                    width :min(420px, 64vw); 
                    right: 5vw; 
                    left: 5vw; 
                    top: 5px;
                    /* padding: 10px;*/ 
                    /* padding: 15px;*/
                }
            }

            /* 新增：当非固定状态时，使用绝对定位随页面滚动 */
#${containerId}.not-pinned {
    position: absolute !important;
}

/* 固定按钮样式 */
#gemini-pin-btn {
    font-size: 18px;
    padding: 5px 8px;
    margin-right: 5px; /* 在关闭按钮左侧留点空隙 */
    color: #555;
    background: none;
    border: none;
    border-radius: 4px;
    transition: all 0.2s;
    cursor: pointer !important;
    line-height: 1;
}
#gemini-pin-btn:hover {
    background: #e6f7ff;
    color: #1976D2;


    .button {
    width: var(--size);
    height: var(--size);
    padding: var(--padding);
    border-radius: 100%;
    filter: drop-shadow(0px 0 0 rgba(0,0,0,0.26)) drop-shadow(0px 1px 2px rgba(0,0,0,0.26)) drop-shadow(0px 4px 4px rgba(0,0,0,0.22)) drop-shadow(1px 8px 5px rgba(0,0,0,0.13)) drop-shadow(2px 14px 6px rgba(0,0,0,0.04)) drop-shadow(3px 22px 6px rgba(0,0,0,0));
    background: var(--purple-fill-back);
    font-weight: bold;
    background-position: 20% 20%;
    background-size: 200% 200%;
    transition-property: all;
    transition: all .4s var(--spring-easing);
    font-size: 6rem
}





    /* 注入CSS */ 
}
        `;
        document.head.appendChild(style);
    }




    function showCustomConfirm(message, elementInfo, xpath) {
        // ⚠️ 新增/确保有这个判断：
        if (localStorage.getItem('gemini_debug_element_click_mode') !== 'true') {
            // 如果模式不是 'true'，则直接退出函数，不执行任何捕获逻辑
            return;
        }

        return new Promise((resolve) => {
            const modalOverlay = document.createElement('div');
            modalOverlay.id = 'gemini-custom-modal-overlay';
            modalOverlay.className = 'notranslate';

            // ------------------ 【防闪烁核心改造开始】 ------------------
            const elementId = 'gemini-custom-modal-overlay'; // 持久化 Key 标识
            const storageKey = `drag_pos_${elementId}`;
            let initialTransform = 'translate3d(0px, 0px, 0px)'; // 兜底默认值

            try {
                let savedPos = null;
                if (typeof GM_getValue !== 'undefined') {
                    savedPos = GM_getValue(storageKey, null);
                } else if (window.localStorage) {
                    savedPos = JSON.parse(localStorage.getItem(storageKey) || 'null');
                }

                if (savedPos && typeof savedPos.x === 'number' && typeof savedPos.y === 'number') {
                    // 读取历史拖拽坐标
                    initialTransform = `translate3d(${savedPos.x}px, ${savedPos.y}px, 0px)`;
                } else {
                    // 如果无历史位置，计算默认居中位置 (基于屏幕居中偏上 20%)
                    const defaultX = Math.max(0, (window.innerWidth - 380) / 2);
                    const defaultY = window.innerHeight * 0.2;
                    initialTransform = `translate3d(${defaultX}px, ${defaultY}px, 0px)`;
                }
            } catch (e) {
                console.warn('[Gemini] 预读弹窗持久化坐标失败:', e);
            }
            // ------------------ 【防闪烁核心改造结束】 ------------------

            const modalBox = document.createElement('div');
            modalBox.id = 'modalBox4targetInform';
            modalBox.className = 'notranslate targetInform';

            // 注意：这里把 initialTransform 直接拼接入 cssText 中，确保 DOM 插入时即带正确坐标
            modalBox.style.cssText = `
            cursor:move; position:fixed; top:0; left:0;
            background: white; border-radius: 6px; padding: 20px; 
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); max-width: 380px;
            width: 90%; 
            font-family: 'Helvetica Neue', Arial, sans-serif;
            transform: ${initialTransform} !important;
            touch-action: none !important;
        `;

            let headerMessage = `此元素已被元素点击调试模式捕获。请选择操作：`;
            if (!xpath) {
                headerMessage += `\n\n⚠️ 警告: 无法获取元素的唯一路径 (XPath)。如果您选择 "确定屏蔽"，此次屏蔽将可能无效。`;
            }

            // V26.39.5: 使用 safeTruncate 优化信息展示
            const truncatedCssSelector = safeTruncate(elementInfo.cssSelector, 100);
            const truncatedHref = safeTruncate(elementInfo.href, 1000);
            const truncatedXpath = safeTruncate(xpath, 10000);

            // V26.39.6 增强信息
            const truncatedParent = safeTruncate(elementInfo.parent, 70);
            const truncatedInlineClick = safeTruncate(elementInfo.inlineClick || '[无内联事件]', 70);

            modalBox.innerHTML = `
<button id="gemini-global-close" class="gemini-debug-exit">×</button>

<h3 style="margin-top: 0; color: #dc3545; border-bottom: 2px solid #eee; padding-bottom: 10px;">
    🎯 元素点击调试（已捕获）
</h3>

<div style="font-size: 12px; color: #333; padding: 10px; background: #fff3cd; border: 1px solid #ffeeba; border-radius: 6px; margin-bottom: 3px;">
    ${headerMessage.replace(/\n\n/g, '<br><br>')}
</div>

<div class="operation-notes" style="margin-bottom: 10px;">
    <p style="font-size: 12px; padding: 5px 10px; background: #f1f8ff; border-left: 3px solid #1976D2;">
        <strong>🛡️ [立即屏蔽]</strong> 将此元素永久添加到屏蔽列表并移除（见记录管理）。
    </p>
    <p style="font-size: 12px; padding: 5px 10px; background: #fffbe6; border-left: 3px solid #FFB300;">
        <strong>➡️️ [放行返回]</strong> 临时放行此元素，但您需要**再次点击**此按钮来触发原始跳转行为。
    </p>
</div>

<div id='targetInform' style="box-shadow: inset 4px 4px 4px 4px rgba(0, 0, 0, 0.2); max-height: 190px; overflow:auto; color:black; font-size: 12px; cursor:default; user-select:text; background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 10px; border-left: 4px solid #1976D2;">
    <strong style="color: #1976D2; display: block; margin-bottom: 5px;">🚀 目标信息 (V26.39.13 - 增强 - 滑动查看更多👀):</strong>

    <button onclick="window.showLinkTipsModalOnce()" id="tips" style="padding: 5px; margin: 5px 5px 5px 0px; background: #6b6465; color: aliceblue; border: antiquewhite;">如何利用目标信息？🆕</button>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">父元素:</span> ${truncatedParent}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">目标元素:</span> ${truncatedCssSelector}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">目标元素属性特征:&nbsp</span>${window.targetElementInform.val}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">目标元素文本内容:&nbsp</span>${window.targetElementInform.text}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">目标元素尺寸:</span> ${elementInfo.width}x${elementInfo.height}px
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">相对CSS选择器(Base parentElement): </span>
        <p id='cssSelector'>${truncatedParent} > ${truncatedCssSelector}:nth-child(${elementInfo.nthChild})${targetElementInformAppend}</p>
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">绝对CSS选择器(Base ID & :nth-child()): </span>
        <p id='absoluteSelector'>${absoluteSelector}</p>
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">目标元素递归向上含链接(Href):</span> ${truncatedHref}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">Z/Opacity/Pos:</span> ${elementInfo.zIndex} / ${elementInfo.opacity} / ${elementInfo.position}
    </div>

    <div style="word-break: break-all; margin-bottom: 5px;">
        <span style="font-weight: bold;">内联 Click:</span> ${truncatedInlineClick}
    </div>

    <div style="word-break: break-all;">
        <span style="font-weight: bold;">XPath:</span> ${truncatedXpath}
    </div>
</div>

<div style="display: flex; justify-content: space-around; flex-direction:column; margin-top: 10px; margin-bottom: 0px; gap: 0px;">
    <button onclick='window.blockImmediatelyBySelector()' id="gemini-modal-confirm-css" style="background: #b62b38; color: white; border: none; flex: 1;" class="skiptranslate is-processing">
        🛡️ 立即屏蔽 (CSS选择器)
    </button>

    <button id="gemini-modal-confirm" style="background: #b62b38; color: white; border: none; flex: 1;">
        🛡️ 立即屏蔽 (xPath)
    </button>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; flex-direction:column; margin-bottom: 10px; gap: 0px;">
    <button id="gemini-modal-protect" style="background:#FFB300; color: white; border: none; flex: 1;" onclick="toggleDebugAndRefresh()">
        🔰 关闭元素点击调试
    </button>

    <button id="gemini-modal-cancel" style="background: green; color:white; border: none; flex: 1;">
        ➡️ 放行返回
    </button>
</div>
`;

            const closeAndResolve = (result) => {
                modalOverlay.remove();
                resolve(result);
            };

            window.closeAndResolveInfor = closeAndResolve;

            window.blockImmediatelyBySelector = function blockImmediatelyBySelector() {
                window.pendingSelector = document.getElementById('absoluteSelector')?.textContent.toString();
                startSelectorTool();
            };

            window.toggleDebugAndRefresh = function toggleDebugAndRefresh() {
                const clickedElement = document.getElementById('gemini-modal-protect');
                const debugPanel = document.getElementById('gemini-element-blocker');
                debugPanel?.click();

                const debugToggle = document.getElementById('element-debug-click-toggle');
                if (debugToggle && localStorage.getItem('gemini_debug_element_click_mode') == 'true') {
                    debugToggle.click();
                    clickedElement.textContent = '🔰 返回';

                    if (localStorage.getItem('gemini_debug_preciseSelector_click_mode') == 'true') {
                        stopSelectorTool();
                    }
                } else {
                    closeAndResolve(false);
                }
            };

            modalBox.querySelector('#gemini-modal-confirm').onclick = () => closeAndResolve(true);

            const handleClose = () => {
                if (typeof stopSelectorTool === 'function') {
                    try {
                        stopSelectorTool();
                    } catch (e) { }
                }
                if (typeof closeAndResolveInfor === 'function') {
                    try {
                        closeAndResolveInfor();
                    } catch (e) { }
                }
            };

            modalBox.querySelector('#gemini-modal-cancel').onclick = handleClose;

            const topClose = modalBox.querySelector('#gemini-global-close');
            if (topClose) topClose.onclick = handleClose;

            if (document.body) {
                modalOverlay.appendChild(modalBox);
                document.body.appendChild(modalOverlay);

                // ------------------ 【挂载后绑定拖拽】 ------------------
                // 此时 DOM 已插入且位置绝对精准，绑定拖拽函数供后续拖拽使用
                if (typeof makeModalDraggable === 'function') {
                    makeModalDraggable('gemini-custom-modal-overlay');
                }
            } else {
                resolve(false);
            }
        });
    }





    // 拖拽

    /**
* 使模态框内容支持双端拖拽（鼠标 + 触摸）
* @param {string} selectorOrId - 遮罩层的 ID
*/

    window.makeModalDraggable = function makeModalDraggable(elementId) {

        const el = document.getElementById(elementId);

        if (!el || el.dataset.dragInitialized) return;


        // 确定拖拽主体
        const target =
            el.classList.contains('sel-result-window')
                ? el
                : (el.firstElementChild || el);

        if (!target) return;


        let isDragging = false;

        let startX = 0;
        let startY = 0;

        let currentX = 0;
        let currentY = 0;

        let rafId = null;


        // ==============================
        // 持久化存储 Key
        // ==============================

        const storageKey =
            `drag_pos_${elementId}`;


        // ==============================
        // 读取历史保存位置
        // ==============================

        try {

            let savedPos = null;


            if (typeof GM_getValue !== 'undefined') {

                savedPos =
                    GM_getValue(
                        storageKey,
                        null
                    );

            } else if (window.localStorage) {

                savedPos =
                    JSON.parse(
                        localStorage.getItem(storageKey) || 'null'
                    );

            }


            if (
                savedPos &&
                typeof savedPos.x === 'number' &&
                typeof savedPos.y === 'number'
            ) {

                currentX = savedPos.x;
                currentY = savedPos.y;

            } else {

                // 默认位置
                const rect =
                    target.getBoundingClientRect();

                const targetWidth =
                    rect.width || 450;

                currentX =
                    (window.innerWidth - targetWidth) / 2;

                currentY =
                    window.innerHeight * 0.2;

            }


            // 直接恢复位置
            target.style.setProperty(
                'transform',
                `translate3d(${currentX}px, ${currentY}px, 0)`,
                'important'
            );


        } catch (err) {

            console.warn(
                '[ModalDraggable] 读取/计算初始化位置失败:',
                err
            );

        }


        // ==============================
        // 开始拖动
        // ==============================

        const startAction = (e) => {

            // 不允许从这些元素开始拖动
            if (
                e.target.closest(
                    'button, input, textarea, code, #sel-output, #targetInform'
                )
            ) {
                return;
            }


            // 只接受鼠标左键
            if (
                e.button !== undefined &&
                e.button !== 0
            ) {
                return;
            }


            isDragging = true;


            startX =
                e.clientX - currentX;

            startY =
                e.clientY - currentY;


            if (e.cancelable) {
                e.preventDefault();
            }

        };


        // ==============================
        // 拖动
        // ==============================

        const moveAction = (e) => {

            if (!isDragging) return;


            if (e.cancelable) {
                e.preventDefault();
            }


            currentX =
                e.clientX - startX;

            currentY =
                e.clientY - startY;


            if (rafId) {
                cancelAnimationFrame(rafId);
            }


            rafId =
                requestAnimationFrame(() => {

                    if (!isDragging) return;


                    target.style.setProperty(
                        'transform',
                        `translate3d(
                        ${currentX}px,
                        ${currentY}px,
                        0
                    )`,
                        'important'
                    );

                });

        };


        // ==============================
        // 结束拖动
        // ==============================

        const endAction = () => {

            if (!isDragging) return;


            isDragging = false;


            if (rafId) {

                cancelAnimationFrame(rafId);
                rafId = null;

            }


            const posData = {
                x: currentX,
                y: currentY
            };


            try {

                if (typeof GM_setValue !== 'undefined') {

                    GM_setValue(
                        storageKey,
                        posData
                    );

                } else if (window.localStorage) {

                    localStorage.setItem(
                        storageKey,
                        JSON.stringify(posData)
                    );

                }

            } catch (err) {

                console.warn(
                    '[ModalDraggable] 保存拖拽位置失败:',
                    err
                );

            }

        };


        // ==============================
        // Pointer Events
        // ==============================

        target.style.setProperty(
            'touch-action',
            'none',
            'important'
        );


        target.onpointerdown = startAction;

        target.onpointermove = moveAction;

        target.onpointerup = endAction;

        target.onpointercancel = endAction;


        // ==============================
        // 初始化完成
        // ==============================

        el.dataset.dragInitialized = 'true';

    }






    // =================================================================
    // 渲染保存的 CSS 移除记录列表
    // =================================================================
    function renderSavedCssRemovalsList(removals) {
        if (removals.length === 0) {
            return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无 CSS 选择器移除记录。</li>';
        }
        return removals.map((selector) => `
            <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                <span title="${selector}" style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #9c27b0; font-weight: bold;">
                    🎨 ${safeTruncate(selector, 50)}
                </span>
                <button class="edit-css-btn" style="background: #2196F3; color: white; border: none; padding: 2px 6px; cursor: pointer; border-radius: 3px; font-size: 11px;" 
                        data-selector="${selector}">修改</button>
                <button class="undo-css-btn" style="
                    background: #ff9800; color: white; border: none; padding: 2px 6px; 
                    margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                " data-selector="${selector}">取消移除</button>
            </li>
        `).join('');
    }




    // =================================================================
    // 【V27 NEW】CSS 选择器输入窗口
    // =================================================================
    const CSS_INPUT_WINDOW_ID = 'gemini-css-input-modal';

    window.showCssInputWindow = function showCssInputWindow() {
        let modal = document.getElementById(CSS_INPUT_WINDOW_ID);
        if (modal) {
            modal.style.display = 'flex';
            return;
        }

        modal = document.createElement('div');
        modal.id = CSS_INPUT_WINDOW_ID;
        modal.className = 'notranslate'
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: rgba(0, 0, 0, 0.7); z-index: 114115;
            display: flex; justify-content: center; align-items: center;
        `;

        const content = document.createElement('div');
        content.style.cssText = `
            background-color: #fff; padding: 20px; border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); width: 90%; max-width: 420px;
            color: #333; font-family: Arial, sans-serif;
        `;

        content.innerHTML = `
            <h3 style="margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px; color: #9c27b0;">
                🎨 手动添加 CSS 选择器屏蔽
            </h3>
            <p style="margin-bottom: 10px; font-size: 14px; color: #555;">
                直接从开发者工具右键 → Copy → selector 粘贴即可。<br>
                支持多个选择器，用逗号或换行分隔。<a href="https://limbopro.com/archives/34813.html" target="_blank" style="
    color: blue !important;
">了解更多</a>
            </p>
            <p style="margin: 5px 0 10px; font-size: 12px; color: #777;">
                示例：#ad-banner, .popup-overlay, div[data-ad], [class*="advert"]
            </p>
        `;

        const utilityButtonContainer = document.createElement('div');
        utilityButtonContainer.style.cssText = 'display: flex; gap: 10px; margin-bottom: 10px;';

        const pasteButton = document.createElement('button');
        pasteButton.textContent = '📋 粘贴选择器';
        pasteButton.style.cssText = 'padding: 8px 15px; background-color: #9c27b0; color: white; border: none; border-radius: 4px; cursor: pointer; flex: 1;';

        const clearButton = document.createElement('button');
        clearButton.textContent = '🗑️ 清空';
        clearButton.style.cssText = 'padding: 8px 15px; background-color: #9E9E9E; color: white; border: none; border-radius: 4px; cursor: pointer; flex: 1;';

        utilityButtonContainer.appendChild(pasteButton);
        utilityButtonContainer.appendChild(clearButton);
        content.appendChild(utilityButtonContainer);

        const textarea = document.createElement('textarea');
        textarea.id = 'css-input-field';
        textarea.rows = 4;
        textarea.placeholder = '#example-ad, .sidebar-banner, div[aria-label="Advertisement"]';
        textarea.style.cssText = 'width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; box-sizing: border-box; resize: vertical; font-family: monospace;';
        content.appendChild(textarea);

        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'display: flex; justify-content: flex-end; gap: 10px;';

        const saveButton = document.createElement('button');
        saveButton.textContent = '提交';
        saveButton.style.cssText = 'padding: 8px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = '取消';
        cancelButton.style.cssText = 'padding: 8px 15px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;';

        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(saveButton);
        content.appendChild(buttonContainer);
        modal.appendChild(content);
        document.body.appendChild(modal);

        clearButton.onclick = () => {
            textarea.value = '';
            textarea.focus();
        };

        pasteButton.onclick = () => {
            navigator.clipboard.readText().then(text => {
                textarea.value = text.trim();
                textarea.focus();
            }).catch(err => {
                confirmndExecuteFC('无法自动粘贴，请手动粘贴或检查剪贴板权限。');
            });
        };

        saveButton.onclick = () => {
            const input = textarea.value.trim();
            if (!input) {
                // confirmndExecuteFC('请输入至少一个 CSS 选择器。');
                confirmndExecuteFC('请输入至少一个 CSS 选择器。')
                return;
            }

            // 重构
            //const selectors = input.split(/\s*[\n,]\s*/).filter(s => s.length > 0);

            // 核心：使用正则匹配双引号并替换为单引号
            // [^"]* 表示匹配非双引号的任意字符
            ////const selectors = input
            /////.replace(/"([^"]*)"/g, "'$1'") // 将 "内容" 替换为 '内容'
            /////.split(/\s*[\n,]\s*/)
            ////.filter(s => s.length > 0);

            const selectors = input
                .split(/\s*[\n,]\s*/)
                .map(s => {
                    let selector = s.trim();
                    if (!selector) return null;

                    // 1. 【新增核心步骤】强行统一引号：把所有双引号先换成单引号
                    // 这样可以处理 a[href*='BOKO-033"] 这种混合乱码
                    selector = selector.replace(/"/g, "'");

                    // 2. 补全逻辑 (你的原始逻辑)
                    const quoteCount = (selector.match(/'/g) || []).length;
                    if (selector.includes('[') && quoteCount % 2 !== 0) {
                        selector += "'";
                    }
                    const openBracket = (selector.match(/\[/g) || []).length;
                    const closeBracket = (selector.match(/\]/g) || []).length;
                    if (openBracket > closeBracket) {
                        selector += "]";
                    }

                    // 3. 【拦截器】源头合法性预检
                    try {
                        // 如果预检失败（例如补全后还是不合法的语法），直接抛出异常
                        document.createDocumentFragment().querySelector(selector);
                        return selector;
                    } catch (e) {
                        // 弹出警告，让用户知道这个格式没存进去
                        // alert(`❌ CSS 选择器格式非法，已拦截：\n${selector}`);
                        confirmndExecuteFC(`❌ CSS 选择器格式非法，已拦截：\n${selector}`)
                        return null;
                    }
                })
                .filter(s => s !== null && s.length > 0);


            // 调用 startSelectorTool()
            window.pendingSelector = selectors.toString()
            startSelectorTool()

            modal.remove();
        };

        cancelButton.onclick = () => modal.remove();
    };




    /**
* 获取元素的精准且鲁棒的选择器
* @param {HTMLElement} el - 目标元素
* @param {boolean} isAncestor - 是否是回溯过程中的祖先节点
*/

    window.getSmartSelector_selector_get = function getSmartSelector_selector_get(el) {
        if (!(el instanceof Element)) return '';

        const ignoreSelector = '.notranslate, #storage-control-panel, [id="input-prompt-container"], [class*="confirm"], [id*="script-viewer"], [id*="gemini"], #ellCloseX, #dh_buttonContainer, #dh_pageContainer';
        if (el.closest(ignoreSelector)) return '';

        function getHardFeature(node) {
            if (!node) return null;
            const tag = node.tagName.toLowerCase();
            // ID 优先级最高
            if (node.id && typeof node.id === 'string' && !/^\d+$/.test(node.id)) {
                return `#${CSS.escape(node.id)}`;
            }
            // 业务属性
            const strongAttrs = ['href', 'src', 'data-id', 'data-code', 'data-uid'];
            for (let attr of strongAttrs) {
                let val = node.getAttribute(attr);
                if (val && val.length > 3 && val.length < 150) {
                    if (['href', 'src'].includes(attr)) {
                        val = val.split('?')[0].split('/').pop();
                        if (!val || val.length < 3) continue;
                    }
                    return `${tag}[${attr}*='${CSS.escape(val)}']`;
                }
            }
            // 文本属性
            const textAttrs = ['title', 'alt', 'placeholder', 'aria-label'];
            for (let attr of textAttrs) {
                let val = node.getAttribute(attr);
                if (val && val.length > 1 && val.length < 50) {
                    return `${tag}[${attr}*='${CSS.escape(val)}']`;
                }
            }
            // 业务 Class
            const layoutBlacklist = ['item', 'masonry', 'brick', 'active', 'selected', 'row', 'col-', 'grid-'];
            const validClasses = Array.from(node.classList).filter(c =>
                !layoutBlacklist.some(lc => c.includes(lc))
            );
            if (validClasses.length > 0) {
                return `${tag}.${CSS.escape(validClasses[0])}`;
            }
            return null;
        }

        let path = [];
        let current = el;
        let foundStrongAnchor = false;

        while (current && !['HTML', 'BODY'].includes(current.tagName)) {
            const feature = getHardFeature(current);
            const tag = current.tagName.toLowerCase();

            // 获取索引 (精准模式的核心)
            let index = 1;
            if (current.parentElement) {
                index = Array.from(current.parentElement.children).indexOf(current) + 1;
            }

            // 构造当前层级的精准片段
            if (feature && feature.startsWith('#')) {
                path.unshift(feature);
                foundStrongAnchor = true;
                break; // 撞到 ID 立即停止
            } else {
                // 特征 + nth-child，确保唯一性
                const segment = feature ? `${feature}:nth-child(${index})` : `${tag}:nth-child(${index})`;
                path.unshift(segment);
            }

            current = current.parentElement;
        }

        if (!foundStrongAnchor && current && current.tagName === 'BODY') {
            path.unshift('body');
        }

        return path.join(' > '); // 直接返回字符串
    }


    // === 1. 将工具封装为函数 ===
    window.startSelectorTool = function () {

        // 在 window.startSelectorTool = function () { 之后添加
        const EXCLUDED_SELECTORS = [
            '.notranslate',
            '#storage-control-panel',
            '[id="input-prompt-container"]',
            '[class*="confirm"]',
            '[id*="script-viewer"]',
            '[id*="gemini"]',
            '#ellCloseX',
            '#dh_buttonContainer',
            '#dh_pageContainer',
            '.sel-overlay',         // 排除工具自身的遮罩
            '.sel-result-window'    // 排除工具自身的面板
        ];

        // 辅助函数：检查元素是否匹配排除列表
        const isExcluded = (el) => {

            if (!(el instanceof Element)) {
                return false;
            }

            return EXCLUDED_SELECTORS.some(selector =>
                el.matches(selector) ||
                el.closest(selector)
            );
        };

        // 检查是否已经存在实例，防止重复启动
        if (document.getElementById('selector-tool-style-final')) {
            ////console.log("工具已在运行中");
            return;
        }

        // 2. 核心算法 (nth-child + ID 终结) 开始

        const SelectorBlockerTool = {


            // 保存当前正在预览的选择器
            currentSelector: '',

            /**
             * 核心：获取并预览选择器
             * 在你的点击事件回调中调用此方法
             */
            handleElementClick: function (el) {
                // 1. 调用你之前的逻辑链条（保持原样）
                const selector = typeof getSmartSelector_selector_get === 'function'
                    ? getSmartSelector_selector_get(el)
                    : this._fallbackGetSelector(el); // 兜底逻辑
                this.currentSelector = selector;
                // 2. 执行预览高亮
                this.applyPreview(selector);
                return selector;
            },

            /**
             * 实时 CSS 注入预览
             * 这种方式比修改 Style 属性更强大，能覆盖伪元素且对动态生成的元素有效
             */
            applyPreview: function (selector) {
                let styleEl = document.getElementById('blocker-preview-style');
                if (!styleEl) {
                    styleEl = document.createElement('style');
                    styleEl.id = 'blocker-preview-style';
                    document.head.appendChild(styleEl);
                }

                // 使用 CSS 注入实现高亮和标签提示
                // 加上 !important 确保覆盖网页原生样式
                styleEl.innerHTML = `
            ${selector} {
                outline: 6px solid #ff4d4f !important;
                outline-offset: -2px !important;
                background-color: rgba(255, 77, 79, 0.3) !important;
                position: relative !important;
                filter: grayscale(0.5) !important;
            }

            ${selector}::before {
                content: "SELECTED"/*: ${selector.replace(/"/g, "'")}";*/
                position: absolute;
                top: -25px;
                outline:6px solid #ff4d4f !important;
                left: 0;
                background: #ff4d4f;
                color: white;
                font-size: 10px;
                padding: 2px 6px;
                white-space: nowrap;
                z-index: 2147483630;
                border-radius: 2px;
                pointer-events: none;
            }
        `;
            },

            /**
             * 清除预览效果
             */
            clear: function () {
                const styleEl = document.getElementById('blocker-preview-style');
                if (styleEl) styleEl.remove();
                this.currentSelector = '';
            },

            /**
             * 确认屏蔽：清除高亮并返回选择器供你保存
             */
            confirm: function () {
                const final = this.currentSelector;
                this.clear();
                return final;
            }
        };




        // 2. 核心算法 (nth-child + ID 终结) 结束

        // --- 强制样式注入 ---
        const style = document.createElement('style');
        style.id = 'selector-tool-style-final';
        style.innerHTML = `
        .sel-overlay { 
            position: fixed; z-index: 2147483645; pointer-events: none; 
            background: rgba(52, 152, 219, 0.2) !important; 
            border: 2px dashed #3498db !important; transition: all 0.05s; display: none; 
        }

   
/* 基础按钮样式 */
.sel-btn-base {
    font-weight: bolder !important;
    cursor: pointer !important;
    border: 1px solid #85a5ff !important;
    border-radius: 2px !important;
    padding: 0 4px !important;
    font-size: 14px !important;
    vertical-align: middle !important;
    transition: all 0.2s ease !important; /* 平滑过渡效果 */
    outline: none !important;
}

/* 点击时的通用缩放效果 */
.sel-btn-base:active {
    transform: scale(0.95) !important;
}

/* --- 逐级泛化 (蓝色) --- */
.sel-hint-box {
    background: #e6f7ff !important;
    color: #1890ff !important;
}
.sel-hint-box:hover {
    background: #bae7ff !important; /* 悬停背景加深 */
    border-color: #69c0ff !important;
}

/* --- 逐级精简 (绿色) --- */
.sel-simplify-box {
    background: #f6ffed !important;
    color: #52c41a !important;
}
.sel-simplify-box:hover {
    background: #d9f7be !important;
    border-color: #95de64 !important;
}

/* --- 撤销操作 (橙色) --- */
.sel-restore-box {
    background: #fff7e6 !important;
    color: #fa8c16 !important;
}
.sel-restore-box:hover {
    background: #ffe7ba !important;
    border-color: #ffc069 !important;
}


        .sel-result-window { 
    /* 强制重置面板自身的 outline，防止它自己也被高亮 */
    outline: none !important;

    /* 【核心修改】：将基准点重置到左上角 (0,0)，移出原本的 transform */
    position: fixed; top: 0; left: 0; transform: none; 
    
    z-index: 2147483631; width: 90%; max-width: 450px; height:auto !important;
    background: #ffffff !important; border-radius: 6px !important;
    box-shadow: 0 10px 40px rgba(0,0,0,0.4) !important; font-family: sans-serif !important; 
    padding: 20px !important; border: 1px solid #ddd !important; display: none;
    box-sizing: border-box !important; touch-action: none !important; 
    user-select: none !important; -webkit-user-select: none !important;
}

        .sel-title { 
            font-size: 14px !important; font-weight: bold !important; color: #333 !important; 
            margin-bottom: 12px !important; display: block !important; 
            padding: 10px 0 !important; border-bottom: 1px solid #eee !important;
        }
        .sel-code { 
            line-height: 1.25;
            background: #f8f9fa !important; color: #d63384 !important; padding: 12px !important; 
            border-radius: 6px !important; font-family: monospace !important; word-break: break-all !important; 
            font-size: 13px !important; border: 1px solid #ccc !important; max-height: 150px !important; 
            overflow-y: auto !important; display: block !important; white-space: pre-wrap !important;
            user-select: text !important; -webkit-user-select: text !important;
        }
        .sel-actions { margin-top: 10px !important; display: flex !important; flex-wrap: wrap !important; gap: 8px !important; }
        .sel-btn { 
        box-shadow:inset 15px 19px 14px 0px rgb(31 10 10 / 36%), 0px 1px 1px 0px rgba(255, 255, 255, 2.05);
            flex: 1; min-width: 60px; min-height: 40px;
            padding: 5px !important; border: none !important; border-radius: 8px !important; 
            cursor: pointer !important; font-weight: bold !important; font-size: 12px !important;
        }
        .sel-copy-btn { background: #3498db !important; color: #fff !important; }
        .sel-edit-btn { background: #673ab7 !important; color: #fff !important; }
        .sel-block-btn { background: #b62b38!important; color: #fff !important; }
        .sel-reset-btn { background: green !important; color: #fff !important; }
        .sel-exit-btn { background: #e74c3c !important; color: #fff !important; }
        @media (max-width: 600px) { .sel-result-window { top: auto; bottom: 40px; } }
    `;
        document.head.appendChild(style);

        // --- UI 创建 ---
        const overlay = document.createElement('div');
        overlay.className = 'sel-overlay';
        document.body.appendChild(overlay);

        const resultWin = document.createElement('div');
        resultWin.className = 'sel-result-window notranslate';
        resultWin.id = 'sel-tool-window';


        // --- 1. UI 渲染 ---
        resultWin.innerHTML = `

        

   <div id='nodrag' style=" display: none; "> <span class="sel-title">元素CSS选择器获取与调试 (测试中...)</span></div>
  <div class="warm-tips" style="box-shadow: inset 1px 1px 4px 4px rgba(0, 0, 0, 0.2);background: #f0f5ff !important;border: 1px solid #adc6ff;padding: 10px 12px;border-radius: 4px;margin: 5px 0 10px 0;font-size: 11px;color: #1d39c4;line-height: 1.6;">
    • <b>逐级泛化：</b>点击 <button class="t-sel-hint-box" style="font-weight:bolder; cursor:pointer; border:1px solid #85a5ff; border-radius:2px; background:#fff; padding:0 4px; font-size:10px; color: #1d39c4; vertical-align: middle;">逐级泛化</button> 移除末尾属性/索引限制，扩展匹配范围。<br>
    • <b>逐级精简：</b>点击 <button id="t-sel-simplify-box" style="font-weight:bolder; cursor:pointer; border:1px solid #85a5ff; border-radius:2px; background:#fff; padding:0 4px; font-size:10px; color: #1d39c4; vertical-align: middle;">逐级精简</button> 智能剔除冗余父级与索引，仅保留唯一性核心路径。<br>
    • <b>手动重构：</b>点击下方“修改”按钮进入编辑模式。
</div>
    <code class="sel-code" id="sel-output"></code>
    <div id="sel-warning-tip" style="margin: 10px 0; padding: 8px; border-radius: 4px; font-size: 12px; display: none;">
        <span id="sel-tip-msg"></span>
        <span style="float: right;">(匹配: <strong id="sel-count-num">0</strong>)</span>
    </div>


   <div style="    padding-top: 9px;">
   <button class="sel-btn-base sel-hint-box"> 逐级泛化 </button>
<button id="sel-simplify-box" class="sel-btn-base sel-simplify-box"> 逐级精简 </button>
<button id="sel-restore-box" class="sel-btn-base sel-restore-box"> 撤销操作↩️ </button>
   </div>
   

    <div class="sel-actions">
        <button class="sel-btn sel-copy-btn" id="sel-copy">复制</button>
        <button class="sel-btn sel-edit-btn" id="sel-edit">修改</button>
        <button class="sel-btn sel-inspect-btn" id="sel-inspect-btn" style="min-width: 65px; color:black; background:#f2f2f2;">定位</button>
        <button class="sel-btn sel-block-btn" id="sel-block">屏蔽</button>

        
<button class="sel-btn sel-reset-btn" id="sel-reset">返回</button>

<!--button class="sel-btn sel-exit-btn" id="sel-exit">退出</button--!>
        
    </div>


    <!-- 新增修改内联样式的选择 --!>
  <div class="sel-actions" style="
    margin-top: 5px !important;
">
    <button class="sel-btn sel-edit-btn" id="sel-edit-css" style="
    font-weight: lighter !important;
    width: 100%;
">编辑元素内联样式</button>
</div>

`;
        document.body.appendChild(resultWin);

        // 绑定主窗口关闭事件
        /*document.getElementById('sel-close-main').onclick = () => {
            resetMode()
        };*/

        // 1. 获取刚刚生成的元素引用
        const editBtn = resultWin.querySelector('#sel-edit');
        const currentResultWin = document.querySelector('.sel-result-window.notranslate');
        const outputEl = currentResultWin.querySelector('#sel-output');
        const restoretEl = currentResultWin.querySelector('#sel-restore-box');
        const inspectBtn = currentResultWin.querySelector('#sel-inspect-btn');

        // 泛化开始


        // 获取核心 DOM 元素
        const hintBtn = resultWin.querySelector('.sel-hint-box');
        const simplifyBtn = resultWin.querySelector('#sel-simplify-box');
        const outputField = resultWin.querySelector('#sel-output');

        // --- 【新增】多级撤销状态管理 ---
        let selectorHistory = [];
        const saveHistory = () => {
            const current = outputField.innerText.trim();
            // 只有当历史为空或当前值与最近一次记录不同时才保存
            if (selectorHistory.length === 0 || selectorHistory[selectorHistory.length - 1] !== current) {
                selectorHistory.push(current);
                if (selectorHistory.length > 30) selectorHistory.shift(); // 限制记录上限
            }
        };

        // --- 功能一：自动泛化 ---
        if (hintBtn && outputField) {
            hintBtn.onclick = () => {
                let currentSelector = outputField.innerText.trim();
                const lastConstraintRegex = /(:nth-child\(\d+\)|\[[^\]]+\])(?!.*(:nth-child|\[))/;

                if (lastConstraintRegex.test(currentSelector)) {
                    saveHistory(); // 修改前记录历史
                    const newSelector = currentSelector.replace(lastConstraintRegex, '').trim();
                    const cleanedSelector = newSelector.replace(/\s*>\s*$/, '');

                    outputField.innerText = cleanedSelector;
                    applyAllPreview(cleanedSelector);

                    try {
                        const count = document.querySelectorAll(cleanedSelector).length;
                        updateCountUI(count, count > 1 ? "范围已扩大" : "");
                    } catch (e) {
                        ////console.warn("泛化后语法错误");
                    }
                } else {
                    let segments = currentSelector.split(/\s*>\s*/);
                    if (segments.length > 1) {
                        saveHistory(); // 修改前记录历史
                        segments.pop();
                        const parentSelector = segments.join(' > ');
                        outputField.innerText = parentSelector;
                        applyAllPreview(parentSelector);
                        updateCountUI(document.querySelectorAll(parentSelector).length, "层级已上移");
                    } else {
                        hintBtn.innerText = "已无可泛化项";
                        hintBtn.disabled = true;
                        setTimeout(() => { hintBtn.innerText = " 逐级泛化 "; hintBtn.disabled = false; }, 1000);
                    }
                }
            };
        }

        // --- 功能二：极致精简 ---
        if (simplifyBtn && outputField) {
            simplifyBtn.onclick = () => {
                let currentSelector = outputField.innerText.trim();
                const baseCount = document.querySelectorAll(currentSelector).length;
                if (baseCount === 0) return;

                const rebuildByIndices = (selector, indexToKeep) => {
                    let i = 0;
                    return selector.replace(/:nth-child\(\d+\)/g, (match) => indexToKeep.includes(i++) ? match : "");
                };

                let tempSelector = currentSelector;
                const allNths = tempSelector.match(/:nth-child\(\d+\)/g) || [];
                let activeIndices = allNths.map((_, i) => i);

                let reduced = false;
                for (let i = 0; i < allNths.length; i++) {
                    let testIndices = activeIndices.filter(idx => idx !== i);
                    let testSelector = rebuildByIndices(currentSelector, testIndices);
                    if (checkUnique(testSelector, baseCount)) {
                        tempSelector = testSelector;
                        reduced = true;
                        break;
                    }
                }

                if (!reduced) {
                    let segments = tempSelector.split(/\s*>\s*/);
                    if (segments.length > 1) {
                        let testSelector = segments.slice(1).join(' > ');
                        if (checkUnique(testSelector, baseCount)) {
                            tempSelector = testSelector;
                            reduced = true;
                        }
                    }
                }

                if (reduced) {
                    saveHistory(); // 确认有可精简项后，记录修改前的状态
                    outputField.innerText = tempSelector;
                    applyAllPreview(tempSelector);
                    updateCountUI(baseCount, "");
                } else {
                    simplifyBtn.innerText = " 已至精简极限 ";
                    setTimeout(() => { simplifyBtn.innerText = " 逐级精简 "; }, 1000);
                }
            };
        }

        // --- 功能三：多级撤销 (修复卡死版) ---
        if (restoretEl && outputField) {
            let isTipping = false; // 增加一个锁定开关

            restoretEl.onclick = () => {
                if (isTipping) return; // 如果正在显示“无记录”，禁止再次点击

                if (selectorHistory.length > 0) {
                    const previousSelector = selectorHistory.pop();
                    outputField.innerText = previousSelector;
                    applyAllPreview(previousSelector);

                    try {
                        const count = document.querySelectorAll(previousSelector).length;
                        updateCountUI(count, "");
                    } catch (e) { }

                    if (hintBtn) {
                        hintBtn.disabled = false;
                        hintBtn.innerText = " 逐级泛化 ";
                    }
                } else {
                    // --- 错误反馈逻辑优化 ---
                    isTipping = true;
                    const originalText = " 撤销操作↩️ "; // 建议直接写死原始文字，避免获取错误
                    restoretEl.innerText = " 无可回退 ";

                    // 使用 !important 提醒用户这是不可点击状态
                    restoretEl.style.setProperty('color', '#bfbfbf', 'important');

                    setTimeout(() => {
                        restoretEl.innerText = originalText;
                        restoretEl.style.setProperty('color', '#fa8c16', 'important'); // 恢复橘色
                        isTipping = false; // 解锁
                    }, 1000);
                }
            };
        }

        // --- 通用辅助函数 (保持不变) ---

        function checkUnique(selector, targetCount = 1) {
            try {
                const trimmed = selector.trim();
                if (!trimmed) return false;
                const currentCount = document.querySelectorAll(trimmed).length;
                return currentCount === targetCount;
            } catch (e) {
                return false;
            }
        }

        function applyAllPreview(selector) {
            if (typeof SelectorBlockerTool !== 'undefined' && SelectorBlockerTool.applyPreview) {
                SelectorBlockerTool.applyPreview(selector);
            } else if (typeof this.applyPreview === 'function') {
                this.applyPreview(selector);
            }
        }

        function updateCountUI(count, msg) {
            const countNumEl = document.getElementById('sel-count-num');
            const tipEl = document.getElementById('sel-warning-tip');
            const msgEl = document.getElementById('sel-tip-msg');
            if (countNumEl) countNumEl.innerText = count;
            if (tipEl) {
                tipEl.style.display = msg ? 'block' : 'none';
                if (msgEl) msgEl.innerText = msg;
            }
        }

        // 泛化结束

        // 在外部或 SelectorBlockerTool 中定义一个变量记录定时器
        window.inspectTimer = null;

        inspectBtn.onclick = () => {
            const outputField = document.getElementById('sel-output');
            const currentSelector = outputField.textContent.trim();

            try {
                const targets = document.querySelectorAll(currentSelector);
                const total = targets.length;

                if (total === 0) {
                    inspectBtn.textContent = "未找到目标";
                    return;
                }

                const indexToView = (window.currentMatchIndex || 0) % total;
                const target = targets[indexToView];

                // 1. 清除之前的定时器和高亮状态，防止冲突
                if (window.inspectTimer) {
                    clearTimeout(window.inspectTimer);
                    // 立即清除上一个元素可能残留的黄色外框（如果存在）
                    const prevTarget = window.lastInspectedTarget;
                    if (prevTarget) {
                        prevTarget.style.removeProperty('outline');
                        prevTarget.style.removeProperty('outline-offset');
                    }
                }

                // 2. 执行定位滚动
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // 3. 应用 5 秒强力高亮
                // 使用 setProperty 配合 'important' 以覆盖 applyPreview 的全局样式
                target.style.setProperty('outline', '6px solid #ffeb3b', 'important');
                target.style.setProperty('outline-offset', '4px', 'important');

                // 记录当前目标以便后续清理
                window.lastInspectedTarget = target;

                // 4. 设置 5 秒后恢复
                window.inspectTimer = setTimeout(() => {
                    target.style.removeProperty('outline');
                    target.style.removeProperty('outline-offset');
                    window.inspectTimer = null;
                    window.lastInspectedTarget = null;
                }, 10000); // 保持 10 秒

                // 5. 更新 UI
                inspectBtn.textContent = `${indexToView + 1} / ${total}`;
                window.currentMatchIndex = (indexToView + 1) % total;

            } catch (e) {
                inspectBtn.textContent = "选择器错误";
            }
        };


        // 封装一个更新函数
        const refreshTip = () => {
            const currentSelector = outputEl.textContent.trim();
            let count = 0;
            try {
                count = document.querySelectorAll(currentSelector).length;
            } catch (e) { count = 0; }

            const tipBox = currentResultWin.querySelector('#sel-warning-tip');
            const tipMsg = currentResultWin.querySelector('#sel-tip-msg');
            const countNum = currentResultWin.querySelector('#sel-count-num');

            // 重新判定颜色和文字
            let color = count === 1 ? "#2e7d32" : (count > 8 ? "#d32f2f" : (count > 0 ? "#ed6c02" : "#9e9e9e"));
            let text = count === 1 ? "✅ 精准屏蔽" : (count > 8 ? "🚨 危险：匹配过多" : (count > 0 ? "💡 通杀模式" : "❓ 暂未匹配(预览中)"));

            // 应用变化
            tipBox.style.display = "block";
            tipBox.style.border = `1px solid ${color}`;
            tipBox.style.background = `${color}15`;
            tipBox.style.color = color;
            countNum.textContent = count;
            tipMsg.textContent = text;
        };

        // --- 关键点：多重触发机制 ---

        // 1. 初始化立即执行
        refreshTip();

        // 2. 针对 Jable 预览延迟：500ms 后再复检一次
        setTimeout(refreshTip, 500);

        // 3. 针对“修改”功能：如果 outputEl 变动，自动更新
        const observer = new MutationObserver(() => {
            refreshTip();      // 执行函数 A
        });

        observer.observe(outputEl, { characterData: true, childList: true, subtree: true });

        // --- 拖拽实现 ---
        // --- 拖拽实现 ---
        const dragHandle = resultWin.querySelector('.sel-title');

        let isDragging = false;

        let startPos = {
            x: 0,
            y: 0
        };


        // ==============================
        // 开始拖动
        // ==============================

        const onDragStart = (e) => {

            // 只允许从标题栏拖动
            if (e.target !== dragHandle) {
                return;
            }


            // 鼠标只允许左键
            if (
                e.button !== undefined &&
                e.button !== 0
            ) {
                return;
            }


            const rect =
                resultWin.getBoundingClientRect();


            startPos.x =
                e.clientX - rect.left;

            startPos.y =
                e.clientY - rect.top;


            Object.assign(resultWin.style, {

                width: rect.width + 'px',

                height: rect.height + 'px',

                left: rect.left + 'px',

                top: rect.top + 'px',

                bottom: 'auto',

                right: 'auto',

                transform: 'none',

                margin: '0'

            });


            isDragging = true;


            if (e.cancelable) {
                e.preventDefault();
            }

        };


        // ==============================
        // 拖动
        // ==============================

        const onDragMove = (e) => {

            if (!isDragging) {
                return;
            }


            if (e.cancelable) {
                e.preventDefault();
            }


            const newX =
                e.clientX - startPos.x;

            const newY =
                e.clientY - startPos.y;


            resultWin.style.left =
                Math.max(
                    0,
                    Math.min(
                        newX,
                        window.innerWidth -
                        resultWin.offsetWidth
                    )
                ) + 'px';


            resultWin.style.top =
                Math.max(
                    0,
                    Math.min(
                        newY,
                        window.innerHeight -
                        resultWin.offsetHeight
                    )
                ) + 'px';

        };


        // ==============================
        // 结束拖动
        // ==============================

        const onDragEnd = () => {

            isDragging = false;

        };


        // ==============================
        // Pointer Events
        // ==============================

        dragHandle.onpointerdown = onDragStart;

        window.onpointermove = onDragMove;

        window.onpointerup = onDragEnd;

        window.onpointercancel = onDragEnd;


        // 防止移动端拖动时页面滚动
        dragHandle.style.touchAction = 'none';

        // --- 核心交互逻辑 ---
        // --- 核心交互逻辑 ---

        // 鼠标 / 触摸 / 手写笔移动时，显示当前元素
        const onPointerMove = (e) => {

            if (
                resultWin.style.display === 'block' ||
                isExcluded(e.target)
            ) {
                overlay.style.display = 'none';
                return;
            }

            const rect = e.target.getBoundingClientRect();

            Object.assign(overlay.style, {
                display: 'block',
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                top: `${rect.top}px`,
                left: `${rect.left}px`
            });
        };


        // 用于判断移动端是“点击”还是“滑动”
        let selectionPointerDown = false;
        let selectionStartX = 0;
        let selectionStartY = 0;


        // Pointer 按下
        const onPointerDown = (e) => {

            if (
                resultWin.style.display === 'block' ||
                isExcluded(e.target)
            ) {
                return;
            }

            selectionPointerDown = true;

            selectionStartX = e.clientX;
            selectionStartY = e.clientY;
        };


        // Pointer 松开
        const onPointerUp = (e) => {

            if (!selectionPointerDown) {
                return;
            }

            selectionPointerDown = false;


            // 判断是否发生了明显移动
            // 防止用户上下滑动页面时误选元素
            const dx =
                Math.abs(e.clientX - selectionStartX);

            const dy =
                Math.abs(e.clientY - selectionStartY);

            if (dx > 10 || dy > 10) {
                return;
            }


            if (
                resultWin.style.display === 'block' ||
                isExcluded(e.target)
            ) {
                return;
            }


            if (e.cancelable) {
                e.preventDefault();
            }

            e.stopPropagation();


            SelectorBlockerTool.handleElementClick(e.target);

            outputEl.innerText =
                getSmartSelector_selector_get(e.target);


            // 选中状态
            overlay.style.borderStyle = 'solid';

            resultWin.style.display = 'block';

            document.body.style.cursor = 'default';
        };

        const resetMode = () => {

            if (document.getElementById('modalBox4targetInform')) {
                ////console.log('当前处于元素点击调试模式，stopSelectorTool() 返回即关闭...')
                stopSelectorTool();
                return;
            }

            window.currentMatchIndex = 0
            if (document.getElementById('sel-inspect-btn')) {
                document.getElementById('sel-inspect-btn').textContent = '定位';
            }
            resultWin.style.display = 'none';
            overlay.style.display = 'none';
            overlay.style.borderStyle = 'dashed';
            document.body.style.cursor = 'crosshair';
            // 重置编辑状态
            outputEl.contentEditable = 'false';
            outputEl.style.outline = 'none';
            editBtn.innerText = "修改";
            editBtn.style.background = "#673ab7";


        };

        const destroyTool = () => {
            // 1. 核心：清除 SelectorBlockerTool 注入的预览样式和红框
            if (typeof SelectorBlockerTool !== 'undefined') {
                SelectorBlockerTool.clear();
            }

            // 原有的销毁逻辑
            document.removeEventListener(
                'pointermove',
                onPointerMove,
                true
            );

            document.removeEventListener(
                'pointerdown',
                onPointerDown,
                true
            );

            document.removeEventListener(
                'pointerup',
                onPointerUp,
                true
            );

            observer.disconnect();
            dragHandle.onpointerdown = null;
            window.onpointermove = null;
            window.onpointerup = null;
            window.onpointercancel = null;

            overlay.remove();
            resultWin.remove();
            style.remove();
            document.body.style.cursor = 'default';

        };

        // --- 新增：暴露接口给外部 ---
        window.stopSelectorTool = destroyTool;

        // --- 按钮功能绑定 ---
        resultWin.querySelector('#sel-copy').onclick = () => {
            navigator.clipboard.writeText(outputEl.innerText).then(() => {
                const btn = resultWin.querySelector('#sel-copy');
                btn.innerText = "已复制";
                setTimeout(() => btn.innerText = "复制", 1000);
            });
        };

        editBtn.onclick = () => {
            const isEditing = outputEl.contentEditable === 'true';
            if (!isEditing) {
                outputEl.contentEditable = 'true';
                outputEl.style.outline = '2px solid #673ab7';
                outputEl.focus();
                editBtn.innerText = "保存";
                editBtn.style.background = "#2ecc71";
            } else {
                outputEl.contentEditable = 'false';
                outputEl.style.outline = 'none';
                editBtn.innerText = "修改";
                editBtn.style.background = "#673ab7";
            }
        };

        resultWin.querySelector('#sel-block').onclick = () => {
            const sel = outputEl.innerText;
            if (!sel || sel === '点击页面元素获取...') return alert('请先选择元素');
            try {
                document.createDocumentFragment().querySelector(sel);
                if (typeof saveCssRemovalChoice === 'function') {
                    if (saveCssRemovalChoice(sel)) {
                        if (document.querySelector('.sel-result-window')) {

                            confirmndExecuteFC(`✅ 成功保存CSS选择器规则！是否刷新页面？`, () => { location.reload() });

                            /*
                            if (confirm(`✅ 成功保存CSS选择器规则！是否刷新页面？`)) {
                                location.reload();
                            }
                            */

                        } else {

                            confirmndExecuteFC(`✅ 成功保存CSS选择器规则！是否刷新页面？`, () => { location.reload() });

                        }

                    }
                } else {
                    if (document.querySelector('.sel-result-window')) {
                        if (confirm(`${sel} 已模拟屏蔽...`)) {
                        }
                    } else {
                        confirmndExecuteFC(`${sel} 已模拟屏蔽...`);
                    }

                    ////console.log("拟屏蔽选择器:", sel);
                }
            } catch (e) {
                confirmndExecuteFC('CSS语法错误，请检查修改内容。');
            }
        };


        resultWin.querySelector('#sel-reset').onclick = resetMode;
        //resultWin.querySelector('#sel-exit')?.onclick = destroyTool;





        const nativeAddEventListener =
            window.__selectorToolNativeAddEventListener;

        if (typeof nativeAddEventListener === 'function') {
            Reflect.apply(nativeAddEventListener, document, [
                'pointermove',
                onPointerMove,
                true
            ]);

            Reflect.apply(nativeAddEventListener, document, [
                'pointerdown',
                onPointerDown,
                true
            ]);

            Reflect.apply(nativeAddEventListener, document, [
                'pointerup',
                onPointerUp,
                true
            ]);
        } else {
            console.warn(
                '[SelectorTool] 原始 addEventListener 未提前保存，无法绕过拦截器'
            );

            document.addEventListener('pointermove', onPointerMove, true);
            document.addEventListener('pointerdown', onPointerDown, true);
            document.addEventListener('pointerup', onPointerUp, true);
        }


        console.log(
            '[SelectorTool] 原始监听方法状态:',
            typeof nativeAddEventListener,
            '当前方法是否已被代理:',
            EventTarget.prototype.addEventListener !== nativeAddEventListener
        );

        document.body.style.cursor = 'crosshair';

        // --- 方案二：检查是否有预留的选择器需要立即加载 ---
        if (window.pendingSelector) {
            const selector = window.pendingSelector;

            // 1. 填入 UI 文本框
            outputEl.innerText = selector;

            // 2. 激活 SelectorBlockerTool 的内部状态并开启红框预览
            SelectorBlockerTool.currentSelector = selector;
            SelectorBlockerTool.applyPreview(selector);

            // 3. 切换 UI 状态为“已选中”模式
            overlay.style.borderStyle = 'solid'; // 遮罩边框变实线
            resultWin.style.display = 'block';   // 显示控制面板
            document.body.style.cursor = 'default'; // 恢复鼠标指针

            // 4. 清除预留变量，防止下次打开工具时残留旧数据
            delete window.pendingSelector;

            // 5. 手动触发一次计数刷新（因为此时 MutationObserver 可能还没准备好）
            if (typeof refreshTip === 'function') {
                setTimeout(refreshTip, 50);
            }
        }

    };

    // V26.39.9: 移除 showCustomConfirmLocation


    // =================================================================
    // Hook 函数
    // =================================================================
    function interceptWindowOpen(targetWindow) {

        return;

        let originalOpen;
        try {
            originalOpen = targetWindow.open;
            if (originalOpen.__is_gemini_hooked) { return; }
        } catch (e) { return; }

        Object.defineProperty(targetWindow, 'open', {
            value: function (url, windowName, features) {
                if (isDebuggingLocationHooks || document.getElementById(containerId) || (url && url.includes(AD_URL_PARTIAL_PERMANENT))) {
                    ////console.warn(`[Gemini屏蔽] 成功拦截 ${targetWindow === window ? '当前窗口' : 'Iframe'} 的 window.open 调用:`, url);
                    // V26.39.10: 即使是 window.open，在调试模式下也同步中断，以防止其被 try/catch 绕过。
                    if (isDebuggingLocationHooks) {
                        throw new Error('GeminiAdBlocker: Synchronous Window.open Intercepted');
                    }
                    return null;
                }
                return originalOpen.apply(targetWindow, arguments);
            },
            configurable: true, writable: true
        });
        targetWindow.open.__is_gemini_hooked = true;
    }

    function enableWindowOpenHook() {
        if (isWindowOpenHooked) return;
        interceptWindowOpen(window);
        getTargetDocuments().forEach(doc => {
            try { interceptWindowOpen(doc.defaultView); } catch (e) { }
        });
        isWindowOpenHooked = true;
        ////console.log('[Gemini屏蔽] window.open 强化 Hook 已启动。');
    }

    function interceptWindowLocation() {

        function applyLocationHooks(targetWindow, scopeName) {
            try {
                const locationObj = targetWindow.location;
                const locationDescriptor = Object.getOwnPropertyDescriptor(Window.prototype, 'location') ||
                    Object.getOwnPropertyDescriptor(Document.prototype, 'location');

                if (locationDescriptor && locationDescriptor.set) {
                    const originalSetLocation = locationDescriptor.set;

                    Object.defineProperty(locationObj, 'href', {
                        set: function (url) {

                            if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                                ////console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截已知广告域名重定向: ${url}`);
                                // 即使不调试，遇到永久黑名单域名也直接中断
                                throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                            }

                            if (isDebuggingLocationHooks) {
                                // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                                ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.href 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                                throw new Error('GeminiAdBlocker: Synchronous Location Href Intercepted');
                            }

                            originalSetLocation.call(this, url);
                        },
                        get: locationDescriptor.get,
                        configurable: true, enumerable: true
                    });
                }

                const originalAssign = locationObj.assign;
                const originalReplace = locationObj.replace;

                function hookLocationMethod(originalMethod, methodName) {
                    locationObj[methodName] = function (url) {

                        if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截已知广告域名重定向 (Method ${methodName}): ${url}`);
                            throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                        }

                        if (isDebuggingLocationHooks) {
                            // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.${methodName} 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                            throw new Error('GeminiAdBlocker: Synchronous Location Method Intercepted');
                        }
                        originalMethod.call(this, url);
                    };
                }

                hookLocationMethod(originalAssign, 'assign');
                hookLocationMethod(originalReplace, 'replace');

                ////console.log(`[Gemini屏蔽] ${scopeName}.location 完整 Hook 已启用。`);
                return true;

            } catch (e) {
                ////console.log(`[Gemini屏蔽] 无法 Hook ${scopeName}.location (跨域或权限限制)。`);
                return false;
            }
        }

        // Hook Window.prototype.location setter (V26.39.10 Sync Update)
        try {
            const protoLocationDescriptor = Object.getOwnPropertyDescriptor(Window.prototype, 'location') ||
                Object.getOwnPropertyDescriptor(Document.prototype, 'location');

            if (protoLocationDescriptor && protoLocationDescriptor.set) {
                const originalProtoSetter = protoLocationDescriptor.set;

                Object.defineProperty(Window.prototype, 'location', {
                    get: protoLocationDescriptor.get,
                    set: function (url) {
                        if (url && url.includes(AD_URL_PARTIAL_PERMANENT)) {
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 Window.prototype.location 重定向: ${url}`);
                            throw new Error('GeminiAdBlocker: Known Ad Domain Location Intercepted');
                        }

                        if (isDebuggingLocationHooks) {
                            // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Window.location 赋值尝试重定向。URL: ${safeTruncate(url, 50)}`);
                            throw new Error('GeminiAdBlocker: Synchronous Window.location Intercepted');
                        }
                        originalProtoSetter.call(this, url);
                    },
                    configurable: true,
                    enumerable: true
                });
                ////console.log('[Gemini屏蔽] 🌟 Window.prototype.location Setter Hook 已启用。');
            }
        } catch (e) {
            ////console.error('[Gemini屏蔽] 顶级 Hook Window.prototype.location 失败:', e);
        }

        applyLocationHooks(window, 'window');

        if (window.parent !== window) {
            applyLocationHooks(window.parent, 'parent');
        }

        if (window.top !== window) {
            applyLocationHooks(window.top, 'top');
        }
    }

    // =================================================================
    // ⭐️ V26.39.10 Hook: 拦截程序化 Element.click() (A)
    // =================================================================
    function interceptElementClick() {



        try {
            const originalClick = Element.prototype.click;

            Element.prototype.click = function () {
                const element = this;
                let url = null;
                let isTargetLink = false;

                // 检查是否是链接元素，并且有可重定向的 URL
                if (element.tagName === 'A' || element.tagName === 'AREA') {
                    url = element.href || element.getAttribute('href');
                    isTargetLink = true;
                }

                // 如果不是链接元素，但有内联的重定向事件 (例如 onclick="location.href='...'")
                if (!isTargetLink) {
                    const inlineClick = element.getAttribute('onclick') ||
                        element.getAttribute('onmousedown') ||
                        element.getAttribute('onmouseup');
                    if (inlineClick && /(location|href|window)\./i.test(inlineClick)) {
                        // 无法获取确切 URL，但行为可疑，先标记为可疑链接
                        url = `[内联事件可疑] ${inlineClick}`;
                        isTargetLink = true;
                    }
                }

                if (isTargetLink && url && url !== '#' && isDebuggingLocationHooks) {
                    // 强制拦截已知广告域名
                    if (url.includes(AD_URL_PARTIAL_PERMANENT)) {
                        ////console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 Element.click() 已知广告域名重定向: ${url}`);
                        throw new Error('GeminiAdBlocker: Known Ad Domain Element Click Intercepted');
                    }

                    // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                    ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Element.click() 尝试重定向。Tag: ${element.tagName} | URL: ${safeTruncate(url, 50)}`);
                    throw new Error('GeminiAdBlocker: Synchronous Element Click Intercepted');
                }

                originalClick.apply(this, arguments);
            };
            ////console.log(`[Gemini屏蔽] 🌟 Element.prototype.click Hook 已启用 (拦截程序化点击)。`);
        } catch (e) {
            ////console.error('[Gemini屏蔽] Element.prototype.click Hook 失败:', e);
        }
    }

    // =================================================================
    // ⭐️ V26.39.10 Hook: 拦截 PostMessage (B)
    // =================================================================
    function interceptPostMessage() {



        try {
            const originalPostMessage = window.postMessage;

            window.postMessage = function (message, targetOrigin, transfer) {

                if (isDebuggingLocationHooks) {
                    // 尝试将消息内容转为字符串进行检查
                    let messageString = '';
                    if (typeof message === 'string') {
                        messageString = message;
                    } else if (typeof message === 'object' && message !== null) {
                        try {
                            messageString = JSON.stringify(message);
                        } catch (e) {
                            messageString = '[无法序列化对象]';
                        }
                    }

                    // 检查消息是否包含明显的重定向指令
                    const suspiciousPatterns = /(location|href|navigate|redirect)\s*[=:]\s*['"]?http/i;
                    if (suspiciousPatterns.test(messageString)) {

                        // 强制拦截已知广告域名
                        if (messageString.includes(AD_URL_PARTIAL_PERMANENT)) {
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🎯 强制拦截 postMessage 已知广告域名重定向: ${safeTruncate(messageString, 50)}`);
                            throw new Error('GeminiAdBlocker: Known Ad Domain PostMessage Intercepted');
                        }

                        // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                        ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：postMessage 尝试跨框架重定向。Message: ${safeTruncate(messageString, 50)}`);
                        throw new Error('GeminiAdBlocker: Synchronous PostMessage Intercepted');
                    }
                }

                originalPostMessage.apply(this, arguments);
            };
            ////console.log(`[Gemini屏蔽] 🌟 window.postMessage Hook 已启用 (拦截跨框架重定向)。`);
        } catch (e) {
            ////console.error('[Gemini屏蔽] window.postMessage Hook 失败:', e);
        }
    }


    // =================================================================
    // ⭐️ V26.39.7 Hook: History API (pushState/replaceState) (V26.39.10 Sync Update)
    // =================================================================
    function interceptHistoryAPI(targetWindow, scopeName) {
        try {
            const historyObj = targetWindow.history;
            if (!historyObj) return;

            const originalPushState = historyObj.pushState;
            const originalReplaceState = historyObj.replaceState;

            function hookHistoryMethod(originalMethod, methodName) {
                historyObj[methodName] = function (state, title, url) {

                    if (isDebuggingLocationHooks && url) {
                        // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                        ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：${scopeName}.history.${methodName} 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                        throw new Error('GeminiAdBlocker: Synchronous History API Intercepted'); // Synchronous halt
                    }

                    originalMethod.apply(this, arguments);
                };
            }

            hookHistoryMethod(originalPushState, 'pushState');
            hookHistoryMethod(originalReplaceState, 'replaceState');

            ////console.log(`[Gemini屏蔽] ${scopeName}.history 完整 Hook 已启用 (V26.39.7)。`);
        } catch (e) {
            ////console.log(`[Gemini屏蔽] 无法 Hook ${scopeName}.history (权限限制)。`);
        }
    }

    // =================================================================
    // ⭐️ V26.39.7 Hook: Form 表单提交 (V26.39.10 Sync Update)
    // =================================================================
    function interceptFormSubmission() {



        try {
            // 确保 HTMLFormElement 存在
            if (typeof HTMLFormElement === 'undefined' || !HTMLFormElement.prototype.submit) {
                ////console.log('[Gemini屏蔽] HTMLFormElement.prototype.submit 不可用。');
                return;
            }

            const originalSubmit = HTMLFormElement.prototype.submit;

            HTMLFormElement.prototype.submit = function () {
                const url = this.action || '[无 Action]';

                // 只有在调试开启、有明确 Action 且目标不是当前页自身时才拦截
                if (isDebuggingLocationHooks && url && url !== '[无 Action]' && url !== window.location.href && url !== '#') {

                    // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                    ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 同步中断：Form Submission 尝试重定向。URL: ${safeTruncate(url, 50)}`);
                    throw new Error('GeminiAdBlocker: Synchronous Form Submit Intercepted'); // Synchronous halt
                }

                originalSubmit.call(this);
            };
            ////console.log('[Gemini屏蔽] 🌟 Form Submission Hook 已启用 (V26.39.7)。');
        } catch (e) {
            ////console.error('[Gemini屏蔽] Form Submission Hook 失败:', e);
        }
    }

    // =================================================================
    // ⭐️ V26.39.8 Hook: document.write/writeln 终极拦截 (V26.39.10 Sync Update)
    // =================================================================
    function interceptDocumentWrite() {


        try {
            if (typeof Document === 'undefined' || !Document.prototype.write) {
                ////console.log('[Gemini屏蔽] Document.prototype.write 不可用。');
                return;
            }

            const originalWrite = Document.prototype.write;
            const originalWriteln = Document.prototype.writeln;

            // 用于检测重定向代码的正则模式
            const redirectPatterns = [
                /location\.(href|replace|assign)\s*=\s*['"](.+?)['"]/i, // JS location 赋值
                /<meta\s+[^>]*http-equiv\s*=\s*['"]refresh['"][^>]*content\s*=\s*['"]\s*\d+\s*;\s*url\s*=\s*(.+?)['"]/i // Meta Refresh
            ];

            function hookedWrite(content) {
                // 确保只处理字符串内容
                if (typeof content === 'string') {
                    let isRedirectAttempt = false;
                    let redirectUrl = 'Unknown';

                    for (const pattern of redirectPatterns) {
                        const match = content.match(pattern);
                        if (match) {
                            isRedirectAttempt = true;
                            redirectUrl = match[match.length - 1]; // 捕获到的 URL
                            break;
                        }
                    }

                    if (isRedirectAttempt) {

                        // 强制拦截已知广告域名
                        if (redirectUrl.includes(AD_URL_PARTIAL_PERMANENT)) {
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 终极拦截：document.write 尝试注入已知广告域名。`);
                            throw new Error('GeminiAdBlocker: Known Ad Domain Document Write Intercepted');
                        }

                        if (isDebuggingLocationHooks) {
                            // ⭐️ V26.39.10 核心：同步中断执行，阻止代码继续
                            ////console.error(`[Gemini屏蔽 V26.39.10] 🚨 终极同步中断：document.write 尝试注入重定向代码。URL: ${safeTruncate(redirectUrl, 50)}`);
                            throw new Error('GeminiAdBlocker: Synchronous Document Write Intercepted');
                        }

                        // 即使不调试，如果检测到重定向代码，也阻止写入，以防万一
                        return;
                    }

                    // 如果不是重定向或调试关闭，则执行原始方法
                    originalWrite.call(this, content);
                } else {
                    originalWrite.apply(this, arguments);
                }
            }

            // 覆盖 write/writeln
            Document.prototype.write = function () {
                hookedWrite.apply(this, arguments);
            };

            // 确保 writeln 也被 Hook
            Document.prototype.writeln = function () {
                if (arguments.length > 0 && typeof arguments[0] === 'string') {
                    arguments[0] += '\n'; // 模拟 writeln 的换行行为
                }
                hookedWrite.apply(this, arguments);
            };

            ////console.log('[Gemini屏蔽 V26.39.10] 🌟 document.write/writeln Hook 已启用。');
        } catch (e) {
            ////console.error('[Gemini屏蔽 V26.39.10] document.write Hook 失败:', e);
        }
    }




    // =================================================================
    // DOM 遍历/观察/拦截函数 (其余保持不变)
    // =================================================================

    function blockMetaRefresh(doc) {
        const head = doc.head || doc.getElementsByTagName('head')[0];
        if (!head) return;

        const checkAndRemoveMeta = (node) => {
            if (node.tagName === 'META' && node.hasAttribute('http-equiv')) {
                const httpEquiv = node.getAttribute('http-equiv').toLowerCase();
                const content = node.getAttribute('content');

                if (httpEquiv === 'refresh' && content) {
                    const urlMatch = content.match(/url=(.*)/i);
                    const redirectUrl = urlMatch ? urlMatch[1] : '';

                    if (redirectUrl.includes(AD_URL_PARTIAL_PERMANENT)) {
                        ////console.warn(`[Gemini屏蔽 V26.24] 🚨 终极拦截：发现并移除了 Meta Refresh 广告重定向标签: ${redirectUrl.substring(0, 50)}...`);
                        node.remove();
                        return true;
                    }
                }
            }
            return false;
        };

        const metaTags = head.querySelectorAll('meta');
        metaTags.forEach(checkAndRemoveMeta);

        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            checkAndRemoveMeta(node);
                        }
                    });
                }
            }
        });

        observer.observe(head, { childList: true, subtree: true });
        // V26.37 修复日志
        const docName = (window === window.top && doc === document) ? '主页' : 'Iframe/同源';
        ////console.log(`[Gemini屏蔽] Meta Refresh 监控已对 ${docName} 启用。`);
    }

    function interceptIframeWindowTop(iframe) {
        try {
            const targetWindow = iframe.contentWindow;
            if (!targetWindow || targetWindow.top !== window) return;

            interceptWindowLocation(targetWindow, 'Iframe');
            interceptWindowOpen(targetWindow);
            // V26.39.7: Iframe 内部也 Hook History 和 Form
            interceptHistoryAPI(targetWindow, 'Iframe');
            interceptFormSubmission();
            // V26.39.8: Iframe 内部也 Hook Document Write
            interceptDocumentWrite();
            // V26.39.10: Iframe 内部也 Hook Element Click 和 PostMessage
            interceptElementClick();
            interceptPostMessage();

        } catch (e) {
            // 跨域 Iframe 无法访问其 contentWindow/contentDocument
        }
    }

    function getTargetDocuments() {
        const documents = [document];

        // 只有在顶级窗口运行时才尝试检测同源 Iframe
        if (window === window.top) {
            const iframes = document.querySelectorAll('iframe');

            iframes.forEach(iframe => {
                applyIframeSandbox(iframe);
                interceptIframeWindowTop(iframe);

                if (iframe.contentDocument) {
                    try {
                        const iframeDocument = iframe.contentDocument;
                        // 确保 Iframe 内容已加载且 DOM 可用
                        if (iframeDocument && iframeDocument.body) {
                            documents.push(iframeDocument);
                        }
                    } catch (e) {
                        ////console.warn('[Gemini屏蔽] 无法访问跨域 Iframe:', iframe.src);
                    }
                }
            });
        }

        return documents;
    }

    function observeDynamicIframes() {
        // 仅在顶级窗口监控动态 Iframe
        if (window !== window.top) return;

        const observer = new MutationObserver(mutationsList => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.tagName === 'IFRAME') {
                            const newIframe = node;

                            applyIframeSandbox(newIframe);
                            interceptIframeWindowTop(newIframe);

                            const handleIframeLoad = () => {
                                try {
                                    const iframeDoc = newIframe.contentDocument;
                                    if (iframeDoc && iframeDoc.body) {
                                        loadAndRemoveSavedElements(iframeDoc);
                                        interceptWindowOpen(iframeDoc.defaultView);
                                        // V26.39.7/8/10: 动态 Iframe 也要 Hook 所有 API
                                        interceptHistoryAPI(iframeDoc.defaultView, 'Dynamic Iframe');
                                        interceptFormSubmission();
                                        interceptDocumentWrite();
                                        interceptElementClick();
                                        interceptPostMessage();

                                        blockMetaRefresh(iframeDoc);

                                        applyClickDebugFilter(iframeDoc);
                                        ////console.log(`[MutationObserver] 动态同源 Iframe 初始化成功: ${newIframe.src}`);
                                    }
                                } catch (e) {
                                    ////console.warn('[MutationObserver] 无法访问跨域或加载失败的 Iframe。');
                                }
                                newIframe.removeEventListener('load', handleIframeLoad);
                            };

                            newIframe.addEventListener('load', handleIframeLoad);

                            if (newIframe.contentDocument) {
                                handleIframeLoad();
                            }
                        }
                    });
                }
            }
        });

        if (document.body) {
            observer.observe(document.body, { childList: true, subtree: true });
            ////console.log('[MutationObserver] 已启动，开始监听动态 Iframe。');
        }
    }


    /**
* 假设 element 是已经识别出的透明度小于 0.5 的元素
* @param {HTMLElement} element - 目标元素
*/
    window.removeListenersAndElement = function removeListenersAndElement(element) {
        if (!element || !element.parentNode) {
            ////console.error("元素无效或没有父节点，无法执行移除操作。");
            return;
        }

        // 1. 移除事件监听器 (通过克隆元素实现)
        // 克隆元素，设置为深层克隆 (true)，确保子节点也被复制
        const elementClone = element.cloneNode(true);

        // 替换原始元素：
        // elementClone 替换了 DOM 中的 element 的位置。
        // 这样做会清除所有通过 addEventListener 附加在 element 上的监听器。
        // element 现在仍在内存中，但已脱离 DOM 树。
        element.parentNode.replaceChild(elementClone, element);

        // 2. 删除元素
        // 移除 DOM 中当前存在的、不含监听器的克隆元素
        if (elementClone.parentNode) {
            elementClone.parentNode.removeChild(elementClone);
            ////console.log('成功移除元素:', elementClone.tagName, '及其所有事件监听。');
        }

        // 注意：原始的 'element' 变量现在引用的是脱离 DOM 树的那个带监听器的旧元素，
        // 它应该会在 JavaScript 垃圾回收机制下被清理掉。
    }

    // 示例用法（假设你已经找到了目标元素）：
    /*
    const lowOpacityElement = document.getElementById('my-transparent-div'); 
    if (lowOpacityElement) {
        removeListenersAndElement(lowOpacityElement);
    }
    */


    // =================================================================
    // 核心函数：渲染和事件绑定 (V26.39.6 更新 - 保持不变)
    // =================================================================

    function getIframeData() {
        // V26.38 新增：获取 Iframe 列表数据
        if (window !== window.top) return [];

        return Array.from(document.querySelectorAll('iframe')).map(iframe => {
            let src = iframe.src || iframe.getAttribute('src') || '[未设置 src]';
            let isCrossDomain = false;

            try {
                // 尝试获取 URL 对象判断是否跨域
                const iframeUrl = new URL(src, window.location.href);
                if (iframeUrl.origin !== window.location.origin) {
                    isCrossDomain = true;
                }
                // 此外，尝试访问 contentDocument 会在跨域时抛出错误
                if (iframe.contentDocument === null) {
                    isCrossDomain = true;
                }
            } catch (e) {
                // URL 解析或 contentDocument 访问失败，几乎肯定是跨域
                isCrossDomain = true;
            }

            const xpath = getElementXPath(iframe);

            return {
                src: src,
                xpath: xpath,
                isCrossDomain: isCrossDomain,
                element: iframe
            };
        }).filter(item => item.xpath); // 确保只有能获取 XPath 的才被列出
    }

    function renderIframeList(iframes) {
        if (iframes.length === 0) {
            return '<li style="padding: 10px; text-align: center; color: #888;">当前页面未检测到 Iframe 元素。</li>';
        }
        return iframes.map((item) => {
            const status = item.isCrossDomain ? '跨域' : '同源';
            const color = item.isCrossDomain ? '#dc3545' : '#17a2b8'; // Red for cross, blue for same
            return `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px solid #eee; transition: background 0.2s;" 
                    data-xpath="${item.xpath}"
                >
                    <div class="iframe-info" style="cursor: pointer; flex-grow: 1;" title="点击高亮">
                        <span style="color: ${color}; margin-right: 5px; font-weight: bold;">[${status} Iframe]</span>
                        <span style="color: #666; font-size: 12px; word-break: break-all;">
                            Src: ${safeTruncate(item.src, 50)}
                        </span>
                        <div style="font-size: 10px; color: #aaa; word-break: break-all;" title="${item.xpath}">
                            XPath: ${safeTruncate(item.xpath, 70)}
                        </div>
                    </div>
                    
                    <button class="remove-iframe-btn" style="
                        background: #dc3545; color: white; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${item.xpath}">移除并保存</button>
                </li>
            `;
        }).join('');
    }


    /** // 修改记录管理
     * 修改持久化记录
     * @param {string} storageKey - localStorage 的键名 (ELEMENT_REMOVAL_KEY, CSS_REMOVAL_KEY等)
     * @param {string} oldVal - 旧的记录值
     * @param {string} newVal - 用户输入的新值
     */
    function updateRemovalChoice(storageKey, oldVal, newVal) {
        if (!newVal || newVal.trim() === "" || oldVal === newVal) return false;
        try {
            let removals = JSON.parse(localStorage.getItem(storageKey) || '[]');
            const index = removals.indexOf(oldVal);
            if (index > -1) {
                removals[index] = newVal.trim();
                localStorage.setItem(storageKey, JSON.stringify(removals));
                ////console.log(`[Gemini屏蔽] 记录已更新: ${oldVal} -> ${newVal}`);
                return true;
            }
        } catch (e) {
            ////console.error('[持久化] 修改失败:', e);
        }
        return false;
    }

    /** // 修改记录管理 */
    window.showEditModal = function showEditModal(oldValue, storageKey) {

        if (document.getElementById('gemini-edit-modal-overlay')) {
            return;
        } // 避免重复创建修改框

        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'gemini-edit-modal-overlay';
        modalOverlay.classList.add('notranslate')
        // 复用已有的模态框样式逻辑
        modalOverlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0, 0, 0, 0.7); z-index: 114120; 
        display: flex; justify-content: center; align-items: center;
        backdrop-filter: blur(2px);
    `;

        const modalBox = document.createElement('div');
        modalBox.style.cssText = `
        color: black;
        background: white; border-radius: 10px; padding: 20px; 
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3); width: 90%; max-width: 400px;
    `;

        modalBox.innerHTML = `
        <h3 style="margin-top: 0; color: #2196F3; border-bottom: 2px solid #eee; padding-bottom: 10px;">📝 修改屏蔽规则</h3>
        <p style="font-size: 12px; color: #666;">您正在修改当前的 CSS 选择器或路径：共匹配 <strong id='editLength'></strong> 个元素(当前页面)；
</p>
        <textarea id="gemini-edit-input" style="width: 100%; height: 80px; padding: 8px; border: 1px solid #ccc; border-radius: 5px; font-family: monospace; font-size: 13px; box-sizing: border-box; resize: vertical;">${oldValue}</textarea>
        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 15px;">
            <button id="gemini-edit-cancel" style="padding: 8px 15px; border-radius: 5px; border: 1px solid #ccc; background: #fff; cursor: pointer;">取消</button>
            <button id="gemini-edit-save" style="padding: 8px 15px; border-radius: 5px; border: none; background: #4CAF50; color: white; cursor: pointer;">提交修改</button>
        </div>
    `;

        modalOverlay.appendChild(modalBox);
        document.body.appendChild(modalOverlay);

        // 绑定保存逻辑
        modalBox.querySelector('#gemini-edit-save').onclick = () => {


            if (updateRemovalChoice(storageKey, oldValue, newValue)) {
                modalOverlay.remove();
                // 提示并刷新页面应用新规则
                confirmndExecuteFC("修改成功！是否立即刷新页面应用新规则？", () => { location.reload() })
            } else {
                confirmndExecuteFC("未修改...")

            }


        };

        modalBox.querySelector('#gemini-edit-cancel').onclick = () => modalOverlay.remove();
    }

    // Pin按钮
    window.toggleGeminiPin = function () {
        const pinBtn = document.getElementById('gemini-pin-btn');
        if (!pinBtn) return;

        // 1. 获取当前状态（如果不存在则默认为 'unpinned'）
        const currentState = localStorage.getItem('gemini-pin') === 'pinned' ? 'pinned' : 'unpinned';

        // 2. 切换逻辑
        if (currentState === 'unpinned') {
            // 切换到已固定状态
            pinBtn.textContent = '📍'; // 修改标签内容
            localStorage.setItem('gemini-pin', 'pinned'); // 更新本地存储
        } else {
            // 切换到未固定状态
            pinBtn.textContent = '📌';
            localStorage.setItem('gemini-pin', 'unpinned');
        }
    }

    window.renderFloatWindow = function renderFloatWindow(targetDocs) {


        /*
        新增
        */

        if (document.getElementById(containerId)) return;

        // --- 1. 读取持久化状态 (修改点) ---
        // 从 localStorage 读取，如果没设置过默认为 'true' (固定)
        let isPinned = localStorage.getItem(WINDOW_PINNED_KEY) !== 'false';

        const container = document.createElement('div');
        container.id = containerId;
        // 如果不是固定状态，初始化时就加上 'not-pinned' 类
        container.className = 'notranslate' + (isPinned ? '' : ' not-pinned');

        const windowBox = document.createElement('div');
        windowBox.id = windowId;

        if (!document.body) {
            ////console.error('[Gemini屏蔽] 无法渲染浮窗：document.body 不可用。');
            return;
        }

        const zeroOpacityElements = [];
        targetDocs.forEach(doc => {
            const allElements = doc.querySelectorAll('*');
            allElements.forEach((element, index) => {
                if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE' || element.tagName === 'NOSCRIPT' || element.tagName === 'TITLE' || !element.parentNode || element.tagName === 'IFRAME') {
                    return; // 忽略 Iframe 自身，它有单独的列表
                }

                try {
                    const computedStyle = element.ownerDocument.defaultView.getComputedStyle(element);
                    const opacityValue = parseFloat(computedStyle.opacity);

                    if (opacityValue < 0.3) {
                        const rect = element.getBoundingClientRect();
                        const xpath = getElementXPath(element);

                        if (xpath) {
                            zeroOpacityElements.push({
                                index: index,
                                tagName: element.tagName,
                                className: element.className,
                                id: element.id,
                                width: rect.width.toFixed(0),
                                height: rect.height.toFixed(0),
                                element: element,
                                xpath: xpath,
                                document: doc,
                            });
                        }
                    }
                } catch (e) { /* 忽略跨域错误 */ }
            });
        });

        const allIframes = getIframeData();

        const existingContainer = document.getElementById(containerId);
        if (existingContainer) existingContainer.remove();

        const mainContainer = document.createElement('div');
        mainContainer.className = 'notranslate';
        mainContainer.id = containerId;

        // 【新增】读取并还原上一次保存的位置
        try {
            const savedPos = localStorage.getItem('gemini_window_position');
            if (savedPos) {
                const { x, y } = JSON.parse(savedPos);
                mainContainer.style.transition = 'none'; // 1. 禁用过渡
                mainContainer.style.transform = `translate3d(${x}px, ${y}px, 0)`; // 2. 注入位置

                // 3. 异步恢复 transition
                requestAnimationFrame(() => {
                    mainContainer.style.transition = 'transform 0.2s ease-out';
                });
            }
        } catch (e) {
            console.warn('[Gemini] 读取浮窗位置失败:', e);
        }

        const windowDiv = document.createElement('div');
        windowDiv.className = 'notranslate'
        windowDiv.id = windowId;



        function renderBlacklist(blacklist) {
            if (blacklist.length === 0) {
                return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无黑名单记录。</li>';
            }
            return blacklist.map((pageKey) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #dc3545; font-weight: bold;" title="${pageKey}">
                        ${safeTruncate(pageKey, 50)}
                    </span>
                    <button class="remove-blacklist-btn" style="
                        background: #1976D2; color: white; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-page-key="${pageKey}">取消黑名单</button>
                </li>
            `).join('');
        }

        function renderSavedRemovalsList(removals) {
            if (removals.length === 0) {
                return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无元素移除记录。</li>';
            }
            return removals.map((xpath) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span title="${xpath}" style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #666;">
                        ${safeTruncate(xpath, 40)}
                    </span>
                    <button class="undo-btn" style="
                        background: #FFB300; color: #333; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${xpath}">取消移除</button>
                </li>
            `).join('');
        }

        // V26.39 NEW: Iframe 移除记录渲染
        function renderSavedIframeRemovalsList(removals) {
            if (removals.length === 0) {
                return '<li style="padding: 10px; text-align: center; color: #888; background: #fff;">暂无 Iframe 移除记录。</li>';
            }
            return removals.map((xpath) => `
                <li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px dashed #ddd; background: #fff;">
                    <span title="${xpath}" style="flex-grow: 1; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: #1976D2; font-weight: bold;">
                        [IFRAME] ${safeTruncate(xpath, 30)}
                    </span>
                    <button class="undo-iframe-btn" style="
                        background: #FFB300; color: #333; border: none; padding: 2px 6px; 
                        margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
                    " data-xpath="${xpath}">取消移除</button>
                </li>
            `).join('');
        }

        // V26.37 修复 Iframe 识别
        const isCurrentInTopWindow = window === window.top;


        // 重构

        function renderZeroOpacityList(elements) {
            // 1. 基础空值判断
            if (!elements || elements.length === 0) {
                return '<li style="padding: 10px; text-align: center; color: #888;">当前页面没有透明元素。</li>';
            }

            return elements.map(item => {
                // 2. 确保 item 存在，防止 map 报错
                if (!item) return '';

                // 3. 确定文档标签 (增加 ownerDocument 兼容性处理)
                const itemDoc = item.document || item.ownerDocument || {};
                let docLabel = '未知';

                if (typeof isCurrentInTopWindow !== 'undefined') {
                    docLabel = isCurrentInTopWindow ?
                        (itemDoc === document ? '主页' : 'Iframe') :
                        'Iframe (自身)';
                }

                // 4. 安全获取类名
                let className = 'N/A';
                if (item.className && typeof item.className === 'string') {
                    className = item.className.split(/\s+/)[0];
                } else if (item.getAttribute) {
                    className = (item.getAttribute('class') || '').split(/\s+/)[0];
                }

                // 5. 提取文件名用于标识
                const docUrlTail = itemDoc.URL ? itemDoc.URL.split('/').pop() : 'unknown';

                return `
<li style="display: flex; justify-content: space-between; align-items: center; padding: 6px 8px; border-bottom: 1px solid #eee; transition: background 0.2s;"
    data-xpath="${item.xpath || ''}" data-doc-url="${docUrlTail}">
    <div class="element-info" style="cursor: pointer; flex-grow: 1;" title="点击高亮">
        <span style="color: #555; font-weight: bold;">[${docLabel}]</span>
        <span style="color: #6a0dad;">${item.tagName || 'ELEMENT'}</span>
        <span style="color: #1976D2;">#${item.id || className || 'N/A'}</span>
        <span style="color: #333; margin-left: 10px;">${item.width || 0}x${item.height || 0}px</span>
    </div>
    <button class="remove-btn" style="
                background: #dc3545; color: white; border: none; padding: 2px 6px; 
                margin-left: 10px; cursor: pointer; border-radius: 3px; font-size: 11px;
            " data-xpath="${item.xpath || ''}">移除</button>
</li>`;
            }).join('');
        }



        let isBlacklisted = isCurrentPageBlacklisted();
        const totalSavedCount = getSavedRemovals().length + getIframeRemovals().length + getPageBlacklist().length + getSavedCssRemovals().length;

        windowDiv.innerHTML = `
<div id="gemini-header">
    <strong>⚡️ 元素调试与屏蔽工具</strong>
    <button id="gemini-pin-btn">📌</button>
    <span id="gemini-close-btn">&times;</span>
</div>

<div style="/* padding: 4px 5px; */font-size:xx-small;border-bottom: 1px solid #ccc;text-align: center;">

<!-- 新增标题 -->
<div class="small-tools-title">⚡️ 调试工具</div>
    <button id="blacklist-toggle"
        style="height:30px !important;padding:5px;font-size: xx-small !important;font-weight: normal;"
        class="${isBlacklisted ? 'closer' : ''}">
        ${isBlacklisted ? '🛡️ 当前为黑名单页 (启用严格沙箱)' : '➕ 标记为黑名单页 (启用严格沙箱)'}
    </button>

    <button id="selector-toggle" style="display: none;">
        启用 🖱️选择并屏蔽模式 (xPath)
    </button>

    <button id="selector-debug-click-toggle" onclick='window.startSelectorTool_Click()'>
        ⚓元素CSS选择器获取与调试
    </button>

    <div style="margin-bottom:2px; display: flex; gap: 2px;">
        <button id="element-debug-click-toggle" class='${isDebuggingElementClick ? ' greener' : 'open'}'>
            🛠️ 元素点击调试 (${isDebuggingElementClick ? '开' : '关'})
        </button>

        <button style="display: none;" id="debug-location-toggle" class='${isDebuggingLocationHooks ? ' greener'
                : 'open'}'>
            ⚙️ JS 重定向调试 (${isDebuggingLocationHooks ? '开' : '关'})
        </button>
    </div>

    <!-- 新增标题 -->
<div class="small-tools-title">🛠️ 常用小工具</div>

    <div class='smallTools'>
        <button id="showXPath" onclick="showXPathInputWindow()">
            ⌨️ 输入 XPath 屏蔽
        </button>

        <button id="manual-css-add" onclick="showCssInputWindow()">
            🎨 输入 CSS 选择器屏蔽
        </button>

        <button id="manual-xpath-add" onclick="window.showPageScriptsFloatWindow()">
            📟 查看页面上的脚本</button>

        <button id="manual-xpath-runCode" onclick="window.showJsManager()">
            🧑‍💻执行JS代码</button>

        <button id="manual-css-webdebug" onclick="window.initWebDebugger()">
            ⚙️ Web 存储调试器
        </button>

        <button id="crazyMode" onclick="window.crazyMode(this)">
            🔴狂野模式(OFF)
        </button>

        <button id="manual-css-switchClear">
            ▶️清理透明元素
        </button>
    </div>


</div>
<div style="display: flex; border-bottom: 1px solid #ccc;">
    <button id="tab-current" class="tab-btn" style="flex: 1; background: #fff; border-right: 1px solid #ccc;">
        当前透明元素 (${zeroOpacityElements.length})
    </button>
    <button id="tab-iframe" class="tab-btn" style="flex: 1; background: #f0f0f0;">
        当前 Iframe 记录 (${allIframes.length})
    </button>
    <button id="tab-saved" class="tab-btn" style="flex: 1; background: #f0f0f0; border-left: 1px solid #ccc;">
        记录管理 (${totalSavedCount})
    </button>
</div>


<div id="content-current">
    <div class="gemini-list-scroll-area">
        <ul id="gemini-element-list" style="list-style: none; padding: 0; margin: 0; max-height:130px; overflow:auto;">
            ${renderZeroOpacityList(zeroOpacityElements)}
        </ul>
    </div>
</div>

<div id="content-iframe" style="display: none;">
    <div class="gemini-list-scroll-area">
        <ul id="gemini-iframe-list" style="list-style: none; padding: 0; margin: 0;">
            ${renderIframeList(allIframes)}
        </ul>
    </div>
</div>

<div id="content-saved" style="display: none;">
    <div class="gemini-list-scroll-area">
        <ul id="gemini-saved-list" style="list-style: none; padding: 0; margin: 0;">
            <li
                style="padding: 10px; background: #ffe6e6; font-weight: bold; color: #dc3545; border-bottom: 1px solid #ffcccc;">
                🚫 黑名单页面记录 (${getPageBlacklist().length})</li>
            ${renderBlacklist(getPageBlacklist())}

            <li
                style="padding: 10px; background: #fafafa; font-weight: bold; color: #666; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
                🛡️ 元素永久移除记录 (${getSavedRemovals().length})</li>
            ${renderSavedRemovalsList(getSavedRemovals())}

            <li
                style="padding: 10px; background: #e6f7ff; font-weight: bold; color: #1976D2; border-top: 1px solid #cceeff; border-bottom: 1px solid #cceeff;">
                🖼️ Iframe 永久移除记录 (${getIframeRemovals().length})</li>
            ${renderSavedIframeRemovalsList(getIframeRemovals())}

            <li
                style="padding: 10px; background: #f3e5f5; font-weight: bold; color: #9c27b0; border-top: 1px solid #e1bee7; border-bottom: 1px solid #e1bee7;">
                🎨 CSS 选择器永久移除记录 (${getSavedCssRemovals().length})
                <button id="repair-css-data-btn"
                    style="background: #9c27b0; color: white; border: 1px solid #fff; padding: 2px 8px; cursor: pointer; border-radius: 3px; font-size: 11px; font-weight: normal;">🛠️
                    修复脏数据</button>
            </li>
            ${renderSavedCssRemovalsList(getSavedCssRemovals())}

        </ul>
    </div>
</div>

<div id="gemini-status-bar">
    请点击列表项高亮，或点击“移除并保存”按钮。
</div>

<div class="gemini-tip-text">
    🌟提示: 右上角📍及调试模式用完记得手动关闭；<a href='https://www.google.com/search?q=xpath+%E6%98%AF%E4%BB%80%E4%B9%88'
        target='_blank' style='color:blue !important;'>了解 xPath</a>；*CSS选择器屏蔽：使用 <a style="color:blue !important"
        href='https://www.google.com/search?q=mutationobserver+%E4%BB%8B%E7%BB%8D'>MutationObserver</a> & <a
        style="color:blue !important"
        href='https://www.google.com/search?q=querySelectorAll()+%E6%96%B9%E6%B3%95'>querySelectorAll()</a>
    方法遍历添加类.hiddenbylimbopro，不影响网页<a href='https://developer.chrome.com/docs/devtools/dom?hl=zh-cn' target='_blank'
        style='color:blue !important'>DOM</a> 结构。<a
        href='https://www.google.com/search?q=iframe+sandbox%E5%B1%9E%E6%80%A7' target='_blank'
        style='color:blue !important;'>了解沙箱化</a>；
</div>
`;

        document.body.appendChild(mainContainer);
        mainContainer.appendChild(windowDiv);


        // --- 4. 交互逻辑初始化 (保持不变) ---
        const list = document.getElementById('gemini-element-list');
        const iframeList = document.getElementById('gemini-iframe-list');
        const savedList = document.getElementById('gemini-saved-list');
        const statusBar = document.getElementById('gemini-status-bar');
        const selectorToggle = document.getElementById('selector-toggle');
        const blacklistToggle = document.getElementById('blacklist-toggle');

        const debugClickToggle = document.getElementById('element-debug-click-toggle');
        const debugLocationToggle = document.getElementById('debug-location-toggle');

        document.getElementById('gemini-close-btn').onclick = () => {
            mainContainer.remove();
            toggleSelectionMode(false);
            if (typeof body_build === 'function') { /* try { body_build('true'); } catch (e) {} */ }
        };


        // 3. 为 Pin 按钮绑定点击事件

        const pinBtn =
            document.getElementById('gemini-pin-btn');

        if (pinBtn) {

            pinBtn.onclick = toggleGeminiPin;

            if (
                localStorage.getItem('gemini-pin') === 'pinned'
            ) {

                pinBtn.textContent = '📍';

            }

        }

        // === 2. 绑定到你的 HTML 按钮上并切换文本 ===
        window.startSelectorTool_Click = function () {
            const btn = document.getElementById('selector-debug-click-toggle');

            if (!btn) {
                console.warn('[SelectorTool] 未找到按钮 #selector-debug-click-toggle');
                return;
            }

            const originalText = "⚓元素CSS选择器获取与调试"; // 你的原始按钮文字

            // 如果工具已经运行，则不重复执行逻辑
            if (document.getElementById('selector-tool-style-final')) {
                stopSelectorTool()
                localStorage.setItem(DEBUG_SELECTOR_CLICK_KEY, 'false');
                return;
            }

            if (localStorage.getItem('gemini_debug_element_click_mode') == 'true') { // 如果元素点击调试模式已经开了，则无法开启 css 选择器获取
                stopSelectorTool()
                localStorage.setItem(DEBUG_SELECTOR_CLICK_KEY, 'false');
                return;
            }

            // 1. 修改按钮文字，告知用户已开启
            btn.innerText = `❌退出${originalText}`;
            btn.classList.add('closer')
            statusBar.textContent = `${originalText} -> 模式已启用，请点击任意元素进行调试...`;
            window.showToast?.(`${originalText} -> 模式已启用，请点击任意元素进行调试...`);

            // 2. 启动工具
            startSelectorTool();

            localStorage.setItem(DEBUG_SELECTOR_CLICK_KEY, 'true')

            // 3. 增强：拦截工具内的“退出”按钮，点击时恢复按钮文字
            // 我们需要通过定时器或事件监听来捕获工具销毁的时机
            const checkExit = setInterval(() => {
                if (!document.getElementById('selector-tool-style-final')) {
                    localStorage.setItem(DEBUG_SELECTOR_CLICK_KEY, 'false')
                    btn.innerText = `启用 ${originalText}`;
                    btn.classList.remove('closer')
                    statusBar.textContent = `${originalText} -> 模式已关闭...`;
                    window.showToast?.(`${originalText} -> 模式已关闭...`);
                    clearInterval(checkExit);
                }
            }, 500); // 每半秒检查一次工具是否还存在
        }


        const tabCurrent = document.getElementById('tab-current');
        const tabIframe = document.getElementById('tab-iframe');
        const tabSaved = document.getElementById('tab-saved');

        const contentCurrent = document.getElementById('content-current');
        const contentIframe = document.getElementById('content-iframe');
        const contentSaved = document.getElementById('content-saved');

        function updateSavedListContent() {
            const totalSavedCount = getSavedRemovals().length + getIframeRemovals().length + getPageBlacklist().length + getSavedCssRemovals().length;
            const savedRemovalsHtml = renderSavedRemovalsList(getSavedRemovals());
            const iframeRemovalsHtml = renderSavedIframeRemovalsList(getIframeRemovals()); // V26.39 New
            const blacklistHtml = renderBlacklist(getPageBlacklist());
            const cssRemovalsHtml = renderSavedCssRemovalsList(getSavedCssRemovals()); // NEW

            const totalRemovals = getSavedRemovals().length + getIframeRemovals().length;
            const totalSaved = totalRemovals + getPageBlacklist().length;

            savedList.innerHTML = `
                 <li style="padding: 10px; background: #ffe6e6; font-weight: bold; color: #dc3545; border-bottom: 1px solid #ffcccc;">🚫 黑名单页面记录 (${getPageBlacklist().length})</li>
                 ${blacklistHtml}
                 <li style="padding: 10px; background: #fafafa; font-weight: bold; color: #666; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">🛡️ 元素永久移除记录 (${getSavedRemovals().length})</li>
                 ${savedRemovalsHtml}
                 <li style="padding: 10px; background: #e6f7ff; font-weight: bold; color: #1976D2; border-top: 1px solid #cceeff; border-bottom: 1px solid #cceeff;">🖼️ Iframe 永久移除记录 (${getIframeRemovals().length})</li>
                 ${iframeRemovalsHtml}
                 <li style="padding: 10px; background: #f3e5f5; font-weight: bold; color: #9c27b0; border-top: 1px solid #e1bee7; border-bottom: 1px solid #e1bee7;">
                     🎨 CSS 选择器永久移除记录 (${getSavedCssRemovals().length})
                                                  <button id="repair-css-data-btn" style="background: #9c27b0; color: white; border: 1px solid #fff; padding: 2px 8px; cursor: pointer; border-radius: 3px; font-size: 11px; font-weight: normal;">🛠️ 修复脏数据</button>
                 </li>
                 ${cssRemovalsHtml}
             `;
            // tabSaved.innerHTML = `记录管理 (${totalSaved})`;
            tabSaved.innerHTML = `记录管理 (${totalSavedCount})`;

        }


        // 【V27 NEW】取消 CSS 记录事件
        savedList.addEventListener('click', (e) => {
            // 原有 undo-btn、undo-iframe-btn、remove-blacklist-btn 保持不变

            if (e.target.classList.contains('undo-css-btn')) {
                const selector = e.target.getAttribute('data-selector');
                if (removeCssRemovalChoice(selector)) {
                    statusBar.textContent = `🚫 CSS 选择器移除记录已取消：${safeTruncate(selector, 30)}。请刷新页面恢复元素。`;
                    window.showToast?.(`🚫 CSS 选择器移除记录已取消：${safeTruncate(selector, 30)}。请刷新页面恢复元素。`);
                    updateSavedListContent();
                }
            }
        });


        function switchTab(currentTab) {
            // Reset all tabs/content
            [tabCurrent, tabIframe, tabSaved].forEach(btn => btn.style.background = '#f0f0f0');
            [contentCurrent, contentIframe, contentSaved].forEach(cont => cont.style.display = 'none');

            if (currentTab === 'current') {
                tabCurrent.style.background = '#fff';
                contentCurrent.style.display = 'block';
            } else if (currentTab === 'iframe') {
                tabIframe.style.background = '#fff';
                contentIframe.style.display = 'block';
            } else { // saved
                tabSaved.style.background = '#fff';
                contentSaved.style.display = 'block';
                updateSavedListContent();
            }
        }


        tabCurrent.onclick = () => switchTab('current');
        tabIframe.onclick = () => switchTab('iframe');
        tabSaved.onclick = () => switchTab('saved');
        // Initial tab state:
        switchTab('current');


        blacklistToggle.onclick = () => {
            const shouldAdd = !isBlacklisted;
            if (togglePageBlacklist(shouldAdd)) {
                statusBar.textContent = shouldAdd
                    ? '🛡️ 已标记当前页面为黑名单。请刷新页面使**严格沙箱**策略生效。'
                    : '✅ 已取消标记。请刷新页面以恢复**默认不沙箱**策略。';
            } else {
                statusBar.textContent = shouldAdd
                    ? '⚠️ 标记失败：当前页面已在黑名单中。'
                    : '⚠️ 取消标记失败：当前页面不在黑名单中。';
            }

            isBlacklisted = isCurrentPageBlacklisted();
            blacklistToggle.className = isBlacklisted ? 'closer' : '';
            blacklistToggle.textContent = isBlacklisted ? '🛡️ 当前为黑名单页 (启用严格沙箱)' : '➕ 标记为黑名单页 (启用严格沙箱)';
        };

        let isSelectionMode = false;
        let currentHoverElement = null;
        let lastHighlightedElement = null;

        const handleSelectionClick = (e) => {
            const target = e.target;
            if (isSelectionMode && target === selectorToggle) {
                e.stopPropagation();
                e.preventDefault();
                toggleSelectionMode(false);
                return;
            }


            // 检查事件是否发生在任一容器内部
            // 如果 target.closest 找到匹配元素，则条件为真
            if (target.closest(`#${containerId}`) || target.closest('[id*="script-viewer"],[class*="confirm]') || target.closest('#confirmMask')) {
                // 事件发生在受保护的容器内部
                e.stopPropagation(); // 阻止其冒泡到父元素
                return;              // 退出函数，不执行后续的阻止默认行为
            }

            e.preventDefault();
            e.stopPropagation();

            if (target.tagName === 'HTML' || target.tagName === 'BODY') {
                statusBar.textContent = "不能屏蔽整个页面，请选择具体元素。";
                window.showToast?.("不能屏蔽整个页面，请选择具体元素。");
                toggleSelectionMode(false);
                return;
            }

            const xpath = getElementXPath(target);
            if (xpath) {
                // 使用普通元素移除记录
                saveRemovalChoice(xpath);
            } else {
                statusBar.textContent = "无法获取该元素的唯一路径，屏蔽失败。";
                window.showToast?.("无法获取该元素的唯一路径，屏蔽失败。");
                toggleSelectionMode(false);
                return;
            }

            target.remove();

            statusBar.textContent = `🎉 已永久屏蔽元素: ${target.tagName}。请刷新页面查看效果。`;
            window.showToast?.(`🎉 已永久屏蔽元素: ${target.tagName}。请刷新页面查看效果。`);
            updateSavedListContent();

            toggleSelectionMode(false);
        };

        const handleSelectionMouseMove = (e) => {
            const target = e.target;
            if (target.closest(`#${containerId}`) || target.tagName === 'HTML' || target.tagName === 'BODY') {
                if (currentHoverElement) {
                    currentHoverElement.style.outline = '';
                    currentHoverElement = null;
                }
                return;
            }

            if (currentHoverElement && currentHoverElement !== target) {
                currentHoverElement.style.outline = '';
            }

            if (currentHoverElement !== target) {
                currentHoverElement = target;
                currentHoverElement.style.outline = '2px dashed orange';
            }
        };


        function toggleSelectionMode(forceState) { // 🖱️ 启用选择并屏蔽模式 (xPath)
            if (localStorage.getItem('gemini_debug_element_click_mode') == 'true' || localStorage.getItem('gemini_debug_preciseSelector_click_mode') == 'true') { // 元素调试模式跟选择并屏蔽模式只能开一个
                return;
            }

            isSelectionMode = (forceState !== undefined) ? forceState : !isSelectionMode;
            targetDocs.forEach(doc => {
                if (isSelectionMode) {
                    doc.addEventListener('click', handleSelectionClick, true);
                    doc.addEventListener('mousemove', handleSelectionMouseMove);
                } else {
                    doc.removeEventListener('click', handleSelectionClick, true);
                    doc.removeEventListener('mousemove', handleSelectionMouseMove);
                }
            });

            if (isSelectionMode) {
                selectorToggle.textContent = '❌ 退出屏蔽模式';
                selectorToggle.classList.add('closer')
                statusBar.textContent = '🖱️ 选择模式已启用：请点击需要屏蔽的元素。';
                mainContainer.style.cursor = 'default';

                if (localStorage.getItem('gemini_debug_element_click_mode') == 'true') { // 如果元素点击调试模式开启，必须关掉
                    document.getElementById('element-debug-click-toggle').click()
                }


            } else {
                if (currentHoverElement) {
                    currentHoverElement.style.outline = '';
                    currentHoverElement = null;
                }
                selectorToggle.textContent = '🖱️启用选择并屏蔽模式 (xPath)';
                selectorToggle.classList.remove('closer')
                statusBar.textContent = '选择模式已禁用。';
            }
        }

        selectorToggle.onclick = () => toggleSelectionMode();


        debugClickToggle.onclick = () => { //元素点击与调试
            if (localStorage.getItem('gemini_debug_preciseSelector_click_mode') == 'true') {  // 如果元素CSS选择器获取与调试打开则不能打开元素点击调试
                return;
            }

            isDebuggingElementClick = !isDebuggingElementClick;
            localStorage.setItem('gemini_debug_element_click_mode', isDebuggingElementClick ? 'true' : 'false');
            // V26.39.3 NEW: 处理用户覆盖逻辑
            const isHostInDebugList = DEBUG_WEBLIST.some(domain => getCurrentHost().includes(domain));
            if (isHostInDebugList) {
                if (isDebuggingElementClick) {
                    // 如果在调试域名列表内，且用户手动开启，则移除覆盖记录
                    toggleDebugOverride(false);
                } else {
                    // 如果在调试域名列表内，且用户手动关闭，则添加覆盖记录
                    toggleDebugOverride(true);
                }
            }

            // 更新 UI 和状态栏
            if (isDebuggingElementClick) {
                debugClickToggle.textContent = '🛠️ 元素点击调试 (开)';
                debugClickToggle.classList.add('greener')
                statusBar.textContent = '✅ 元素点击与调试已开启，**立即生效**。请点击可疑按钮。';
                window.showToast?.('✅ 元素点击与调试已开启，**立即生效**。请点击可疑按钮。');
            } else {
                debugClickToggle.classList.remove('greener')
                debugClickToggle.textContent = '🛠️ 元素点击调试 (关)';
                statusBar.textContent = '❌ 元素点击与调试已关闭，**立即生效**。';
                window.showToast?.('❌ 元素点击与调试已关闭，**立即生效**。');
            }
            statusBar.textContent += "（💡 建议：切换模式后刷新页面，以确保 Iframe 和 Hook 状态完全同步）";

        };


        debugLocationToggle.onclick = () => {
            isDebuggingLocationHooks = !isDebuggingLocationHooks;

            localStorage.setItem(DEBUG_LOCATION_KEY, isDebuggingLocationHooks ? 'true' : 'false');

            // V26.39.3 NEW: 处理用户覆盖逻辑
            const isHostInDebugList = DEBUG_WEBLIST.some(domain => getCurrentHost().includes(domain));
            if (isHostInDebugList) {
                if (isDebuggingLocationHooks) {
                    // 如果在调试域名列表内，且用户手动开启，则移除覆盖记录
                    toggleDebugOverride(false);
                } else {
                    // 如果在调试域名列表内，且用户手动关闭，则添加覆盖记录
                    toggleDebugOverride(true);
                }
            }


            if (isDebuggingLocationHooks) {
                debugLocationToggle.classList.add('greener')
                debugLocationToggle.textContent = '⚙️ JS 重定向调试 (开)';
                statusBar.textContent = '⚠️ JS Hook 模式已开启。**必须刷新页面**才能启用**同步中断**捕获。';
            } else {
                debugLocationToggle.classList.remove('greener')
                debugLocationToggle.textContent = '⚙️ JS 重定向调试 (关)';
                statusBar.textContent = 'JS 重定向调试已关闭。**必须刷新页面**才能解除 Hook。';
            }
        };

        list.addEventListener('click', (e) => {
            let listItem = e.target.closest('li');
            if (!listItem) return;

            const xpath = listItem.getAttribute('data-xpath');
            const elementEntry = zeroOpacityElements.find(i => i.xpath === xpath);
            if (!elementEntry) return;
            const element = elementEntry.element;

            if (e.target.classList.contains('remove-btn')) {
                if (element && element.parentNode) {
                    // 使用普通元素移除记录
                    saveRemovalChoice(xpath);

                    if (lastHighlightedElement) {
                        lastHighlightedElement.style.border = '';
                    }

                    element.remove();
                    listItem.remove();
                    statusBar.textContent = `✅ 元素 ${elementEntry.tagName} 已永久移除并保存。`;
                    window.showToast?.(`✅ 元素 ${elementEntry.tagName} 已永久移除并保存。`);
                    updateSavedListContent();
                }
                return;
            }

            if (e.target.closest('.element-info')) {
                if (lastHighlightedElement) {
                    lastHighlightedElement.style.border = '';
                }

                element.style.border = '2px solid red';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                lastHighlightedElement = element;
                statusBar.textContent = `选中元素: [${elementEntry.document === document ? '主页' : 'Iframe'}] ${elementEntry.tagName} (${elementEntry.width}x${elementEntry.height}px)`;
            }
        });

        // V26.38: Iframe list listener
        iframeList.addEventListener('click', (e) => {
            let listItem = e.target.closest('li');
            if (!listItem) return;

            const xpath = listItem.getAttribute('data-xpath');
            const elementEntry = allIframes.find(i => i.xpath === xpath);
            if (!elementEntry) return;
            const element = elementEntry.element;

            if (e.target.classList.contains('remove-iframe-btn')) {
                if (element && element.parentNode) {
                    // V26.39 NEW: 使用 Iframe 专用移除记录
                    saveIframeRemovalChoice(xpath);

                    if (lastHighlightedElement) {
                        lastHighlightedElement.style.border = '';
                    }

                    element.remove();
                    listItem.remove();
                    // Update tab counter
                    tabIframe.textContent = `当前 Iframe 记录 (${document.querySelectorAll('iframe').length})`;
                    statusBar.textContent = `✅ Iframe 元素已永久移除并保存。请刷新页面查看效果。`;
                    window.showToast?.(`✅ Iframe 元素已永久移除并保存。请刷新页面查看效果。`);
                    updateSavedListContent();
                }
                return;
            }

            if (e.target.closest('.iframe-info')) {
                if (lastHighlightedElement) {
                    lastHighlightedElement.style.border = '';
                }
                // Use a noticeable border color for iframes
                element.style.border = '3px solid #dc3545';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });

                lastHighlightedElement = element;
                statusBar.textContent = `选中 Iframe: ${elementEntry.isCrossDomain ? '跨域' : '同源'} | Src: ${safeTruncate(elementEntry.src, 50)}`;
                window.showToast?.(`选中 Iframe: ${elementEntry.isCrossDomain ? '跨域' : '同源'} | Src: ${safeTruncate(elementEntry.src, 50)}`);

            }
        });


        savedList.addEventListener('click', (e) => {
            // 取消普通元素移除记录  
            if (e.target.classList.contains('undo-btn')) {
                const xpath = e.target.getAttribute('data-xpath');
                if (removeRemovalChoice(xpath)) {
                    statusBar.textContent = `🚫 元素移除记录已取消。请刷新页面以恢复元素。`;
                    window.showToast?.(`🚫 元素移除记录已取消。请刷新页面以恢复元素。`);
                    updateSavedListContent();
                }
            }

            // V26.39 NEW: 取消 Iframe 移除记录
            if (e.target.classList.contains('undo-iframe-btn')) {
                const xpath = e.target.getAttribute('data-xpath');
                if (removeIframeRemovalChoice(xpath)) {
                    statusBar.textContent = `🚫 Iframe 移除记录已取消。请刷新页面以恢复 Iframe。`;
                    window.showToast?.(`🚫 Iframe 移除记录已取消。请刷新页面以恢复 Iframe。`);
                    updateSavedListContent();
                }
            }


            if (e.target.classList.contains('remove-blacklist-btn')) {
                const pageKey = e.target.getAttribute('data-page-key');
                if (togglePageBlacklist(false, pageKey)) {
                    if (pageKey === getCurrentPageKey()) {
                        isBlacklisted = false;
                        blacklistToggle.textContent = '➕ 标记为黑名单页 (启用严格沙箱)';
                    }
                    statusBar.textContent = `✅ 已移除黑名单 ${safeTruncate(pageKey, 15)}。请刷新页面。`;
                    window.showToast?.(`✅ 已移除黑名单 ${safeTruncate(pageKey, 15)}。请刷新页面。`);
                    updateSavedListContent();
                }
            }
        });

        // --- 拖拽逻辑 (保持不变) ---
        let isDragging = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let containerOffsetX = 0;
        let containerOffsetY = 0;

        function getEventXY(e) {
            if (e.touches && e.touches.length > 0) {
                return { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
            return { x: e.clientX, y: e.clientY };
        }

        function getTranslateXY(element) {
            const style = window.getComputedStyle(element);
            const transform = style.transform || style.webkitTransform || style.mozTransform;

            let mat = transform.match(/^matrix3d\((.+)\)$/);
            if (mat) {
                const values = mat[1].split(', ');
                return { x: parseFloat(values[12]) || 0, y: parseFloat(values[13]) || 0 };
            }

            mat = transform.match(/^matrix\((.+)\)$/);
            if (mat) {
                const values = mat[1].split(', ');
                return { x: parseFloat(values[4]) || 0, y: parseFloat(values[5]) || 0 };
            }
            return { x: 0, y: 0 };
        }


        // 定义统一的 LocalStorage 键名
        const WINDOW_POSITION_KEY1 = 'gemini_window_position';

        function isDragTarget(target) {
            if (isSelectionMode) return false;

            if (target === mainContainer) return true;

            if (target.closest(`#${windowId}`)) { // 假
                const dragTargets = target.closest('[class*="confirm"],[id*="script-viewer"],div.script-item, #script-viewer-float-window-Gemini, #gemini-header, #gemini-status-bar, .gemini-tip-text');
                if (dragTargets && !target.closest('button, span[id$="close-btn"], a')) {
                    return true;
                }
            }

            return false;
        }

        const dragStart = (e) => {

            if (!isDragTarget(e.target)) {
                return;
            }


            // 只接受鼠标左键
            if (
                e.button !== undefined &&
                e.button !== 0
            ) {
                return;
            }


            isDragging = true;



            e.preventDefault();


            const x = e.clientX;
            const y = e.clientY;


            const currentTranslate =
                getTranslateXY(mainContainer);

            containerOffsetX =
                currentTranslate.x;

            containerOffsetY =
                currentTranslate.y;


            dragStartX = x;
            dragStartY = y;

        };


        const dragMove = (e) => {

            if (!isDragging) return;

            e.preventDefault();


            const x = e.clientX;
            const y = e.clientY;


            const dx =
                x - dragStartX;

            const dy =
                y - dragStartY;


            const newX =
                containerOffsetX + dx;

            const newY =
                containerOffsetY + dy;


            mainContainer.style.transform =
                `translate3d(${newX}px, ${newY}px, 0)`;

        };


        const dragEnd = () => {

            if (!isDragging) return;

            isDragging = false;


            // 拖拽结束时读取真实位置
            const currentTranslate =
                getTranslateXY(mainContainer);


            try {

                localStorage.setItem(
                    WINDOW_POSITION_KEY1,
                    JSON.stringify(currentTranslate)
                );

            } catch (e) {

                console.warn(
                    '[Gemini] 无法保存浮窗位置信息:',
                    e
                );

            }

        };


        // ==============================
        // Pointer Events
        // ==============================

        mainContainer.onpointerdown = dragStart;

        document.onpointermove = dragMove;

        document.onpointerup = dragEnd;

        document.onpointercancel = dragEnd;


        // 防止移动端拖动时页面滚动
        mainContainer.style.touchAction = 'none';




        // 📝 修改屏蔽规则
        let activeObserver = null;
        let activeInputHandler = null;

        document.addEventListener('click', (e) => {
            const target = e.target;

            if (target.classList.contains('edit-css-btn')) {
                const selector = target.getAttribute('data-selector');
                showEditModal(selector, 'gemini_css_selectors_removals');

                const inputEl = document.getElementById('gemini-edit-input');
                const lengthEl = document.getElementById('editLength');

                if (!inputEl) return;

                // --- 1. 清理旧的 Observer (确保单例) ---
                if (activeObserver) {
                    activeObserver.disconnect();
                    activeObserver = null;
                }

                const updateCount = () => {
                    // 如果元素不在文档中了，停止执行
                    if (!document.body.contains(inputEl)) return;
                    try {
                        const val = inputEl.value.trim();
                        lengthEl.textContent = val ? document.querySelectorAll(val).length : 0;
                    } catch (err) {
                        lengthEl.textContent = '0';
                    }
                };

                // --- 2. 绑定事件 ---
                activeInputHandler = updateCount;
                inputEl.addEventListener('input', updateCount);

                // --- 3. 监控移除逻辑：监视 body 确保能抓到 inputEl 的消失 ---
                activeObserver = new MutationObserver((mutations, obs) => {
                    if (!document.body.contains(inputEl)) {
                        ////console.log('检测到元素已移除，清理资源');
                        inputEl.removeEventListener('input', activeInputHandler);
                        obs.disconnect();
                        activeObserver = null;
                        activeInputHandler = null;
                    }
                });

                // 监视整个 body 及其子树的变化
                activeObserver.observe(document.body, { childList: true, subtree: true });

                // 初始化执行
                updateCount();
            }
        });
    }


    // 无论你的 HTML 什么时候生成，这段代码都能监听到那个按钮的点击
    document.addEventListener('click', function (e) {

        if (e.target && e.target.id === 'repair-css-data-btn') {
            const CSS_KEY = 'gemini_css_selectors_removals'; // 请确认你的 key 名
            const data = localStorage.getItem(CSS_KEY);
            if (!data) return alert("没有找到记录");

            try {
                const list = JSON.parse(data);
                // 强力清洗：去掉反斜杠，把所有双引号换成单引号，去重
                const cleaned = [...new Set(list.map(s => {
                    let fixed = s.replace(/\\/g, "").replace(/"/g, "'").replace(/'+/g, "'");
                    // 补全可能断掉的括号
                    /*
                    if (fixed.includes('[') && !fixed.endsWith(']')) {
                        if ((fixed.match(/'/g) || []).length % 2 !== 0) fixed += "'";
                        fixed += "]";
                    }
                    */
                    return fixed.trim();
                }))];

                localStorage.setItem(CSS_KEY, JSON.stringify(cleaned));

                // 修复完后，尝试刷新页面或 UI
                // alert("✅ 修复完成！");
                confirmndExecuteFC('"✅ 修复完成！，页面刷新后可对数值进行正常修改和取消移除操作... "', () => { location.reload() })
                // location.reload(); // 最简单的刷新方式，确保数据重新加载
            } catch (err) {
                alert("修复失败: " + err);
            }
        }


        if (e.target && e.target.id === 'gemini-close-btn') {
            if (typeof stopSelectorTool == 'function') {
                stopSelectorTool(); // 关闭 ⚓ 元素CSS选择器获取 
                // 如果用户关闭元素调试与屏蔽工具面板
            }
        }



        if (e.target && e.target.id === 'sel-close-main') {
            if (typeof resetMode == 'function') {
                resetMode();
            }
        }



        setTimeout(() => {
            // 1. 先定义好函数 (或确保函数已在 window 作用域)
            if (typeof window.makeModalDraggable === 'function') {
                window.makeModalDraggable('sel-tool-window');
            }
        }, 750)
    });


    // =================================================================
    // 元素点击过滤/调试函数 (V26.39.7 更新 - 拦截 mousedown/touchstart)
    // =================================================================

    const AD_DOMAINS = [
        'ad.twinrdengine.com',
        'adtrack.',
        'popads.',
        'clickdealer.',
        'a-ads.',
        'adcash.',
        'popunder.',
        'exoclick.',
        'adnetwork.',
        // --- 国际顶级广告平台 ---
        'doubleclick.',
        'googleadservices.',
        'taboola.',
        'outbrain.',
        'adroll.',
        'adnxs.',
        'ads-twitter.',
        'facebook.com/tr/',
        'amazon-adsystem.',
        'criteo.',
        'mgid.',
        // --- 强力弹窗与网盟 ---
        'propellerads.',
        'onclickads.',
        'popmyads.',
        'juicyads.',
        'ero-advertising.',
        'trafficjunky.',
        'onclickultra.',
        // --- 追踪与统计 (通常是跳转中转站) ---
        'clickcease.',
        'voluumtrk.',
        'trackinglink.',
        'bitly.com/a/ads/',
        'pixel.ads.',
        'ssp.',
        'dsp.',
        // --- 国内常见及跳转特征 ---
        'pos.baidu.com',
        'cpro.baidustatic.',
        'union.baidu.',
        'tanx.com',
        'alimama.',
        'clk.amap.com',
        'g.alicdn.com/alilog',
        'pangle.io', // 穿山甲
        'adkwai.com', // 快手联盟
        'e.qq.com/ads'
    ];

    const ALLOW_ONCE_ATTRIBUTE = 'data-gemini-allow';

    function applyClickDebugFilter(doc) {

        // 高亮

        let currentHoverElement = null; // 维持之前的闭包变量

        // --- 新增：处理悬停/覆盖的逻辑 ---
        const handleHover = (e) => {
            // 如果调试模式没开启，直接返回
            if (localStorage.gemini_debug_element_click_mode !== 'true') return;

            const el = e.target;
            if (!el || el === doc.documentElement || el === doc.body) return;

            // --- 排除逻辑：增加对调试模态框遮罩层的过滤 ---
            if (el.closest('.notranslate, #gemini-main-container, .gemini-custom-modal, #gemini-custom-modal-overlay')) {
                return;
            }

            // 如果换了元素，先清除旧元素的紫色边框
            if (currentHoverElement && currentHoverElement !== el) {
                currentHoverElement.style.removeProperty('outline');
            }

            // 更新当前元素并添加紫色边框
            currentHoverElement = el;
            currentHoverElement.style.setProperty('outline', '4px solid purple', 'important');
        };

        // 不要直接给 protectBtn.onclick 赋值，改用这种方式
        doc.addEventListener('click', (e) => {
            if (e.target && (e.target.id === 'gemini-modal-protect' || e.target.id === 'gemini-modal-cancel' || e.target.id === 'element-debug-click-toggle')) {
                if (currentHoverElement) {
                    currentHoverElement.style.removeProperty('outline');
                    currentHoverElement.style.removeProperty('outline-offset');
                }
            }
        }, true); // 使用捕获模式确保优先执行

        // --- 监听事件 ---
        if (!doc.gemini_hover_listener_attached) {
            // PC端：鼠标经过
            doc.addEventListener('mouseover', handleHover, true);
            // 移动端：手指触摸开始
            doc.addEventListener('touchstart', handleHover, { capture: true, passive: true });

            doc.gemini_hover_listener_attached = true;
        }

        if (!doc || doc.gemini_click_debug_listener_attached) {
            return;
        }

        window.getElementNthChild = (el) => {
            if (!el || !el.parentElement) return 1;

            const index = Array.from(el.parentElement.children).indexOf(el) + 1;
            const result = new Number(index);

            // 1. 定义属性及其对应的显示标签
            const attrMap = [
                { key: 'id', label: 'id' },
                { key: 'href', label: 'href' },
                { key: 'src', label: 'src' },
                { key: 'class', label: 'class' }
            ];

            // 2. 遍历提取并设置 N/A
            attrMap.forEach(item => {
                const value = el.getAttribute(item.key);
                if (value && value.trim() !== "") {
                    result[item.key] = value.trim();
                } else {
                    result[item.key] = 'N/A';
                }
            });

            // 3. 核心逻辑：生成你要求的“目标元素XXX：XXX值”字符串
            // 按照优先级查找第一个非 N/A 的属性进行显示
            const hit = attrMap.find(item => result[item.key] !== 'N/A');

            if (hit) {
                // 如果找到了存在的属性，按照你要求的格式赋值
                result.display = `[${hit.label}='${result[hit.key]}']`;
                // [src*='/pics/thumb/bvur.jpg']
            } else {
                result.display = "无关键属性";
            }

            // 4. 获取文本
            // 假设 el 是你获取到的 DOM 元素
            const rawText = el.textContent || ""; // 确保处理 null 或 undefined

            // 获取前10个文本，超出部分截取并用 ... 替代
            result.text = rawText.length > 10
                ? rawText.substring(0, 10) + "..."
                : rawText

            // 为了兼容性，将这个格式化后的字符串也赋给 val
            result.val = result.display;
            return result;
        };


        const eventListenerFunction = async (e) => {
            const targetElement = e.target;

            // --- [独立拦截流程：严格遵循 AD_DOMAINS 且无私自改动] ---
            const isLink = targetElement.closest(' a');
            const href = isLink ? isLink.href : '';
            const isAdLink = AD_DOMAINS.some(domain => href.includes(domain));

            if (isAdLink) {
                e.preventDefault();
                e.stopImmediatePropagation();

                // 注入视觉提示 (!important)
                targetElement.style.setProperty('background-color', 'rgba(255, 0, 0, 0.15)', 'important');
                targetElement.style.setProperty('outline', '2px dashed red', 'important');
                targetElement.style.setProperty('cursor', 'not-allowed', 'important');

                // 注入 Ads 标签
                const rect = targetElement.getBoundingClientRect();
                const adsTag = document.createElement('div');
                adsTag.innerText = 'Ads';
                adsTag.style.cssText = `
                    position: absolute !important;
                    top: ${rect.top + window.scrollY}px !important;
                    left: ${rect.right - 35 + window.scrollX}px !important;
                    background-color: #ff0000 !important;
                    color: #ffffff !important;
                    font-size: 10px !important;
                    font-weight: bold !important;
                    padding: 2px 4px !important;
                    border-radius: 0 0 0 4px !important;
                    z-index: 2147483647 !important;
                    pointer-events: none !important;
                    font-family: sans-serif !important;
                    line-height: 1 !important;
                `;
                document.body.appendChild(adsTag);
                setTimeout(() => adsTag.remove(), 3000);

                if (e.type === 'click') {
                    ////console.warn(`[Gemini屏蔽] 命中 isAdLink 独立拦截: ${href}`);
                }
                return;
            }
            // --- [独立拦截流程结束] ---


            // 1. 获取调试模式状态
            const currentIsDebuggingElementClick = localStorage.getItem('gemini_debug_element_click_mode') === 'true';
            const hasMainContainer = document.getElementById('gemini-main-container') !== null;

            // 2. 【核心修改】判断是否需要进入调试拦截逻辑
            // 如果调试模式未开启，或者面板没打开，直接退出，不执行任何拦截
            // 这样用户点击 a 链接就是原生的单次跳转，无需点击两次
            if (!currentIsDebuggingElementClick || !hasMainContainer) {
                return;
            }

            // --- 以下逻辑仅在 Debug 模式开启时运行 (保持你以前的原则) ---

            // 3. 检查放行标记 (用于 Debug 模式下的二次放行)
            if (targetElement.hasAttribute(ALLOW_ONCE_ATTRIBUTE)) {
                targetElement.removeAttribute(ALLOW_ONCE_ATTRIBUTE);
                ////console.log(`[Gemini屏蔽] ➡️ 调试模式：临时放行标记生效。`);
                return;
            }

            // V26.39.7 逻辑：只处理特定的交互事件
            if (e.type !== 'click' && e.type !== 'mousedown' && e.type !== 'touchstart') {
                return;
            }

            // 排除逻辑：调试工具自身的 UI 排除
            if (doc.defaultView === window && targetElement.closest('.notranslate, #storage-control-panel,[id="input-prompt-container"],[class*="confirm"],[id*="script-viewer"],[id*="gemini"], #ellCloseX, #dh_buttonContainer, #dh_pageContainer')) {
                return;
            }

            //const isLink = targetElement.closest(' a');
            //const href = isLink ? isLink.href : '';
            const opensNewTab = isLink ? isLink.target === '_blank' : false;
            //const isAdLink = AD_DOMAINS.some(domain => href.includes(domain));

            // 保持以前的原则：在调试模式下，这三者都会触发拦截
            let shouldIntercept = (opensNewTab && href && href !== '#') || currentIsDebuggingElementClick;

            if (shouldIntercept && targetElement.tagName !== 'HTML' && targetElement.tagName !== 'BODY') {

                // 调试模式下：同步拦截
                e.preventDefault();
                e.stopImmediatePropagation();

                // 只有在 Click 事件时才唤起调试模态框
                if (e.type !== 'click') {
                    ////console.log(`[Gemini屏蔽] 🛡️ ${e.type} 已阻止，等待 Click 唤起模态框...`);
                    return;
                }

                const xpath = getElementXPath(targetElement);
                const tagName = targetElement.tagName;
                const cssSelector = getElementCssSelector(targetElement);
                const rect = targetElement.getBoundingClientRect();
                const computedStyle = targetElement.ownerDocument.defaultView.getComputedStyle(targetElement);
                const parentElement = targetElement.parentElement;
                const parentInfo = parentElement
                    ? `${parentElement.tagName}${(parentElement.classList && parentElement.classList.length > 0) ? '.' + parentElement.classList[0] : ''}`
                    : '[无父级]';
                const inlineClick = targetElement.getAttribute('onclick') ||
                    targetElement.getAttribute('onmousedown') ||
                    targetElement.getAttribute('onmouseup') ||
                    targetElement.getAttribute('onpointerdown');

                const elementInfo = {
                    href: href || '[不含链接]',
                    tagName: tagName,
                    cssSelector: cssSelector,
                    width: rect.width.toFixed(0),
                    height: rect.height.toFixed(0),
                    zIndex: computedStyle.zIndex,
                    opacity: computedStyle.opacity,
                    position: computedStyle.position,
                    parent: parentInfo,
                    inlineClick: inlineClick,
                    preciseSelector: getSmartSelector_element_click_debug_mode(targetElement),
                    nthChild: window.getElementNthChild(targetElement),
                };

                window.absoluteSelector = getSmartSelector_selector_get(targetElement).toString().replace(/"/g, "'");
                window.targetElementInform = window.getElementNthChild(targetElement);
                window.targetElementInformAppend = window.targetElementInform.val == '无关键属性' ? '' : window.targetElementInform.val;

                setTimeout(() => {
                    if (typeof window.makeModalDraggable == 'function') {
                        window.makeModalDraggable('gemini-custom-modal-overlay');
                    }
                }, 500);

                const confirmBlock = await showCustomConfirm(
                    `此元素点击已被调试模式捕获。请选择操作：`,
                    elementInfo,
                    xpath || "XPath 获取失败"
                );

                if (confirmBlock) {
                    if (xpath && targetElement.parentNode) {
                        if (targetElement.tagName === 'IFRAME') {
                            saveIframeRemovalChoice(xpath);
                        } else {
                            saveRemovalChoice(xpath);
                        }
                        targetElement.remove();
                    }
                } else {
                    // 保持以前的原则：用户点取消后，设置标记，需要用户【再次点击】才放行
                    targetElement.setAttribute(ALLOW_ONCE_ATTRIBUTE, 'true');
                    ////console.log("🚫 已取消永久屏蔽。请**再次点击**此元素，点击将在第二次被放行。");
                }
                return;
            }
        };

        // ⭐️ V26.39.7 核心修复：Hook 早期事件以阻止异步调度
        doc.addEventListener('click', eventListenerFunction, true);
        doc.gemini_click_debug_listener_attached = true;
        let logMessage = `[Gemini屏蔽 V26.39.7] 元素点击调试监听器已附加到 `;

        const isTopWindow = window === window.top;

        if (doc === document) {

            if (isTopWindow) {
                logMessage += `主页 (Top Document)。`;
            } else {
                let iframeSrc = doc.URL || '[无法获取 URL]';
                const displaySrc = safeTruncate(iframeSrc, 77);
                logMessage += `Iframe 文档 (自身上下文)。Src: ${displaySrc}`;
            }
        } else {
            let iframeSrc = '[无法获取 src]';
            let iframeElement = null;

            try {
                iframeElement = doc.defaultView ? doc.defaultView.frameElement : null;
            } catch (e) {
            }

            if (iframeElement && iframeElement.tagName === 'IFRAME') {
                iframeSrc = iframeElement.src || '[无 src 属性]';
            } else if (doc.URL) {
                iframeSrc = doc.URL;
            }

            const displaySrc = safeTruncate(iframeSrc, 77);
            logMessage += `Iframe 文档 (主页检测)。Src: ${displaySrc}`;
        }

        ////console.log(logMessage);
    }


    // 捕获元素 

    window.getSmartSelector_element_click_debug_mode = function getSmartSelector_element_click_debug_mode(el) {
        if (!(el instanceof Element)) return '';

        /**
         * 内部辅助：提取元素的“硬指纹”特征
         * 包含：ID, href, src, title, alt, data-*, 业务Class
         */

        function getHardFeature(node) {
            if (!node) return null;
            const tag = node.tagName.toLowerCase();

            // 1. ID 永远是第一优先级 (排除纯数字/动态ID)
            if (node.id && typeof node.id === 'string' && !/^\d+$/.test(node.id)) {
                return `#${CSS.escape(node.id)}`;
            }

            // 2. 强业务属性特征 (href, src, data-*)
            // href/src 只取路径最后一段，防止整条路径太长或带域名
            const strongAttrs = ['href', 'src', 'data-id', 'data-code', 'data-uid'];
            for (let attr of strongAttrs) {
                let val = node.getAttribute(attr);
                if (val && val.length > 3 && val.length < 150) {
                    if (['href', 'src'].includes(attr)) {
                        val = val.split('?')[0].split('/').pop();
                        if (!val || val.length < 3) continue;
                    }
                    return `${tag}[${attr}*='${CSS.escape(val)}']`;
                }
            }

            // 3. 语义化文字属性 (title, alt, placeholder)
            const textAttrs = ['title', 'alt', 'placeholder', 'aria-label'];
            for (let attr of textAttrs) {
                let val = node.getAttribute(attr);
                if (val && val.length > 1 && val.length < 50) {
                    return `${tag}[${attr}*='${CSS.escape(val)}']`;
                }
            }

            // 4. 业务类名特征 (过滤布局干扰类)
            const layoutBlacklist = ['item', 'masonry', 'brick', 'active', 'selected', 'row', 'col-', 'grid-'];
            const validClasses = Array.from(node.classList).filter(c =>
                !layoutBlacklist.some(lc => c.includes(lc))
            );
            if (validClasses.length > 0) {
                return `${tag}.${CSS.escape(validClasses[0])}`;
            }

            return null; // 这一层彻底没特征
        }

        let path = [];
        let current = el;
        let foundStrongAnchor = false;

        // =================================================================
        // 核心逻辑：向上递归遍历，直到找到有属性特征的锚点
        // =================================================================
        while (current && !['HTML', 'BODY'].includes(current.tagName)) {
            const feature = getHardFeature(current);

            if (feature) {
                path.unshift(feature);
                // 如果撞到了“顶级锚点”（带ID或带业务代码的A标签），停止向上爬
                if (feature.startsWith('#') || feature.startsWith('a[')) {
                    foundStrongAnchor = true;
                    break;
                }
            } else {
                // 如果这一层没特征，记录它的标签名和位置(nth-child)，并强制继续向上找
                let segment = current.tagName.toLowerCase();
                if (current.parentElement && current.parentElement.children.length > 1) {
                    let index = Array.from(current.parentElement.children).indexOf(current) + 1;
                    segment += `:nth-child(${index})`;
                }
                path.unshift(segment);
            }

            current = current.parentElement;
        }

        // 如果最后实在没撞到强锚点，补一个 body 前缀作为基准
        if (!foundStrongAnchor && current && current.tagName === 'BODY') {
            path.unshift('body');
        }

        return path.join(' > ');
    }

    // 捕获元素 结束 

    function setupAdLinkFilter() {
        const targetDocuments = getTargetDocuments();
        targetDocuments.forEach(doc => {
            applyClickDebugFilter(doc);
        });
        ////console.log('[Gemini屏蔽] 元素点击过滤/调试功能已协调完成 (V26.39.7 Modified)。');
    }


    // =================================================================
    // 核心函数：手动添加 XPath 到永久屏蔽列表
    // =================================================================

    /**
     * 将用户输入的 XPath 添加到永久元素移除列表
     * @param {string} xpath - 用户输入的 XPath 字符串
     */
    function handleManualXPathSubmission(xpath) {
        if (!xpath || typeof xpath !== 'string' || xpath.trim() === '') {
            //confirmndExecuteFC('错误：请输入一个有效的 XPath。');
            confirmndExecuteFC('错误：请输入一个有效的 XPath。')
            return;
        }

        const trimmedXPath = xpath.trim();
        const REMOVAL_KEY = 'gemini_zero_opacity_removals'; // 保持与脚本中 ELEMENT_REMOVAL_KEY 一致

        try {
            // 1. 获取当前的列表
            let removalListJSON = localStorage.getItem(REMOVAL_KEY);
            let removalList = removalListJSON ? JSON.parse(removalListJSON) : [];

            // 2. 检查并添加新的 XPath
            if (removalList.indexOf(trimmedXPath) === -1) {
                removalList.push(trimmedXPath);

                // 3. 保存更新后的列表
                const updatedRemovalListJSON = JSON.stringify(removalList);
                localStorage.setItem(REMOVAL_KEY, updatedRemovalListJSON);

                ////console.log(`[Gemini屏蔽] 成功手动添加 XPath: ${trimmedXPath}`);
                confirmndExecuteFC(`✅ XPath 已成功保存！\n路径: ${trimmedXPath}\n请刷新页面生效。`)
            } else {
                //confirmndExecuteFC(`提示：该 XPath (${trimmedXPath}) 已存在于屏蔽列表中。`);
                confirmndExecuteFC(`提示：该 XPath (${trimmedXPath}) 已存在于屏蔽列表中。`)
            }
        } catch (e) {
            ////console.error('[Gemini屏蔽] 保存 XPath 时发生错误:', e);
            //confirmndExecuteFC('❌ 保存 XPath 失败。请检查控制台获取详细信息。');
            confirmndExecuteFC('❌ 保存 XPath 失败。请检查控制台获取详细信息。')
        }
    }

    // =================================================================
    // UI 函数：显示 XPath 输入悬浮窗 (已增加粘贴和清空按钮)
    // =================================================================

    const XPATH_INPUT_WINDOW_ID = 'gemini-xpath-input-modal';

    window.showXPathInputWindow = function showXPathInputWindow() {
        let modal = document.getElementById(XPATH_INPUT_WINDOW_ID);
        if (modal) {
            modal.style.display = 'flex';
            return;
        }

        // 1. 创建模态容器 (Z-index 已修复)
        modal = document.createElement('div');
        modal.id = XPATH_INPUT_WINDOW_ID;
        modal.className = 'notranslate'
        modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.7); 
        z-index: 100000000; /* 确保堆叠顺序最高 */
        display: flex; justify-content: center; align-items: center;
    `;

        // 2. 创建内容面板
        const content = document.createElement('div');
        content.style.cssText = `
        background-color: #fff; padding: 20px; border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5); width: 90%; max-width: 400px;
        color: #333; font-family: Arial, sans-serif;
    `;

        // 标题和说明
        content.innerHTML = `
        <h3 style="margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px; color: #555;">手动添加 XPath 屏蔽</h3>
        <p style="margin-bottom: 10px; font-size: 14px;">请粘贴您从开发者工具中复制的 XPath 地址：</p>
    `;

        // 3. 创建粘贴/清空按钮容器
        const utilityButtonContainer = document.createElement('div');
        utilityButtonContainer.style.cssText = 'display: flex; gap: 10px; margin-bottom: 10px;';

        const pasteButton = document.createElement('button');
        pasteButton.textContent = '📋 粘贴 XPath';
        pasteButton.style.cssText = 'padding: 8px 15px; background-color: #2196F3; color: white; border: none; border-radius: 4px; cursor: pointer; flex: 1;';
        pasteButton.id = 'paste-xpath-btn';

        const clearButton = document.createElement('button');
        clearButton.textContent = '🗑️ 清空';
        clearButton.style.cssText = 'padding: 8px 15px; background-color: #9E9E9E; color: white; border: none; border-radius: 4px; cursor: pointer; flex: 1;';
        clearButton.id = 'clear-xpath-btn';

        utilityButtonContainer.appendChild(pasteButton);
        utilityButtonContainer.appendChild(clearButton);
        content.appendChild(utilityButtonContainer);

        // 4. 创建输入框
        const textarea = document.createElement('textarea');
        textarea.id = 'xpath-input-field';
        textarea.rows = 3;
        textarea.style.cssText = 'width: 100%; padding: 8px; margin-bottom: 15px; border: 1px solid #ccc; box-sizing: border-box; resize: vertical; font-family: monospace;';
        content.appendChild(textarea);


        // 5. 创建主操作按钮 (保存/取消)
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = 'display: flex; justify-content: flex-end; gap: 10px;';

        const saveButton = document.createElement('button');
        saveButton.textContent = '保存并屏蔽 (需刷新)';
        saveButton.style.cssText = 'padding: 8px 15px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = '取消';
        cancelButton.style.cssText = 'padding: 8px 15px; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;';

        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(saveButton);
        content.appendChild(buttonContainer);
        modal.appendChild(content);
        document.body.appendChild(modal);

        // 6. 绑定事件

        // 绑定清空按钮事件
        clearButton.onclick = () => {
            textarea.value = '';
            textarea.focus();
        };

        // 绑定粘贴按钮事件
        pasteButton.onclick = () => {
            // 使用 Clipboard API 读取剪贴板内容
            navigator.clipboard.readText().then(text => {
                textarea.value = text;
                textarea.focus();
            }).catch(err => {
                ////console.error('[Gemini屏蔽] 无法读取剪贴板，可能是权限问题:', err);
                confirmndExecuteFC('无法自动粘贴。请确保已授予浏览器剪贴板读取权限，或手动粘贴。');

            });
        };

        // 绑定保存和取消事件 (与之前逻辑相同)
        saveButton.onclick = () => {
            const xpath = textarea.value;
            handleManualXPathSubmission(xpath);
            modal.remove();
        };

        cancelButton.onclick = () => {
            modal.remove();
        };
    }

    // =================================================================
    // 核心启动函数 
    // =================================================================
    function initScript() {

        window.isInitScript = 'true';

        // 1. 立即注入 CSS 样式
        if (!document.getElementById('style-limbopro')) {
            const style = document.createElement('style');
            style.id = 'style-limbopro'; // 设置 ID 防止重复注入
            style.textContent = `
            .hiddenbylimbopro {
                display: none! important;        /*核心隐藏：将元素从渲染树中完全移除，不占据物理空间 */
                visibility: hidden !important;   /* 隐藏但保留占位 */
                pointer-events: none !important; /* 禁止任何鼠标/点击事件 */
                user-select: none !important;    /* 禁止选中文本 */
                opacity: 0 !important;           /* 视觉完全透明 */
            }
        `;
            document.head.appendChild(style);
            ////console.log('%c[Init]%c 隐藏样式表已注入', 'color: #673ab7; font-weight: bold;', 'color: default;');
        }

        const currentHost = getCurrentHost();
        const isHostInDebugList = DEBUG_WEBLIST.some(domain => currentHost.includes(domain));

        // 1. 读取用户自定义的调试状态
        let clickDebugState = localStorage.getItem('gemini_debug_element_click_mode') === 'true';
        let locationDebugState = localStorage.getItem(DEBUG_LOCATION_KEY) === 'true';

        // 2. V26.39.3 核心逻辑：判断是否在试列表中 且 没有被用户覆盖
        if (isHostInDebugList) {
            const isOverridden = isCurrentHostOverridden();

            if (!isOverridden) {
                // 如果在调试列表中，且用户从未手动关闭过（即没有覆盖记录）
                clickDebugState = true;
                locationDebugState = true;
                localStorage.setItem('gemini_debug_element_click_mode', 'true');
                localStorage.setItem(DEBUG_LOCATION_KEY, 'true');
                ////console.log(`[Gemini屏蔽 V26.39.10] 🎯 域名 ${currentHost} 匹配调试列表，强制开启调试模式。`);
            } else {
                // 存在覆盖记录，保留用户上次设置的状态（即 clickDebugState/locationDebugState 保持为从 localStorage 读取的值，可能是 false）
                ////console.log(`[Gemini屏蔽 V26.39.10] ⚠️ 域名 ${currentHost} 匹配调试列表，但因存在用户覆盖记录，本次不自动开启。`);
            }
        }

        // 3. 将最终确定的状态赋值给全局变量
        isDebuggingElementClick = clickDebugState;
        isDebuggingLocationHooks = locationDebugState;



        injectStyles(containerId, windowId);

        InlineStyleManager.init(); // 修改内联样式
        blockMetaRefresh(document);

        const targetDocuments = getTargetDocuments();


        /* 默认拦截
        enableWindowOpenHook();
        interceptWindowLocation();
    
        // ⬇️⬇️⬇️ Hook 所有重定向相关 API (V26.39.10 核心：同步中断) ⬇️⬇️⬇️
    
        // 1. Hook History API
        interceptHistoryAPI(window, 'window');
        if (window.parent !== window) { interceptHistoryAPI(window.parent, 'parent'); }
        if (window.top !== window) { interceptHistoryAPI(window.top, 'top'); }
    
        // 2. Hook Form 表单提交
        interceptFormSubmission();
    
        // 3. Hook document.write
        interceptDocumentWrite();
    
        // ⭐️ 4. Hook Element.prototype.click (程序化点击拦截 - V26.39.10 NEW)
        interceptElementClick();
    
        // ⭐️ 5. Hook window.postMessage (跨框架侧信道拦截 - V26.39.10 NEW)
        interceptPostMessage();
    
        // ⬆️⬆️⬆️ Hook 所有重定向相关 API ⬆️⬆️⬆️
    
        */

        setupAdLinkFilter(); // 元素点击调试监听器放在这里

        targetDocuments.forEach(doc => {
            loadAndRemoveSavedElements(doc);
        });

        if (window === window.top) {
            observeDynamicIframes();
        }

        // 4. 根据最终状态决定是否自动打开浮窗
        if (isDebuggingElementClick || isDebuggingLocationHooks || localStorage.getItem('gemini-pin') == 'pinned') {
            if (!document.getElementById(containerId)) {

                const activationSource = isHostInDebugList && !isCurrentHostOverridden() ? '域名匹配（自动）' : '本地存储（手动开启）';
                ////console.log(`[Gemini屏蔽 V26.39.10] 🎯 调试模式已开启 (${activationSource})，自动打开浮窗。`);

                // 由于 targetDocuments 已经在前面获取，这里直接使用   
                renderFloatWindow(targetDocuments);

                // 仅当 body_build 在时调 用（兼容其他环境） 
                if (typeof body_build === 'function') {
                    try { body_build('false'); } catch (e) { }
                }


            }
        }


        ////console.log(`[Gemini屏蔽] 脚本已初始化 (V26.39.10)。当前页面在黑名单中: ${isCurrentPageBlacklisted() ? '是' : '否'}。`);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('load', initScript);
    } else {
        initScript();
    }
})();


// 全局调出元素调试与屏蔽工具面板
window.geminiElementBlockerOpenPanel = () => {
    const containerId = 'gemini-main-container'; // 确保能访问到这个 ID
    if (!document.getElementById(containerId)) {
        const targetDocs = [window.document];
        if (typeof renderFloatWindow === 'function') {
            renderFloatWindow(targetDocs);
            if (typeof body_build === 'function') {
                try { body_build('false'); } catch (e) { }
            }
        }
    } else {
        // 如果面板已存在，确保它是可见的
        const panel = document.getElementById(containerId);
        panel.style.setProperty('display', 'block', 'important');
    }
};




let debounceTimer = null;
let lastNavCount = -1; // 记录上一次检查时的数量

const bodyObserver = new MutationObserver((mutations) => {
    // 过滤掉由脚本自身引起的属性修改（可选，提升性能）
    // 如果 parentElement_add 只是增加节点，这一行能过滤掉不必要的干扰
    if (mutations.every(m => m.target.closest && m.target.closest('.gemini-managed'))) return;
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const currentNavCount = document.querySelectorAll('.li_global').length;

        // 【核心逻辑】只有当导航项数量发生变化，才进行深度检查
        if (currentNavCount !== lastNavCount) {
            ////console.log(`[Gemini监控] 检测到页面变化，导航项当前数量: ${currentNavCount}`);

            // 1. 面板保活
            const isPinned = localStorage.getItem('gemini-pin') === "pinned" ||
                localStorage.getItem('gemini_debug_element_click_mode') === "true" ||
                localStorage.getItem('gemini_debug_location_hook_mode') === "true";

            if (isPinned && typeof geminiElementBlockerOpenPanel == 'function') {
                geminiElementBlockerOpenPanel();
            }

            // 2. 导航内容破坏检测
            if (currentNavCount < 150) {
                if (typeof parentElement_add == 'function') {
                    ////console.warn('Gemini: 导航内容疑似被破坏或尚未加载，正在尝试复位...');

                    // 执行修复
                    parentElement_add();

                    // 修复后立即更新计数，防止 parentElement_add 产生的节点变化导致下一次重复触发
                    lastNavCount = document.querySelectorAll('.li_global').length;
                }
            } else {
                // 数量充足，同步当前计数
                lastNavCount = currentNavCount;
            }


        }
    }, 2000);
});

// 开始监控
if (document.body) {
    bodyObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false // 除非导航条被隐藏是通过 style 改变的，否则不建议监听属性，太耗性能
    });
}
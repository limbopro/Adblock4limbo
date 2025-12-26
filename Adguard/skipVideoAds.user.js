
(function () {
    // ----------------------------------------------------
    // 局部配置变量
    // ----------------------------------------------------
    const CFG_BUTTON_ID = 'adsSkip';
    const CFG_STATUS_SPAN_ID = 'toggle_status_text';
    const CFG_STORAGE_KEY = 'AutoSkip_Enabled_State';

    // CSS 状态 Class
    const CLASS_ENABLED = 'ads_skip_on';
    const CLASS_DISABLED = 'ads_skip_off';

    // 样式配置
    const COLOR_BG_ON = '#4CAF50';        // 开启：绿色
    const COLOR_BG_OFF = '#F44336';       // 关闭：红色
    const COLOR_TEXT_ON = '#ffffff';
    const COLOR_TEXT_OFF = '#333333';
    const COLOR_BG_STATUS_ON = 'rgba(255, 255, 255, 0.2)';
    const COLOR_BG_STATUS_OFF = 'rgba(0, 0, 0, 0.1)';

    // --- CSS 注入函数 (覆盖所有原有样式) ---
    function injectStyles() {
        const css = `
            /* 全局重置和基础样式：控制按钮的尺寸、布局、字体 */
            #${CFG_BUTTON_ID} {
                /* 核心尺寸和布局 */
                all: initial !important; 
                box-sizing: border-box !important;
                display: flex !important;
                /*flex-direction: column !important;*/
                align-items: center !important;
                justify-content: center !important; 
                width: 100px !important;
                height: 40px !important; 
                padding: 6px 0px !important;

                /* 字体和外观 */
                font-family: inherit !important; 
                font-size: 13px !important;
                font-weight: bold !important;
                color: ${COLOR_TEXT_ON} !important; 
                border: none !important;
                border-radius: 6px !important;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px !important;
                cursor: pointer !important;
                transition: background-color 0.3s, box-shadow 0.3s !important;
            }

            /* 状态 Span 基础样式 */
            #${CFG_BUTTON_ID} #${CFG_STATUS_SPAN_ID} {
                all: unset !important;
                box-sizing: border-box !important;
                margin-top: 2px !important; 
                line-height: 1 !important;
                font-size: 10px !important; 
                font-weight: 600 !important;
                border-radius: 3px !important;
                padding: 1px 4px !important;
            }

            /* --- 状态：开启 (绿色) --- */
            #${CFG_BUTTON_ID}.${CLASS_ENABLED} {
                background: ${COLOR_BG_ON} !important;
            }
            #${CFG_BUTTON_ID}.${CLASS_ENABLED} #${CFG_STATUS_SPAN_ID} {
                background-color: ${COLOR_BG_STATUS_ON} !important;
                color: ${COLOR_TEXT_ON} !important;
            }
            
            /* --- 状态：关闭 (红色) --- */
            #${CFG_BUTTON_ID}.${CLASS_DISABLED} {
                background: ${COLOR_BG_OFF} !important;
            }
            #${CFG_BUTTON_ID}.${CLASS_DISABLED} #${CFG_STATUS_SPAN_ID} {
                background-color: ${COLOR_BG_STATUS_OFF} !important;
                color: ${COLOR_TEXT_OFF} !important;
            }
        `;

        const style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = css;
        document.head.appendChild(style);
        console.log('✅ [Init] 状态切换和基础 CSS 已通过 <style> 标签注入。');
    }

    // --- 状态和功能函数 (保持不变) ---
    function isAutoSkipEnabled() {
        return localStorage.getItem(CFG_STORAGE_KEY) === 'true';
    }

    function setAutoSkipState(enabled) {
        localStorage.setItem(CFG_STORAGE_KEY, enabled ? 'true' : 'false');
    }

    window.executeSkipFunction = function executeSkipFunction() {
        // 这是唯一与全局环境交互的地方
        if (typeof window.videoAds_accelerateSkip === 'function') {
            window.videoAds_accelerateSkip('0.01');

            console.log('✅ [Skip] videoAds_accelerateSkip("0.2") 已执行。');
        } else {
            console.warn('⚠️ [Skip] videoAds_accelerateSkip 函数未在全局找到。');
        }
    }

    // --- 样式更新函数 (通过 Class 切换样式) ---
    function updateToggleButton(button, statusSpan, isEnabled) {
        if (!button || !statusSpan) return;

        if (isEnabled) {
            button.classList.add(CLASS_ENABLED);
            button.classList.remove(CLASS_DISABLED);
        } else {
            button.classList.add(CLASS_DISABLED);
            button.classList.remove(CLASS_ENABLED);
        }

        statusSpan.textContent = isEnabled ? '开启' : '关闭';
        button.title = isEnabled ? '自动跳过广告已开启 (点击关闭)' : '自动跳过广告已关闭 (点击开启)';

        console.log(`[UI] 按钮状态已切换 Class 为：${isEnabled ? CLASS_ENABLED : CLASS_DISABLED}`);
    }

    // --- 初始化和绑定逻辑 ---
    function initialize() {
        // 1. 注入 CSS 样式表 (必须先执行)
        injectStyles();

        let button = document.getElementById(CFG_BUTTON_ID);
        let statusSpan = document.getElementById(CFG_STATUS_SPAN_ID);

        if (!button || !statusSpan) {
            console.error('❌ [Init] 致命错误：未找到按钮或状态 Span 元素。');
            return;
        }

        // 2. 事件清除修复：克隆按钮以清除所有旧事件监听器
        const oldButton = button;
        button = oldButton.cloneNode(true);
        if (oldButton.parentNode) {
            oldButton.parentNode.replaceChild(button, oldButton);
        }
        statusSpan = button.querySelector(`#${CFG_STATUS_SPAN_ID}`);

        const isEnabled = isAutoSkipEnabled();

        // 3. 同步初始状态和外观 (通过 Class)
        updateToggleButton(button, statusSpan, isEnabled);
        console.log(`[Init] 按钮 #${CFG_BUTTON_ID} 初始化完成。状态: ${isEnabled ? '开启' : '关闭'}。`);

        // 4. 自动执行 (仅在持久化状态为开启时)
        if (isEnabled) {
            executeSkipFunction();
        }

        // 5. 绑定新的点击事件
        button.addEventListener('click', function () {
            const currentState = isAutoSkipEnabled();
            const newState = !currentState;

            setAutoSkipState(newState);
            updateToggleButton(button, statusSpan, newState);

            // 核心逻辑：如果切换到开启状态，则立即执行函数
            if (newState) {
                executeSkipFunction();
            }
        });

        console.log(`✅ [Init] 按钮点击监听器已绑定。`);
    }

    // 确保 DOM 加载后再执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();

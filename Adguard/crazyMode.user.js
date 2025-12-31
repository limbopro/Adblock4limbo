(function() {
    /**
     * 1. 核心 UI 应用函数
     * 使用 !important 确保压制任何外部样式干扰
     */
    function applyUI(btn, isActive) {
        if (!btn) return;
        const text = isActive ? "🟢狂野模式(ON)" : "🔴狂野模式(OFF)";
        
        // 设定颜色变量
        const bgColor = isActive ? "#2ecc71" : "rgb(57 64 56)";
        const textColor = isActive ? "white" : "#9a9a9a";

        // 更新文本
        if (btn.textContent !== text) {
            btn.textContent = text;
        }

        // 强制应用样式
        btn.style.setProperty('background', bgColor, 'important');
        btn.style.setProperty('color', textColor, 'important');
        btn.style.setProperty('border-radius', '4px', 'important'); // 保持圆角一致性
    }

    /**
     * 2. 同步页面上所有同名按钮
     */
    function syncAllButtons() {
        const isActive = localStorage.getItem('crazyModeActive') === 'true';
        const allBtns = document.querySelectorAll('#crazyMode');
        allBtns.forEach(btn => applyUI(btn, isActive));
    }

    /**
     * 3. 核心控制函数 (挂载到 window 供 onclick 调用)
     * @param {HTMLElement} clickedBtn - 传入 this 确保精准定位
     */
    window.crazyMode = function(clickedBtn) {
        let isActive = localStorage.getItem('crazyModeActive') === 'true';
        isActive = !isActive;
        localStorage.setItem('crazyModeActive', isActive);

        // 立即同步所有按钮 UI
        syncAllButtons();

        // 异步执行后续逻辑，防止阻塞 UI 渲染
        setTimeout(() => {
            if (isActive) {
                try {
                    // 调用自定义提示函数
                    if (typeof confirmndExecuteFC === 'function') {
                        confirmndExecuteFC('调试中，不保证一定有用；已成功加载 uBlockOrigin 基础脚本，包括但不限于限制弹窗，加速跳过广告，window.open 拦截等，如出现误伤，请关闭该模式...');
                    }
                    // 执行核心逻辑
                    if (typeof uBlockOrigin_add === 'function') {
                        uBlockOrigin_add();
                    }
                } catch (e) {
                    console.error("[CrazyMode] 执行逻辑出错:", e);
                }
            } else {
                console.log("[CrazyMode] 狂野模式已关闭");
            }
        }, 150);
    };

    /**
     * 4. 自动监控 (MutationObserver)
     * 应对按钮被动态创建或重新渲染的情况
     */
    const observer = new MutationObserver((mutations) => {
        let needSync = false;
        for (let mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                const hasBtn = Array.from(mutation.addedNodes).some(node => 
                    node.nodeType === 1 && (node.id === 'crazyMode' || node.querySelector?.('#crazyMode'))
                );
                if (hasBtn) {
                    needSync = true;
                    break;
                }
            }
        }
        if (needSync) syncAllButtons();
    });

    observer.observe(document.body || document.documentElement, {
        childList: true,
        subtree: true
    });

    /**
     * 5. 初始化执行
     */
    function init() {
        const isEnabled = localStorage.getItem('crazyModeActive') === 'true';
        syncAllButtons();
        if (isEnabled && typeof uBlockOrigin_add === 'function') {
            try {
                uBlockOrigin_add();
            } catch (e) {
                console.error("[CrazyMode] 初始化执行失败:", e);
            }
        }
    }

    // 确保网页加载完毕后初始化
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();
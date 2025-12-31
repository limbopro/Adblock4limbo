/**
 * 状态管理、循环清理与计数器显示脚本 (支持动态切换模式)
 * 排除条件：不移除包含 'notranslate' 类名、ID 包含 'gemini' 或 Class 包含 'confirm' 的元素。
 */
(function () {
    const KEY = 'repeatClear';
    const buttonId = 'manual-css-switchClear';
    const intervalTime = 1000;      // 清理循环间隔 (1秒)
    const buttonCheckTime = 500;    // 按钮检查间隔 (0.5秒)

    let totalRemovedCount = 0;
    let intervalId = null;          // 清理循环的 ID
    let buttonCheckIntervalId = null; // 按钮检查循环的 ID

    // --- 核心：清理逻辑 (不变) ---
    const runClearProcess = (isSilent = false) => {
        const allElements = document.body ? document.body.querySelectorAll('*') : [];
        let currentRunCount = 0;

        allElements.forEach(el => {
            try {
                if (el.nodeType === 1) {

                    // 【排除条件 1】: .notranslate
                    if (el.classList.contains('notranslate')) {
                        return;
                    }

                    // 【排除条件】: .cjsfy-translated 或 font[dir]
                    if (el.classList.contains('cjsfy-translated') || el.matches('font[dir]')) {
                        return;
                    }


                    // 【排除条件 1.3】: .skiptranslate
                    if (el.classList.contains('skiptranslate')) {
                        return;
                    }

                    // 【排除条件 2】: .notranslate
                    if (el.classList.contains('notranslate')) {
                        return;
                    }

                    // 【排除条件 2】: ID 包含 'gemini'
                    if (el.id && el.id.toLowerCase().includes('gemini')) {
                        return;
                    }

                    // 【排除条件 3】: Class 包含 'confirm'
                    if (el.className && el.className.toLowerCase().includes('confirm')) {
                        return;
                    }

                    const opacity = window.getComputedStyle(el).opacity;

                    if (parseFloat(opacity) < 0.5) {
                        el.remove();
                        currentRunCount++;
                    }
                }
            } catch (e) { /* 忽略错误 */ }
        });

        totalRemovedCount += currentRunCount;

        const button = document.getElementById(buttonId);
        if (!isSilent && button) {
            updateButtonText(true);
        }

        if (currentRunCount > 0 && !isSilent) {
            console.log(`[AutoClear] 本次移除了 ${currentRunCount} 个透明元素。累计移除: ${totalRemovedCount}`);
        } else if (currentRunCount > 0 && isSilent) {
            console.log(`[Silent Clear] 移除了 ${currentRunCount} 个透明元素。`);
        }
    };

    // --- 循环控制函数 (不变) ---

    function startLoop(isSilent = false) {
        if (intervalId === null) {
            if (!isSilent) {
                console.warn(`🔔 [AutoClear] 启动循环清理，每 ${intervalTime / 1000} 秒执行一次。`);
            }
            runClearProcess(isSilent);
            intervalId = setInterval(() => runClearProcess(isSilent), intervalTime);
        }
    }

    function stopLoop() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            console.log('[AutoClear] 循环清理已停止。');
        }
    }

    // --- 针对有按钮的交互模式辅助函数 ---

    function updateButtonText(isRepeating) {
        const button = document.getElementById(buttonId);
        if (!button) return;

        const isLooping = intervalId !== null;

        // ⭐️ 仅改动以下颜色和文本逻辑，保持权重优先
        if (isLooping) {
            button.textContent = `⏸正在清理(已清${totalRemovedCount}个)`;
            // 开启：背景绿色，文字白色
            button.style.setProperty('background-color', '#28a745', 'important');
            button.style.setProperty('color', 'white', 'important');
        } else {
            button.textContent = `▶️清理透明元素`;
            // 关闭：背景 rgb(57 64 56)，文字 #9a9a9a
            button.style.setProperty('background-color', 'rgb(57 64 56)', 'important');
            button.style.setProperty('color', '#9a9a9a', 'important');
        }
    }

    function toggleClearState() {
        const isCurrentlyRepeating = intervalId !== null;
        const newState = !isCurrentlyRepeating;

        if (newState) {
            startLoop(false);
        } else {
            stopLoop();
        }

        localStorage.setItem(KEY, newState ? 'true' : 'false');
        updateButtonText(newState);
    }

    // --- 初始化交互模式 (不变) ---
    function initInteractiveMode() {
        console.log("⚙️ 检测到按钮，已切换至交互模式。");
        stopLoop();
        clearInterval(buttonCheckIntervalId);

        const button = document.getElementById(buttonId);
        if (!button) return;

        button.addEventListener('click', toggleClearState);

        // 初始化时也调用一次，确保颜色正确
        const initialRepeating = localStorage.getItem(KEY) === 'true';
        if (initialRepeating) {
            startLoop(false);
        } else {
            updateButtonText(false);
        }
    }

    // --- 按钮检查轮询函数 (不变) ---
    function checkForButton() {
        const button = document.getElementById(buttonId);

        if (button) {
            initInteractiveMode();
        } else {
            const initialRepeating = localStorage.getItem(KEY) === 'true';
            if (initialRepeating && intervalId === null) {
                startLoop(true);
            } else if (!initialRepeating && intervalId !== null) {
                stopLoop();
            }
        }
    }

    // --- 脚本主入口 (不变) ---

    const initialButton = document.getElementById(buttonId);

    if (initialButton) {
        initInteractiveMode();
    } else {
        console.warn(`[Silent Mode] 按钮 #${buttonId} 不存在。启动静默清理和按钮轮询 (每 ${buttonCheckTime / 1000} 秒)。`);

        checkForButton();

        buttonCheckIntervalId = setInterval(checkForButton, buttonCheckTime);
    }

})();
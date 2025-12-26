    // ==UserScript==
    // @name         🔒 页面保护模式 (双重验证+持久锁定)
    // @version      7.0
    // @run-at       document-start
    // @grant        none
    // ==/UserScript==

    (function () {
        'use strict';

        const KEY_PWD = 'privateProtect';
        const KEY_STATUS = 'nsfw_status'; // 保留原Key以维持之前的设置，仅修改显示文字
        const KEY_LOCKED = 'is_locked';

        // --- 1. 极致防闪现：在 HTML 渲染前拦截 ---
        const preemptiveLock = () => {
            if (localStorage.getItem(KEY_STATUS) === 'on' && localStorage.getItem(KEY_LOCKED) === 'true') {
                document.documentElement.style.background = '#000 !important';
                document.documentElement.style.visibility = 'hidden !important';
            }
        };
        preemptiveLock();

        // --- 2. 样式注入 ---
        const injectStyles = () => {
            if (document.getElementById('lock-screen-style')) return;
            const style = document.createElement('style');
            style.id = 'lock-screen-style';
            style.innerHTML = `
            #private-lock-screen {
                position: fixed !important; top: 0 !important; left: 0 !important;
                width: 100vw !important; height: 100vh !important;
                background: #050505 !important; backdrop-filter: blur(25px) !important;
                z-index: 2147483647 !important; display: none; align-items: center !important; justify-content: center !important;
                visibility: visible !important;
            }
            #private-lock-screen.active { display: flex !important; }
            .lock-card {
                background: #1a1a1a !important; padding: 35px 25px !important; border-radius: 20px !important;
                text-align: center !important; width: 85% !important; max-width: 320px !important;
                box-shadow: 0 25px 50px rgba(0,0,0,0.8) !important; color: #fff !important; font-family: sans-serif !important;
            }
            .lock-card h2 { margin-top:0; font-size:18px; color: #eee !important; letter-spacing: 1px; }
            .lock-card input {
                width: 100% !important; padding: 14px !important; box-sizing: border-box !important;
                border: 1px solid #333 !important; background: #000 !important; color: #fff !important;
                border-radius: 10px !important; margin-bottom: 12px !important; font-size: 16px !important; outline: none !important;
            }
            .lock-btn {
                width: 100% !important; padding: 12px !important; background: #007bff !important;
                color: #fff !important; border: none !important; border-radius: 10px !important;
                font-weight: bold !important; cursor: pointer !important; margin-top: 5px !important;
            }
            
            #alert-msg,
            #lock-msg { color:#ff4d4f; font-size:12px; margin-top:10px; min-height:15px; }
        `;
            document.documentElement.appendChild(style);
        };

        // --- 3. 初始化逻辑 ---
        const init = () => {
            injectStyles();
            if (document.getElementById('private-lock-screen')) return;

            const lockDiv = document.createElement('div');
            lockDiv.id = 'private-lock-screen';
            lockDiv.innerHTML = `
            <div class="lock-card">
                <h2 id="lock-title">🔒 页面保护验证</h2>
                <div id="input-container">
                    <input type="password" id="lock-input" placeholder="请输入解锁密码" autocomplete="off">
                    <input type="password" id="lock-input-confirm" placeholder="请再次输入确认密码" autocomplete="off" style="display:none;">
                </div>
                <button class="lock-btn" id="lock-submit">立即验证</button>
                <div id="lock-msg"></div>
                <div id="alert-msg"></div>
            </div>
        `;
            document.body.appendChild(lockDiv);

            const input1 = document.getElementById('lock-input');
            const input2 = document.getElementById('lock-input-confirm');
            const btn = document.getElementById('lock-submit');
            const title = document.getElementById('lock-title');
            const msg = document.getElementById('lock-msg');
            const alertmsg = document.getElementById('alert-msg');

            window.applyLockUI = () => {

                const isOn = localStorage.getItem(KEY_STATUS) === 'on';
                const isLock = localStorage.getItem(KEY_LOCKED) === 'true';
                const hasPwd = !!localStorage.getItem(KEY_PWD);

                if (isOn && (isLock || !hasPwd)) {
                    lockDiv.classList.add('active');
                    lockDiv.classList.add('notranslate');
                    document.documentElement.style.visibility = 'hidden';

                    if (!hasPwd) {
                        title.innerText = "🔒 设置保护密码";
                        input2.style.display = "block";
                        btn.innerText = "完成设置并解锁";
                        alertmsg.innerText = "*离开页面时自动锁屏，请牢记密码！如需关闭🔒页面保护，请进入导航-设置里关闭；如若遗忘密码，请清除浏览器缓存或在控制台输入 localStorage.getItem('privateProtect') 获取! 此信息只显示一次..."
                    } else {
                        title.innerText = "🔒 页面已锁定";
                        input2.style.display = "none";
                        btn.innerText = "验证解锁";
                        alertmsg.innerText = new Date()

                    }
                    setTimeout(() => input1.focus(), 250);
                }
            };

            const handleAction = () => {
                const saved = localStorage.getItem(KEY_PWD);
                const val1 = input1.value;
                const val2 = input2.value;

                if (!saved) {
                    if (!val1 || !val2) { msg.innerText = "密码不能为空"; return; }
                    if (val1 !== val2) { msg.innerText = "两次密码输入不一致"; return; }
                    localStorage.setItem(KEY_PWD, val1);
                    unlockDone();
                } else {
                    if (val1 === saved) {
                        unlockDone();
                    } else {
                        msg.innerText = "密码验证失败";
                        input1.value = '';
                    }
                }
            };

            const unlockDone = () => {
                localStorage.setItem(KEY_LOCKED, 'false');
                if (window._isTogglingOff) {
                    localStorage.setItem(KEY_STATUS, 'off');
                    window._isTogglingOff = false;
                }
                // 否则立即移除样式，显示正常页面
                var gate = document.getElementById('privacy-gate');
                if (gate) gate.remove();
                lockDiv.classList.remove('active');
                document.documentElement.style.visibility = 'visible';
                document.documentElement.style.background = '';
                input1.value = ''; input2.value = ''; msg.innerText = '';
                window.updateBtnUI();
            };

            btn.onclick = handleAction;
            input1.onkeydown = (e) => { if (e.key === 'Enter') { if (input2.style.display === "none") handleAction(); else input2.focus(); } };
            input2.onkeydown = (e) => { if (e.key === 'Enter') handleAction(); };

            window.toggleNSFWProtection = function () {
                if (localStorage.getItem(KEY_STATUS) === 'on') {
                    window._isTogglingOff = true;
                    localStorage.setItem(KEY_LOCKED, 'true');
                    window.applyLockUI();
                } else {
                    localStorage.setItem(KEY_STATUS, 'on');
                    window.updateBtnUI();
                    if (!localStorage.getItem(KEY_PWD)) window.applyLockUI();
                }
            };

            window.updateBtnUI = function () {
                const targetBtn = document.getElementById('nsfwmode_switch');
                if (!targetBtn) return;
                const isOn = localStorage.getItem(KEY_STATUS) === 'on';
                // 开启=绿，关闭=红
                targetBtn.style.setProperty('background', isOn ? 'green' : 'red', 'important');
                targetBtn.innerText = isOn ? "🔒页面保护(ON)" : "🔒页面保护(OFF)";
            };

            window.updateBtnUI();
            window.applyLockUI();

            const observer = new MutationObserver(() => window.updateBtnUI());
            observer.observe(document.body, { childList: true, subtree: true });
        };

        // --- 4. 监听离开与回归 ---
        /*
        const lockAction = () => { if (localStorage.getItem(KEY_STATUS) === 'on') localStorage.setItem(KEY_LOCKED, 'true'); };
        const wakeAction = () => {
            if (localStorage.getItem(KEY_STATUS) === 'on' && localStorage.getItem(KEY_LOCKED) === 'true') {
                if (typeof window.applyLockUI === 'function') window.applyLockUI();
                else document.documentElement.style.visibility = 'hidden';
            }
        };
    
        window.addEventListener('blur', lockAction);
        window.addEventListener('focus', wakeAction);
        window.addEventListener('pageshow', wakeAction);
        document.addEventListener('visibilitychange', () => { if (document.hidden) lockAction(); else wakeAction(); });
        */

        // --- 4. 监听离开与回归 (优化版：防止跳转重复锁屏) ---
        let lockTimer = null;

        const lockAction = () => {
            // 只有开启了模式才进行锁定操作
            if (localStorage.getItem(KEY_STATUS) === 'on') {
                // 清除之前的定时器，防止重复叠加
                if (lockTimer) clearTimeout(lockTimer);

                // 设定 200ms 延迟锁定
                // 如果是正常的站内跳转，新页面会在 200ms 内加载并重置状态，从而抵消锁定
                lockTimer = setTimeout(() => {
                    localStorage.setItem(KEY_LOCKED, 'true');
                }, 200);
            }
        };

        const wakeAction = () => {
            // 如果用户及时回来了，取消即将执行的锁定指令
            if (lockTimer) {
                clearTimeout(lockTimer);
                lockTimer = null;
            }

            // 检查是否真的处于锁定状态
            if (localStorage.getItem(KEY_STATUS) === 'on' && localStorage.getItem(KEY_LOCKED) === 'true') {
                if (typeof window.applyLockUI === 'function') window.applyLockUI();
                else document.documentElement.style.visibility = 'hidden';
            }
        };

        // 重点：离开页面时延迟锁，回来时立即取消延迟
        window.addEventListener('blur', lockAction);
        window.addEventListener('focus', wakeAction);
        window.addEventListener('pageshow', wakeAction);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                lockAction();
            } else {
                wakeAction();
            }
        });


        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
        else init();
    })();

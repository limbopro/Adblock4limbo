/**
 * js加载状态
 * 全局函数：脚本注入状态检测器 (移动端优化版)
 * 调用方法：window.geminiScriptCheck();
 */
window.geminiScriptCheck = function () {
    'use strict';

    const targetScripts = [
        { name: "沉浸式翻译", url: "Adblock4limbo.immersiveTranslation.user.js" },
        { name: "媒体资源查找器", url: "m3u8Andmp4Finder.user.js" },
        { name: "用户反馈信息", url: "feedBackLinkMake.user.js" },
        { name: "元素屏蔽器", url: "elementBlocker.user.js" },
        { name: "视频广告加速", url: "skipVideoAds.user.js" },
        { name: "WebDebugger", url: "WebDebugger.user.js" },
        { name: "脚本查看器", url: "ScriptFind.user.js" },
        { name: "友好确认框", url: "confirmndExecute.user.js" },
        { name: "外部链接提取器", url: "findAndDisplayExternalLinks.user.js" },
        { name: "透明元素清理", url: "clearLoop.user.js" },
        { name: "目标信息提示", url: "showLinkTipsModalOnce.user.js" },
        { name: "Adguard基础过滤", url: "Adguard.filter.user.js" },
        { name: "脚本管理器", url: "showJsManager.user.js" },
        { name: "成人保护模式", url: "pageProtect.user.js" }
    ];

    const performCheck = () => {
        const currentScripts = Array.from(document.scripts).map(s => s.src).filter(src => src !== "");
        return targetScripts.map(item => ({
            ...item,
            loaded: currentScripts.some(src => src.includes(item.url))
        }));
    };

    const panelId = 'gemini-script-status-panel';
    let panel = document.getElementById(panelId);

    if (!panel) {
        panel = document.createElement('div');
        panel.id = panelId;
        panel.classList.add('notranslate')
        // 移动端优化点：
        // 1. 宽度改为 calc(100% - 40px)，自适应屏幕宽度
        // 2. 增加 touch-action 确保滚动顺畅
        // 3. 边距改为百分比或较小固定值
        panel.style.cssText = `
            position: fixed !important;
            top: 10vh !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: calc(100% - 40px) !important;
            max-width: 320px !important;
            max-height: 60vh !important;
            background: rgba(10, 10, 10, 0.92) !important;
            color: #eee !important;
            padding: 14px !important;
            border-radius: 16px !important;
            font-size: 14px !important;
            font-family: -apple-system, system-ui, sans-serif !important;
            z-index: 2147483647 !important;
            box-shadow: 0 12px 48px rgba(0,0,0,0.7) !important;
            border: 1px solid rgba(255,255,255,0.15) !important;
            overflow-y: auto !important;
            backdrop-filter: blur(15px) !important;
            -webkit-overflow-scrolling: touch !important;
            transition: opacity 0.3s ease !important;
        `;
        document.body.appendChild(panel);
    }

    const render = () => {
        const results = performCheck();
        const loadedCount = results.filter(r => r.loaded).length;

        panel.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid #333; padding-bottom:10px;">
                <span style="font-weight:bold; color:#0affb3; font-size:15px; padding: 4px 0;" id="gemini-recheck-btn">
                    脚本状态 (${loadedCount}/${targetScripts.length}) 🔄
                </span>
                <span style="cursor:pointer; color:#999; font-size:24px; padding: 0 10px; line-height:1;" onclick="document.getElementById('${panelId}').remove()">×</span>
            </div>
            <div id="gemini-script-list" style="display: flex; flex-direction: column; gap: 8px;">
                ${results.map(res => `
                    <div style="display:flex; justify-content:space-between; align-items:center; font-family:monospace; opacity:${res.loaded ? '1' : '0.4'}">
                        <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:70%;">${res.name}</span>
                        <span style="color:${res.loaded ? '#00ff88' : '#ff4d4d'}; font-weight:bold; font-size:11px; background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">
                            ${res.loaded ? 'ON' : 'OFF'}
                        </span>
                    </div>
                `).join('')}
            </div>
            <div style="margin-top:14px; font-size:11px; color:#666; text-align:center; letter-spacing:1px;">LIMBOPRO ADGUARD SYSTEM</div>
        `;

        document.getElementById('gemini-recheck-btn').onclick = () => {
            panel.style.opacity = '0.5';
            setTimeout(() => {
                window.geminiScriptCheck();
                panel.style.opacity = '1';
            }, 300);
        };
    };

    render();
};
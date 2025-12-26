// ==UserScript==
// @name         Limbopro 网页划词搜索神器（a 标签优化版）
// @namespace    https://limbopro.com
// @version      1.3
// @description  将按钮替换为 a 标签，支持谷歌搜索、影视搜索、番号搜索，适配移动端与 PC。
// @author       limbopro & Gemini
// @match        https://*/*
// @icon         https://limbopro.com/favicon.ico
// @grant        none
// @license      MIT
// @run-at       document-idle
// ==/UserScript==

function initLimoProSearch() {
    if (window.limboproSearchPro) {
        console.log('划词搜索已存在');
        return;
    }

    window.limboproSearchPro = true;

    /* ---------- 配置区 ---------- */
    const buttons = [
        { text: '使用谷歌搜索', color: '#0ea5e9' },
        { text: '使用影视搜索', color: '#8b5cf6' },
        { text: '使用番号搜索', color: '#c42a4e' },
        { text: '划词搜索设置', color: '#6b7280', isSettings: true }
    ];

    const urls = [
        'https://www.google.com/search?q=',
        'https://limbopro.com/search.html#gsc.tab=0&gsc.q=',
        'https://limbopro.com/btsearch.html#gsc.tab=0&gsc.q=',
        null
    ];
    /* --------------------------- */

    const container = document.createElement('div');
    container.id = 'limbopro-search-pro';
    container.className = 'notranslate';
    Object.assign(container.style, {
        position: 'absolute',
        zIndex: '2147483647',
        display: 'none',
        pointerEvents: 'none',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        flexDirection: 'column',
        gap: '8px',
        padding: '10px 12px',
        borderRadius: '18px',
        boxShadow: '0 10px 36px rgba(0,0,0,0.18)',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.2s ease, opacity 0.15s ease',
        minWidth: '142px',
        alignItems: 'center',
        opacity: '0'
    });
    document.body.appendChild(container);

    const updateTheme = () => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // 使用 !important 确保背景色不被覆盖
        container.style.setProperty('background', isDark ? 'rgba(30,30,40,0.92) !important' : 'rgba(255,255,255,0.95) !important');
        container.style.border = isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.3)';
    };
    updateTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);

    const btns = buttons.map((cfg, i) => {
        // --- 关键修改：改为 a 元素 ---
        const btn = document.createElement('a');
        btn.textContent = cfg.text;

        Object.assign(btn.style, {
            display: 'block',
            width: '100%',
            padding: '6px 14px',
            fontSize: '13.5px',
            fontWeight: '600',
            color: '#fff',
            borderRadius: '14px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0,0,0,0.22)',
            pointerEvents: 'auto',
            transition: 'all 0.2s ease',
            transform: 'translateY(0)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            textDecoration: 'none',
            boxSizing: 'border-box'
        });
        btn.style.setProperty('background', cfg.color + ' !important');

        if (!cfg.isSettings) {
            btn.target = '_blank';
            btn.rel = 'noopener noreferrer';
            btn.dataset.url = urls[i];
            btn.href = 'javascript:void(0);'; // 初始为空
        } else {
            btn.href = 'javascript:void(0);';
        }

        const hoverIn = () => {
            btn.style.transform = 'translateY(-3px) scale(1.03)';
            btn.style.boxShadow = '0 10px 24px rgba(0,0,0,0.3)';
            btn.style.color = '#fff';
        };
        const hoverOut = () => {
            btn.style.transform = 'translateY(0) scale(1)';
            btn.style.boxShadow = '0 4px 14px rgba(0,0,0,0.22)';
        };
        btn.onmouseover = btn.ontouchstart = hoverIn;
        btn.onmouseout = btn.ontouchend = hoverOut;
        btn.onmousedown = e => e.stopPropagation();

        container.appendChild(btn);
        return btn;
    });

    let currentText = '';
    let showTimeout = null;

    const hide = () => {
        container.style.opacity = '0';
        setTimeout(() => {
            if (container.style.opacity === '0') {
                container.style.display = 'none';
            }
        }, 150);
        currentText = '';
        if (showTimeout) clearTimeout(showTimeout);
    };

    const showPanel = (text) => {
        const sel = window.getSelection();
        if (!sel.rangeCount) return hide();
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (!rect.width) return hide();

        container.style.display = 'flex';
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        container.style.display = 'none';

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const isMultiLine = rect.height > 24;

        let left = isMultiLine
            ? window.scrollX + rect.left - w - 12
            : window.scrollX + rect.right + 12 + 70;

        let top = isMultiLine
            ? window.scrollY + rect.bottom - h
            : window.scrollY + rect.top;

        const panelTop = top - window.scrollY;
        const panelBottom = panelTop + h;
        const textTop = rect.top;
        const textBottom = rect.bottom;

        if (isMultiLine && panelTop < textBottom && panelBottom > textTop) {
            top = window.scrollY + rect.bottom + 8;
        }

        top = Math.max(window.scrollY + 12, Math.min(top, window.scrollY + vh - h - 12));
        left = Math.max(window.scrollX + 12, Math.min(left, window.scrollX + vw - w - 12));

        container.style.top = top + 'px';
        container.style.left = left + 'px';
        container.style.display = 'flex';
        container.style.opacity = '1';

        currentText = text;

        // 动态更新所有 a 标签的链接地址
        btns.forEach(b => {
            if (b.dataset.url) {
                b.href = b.dataset.url + encodeURIComponent(text);
            }
        });
    };

    /* ---------- 事件绑定 ---------- */
    document.addEventListener('selectionchange', () => {
        if (showTimeout) clearTimeout(showTimeout);
        showTimeout = setTimeout(() => {
            const text = window.getSelection().toString().trim();
            if (text && text === currentText) return;
            if (text) {
                showPanel(text);
            } else if (currentText) {
                hide();
            }
        }, 100);
    });

    btns.forEach((btn, i) => {
        const cfg = buttons[i];
        btn.onclick = (e) => {
            if (cfg.isSettings) {
                e.preventDefault();
                e.stopPropagation();
                if (window.getSelection) window.getSelection().removeAllRanges();
                if (typeof body_build === 'function') body_build('true');

                const btn_hcss = document.getElementById('huacisousuo');
                if (btn_hcss) {
                    if (!document.getElementById('limp-breathe-kf')) {
                        const styleSheet = document.createElement('style');
                        styleSheet.id = 'limp-breathe-kf';
                        styleSheet.textContent = `@keyframes breathe { 0%,100% {transform:scale(1);} 50% {transform:scale(1.15);} }`;
                        document.head.appendChild(styleSheet);
                    }
                    btn_hcss.style.animation = 'breathe 0.6s ease-in-out infinite';
                    setTimeout(() => { btn_hcss.style.animation = ''; btn_hcss.style.transform = ''; }, 5000);
                }
            } else {
                if (!currentText) {
                    e.preventDefault();
                    return;
                }
                // 搜索后可以根据需要决定是否隐藏面板
                // hide(); 
            }
        };
    });

    document.addEventListener('mousedown', e => {
        if (!container.contains(e.target) && !window.getSelection().toString().trim()) hide();
    });

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const now = Date.now();
        if (now - lastScroll > 300 && !window.getSelection().toString().trim()) hide();
        lastScroll = now;
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !window.getSelection().toString().trim()) hide();
    });

    hide();
    console.log('划词搜索（a 标签版）已加载');
}

/* ---------- 状态切换逻辑 ---------- */

function toggleSearchState(x) {
    const searchPro = document.getElementById('limbopro-search-pro');
    if (!searchPro) {
        initLimoProSearch();
        document.getElementById('limbopro-search-pro').className = 'cmsnone notranslate';
    }
    const huacibtn = document.getElementById('huacisousuo');
    if (!huacibtn) return;

    const isOn = huacibtn.dataset.state === 'on';
    if (x !== 'false') {
        if (isOn) {
            huacibtn.textContent = '划词搜索(OFF)';
            huacibtn.style.setProperty('background-color', 'red', 'important');
            huacibtn.dataset.state = 'off';
            localStorage.setItem('huacisousuo', 'false');
            document.getElementById('limbopro-search-pro').className = 'cmsnone notranslate';
        } else {
            huacibtn.textContent = '划词搜索(ON)';
            huacibtn.style.setProperty('background-color', 'green', 'important');
            huacibtn.dataset.state = 'on';
            localStorage.setItem('huacisousuo', 'true');
            document.getElementById('limbopro-search-pro').className = 'cms notranslate';
        }
    } else {
        huacibtn.textContent = '划词搜索(OFF)';
        huacibtn.style.setProperty('background-color', 'red', 'important');
        huacibtn.dataset.state = 'off';
        document.getElementById('limbopro-search-pro').className = 'cmsnone notranslate';
    }
}

function waitForElement(selector, callback) {
    function check() {
        const el = document.querySelector(selector);
        if (el) callback(el);
        else requestAnimationFrame(check);
    }
    check();
}

waitForElement('#huacisousuo', (huacibtn) => {
    const saved = localStorage.getItem('huacisousuo');
    const searchPro = document.getElementById('limbopro-search-pro');

    if (saved === 'true'  /* || saved === null*/) {
        huacibtn.textContent = '划词搜索(ON)';
        huacibtn.style.setProperty('background-color', 'green', 'important');
        huacibtn.dataset.state = 'on';
        if (searchPro) searchPro.className = 'cms notranslate';
    } else {
        huacibtn.textContent = '划词搜索(OFF)';
        huacibtn.style.setProperty('background-color', 'red', 'important');
        huacibtn.dataset.state = 'off';
        if (searchPro) searchPro.className = 'cmsnone notranslate';
    }
});

if (localStorage.getItem('huacisousuo') === 'true' /* || localStorage.getItem('huacisousuo') === null*/) {
    initLimoProSearch();
}


const style = document.createElement('style');
style.textContent = `
    .cmsnone { display: none !important; }
`;
document.head.appendChild(style);
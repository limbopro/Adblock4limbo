
/**
 * 目的：在页面加载时自动显示一个悬浮窗口，用于收集用户环境信息和脚本状态，以便反馈调试。
 * 1. 自动注入 CSS 样式并创建 DOM 结构。
 * 2. 自动收集 URL, UA/OS 信息，以及关键脚本、元素、全局变量和 AJAX 库状态。
 * 3. 提供“复制调试信息”功能。
 * 4. 2 分钟后自动移除。
 */

// 悬浮窗的自动移除时间
window.AL_FEEDBACK_TIMEOUT_MS = 120000; // 重命名变量
// 要检查的脚本文件名列表
window.AL_TARGET_SCRIPTS = [ // 重命名变量
    'Adblock4limbo.user.js',
    'Adblock4limbo.function.js',
    'Adblock4limbo.immersiveTranslation.user.js',
    'isAgent.js'
];


// --- 悬浮窗函数 ---

/**
 * 检查并注入悬浮窗的基本 CSS 样式
 */
window.alFeedback_injectStyles = function alFeedback_injectStyles() { // 重命名函数
    const STYLE_ID = 'al-feedback-style'; // 重命名 ID
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
        #al-feedback-box { /* 重命名 ID */
            position: fixed;
            top: 15%; 
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999999999;
            background-color: rgba(220, 50, 50, 0.95); 
            color: white;
            padding: 20px 25px;
            border-radius: 8px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
            font-size: 16px;
            max-width: 90%;
            text-align: left;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            line-height: 1.5;
        }
        #al-feedback-box.show { /* 重命名 ID */
            opacity: 1;
        }
        .al-close-btn { /* 重命名类名 */
            float: right;
            font-weight: bold;
            font-size: 20px;
            cursor: pointer;
            line-height: 1;
            padding-left: 10px;
        }
        .al-info-block { /* 重命名类名 */
            margin-top: 15px;
            padding-top: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
            font-size: 14px;
            height: 200px;
            overflow: scroll; 
            word-break: break-all;
        }
        .al-copy-btn { /* 重命名类名 */
            display: block;
            width: 100%;
            margin-top: 15px;
            padding: 8px;
            background-color: #ffdd57;
            color: #333;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.2s;
        }
        .al-copy-btn:hover { /* 重命名类名 */
            background-color: #ffe88c;
        }
        .al-script-status-list { /* 重命名类名 */
            list-style: none;
            padding-left: 0;
            margin: 5px 0 0 0;
        }
        .al-script-status-list li { /* 重命名类名 */
            margin-bottom: 3px;
        }
        .al-script-loaded { /* 重命名类名 */
            color: lightgreen;
        }
        .al-script-missing { /* 重命名类名 */
            color: #ffdd57; 
        }
        .al-contact-link { /* 重命名类名 */
            color: #ffdd57; 
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
}

/**
 * 检查目标脚本、关键 DOM 元素、全局变量和 AJAX 库/API 的存在状态 (已增强)
 * @returns {string} 返回包含所有检查状态的 HTML 列表
 */
function alFeedback_checkScriptExistence() { // 重命名函数
    const scripts = document.getElementsByTagName('script');
    let statusHtml = '<ul class="al-script-status-list">';

    // --- 脚本文件状态 ---
    statusHtml += '<li><strong>--- 脚本文件状态 ---</strong></li>';
    AL_TARGET_SCRIPTS.forEach(targetName => {
        let found = false;
        for (let i = 0; i < scripts.length; i++) {
            const src = scripts[i].src;
            if (src && src.includes(targetName)) {
                found = true;
                break;
            }
        }
        const statusClass = found ? 'al-script-loaded' : 'al-script-missing';
        const statusIcon = found ? '已挂载✅' : '未挂载❌';
        statusHtml += `<li><span class="${statusClass}">${statusIcon} ${targetName}</span></li>`;
    });

    // --- 关键元素状态 ---
    statusHtml += '<li><strong>--- 关键元素状态 ---</strong></li>';
    const TARGET_ELEMENTS = [
        { id: 'dh_button', name: '导航按钮' },
        { id: 'translation-button', name: '沉浸式翻译按钮' }
    ];

    TARGET_ELEMENTS.forEach(item => {
        const found = !!document.getElementById(item.id);
        const statusClass = found ? 'al-script-loaded' : 'al-script-missing';
        const statusIcon = found ? '存在✅' : '缺失❌';
        statusHtml += `<li><span class="${statusClass}">${statusIcon} 元素: ${item.name} (ID: ${item.id})</span></li>`;
    });

    // --- 全局变量状态 (window.isAgent) ---
    statusHtml += '<li><strong>--- 全局变量状态 ---</strong></li>';
    const isAgentExists = typeof window.isAgent !== 'undefined';
    const isAgentStatusClass = isAgentExists ? 'al-script-loaded' : 'al-script-missing';
    const isAgentStatusIcon = isAgentExists ? '存在✅' : '缺失❌';
    statusHtml += `<li><span class="${isAgentStatusClass}">${isAgentStatusIcon} 全局变量: window.isAgent</span></li>`;

    // --- 异步请求/库状态 (AJAX Heuristic Check) ---
    statusHtml += '<li><strong>--- 异步请求/库状态 (推测AJAX) ---</strong></li>';

    const AJAX_CHECKS = [
        { name: 'window.XMLHttpRequest', exists: typeof window.XMLHttpRequest !== 'undefined' },
        { name: 'window.fetch', exists: typeof window.fetch === 'function' },
        { name: 'window.jQuery (或 $)', exists: typeof window.jQuery !== 'undefined' || typeof window.$ !== 'undefined' },
        { name: 'window.axios', exists: typeof window.axios !== 'undefined' }
    ];

    AJAX_CHECKS.forEach(check => {
        const statusClass = check.exists ? 'al-script-loaded' : 'al-script-missing';
        const statusIcon = check.exists ? '存在✅' : '缺失❌';
        statusHtml += `<li><span class="${statusClass}">${statusIcon} ${check.name}</span></li>`;
    });


    statusHtml += '</ul>';
    return statusHtml;
}


/**
 * 核心复制函数：将调试信息复制到剪贴板
 */
function alFeedback_copyDebugInfo(infoBlockId) { // 重命名函数
    const infoBlock = document.getElementById(infoBlockId);
    if (!infoBlock) return;

    // 提取纯文本信息，去除 HTML 标签，并格式化
    const debugInfoText =
        infoBlock.innerText.replace('系统信息 (用于调试):\n', '') // 移除标题
            .trim()
            .split('\n')
            .map(line => line.trim()) // 清理每行两端的空格
            .filter(line => line.length > 0) // 移除空行
            .join('\n');

    // 使用 Clipboard API 复制文本
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(debugInfoText).then(() => {
            // 复制成功后，临时改变按钮文本
            const btn = document.querySelector('.al-copy-btn'); // 使用新的类名
            if (btn) {
                btn.textContent = '已复制!';
                setTimeout(() => {
                    btn.textContent = '复制调试信息';
                }, 1500);
            }
        }).catch(err => {
            console.error('复制失败:', err);
            confirmndExecuteFC('复制失败，请手动选择复制。');
        });
    } else {
        // 降级处理
        console.warn('Clipboard API 不可用，使用旧方法复制。');
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = debugInfoText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        const btn = document.querySelector('.al-copy-btn'); // 使用新的类名
        if (btn) {
            btn.textContent = '已复制!';
            setTimeout(() => {
                btn.textContent = '复制调试信息';
            }, 1500);
        }
    }
}


/**
 * 显示悬浮警告框
 */
window.alFeedback_showPanel = function alFeedback_showPanel() { // 重命名函数
    const BOX_ID = 'al-feedback-box'; // 重命名 ID
    const INFO_BLOCK_ID = 'al-debug-info-content'; // 重命名 ID

    let existingBox = document.getElementById(BOX_ID);
    if (existingBox) {
        existingBox.remove();
    }

    alFeedback_injectStyles(); // 调用已修改名称的函数

    // --- 动态获取信息 ---
    const currentURL = window.location.href;
    const userAgent = navigator.userAgent;
    const platform = navigator.platform || navigator.oscpu || '未知操作系统';
    const scriptStatusHtml = alFeedback_checkScriptExistence(); // 调用已修改名称的函数


    // 构建包含所有信息的 HTML 内容 
    const messageHTML = `
        <span class="al-close-btn" onclick="this.parentElement.remove();">&times;</span> <p style="margin-bottom: 10px;">
            <strong>Adblock4limbo:</strong> 调试信息面板。请复制以下信息，以便向开发者反馈问题。
        </p>
        
        <p style="margin-bottom: 0;">
            联系博主：<a href="https://limbopro.com/6.html" target="_blank" class="al-contact-link">点此联系？反馈</a> 或<a href="https://limbopro.com/feedback/" target="_blank" class="al-contact-link">匿名留言</a> </p>

        <div class="al-info-block" id="${INFO_BLOCK_ID}"> <strong>系统信息 (用于调试):</strong>
            <br>
            <strong>当前页面URL:</strong> ${currentURL}
            <br>
            <strong>OS/平台:</strong> ${platform}
            <br>
            <strong>UA:</strong> ${userAgent}
            <br>
            <strong>关键组件加载状态:</strong> 
            ${scriptStatusHtml} 
        </div>
        
        <button class="al-copy-btn" onclick="alFeedback_copyDebugInfo('${INFO_BLOCK_ID}')">复制调试信息</button> `;

    const box = document.createElement('div');
    box.id = BOX_ID;
    box.innerHTML = messageHTML;

    document.body.appendChild(box);

    // 渐入效果
    setTimeout(() => {
        box.classList.add('show');
    }, 10);

    // 2 分钟后自动移除
    setTimeout(() => {
        if (box) {
            box.classList.remove('show');
            setTimeout(() => {
                if (box && box.parentElement) {
                    box.remove();
                }
            }, 500);
        }
    }, AL_FEEDBACK_TIMEOUT_MS); // 使用新的变量名

    updateFeedbackLink("a.al-contact-link[href*='feedback']")
}

// ⚠️ 将 alFeedback_copyDebugInfo 函数暴露到全局
window.alFeedback_copyDebugInfo = alFeedback_copyDebugInfo;

// --- 脚本主流程：自动显示弹窗 ---

// 自动显示弹窗的调用 (如果您希望它在脚本加载时自动运行，请取消注释下一行)
// alFeedback_showPanel(); 

console.log(`脚本已运行，自动显示反馈信息面板。`);
console.log(`⚠️ 悬浮窗自动关闭时间设置为 ${AL_FEEDBACK_TIMEOUT_MS / 1000} 秒 (2 分钟)。`); // 使用新的变量名



/**
 * 获取当前页面的 URL 和标题，并将其附加到指定的 URL 作为 UTM 参数。
 * 基础 URL: https://limbopro.com/feedback/
 */
function generateFeedbackUrlWithContext() {
    // 1. 获取当前页面的完整 URL 和标题
    const currentPageUrl = window.location.href;
    const currentPageTitle = document.title;

    // 2. 定义目标基础 URL
    const baseUrl = 'https://limbopro.com/feedback/';

    // 3. 创建 URL 对象并添加参数 (使用现代 API 确保自动编码)
    const url = new URL(baseUrl);

    // 将当前 URL 作为 utm_source (来源)
    url.searchParams.set('utm_source', currentPageUrl);

    // 将当前标题作为 utm_medium (媒介/内容)
    url.searchParams.set('utm_medium', currentPageTitle);

    return url.toString(); // 返回最终生成的 URL 字符串
}

/**
 * 查找 ID 为 'ifeedback' 的链接元素，并用动态生成的 URL 替换其 href 属性。
 */

window.updateFeedbackLink = function updateFeedbackLink(linkElementId) {

    // 1. 生成带有上下文的 URL
    const newHref = generateFeedbackUrlWithContext();

    // 2. 获取目标链接元素
    const feedbackLink = document.querySelector(linkElementId);

    if (feedbackLink && feedbackLink.tagName === 'A') {
        // 3. 替换 href 属性
        feedbackLink.href = newHref;

        console.log(`✅ 成功更新链接 #${linkElementId} 的 href 属性为:`);
        console.log(newHref);
    } else {
        console.error(`❌ 无法找到 ID 为 '${linkElementId}' 的 <a> 链接元素。`);
    }
}

// 确保在 DOM 元素加载完毕后执行更新操作
document.addEventListener('DOMContentLoaded', updateFeedbackLink);

// 或者如果您的脚本放在页面底部，可以直接调用：
// updateFeedbackLink();

// =================================================================
// 核心模块 V15.0：美化样式
// =================================================================


function injectStyles(containerId, windowId) {
    const style = document.createElement('style');
    style.textContent = `
        /* 1. 最外层容器：负责定位、美化、阴影和拖拽热区 */
        #${containerId} {
            position: fixed; 
            top: 20px; /* 稍微往下移 */
            right: 20px; 
            z-index: 1141544;
            transition: transform 0.2s ease-out; /* 仅对拖拽使用 transform 过渡 */
            
            /* ✨ 美化：圆角和更深/柔和的阴影 */
            border-radius: 12px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05); 
            
            width: 400px; /* 调整宽度 */
            
            /* 背景和 Padding */
            background: #f7f7f7; /* 柔和的浅灰色背景作为外层 padding */
            padding: 15px; 
            
            cursor: default; 
            user-select: none;
            font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* 2. 内部浮窗：内容容器 */
        #${windowId} {
            background: #fff; /* 确保内容区纯白 */
            border: 1px solid #e0e0e0; /* 柔和的边框 */
            border-radius: 8px; /* 内部圆角 */
            font-size: 13px; /* 稍微增大字体 */
            max-height: 100vh; 
            overflow: hidden; /* 隐藏内部滚动条，让列表控制滚动 */
        }

        /* 3. 内部拖拽区域和光标设置 */
        #${windowId} #gemini-header,
        #${windowId} #gemini-status-bar,
        #${windowId} .gemini-tip-text,
        #${containerId} { 
            cursor: move; 
            touch-action: none; 
        }
        
        /* 阻止内部可点击元素继承 move 光标 */
        #${windowId} * {
            cursor: default;
        }
        #${windowId} button, #${windowId} span[id$="close-btn"], #${windowId} .element-info, #${windowId} .tab-btn {
             cursor: pointer !important;
        }

        /* 头部样式 */
        #${windowId} #gemini-header {
            color:black;
            padding: 10px 15px;
            background: #f8f8f8; /* 浅色背景 */
            border-bottom: 1px solid #ececec;
        }

        /* 状态栏样式 (美化) */
        #${windowId} #gemini-status-bar {
            padding: 8px 15px;
            background: #e6f7ff; /* 浅蓝色背景，强调反馈区域 */
            color: #0050b3; /* 深蓝色文字 */
            border-top: 1px solid #cceeff;
            font-weight: 500;
            text-align: left;
            border-radius: 0 0 8px 8px; /* 底部圆角 */
        }

        /* 提示信息样式 (美化) */
        #${windowId} .gemini-tip-text {
            padding: 5px 15px;
            margin:5px 0px 5px 0px;
            background: #fafafa; /* 淡灰色背景 */
            color: #888;
            /*
            max-height:50px;
            overflow:auto;
            */
            font-size: 11px;
            max-height:50px; /*新增*/
            overflow:auto; /*新增*/
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
            max-height: 130px; 
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


        /* 移动端媒体查询：屏幕宽度小于 768px */
        @media (max-width: 768px) {
            #${containerId} {
                width: 90vw; 
                right: 5vw; 
                left: 5vw; 
                top: 5px;
                /* padding: 10px; */ /* 移动端减小 padding */
                padding: 15px; /* 移动端减小 padding */
            }
        }
    `;
    document.head.appendChild(style);
}



updateFeedbackLink('#ifeedback');
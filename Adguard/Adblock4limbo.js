/**
 * Adblock4limbo - Web Ad Removal Script
 * Author: limbopro
 * Documentation: https://limbopro.com/archives/12904.html
 * Contact: https://t.me/limboprobot
 * Telegram Group: https://t.me/Adblock4limbo
 * FAQ: https://t.me/Adblock4limbo/21
 * Github: https://github.com/limbopro/Adblock4limbo
 */

/**
 * QuantumultX Configuration:
 *
 * [rewrite_local]
 * ^https?:\/\/www\.example\.com(?!(.*(cdn-cgi|(\.(js|css|jpg|jpeg|png|webp|gif|zip|woff|woff2|m3u8|mp4|mov|m4v|avi|mkv|flv|rmvb|wmv|rm|asf|asx|mp3|json|ico|otf|ttf))))).* url script-response-body https://limbopro.com/Adguard/Adblock4limbo.js
 *
 * [mitm]
 * hostname = www.example.com
 */

/**
 * Modifies request headers to spoof User-Agent
 * var requestHeaders = $request.headers;
 * requestHeaders['User-Agent'] = 'Mozilla/6.0 (iPhone 15; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/116.0.5845.118 Mobile/15E148 Safari/604.1';
 */

/**
 * Adblock4limbo - Web Ad Removal Script (Enhanced with Domain-Specific CSS Injection)
 * Author: limbopro
 * ... (其他注释不变) ...
 */

//const CSS_URL = "https://limbopro.com/CSS/Adblock4limbo.user.css";
const privacyGate_style = `
<head>
<style id="privacy-gate">
    /* 初始强制黑屏 */
    html.locked body { 
        visibility: hidden !important; 
        background: #000 !important;  
    }
</style>
`

const privacyGate_script = `
<script>
    (function() {
        const isOn = localStorage.getItem('nsfw_status') === 'on';
        const isLocked = localStorage.getItem('is_locked') === 'true';
        const hasPwd = !!localStorage.getItem('privateProtect');

        // 只有在“开启了保护”且“处于锁定状态或没设密码”时，才保持黑屏
        if (isOn && (isLocked || !hasPwd)) {
            document.documentElement.classList.add('locked');
        } else {
            // 否则立即移除样式，显示正常页面
            var gate = document.getElementById('privacy-gate');
            if (gate) gate.remove();
        }
    })();
</script>
</body>
`


const JS_URL = "https://limbopro.com/Adguard/Adblock4limbo.user.js";
const fc_JS_URL = "https://limbopro.com/Adguard/Adblock4limbo.function.js";
const fd_JS_URL = "https://limbopro.com/Adguard/elementBlocker.user.js";
const agent_JS_URL = "https://limbopro.com/Adguard/isAgent.js"; // 无实意

// 基础注入内容
// const TITLE_INJECTION_BASE = `<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
// 不再默认加载全局 Adgurad基础过滤器（CSS） 如需去导航-工具箱开启
const TITLE_INJECTION_BASE = `
<script type="text/javascript" defer src="${JS_URL}"></script>
<script type="text/javascript" defer src="${fc_JS_URL}"></script>
<script type="text/javascript" defer src="${fd_JS_URL}"></script>
<script type="text/javascript" defer src="${agent_JS_URL}"></script>
`;

// const BODY_INJECTION_BASE = `<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
// 不再默认加载全局 Adgurad基础过滤器（CSS） 如需去导航-工具箱开启
const BODY_INJECTION_BASE = `
<script type="text/javascript" defer src="${JS_URL}">
<script type="text/javascript" defer src="${fc_JS_URL}"></script>
<script type="text/javascript" defer src="${fd_JS_URL}"></script>
<script type="text/javascript" defer src="${agent_JS_URL}"></script>
</body>
`;

// 正则表达式 (不变)
const TARGET_SITES_REGEX = /(missav|netflav|hitomi|supjav|njav|javday|91porna|lk1\.supremejav\.com|turbovidhls\.com|trailerhg\.xyz|turbovidhls\.com|turboplayers\.xyz|javggvideo\.xyz|turtleviplay\.xyz|findjav\.com|stbturbo\.xyz|emturbovid\.com)/i;
const JAVBUS_REGEX = /(javbus)/i;
const DMM_REGEX = /dmm\.co/i;
const MDSP_REGEX = /d1skbu98kuldnf\.cloudfront\.net/i;
const HUARENLIVE_REGEX = /(huaren|huavod)\.(live|top)\/player\/ec\.php/i;

const TITLE_REGEX = /<head>/i;
const BODY_REGEX = /<\/body>/i;
const WINDOW_OPEN_REGEX = /window\.open\s*\(/g;

// ===========================================
// 用户提供的 getRootDomain 函数
// ===========================================
/**
 * 提取主域名 (Root Domain)，考虑复杂的公共后缀 (如 co.uk)。
 * @param {string} hostname - 完整的 Hostname (e.g., www.bbc.co.uk)
 * @returns {string} - 主域名 (e.g., bbc.co.uk)
 */
function getRootDomain(hostname) {
    if (!hostname) return '';

    // 1. 预处理：移除 www. 前缀
    let siteName = hostname.toLowerCase();
    if (siteName.startsWith('www.')) {
        siteName = siteName.substring(4);
    }
    // 额外移除常见的移动端前缀 m. / mobile.
    if (siteName.startsWith('m.')) {
        siteName = siteName.substring(2);
    }
    if (siteName.startsWith('mobile.')) {
        siteName = siteName.substring(7);
    }

    // 2. 将域名分解成段 (Label)
    let parts = siteName.split('.');

    // 3. 定义常见的复杂公共后缀 (Public Suffix List - PSL 的简化版)
    const complexTLDs = [
        'co.uk', 'com.cn', 'co.jp', 'com.au', 'com.hk', 'com.tw',
        'nom.co', 'com.br', 'gov.cn', 'ac.jp', 'org.uk'
    ];

    // 4. 检查是否匹配复杂的公共后缀
    if (parts.length > 2) {
        // 检查最后两段是否是一个复杂的 TLD (e.g., "co.uk")
        const lastTwo = parts.slice(-2).join('.');

        if (complexTLDs.includes(lastTwo)) {
            // 如果是复杂的 TLD，我们取最后三段作为主域名
            return parts.slice(-3).join('.');
        }
    }

    // 5. 默认行为 (简单 TLD，如 .com)
    // 取最后两段作为主域名
    return parts.slice(-2).join('.');
}


// 主处理函数
function main() {
    try {
        const url = $request.url;
        const headers = $response.headers;
        let body = $response.body;

        // 1. 必须是 text/html 才处理
        const contentType = headers['Content-Type'] || headers['content-type'] || '';
        if (!contentType.includes('text/html')) {
            $done({});
            return;
        }

        // 2. 确保 body 是字符串
        if (typeof body !== 'string') {
            try {
                // Surge 有时返回 Buffer，尝试转码
                body = body.toString('utf8');
            } catch (e) {
                console.log("Failed to decode body");
                $done({});
                return;
            }
        }

        let modified = false;
        let newBody = body;


        // --- 动态 CSS 注入逻辑 (使用纯字符串和正则提取 hostname) ---
        let hostname = '';

        // 提取 hostname: 匹配 (http:// 或 https://) 之后，到第一个 / 或 : 之前的字符串
        // (?:https?:\/\/)? : 匹配可选的 http:// 或 https://
        // ([^:\/\n?]+) : 捕获组，匹配非 : / ? 字符
        const hostnameMatch = url.match(/^(?:https?:\/\/)?([^:\/\n?]+)/im);
        if (hostnameMatch && hostnameMatch.length > 1) {
            hostname = hostnameMatch[1];
        }

        // 3. 使用 getRootDomain 函数获取主域名
        const domain = getRootDomain(hostname);
        let domainCSS_Injection = '';
        let domainCSS_Injection_byHand = '';

        // 检查域名是否有效（包含 .）
        if (domain && domain.includes('.')) {
            const domainCSS_URL = `https://limbopro.com/CSS/${domain}.css`;
            domainCSS_Injection = `<link rel="stylesheet" href="${domainCSS_URL}" type="text/css" />\n`;
            const domainCSS_URLbyHand = `https://limbopro.com/CSS/limbopro.${domain}.css`;
            domainCSS_Injection_byHand = `<link rel="stylesheet" href="${domainCSS_URLbyHand}" type="text/css" />\n`;
            console.log(`[Adblock4limbo] Injecting domain-specific CSS: ${domainCSS_URL}`);
        } else if (hostname) {
            console.log(`[Adblock4limbo] Ignored non-standard hostname or IP: ${hostname}`);
        }

        // 动态组合最终的注入内容
        const FINAL_TITLE_INJECTION = `<head>\n${TITLE_INJECTION_BASE}${domainCSS_Injection}${domainCSS_Injection_byHand}`;
        const FINAL_BODY_INJECTION = `\n${domainCSS_Injection}${domainCSS_Injection_byHand}${BODY_INJECTION_BASE}`;
        // --- 动态 CSS 注入逻辑结束 ---


        // 4. URL 匹配逻辑 (不变)
        const isTargetSite = TARGET_SITES_REGEX.test(url);
        const isJavbus = JAVBUS_REGEX.test(url);
        const isDMM = DMM_REGEX.test(url);
        const isMDSP = MDSP_REGEX.test(url);
        const isHuarenlive = HUARENLIVE_REGEX.test(url);

        if (isTargetSite) {
            if (TITLE_REGEX.test(newBody)) {
                newBody = newBody.replace(TITLE_REGEX, FINAL_TITLE_INJECTION);
                modified = true;
            }
            newBody = newBody.replace(WINDOW_OPEN_REGEX, 'function block_open(');
            modified = true;

        } else if (isJavbus || isDMM || isMDSP) {
            if (BODY_REGEX.test(newBody)) {

                newBody = newBody.replace(TITLE_REGEX, privacyGate_style) // 插入样式
                newBody = newBody.replace(BODY_REGEX, privacyGate_script) // 插入脚本

                newBody = newBody.replace(BODY_REGEX, FINAL_BODY_INJECTION);
                modified = true;
            }

        } else if (isHuarenlive) {
            newBody = newBody
                .replace(/"time":\s*"20"/g, '"time":"0"')
                .replace(/"img":\s*"[^"]*"/g, '"img":""');
            modified = true;

        } else {
            if (TITLE_REGEX.test(newBody)) {

                newBody = newBody.replace(TITLE_REGEX, privacyGate_style) // 插入样式
                newBody = newBody.replace(BODY_REGEX, privacyGate_script) // 插入脚本
                
                newBody = newBody.replace(TITLE_REGEX, FINAL_TITLE_INJECTION);
                modified = true;
            }
        }

        // 5. 如果没有修改，直接返回
        if (!modified) {
            $done({});
            return;
        }

        // 6. 修改响应头 (不变)
        const newHeaders = { ...headers };
        newHeaders["Cross-Origin-Embedder-Policy"] = "unsafe-none";
        newHeaders["Cross-Origin-Opener-Policy"] = "unsafe-none";
        newHeaders["Cross-Origin-Resource-Policy"] = "cross-origin";

        delete newHeaders["Content-Security-Policy"];
        delete newHeaders["content-security-policy"];
        delete newHeaders["X-Frame-Options"];
        delete newHeaders["x-frame-options"];
        delete newHeaders["Referrer-Policy"];

        // 7. 返回修改后的响应
        $done({
            headers: newHeaders,
            body: newBody
        });

    } catch (error) {
        console.log(`Adblock4limbo Error: ${error.message}`);
        $done({});
    }
}

// 执行
main();
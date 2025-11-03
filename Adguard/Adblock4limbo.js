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


const CSS_URL = "https://limbopro.com/CSS/Adblock4limbo.user.css";
const JS_URL = "https://limbopro.com/Adguard/Adblock4limbo.user.js";

const TITLE_INJECTION = `</title>
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script>
`;

const BODY_INJECTION = `
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script></body>
`;

// 正则表达式
const TARGET_SITES_REGEX = /(missav|netflav|supjav|njav|javday|91porna)/i;
const JAVBUS_REGEX = /javbus/i;
const DMM_REGEX = /dmm\.co/i;
const MDSP_REGEX = /d1skbu98kuldnf\.cloudfront\.net/i;
const HUARENLIVE_REGEX = /huaren\.live\/player\/ec\.php/i;

const TITLE_REGEX = /<\/title>/i;
const BODY_REGEX = /<\/body>/i;
const WINDOW_OPEN_REGEX = /window\.open\s*\(/g;  // 更精确匹配

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
            // Surge 有时返回 Buffer，尝试转码
            try {
                body = body.toString('utf8');
            } catch (e) {
                console.log("Failed to decode body");
                $done({});
                return;
            }
        }

        let modified = false;
        let newBody = body;

        // 3. URL 匹配逻辑
        const isTargetSite = TARGET_SITES_REGEX.test(url);
        const isJavbus = JAVBUS_REGEX.test(url);
        const isDMM = DMM_REGEX.test(url);
        const isMDSP = MDSP_REGEX.test(url);
        const isHuarenlive = HUARENLIVE_REGEX.test(url);

        if (isTargetSite) {
            if (TITLE_REGEX.test(newBody)) {
                newBody = newBody.replace(TITLE_REGEX, TITLE_INJECTION);
                modified = true;
            }
            // 安全替换 window.open(
            newBody = newBody.replace(WINDOW_OPEN_REGEX, 'function block_open(');
            modified = true;

        } else if (isJavbus || isDMM || isMDSP) {
            if (BODY_REGEX.test(newBody)) {
                newBody = newBody.replace(BODY_REGEX, BODY_INJECTION);
                modified = true;
            }

        } else if (isHuarenlive) {
            newBody = newBody
                .replace(/"time":\s*"20"/g, '"time":"0"')
                .replace(/"img":\s*"[^"]*"/g, '"img":""');  // 替换所有 img 字段
            modified = true;

        } else {
            // 默认注入 title
            if (TITLE_REGEX.test(newBody)) {
                newBody = newBody.replace(TITLE_REGEX, TITLE_INJECTION);
                modified = true;
            }
        }

        // 4. 如果没有修改，直接返回
        if (!modified) {
            $done({});
            return;
        }

        // 5. 修改响应头
        const newHeaders = { ...headers };
        newHeaders["Cross-Origin-Embedder-Policy"] = "unsafe-none";
        newHeaders["Cross-Origin-Opener-Policy"] = "unsafe-none";
        newHeaders["Cross-Origin-Resource-Policy"] = "cross-origin";

        delete newHeaders["Content-Security-Policy"];
        delete newHeaders["content-security-policy"];
        delete newHeaders["X-Frame-Options"];
        delete newHeaders["x-frame-options"];
        delete newHeaders["Referrer-Policy"];

        // 6. 返回修改后的响应
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
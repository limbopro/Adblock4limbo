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

// CSS and JS resources for ad removal
const CSS_URL = "https://limbopro.com/CSS/Adblock4limbo.user.css";
const JS_URL = "https://limbopro.com/Adguard/Adblock4limbo.user.js";

// HTML injection strings
const TITLE_INJECTION = `</title>
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script>
`;

const BODY_INJECTION = `
<link rel="stylesheet" href="${CSS_URL}" type="text/css" />
<script type="text/javascript" async="async" src="${JS_URL}"></script></body>
`;

// Regular expressions for URL matching
const TARGET_SITES_REGEX = /(missav|netflav|supjav|njav|javday)/i;
const JAVBUS_REGEX = /javbus/i;
const HUARENLIVE_REGEX = /huaren\.live\/player\/ec\.php/i;

// Regular expressions for content manipulation
const TITLE_REGEX = /<\/title>/i;
const BODY_REGEX = /<\/body>/i;
const WINDOW_OPEN_REGEX = /window\.open/g;

// Main function to process response
function processResponse() {
    const requestUrl = $request.url;
    let responseBody = $response.body;

    // Validate response body
    if (!responseBody) {
        console.log("Response body is null or undefined");
        $done({ url: requestUrl });
        return;
    }

    // Check URL matches
    const isTargetSite = requestUrl.match(TARGET_SITES_REGEX);
    const isJavbus = requestUrl.match(JAVBUS_REGEX);
    const isHuarenlive = requestUrl.match(HUARENLIVE_REGEX);

    // Process response body based on URL
    if (isTargetSite) {
        responseBody = responseBody
            .replace(TITLE_REGEX, TITLE_INJECTION)
            .replace(WINDOW_OPEN_REGEX, "");
    } else if (isJavbus) {
        responseBody = responseBody.replace(BODY_REGEX, BODY_INJECTION);
    } else if (isHuarenlive) {
        responseBody = responseBody
            .replace(/"time":"20"/g, '"time":"0"')
            //.replace(/"ads":\s*\{[^}]*\}/g, '"ads": {}')
            .replaceAll(/"img":\s*"[^"]*"/g, '"img": ""')
    } else {
        responseBody = responseBody.replace(TITLE_REGEX, TITLE_INJECTION);
    }

    // Modify response headers
    const responseHeaders = {
        ...$response.headers,
        "Cross-Origin-Embedder-Policy": "unsafe-none",
        "Cross-Origin-Opener-Policy": "unsafe-none",
        "Cross-Origin-Resource-Policy": "cross-origin"
    };

    // Remove restrictive headers
    delete responseHeaders["Content-Security-Policy"];
    delete responseHeaders["X-Frame-Options"];
    delete responseHeaders["Referrer-Policy"];

    // Return modified response
    $done({
        headers: responseHeaders,
        body: responseBody,
        url: requestUrl
    });
}

// Execute main function with error handling
try {
    processResponse();
} catch (error) {
    console.log(`Error processing response: ${error.message}`);
    $done({ url: $request.url, body: $response.body, headers: $response.headers });
}
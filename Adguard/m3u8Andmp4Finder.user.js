// --------------------------------------------------------
// 高级 M3U8 地址获取函数
// --------------------------------------------------------
/**
 * @function findAdvancedM3u8
 * @description 尝试通过非标准策略（如全局变量、特定元素属性）获取 M3U8 地址。
 * @returns {Array<{url: string, type: string, format: 'M3U8'}>} 找到的 M3U8 资源列表。
 */


window.mtzyczq = function mtzyczq() {

    // --------------------------------------------------------
    // 【A】高级 M3U8 地址获取函数
    // --------------------------------------------------------
    /**
     * @function findAdvancedM3u8
     * @description 尝试通过非标准策略（如全局变量、特定元素属性）获取 M3U8 地址。
     * @returns {Array<{url: string, type: string, format: 'M3U8'}>} 找到的 M3U8 资源列表。
     */
    function findAdvancedM3u8() {
        let m3u8Address = null;
        const foundResources = []; // 存储找到的 M3U8 地址对象列表

        // 🎯 策略 1: 检查全局 Hls.js 实例（如 typeof hls !== 'undefined'）
        if (typeof hls !== 'undefined' && hls && hls.url) {
            m3u8Address = hls.url;
            console.log("✅ 策略 1 成功: 从全局 Hls.js 实例获取地址。");
            foundResources.push({ url: m3u8Address, type: 'HlsJsGlobalInstance', format: 'M3U8' });
            return foundResources; // 成功则提前返回
        }

        // 🎯 策略 2: 检查特定 ID 的 <video> 标签属性（如 data-src 或 src）
        const specificVideoId = 'video-play_html5_api';
        const specificVideoElement = document.getElementById(specificVideoId);

        if (specificVideoElement) {
            m3u8Address = specificVideoElement.getAttribute('data-src') || specificVideoElement.getAttribute('src');

            if (m3u8Address && m3u8Address.toLowerCase().includes('.m3u8')) {
                console.log("✅ 策略 2 成功: 从特定 <video> 属性获取地址。");
                foundResources.push({ url: m3u8Address, type: 'SpecificVideoTagAttributes', format: 'M3U8' });
                return foundResources; // 成功则提前返回
            }
        }

        // 🎯 策略 3: 解析所有 <script> 标签内容查找特定变量（如 var hlsUrl = '...'）
        const allScripts = document.querySelectorAll('script');

        for (const script of allScripts) {
            const scriptContent = script.textContent;

            if (scriptContent.includes('var hlsUrl')) {
                const match = scriptContent.match(/var\s+hlsUrl\s*=\s*['"](.*?)['"];/);

                if (match && match[1]) {
                    m3u8Address = match[1];
                    console.log("✅ 策略 3 成功: 从 <script> 变量 'hlsUrl' 获取地址。");
                    foundResources.push({ url: m3u8Address, type: 'ScriptVariableHlsUrl', format: 'M3U8' });
                    return foundResources; // 成功则提前返回
                }
            }
        }

        // 未找到则返回空数组
        return foundResources;
    }

    // --------------------------------------------------------
    // 【B】标准 DOM 媒体资源查找函数
    // --------------------------------------------------------
    /**
     * @function findDomMediaResources
     * @description 遍历标准媒体标签（<video>, <iframe>, <embed>, <source>）的 src 属性查找 MP4 或 M3U8。
     * @returns {Array<{url: string, type: string, format: 'MP4'|'M3U8'}>} 找到的 DOM 资源列表。
     */
    function findDomMediaResources() {
        console.log("%c--- 标准 DOM 媒体资源扫描开始 ---", "color: #0077b6; font-weight: bold;");

        const mediaResourcesSet = new Set();
        const targetExtensions = ['.mp4', '.m3u8'];

        /**
         * @description 检查 URL 是否包含目标扩展名，并将其添加到 Set 中进行去重。
         */
        function checkAndAddResource(url, type) {
            if (!url) return;

            const lowerUrl = url.toLowerCase();

            for (const ext of targetExtensions) {
                if (lowerUrl.includes(ext)) {
                    const format = ext.toUpperCase().replace('.', '');
                    const resourceObject = { url: url, type: type, format: format };
                    mediaResourcesSet.add(JSON.stringify(resourceObject)); // 存为 JSON 字符串以实现对象去重
                    return;
                }
            }
        }

        // 1. 遍历 <video>, <embed>, <iframe> 标签的 src 属性
        document.querySelectorAll('video, embed, iframe').forEach(element => {
            if (element.src) {
                const elementType = element.tagName;
                const elementId = element.id || 'N/A';
                checkAndAddResource(element.src, `${elementType}Tag(ID:${elementId})`);
            }
        });

        // 2. 遍历所有 <source> 标签的 src 属性（通常位于 <video> 或 <picture> 内部）
        document.querySelectorAll('source').forEach(source => {
            if (source.src) {
                const parentTag = source.parentElement ? source.parentElement.tagName : 'N/A';
                checkAndAddResource(source.src, `SourceTag(Parent:${parentTag})`);
            }
        });

        const results = Array.from(mediaResourcesSet).map(json => JSON.parse(json));

        if (results.length === 0) {
            console.log("❌ 未在 DOM 结构中找到明显的 MP4/M3U8 资源 URL。");
        } else {
            console.log(`🎉 找到 ${results.length} 个 DOM 媒体资源 URL.`);
        }

        console.log("%c--- 标准 DOM 媒体资源扫描结束 ---", "color: #0077b6; font-weight: bold;");
        return results;
    }


    // --------------------------------------------------------
    // 【C】JSON-LD 媒体资源查找函数 (新策略 4)
    // --------------------------------------------------------
    /**
     * @function findJsonLdMediaResources
     * @description 查找并解析 <script type="application/ld+json">，尝试提取 MP4 或 M3U8 链接。
     * @returns {Array<{url: string, type: string, format: 'MP4'|'M3U8'}>} 找到的 JSON-LD 资源列表。
     */
    function findJsonLdMediaResources() {
        console.log("%c--- JSON-LD 结构化数据扫描开始 ---", "color: #8c73e1; font-weight: bold;");

        const scriptTag = document.querySelector('script[type="application/ld+json"]');
        const resources = [];

        if (!scriptTag) {
            console.log("❌ 未找到 JSON-LD <script> 标签。");
            return resources;
        }

        try {
            const jsonString = scriptTag.textContent;
            const data = JSON.parse(jsonString);

            // 提取 contentUrl 属性 (根据常见的 VideoObject 或 MediaObject 结构)
            // 示例路径: data?.subjectOf?.contentUrl
            const contentUrl = data?.subjectOf?.contentUrl;

            if (contentUrl) {
                const urlLower = contentUrl.toLowerCase();
                let format = null;

                if (urlLower.includes('.mp4')) {
                    format = 'MP4';
                } else if (urlLower.includes('.m3u8')) {
                    format = 'M3U8';
                }

                if (format) {
                    console.log(`✅ 策略 4 成功: 从 JSON-LD 结构化数据中找到 ${format} 地址。`);
                    resources.push({ url: contentUrl, type: 'JsonLdContentUrl', format: format });
                } else {
                    console.log("JSON-LD 中找到 contentUrl，但格式不是 MP4/M3U8。");
                }
            } else {
                console.log("JSON-LD 中未找到视频 contentUrl。");
            }

        } catch (error) {
            console.error("解析 JSON-LD 或访问属性时出错:", error);
        }

        console.log("%c--- JSON-LD 结构化数据扫描结束 ---", "color: #8c73e1; font-weight: bold;");
        return resources;
    }

    // --------------------------------------------------------
    // 【D】悬浮窗创建与事件绑定函数 (已优化：支持单条复制和播放)
    // --------------------------------------------------------
    const FINDER_CONFIG = {
        WINDOW_ID: 'media-resource-finder-window',
        STYLE_ID: 'media-resource-finder-style',
        OVERLAY_ID: 'media-resource-finder-overlay'
    };

    /**
     * @function createFinderFloatingWindow
     * @description 创建并显示悬浮窗，展示找到的媒体资源列表，并为每个资源提供单独的复制和播放功能。
     * @param {Array<{url: string, type: string, format: string}>} resources - 最终去重后的媒体资源列表。
     */

    function createFinderFloatingWindow(resources) {
        const { WINDOW_ID, STYLE_ID, OVERLAY_ID } = FINDER_CONFIG;
        const isFound = resources && resources.length > 0;

        if (document.getElementById(WINDOW_ID)) {
            console.log("悬浮窗已存在，不重复创建。");
            return;
        }

        // --- 1. 资源列表格式化：为每个资源创建独立的 HTML 结构 ---
        let resourcesHtml = '';
        if (isFound) {
            resources.forEach((res, index) => {
                // 使用 data-url 存储链接，用于复制和播放
                resourcesHtml += `
                    <div class="resource-item">
                        <p class="resource-info">
                            **[${res.format}]** 来源: ${res.type}
                        </p>
                        <textarea class="resource-url" readonly title="媒体资源 URL">${res.url}</textarea>
                        <div class="button-group">
                            <button class="copy-single-button" data-url="${res.url}">
                                📋 复制
                            </button>
                           <!--<button class="play-single-button" data-url="${res.url}" data-format="${res.format}">
                                ▶️ 播放
                            </button>-->
                            <a class="play-single-button" href="${res.url}" target="_blank" title="在新窗口打开播放">
                            ▶️ 播放
                        </a>
                        </div>
                    </div>
                `;
            });
        } else {
            resourcesHtml = `
                <div class="no-resource-message">
                    未在 DOM 和高级策略中检测到 MP4/M3U8 播放地址。🌟：可尝试点击播放后再试。
                </div>
            `;
        }

        // --- 2. DOM 结构 HTML 模板 ---
        const windowHtml = `
        <div id="${WINDOW_ID}">
            <div id="${WINDOW_ID}-header">
                媒体资源查找器 (Gemini)
                <span id="${WINDOW_ID}-close" title="关闭">×</span>
            </div>
            <div id="${WINDOW_ID}-body">
                <p>地址状态: <strong>${isFound ? `✅ 已找到 ${resources.length} 条` : '❌ 未找到'}</strong></p>
                
                <div id="${WINDOW_ID}-resource-list">
                    ${resourcesHtml}
                </div>

               
                <p style="font-size: 10px; margin-top: 15px;">
                    如何下载 M3U8 视频？点击跳转
                    <a href="https://limbopro.com/archives/M3U8-Downloader.html" target="_blank" style="color: #61dafb; text-decoration: none;">
                        M3U8 视频下载教程
                    </a>
                </p>
                <p style="font-size: 10px; margin-top: 5px;">
                    如何下载 MP4 视频？
                    <a href="javascript:void(0);" onclick="showMp4DownloadTip(event)" style="color: #61dafb; text-decoration: none;">
                        点击了解
                    </a>
                </p>
            </div>
        </div>
    `;

        window.showMp4DownloadTip = function showMp4DownloadTip(event) {
            event.preventDefault();

            const downloadMessage =
                "1. 复制视频下载地址；\n" +
                "2. iOS用户推荐使用名叫 \"Documents\" 的 app 下载视频，打开 Documents app -> 浏览器 -> 粘贴视频下载地址；\n" +
                "3. Android 暂无建议；\n" +
                "4. 桌面浏览器用户在新的标签页打开下载地址，然后右键另存为即可；";

            confirm(downloadMessage);
        }

        // --- 3. 注入 CSS 样式（更新了按钮组和播放按钮样式）---
        const styleElement = document.createElement('style');
        styleElement.id = STYLE_ID;
        styleElement.textContent = `
            #${OVERLAY_ID} {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4); 
                z-index: 1199998; 
                display: flex;
                justify-content: center;
                align-items: center; 
            }
            #${WINDOW_ID} {
                width: 380px; 
                max-height: 80vh; 
                z-index: 99999;
                background: #282c34;
                color: #ffffff;
                border: 2px solid #61dafb;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                overflow: hidden; 
            }
            #${WINDOW_ID}-header {
                padding: 8px 12px;
                background: #61dafb;
                color: #282c34;
                font-weight: bold;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                cursor: move;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            #${WINDOW_ID}-close {
                cursor: pointer;
                font-size: 1.5em;
                line-height: 0.8;
            }
            #${WINDOW_ID}-body {
                text-align:center;
                padding: 15px;
                overflow-y: auto; 
                max-height: calc(80vh - 50px); 
            }
            
            #${WINDOW_ID}-resource-list {
                margin-top: 10px;
                text-align: left;
            }
            .resource-item {
                border: 1px solid #444;
                border-radius: 4px;
                padding: 8px;
                margin-bottom: 12px;
                background: #1e2127;
            }
            .resource-info {
                font-size: 13px;
                margin: 0 0 5px 0;
                line-height: 1.4;
                color: #ccc;
            }
            .resource-url {
                width: 100%;
                height: 50px; 
                padding: 5px;
                margin: 5px 0;
                border: 1px solid #555;
                background: #1e2127;
                color: #ccc;
                resize: none;
                box-sizing: border-box;
                font-size: 11px;
                border-radius: 4px;
                line-height: 1.2;
                overflow: auto;
            }
            
            /* 按钮组样式 */
            .button-group {
                display: flex;
                gap: 8px; /* 按钮之间的间距 */
                margin-top: 5px;
            }

            /* 复制按钮样式 (左侧) */
            .copy-single-button {
                flex-grow: 1; /* 占据可用空间 */
                padding: 8px;
                background: #4CAF50; /* 绿色 */
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s;
            }
            .copy-single-button:hover:not([disabled]) {
                background: #45a049;
            }

            /* 播放按钮样式 (右侧) */
            .play-single-button {
                text-align: center;
                flex-grow: 1; /* 占据可用空间 */
                padding: 8px;
                background: #008CBA; /* 蓝色 */
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background 0.2s;
            }
            .play-single-button:hover:not([disabled]) {
                background: #007bb5;
            }
        `;
        document.head.appendChild(styleElement);


        // --- 4. 注入 DOM 结构 ---
        const overlayElement = document.createElement('div');
        overlayElement.id = OVERLAY_ID;
        overlayElement.innerHTML = windowHtml;
        document.body.appendChild(overlayElement);


        // --- 5. 辅助函数：销毁悬浮窗 ---
        const destroyWindow = () => {
            const existingOverlay = document.getElementById(OVERLAY_ID);
            const existingStyle = document.getElementById(STYLE_ID);
            if (existingOverlay) existingOverlay.remove();
            if (existingStyle) existingStyle.remove();
            document.removeEventListener('click', handleOutsideClick, true);
        };

        // --- 6. 外部点击关闭的处理器 ---
        const handleOutsideClick = (e) => {
            if (document.getElementById(WINDOW_ID) && !document.getElementById(WINDOW_ID).contains(e.target)) {
                destroyWindow();
            }
        };


        // --- 7. 绑定事件监听器：关闭、复制和播放 ---
        const closeButton = document.getElementById(`${WINDOW_ID}-close`);
        closeButton.onclick = destroyWindow;

        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick, true);
        }, 100);

        // 绑定所有单独的复制按钮事件
        document.querySelectorAll('.copy-single-button').forEach(button => {
            button.onclick = async () => {
                const urlToCopy = button.getAttribute('data-url');
                if (!urlToCopy) return;

                try {
                    await navigator.clipboard.writeText(urlToCopy);

                    // 复制成功反馈
                    const originalText = button.textContent;
                    button.textContent = '✅ 已复制!'; // 简化反馈文本
                    button.style.backgroundColor = '#2196F3';
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '#4CAF50';
                    }, 1500);
                } catch (err) {
                    console.error('复制失败:', err);
                    const originalText = button.textContent;
                    button.textContent = '❌ 复制失败';
                    button.style.backgroundColor = '#F44336';
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.backgroundColor = '#4CAF50';
                    }, 1500);
                }
            };
        });

        // 绑定所有单独的播放按钮事件
        document.querySelectorAll('.play-single-button').forEach(button => {
            button.onclick = () => {
                const urlToPlay = button.getAttribute('data-url');
                const format = button.getAttribute('data-format');

                if (urlToPlay) {
                    // 直接在新标签页打开 URL，浏览器会自动尝试播放支持的媒体格式（如 MP4）
                    // 对于 M3U8，如果浏览器/环境支持原生 HLS，也会尝试播放
                    window.open(urlToPlay, '_blank');
                    console.log(`正在尝试播放 ${format} 链接: ${urlToPlay}`);
                }
            };
        });
    }


    // --------------------------------------------------------
    // 【E】脚本主执行区 (整合、调用与去重逻辑)
    // --------------------------------------------------------
    (function () {
        console.log("🎬 媒体资源查找脚本开始执行：整合查找 MP4/M3U8 资源...");

        // 1. 执行所有查找策略
        const advancedM3u8Resources = findAdvancedM3u8(); // 策略 1-3
        const domMediaResources = findDomMediaResources();     // 标准 DOM 标签
        const jsonLdResources = findJsonLdMediaResources();     // 策略 4：JSON-LD

        // 2. 整合所有资源
        const allFoundResources = [
            ...advancedM3u8Resources,
            ...domMediaResources,
            ...jsonLdResources
        ];

        // 3. 去重逻辑：基于 URL 字符串实现去重，去除协议和末尾斜杠以提高准确性
        const uniqueUrlSet = new Set();
        const finalUniqueResources = [];

        allFoundResources.forEach(resource => {
            // 规范化 URL
            const normalizedUrl = resource.url
                .trim()
                .toLowerCase()
                .replace(/^http(s)?:\/\//, '') // 移除协议
                .replace(/\/$/, ''); // 移除末尾斜杠

            if (!uniqueUrlSet.has(normalizedUrl)) {
                uniqueUrlSet.add(normalizedUrl);
                finalUniqueResources.push(resource);
            } else {
                console.log(`⚠️ 资源去重: URL 已被收录 - ${resource.url}`);
            }
        });

        console.log(`\n✨ 最终找到 ${finalUniqueResources.length} 个去重后的有效媒体资源 URL。`);

        // 4. 展示悬浮窗
        createFinderFloatingWindow(finalUniqueResources);

        console.log("✅ 脚本执行完毕。");
    })();

}
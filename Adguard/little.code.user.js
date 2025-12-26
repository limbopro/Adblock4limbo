
/* playa.huaren.live */
(function() {
    const patchConfig = () => {
        if (window.ConFig && window.ConFig.config && window.ConFig.config.ads) {
            // 1. 尝试直接关掉开关，这是最稳妥的
            window.ConFig.config.ads.state = "0"; 
            
            // 2. 如果关不掉，把图片地址改为空白的 base64，防止加载超时黑屏
            window.ConFig.config.ads.pic.img = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
            
            // 3. 把链接设为空，防止误触
            window.ConFig.config.ads.pic.link = "";
            
            console.log("广告逻辑已强行重置");
        }
    };

    // 轮询检查，比 window.onload 更快
    let retry = 0;
    const timer = setInterval(() => {
        if (window.ConFig) {
            patchConfig();
            clearInterval(timer);
        }
        if (retry++ > 50) clearInterval(timer);
    }, 50);
})();

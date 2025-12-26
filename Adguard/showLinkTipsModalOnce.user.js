/**
 * 自动化提示模态框 (V5.5 - 集成一键屏蔽功能)
 * 新增：在复制按钮左侧添加“🛡️ 屏蔽”按钮，直接调用屏蔽逻辑。
 */
window.showLinkTipsModalOnce = function () {
    if (document.getElementById('gemini-tips-modal-overlay')) {
        document.getElementById('gemini-tips-modal-overlay').style.display = 'block';
        return;
    }

    // --- 1. 核心屏蔽逻辑函数 ---
    window.geminiApplyBlock = (sel) => {


        const selectors = sel
            .split(/\s*[\n,]\s*/)
            .map(s => {
                let selector = s.trim();
                if (!selector) return null;

                // 1. 【新增核心步骤】强行统一引号：把所有双引号先换成单引号
                // 这样可以处理 a[href*='BOKO-033"] 这种混合乱码
                selector = selector.replace(/"/g, "'");

                // 2. 补全逻辑 (你的原始逻辑)
                const quoteCount = (selector.match(/'/g) || []).length;
                if (selector.includes('[') && quoteCount % 2 !== 0) {
                    selector += "'";
                }
                const openBracket = (selector.match(/\[/g) || []).length;
                const closeBracket = (selector.match(/\]/g) || []).length;
                if (openBracket > closeBracket) {
                    selector += "]";
                }

                // 3. 【拦截器】源头合法性预检
                try {
                    // 如果预检失败（例如补全后还是不合法的语法），直接抛出异常
                    document.createDocumentFragment().querySelector(selector);
                    return selector;
                } catch (e) {
                    // 弹出警告，让用户知道这个格式没存进去
                    // alert(`❌ CSS 选择器格式非法，已拦截：\n${selector}`);
                    confirmndExecuteFC(`❌ CSS 选择器格式非法，已拦截：\n${selector}`)
                    return null;
                }
            })
            .filter(s => s !== null && s.length > 0);


        // 调用 startSelectorTool()
        window.pendingSelector = selectors.toString()
        startSelectorTool()

    };

    const extractLiveInfo = () => {
        const sourceDiv = document.querySelector('#gemini-custom-modal-overlay div[style*="background: #f8f9fa"], #gemini-custom-modal-overlay div[style*="background: white"] div[style*="background: #f8f9fa"]');
        if (!sourceDiv) {
            alert("❌ 未发现捕获面板数据源。");
            return null;
        }

        const data = {};
        const rows = sourceDiv.querySelectorAll('div[style*="word-break: break-all"]');
        rows.forEach(row => {
            const labelSpan = row.querySelector('span[style*="font-weight: bold"]');
            if (labelSpan) {
                const rawLabel = labelSpan.innerText.trim();
                const key = rawLabel.replace(':', '').trim();
                const value = row.innerText.replace(rawLabel, '').trim();
                const map = {
                    "父元素": "parent", "目标元素": "target",
                    "目标元素属性特征": "attr",
                    "目标元素尺寸": "size",
                    "相对CSS选择器(Base parentElement)": "relCSS",
                    "绝对CSS选择器(Base ID & :nth-child())": "alsoluteCSS",
                    "Z/Opacity/Pos": "zPos",
                    "内联 Click": "inline", "XPath": "xpath"
                };

                // --- 针对 alsoluteCSS 的特殊处理：直接取 p 标签的值并移除双引号 ---
                const absEl = sourceDiv.querySelector('#absoluteSelector');
                if (absEl) {
                    data.alsoluteCSS = absEl.innerText.replace(/"/g, '').trim();
                }

                if (map[key]) data[map[key]] = value;
            }
        });
        return data;
    };

    const liveData = extractLiveInfo();
    if (!liveData) return;

    const styles = `


        h2,h3 {
        color:black !important;}

        :root {
            --primary-color: #2563eb;
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-color: #1e293b;
            --accent-color: #ef4444;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
            margin: 0;
            padding: 15px;
        }

        header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid var(--primary-color);
            margin-bottom: 20px;
        }

        h1 { margin: 0; font-size: 1.5rem; color: var(--primary-color); }

        .container {
            max-width: 800px;
            margin: 0 auto;
        }

        section {
            background: var(--card-bg);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            margin-bottom: 20px;
        }

        h2 {
            font-size: 1.2rem;
            border-left: 4px solid var(--primary-color);
            padding-left: 10px;
            margin-top: 0;
        }

        ul { padding-left: 20px; }
        li { margin-bottom: 8px; }

        code {
            background: #f1f5f9;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: monospace;
            color: #d63384;
            word-break: break-all;
        }

        .warning-box {
            background-color: #fff1f2;
            border: 1px solid #fecdd3;
            padding: 15px;
            border-radius: 8px;
        }

        .warning-title {
            color: var(--accent-color);
            font-weight: bold;
            display: block;
            margin-bottom: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
        }

        th, td {
            text-align: left;
            padding: 8px;
            border-bottom: 1px solid #e2e8f0;
        }

        /* 移动端适配 */
        @media (max-width: 480px) {
            body { padding: 10px; }
            h2 { font-size: 1.1rem; }
            section { padding: 12px; }
        }



        .code-block {
            background: var(--code-bg);
            color: var(--code-text);
            padding: 12px;
            border-radius: 8px;
            overflow-x: auto;
            font-size: 0.85rem;
            margin: 10px 0;
            white-space: pre;
        }
            
        .gemini-tips-modal-overlay { position: fixed !important; z-index: 114120; left: 0; top: 0; width: 100%; height: 100%; background: rgba(8, 12, 24, 0.94); backdrop-filter: blur(10px); overflow-y: auto; -webkit-overflow-scrolling: touch; }
        .gemini-tips-modal-content { background: #fff; margin: 2vh auto; padding: 25px 10px; border-radius: 20px; width: 94%; max-width: 1050px; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 30px 80px rgba(0,0,0,0.6); animation: slideIn 0.4s ease; color: #2d3748; box-sizing: border-box; }
        .full-info-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 15px 0; background: #f8fafc; padding: 15px; border-radius: 12px; border: 1px solid #e2e8f0; }
        @media (min-width: 768px) { .full-info-grid { grid-template-columns: repeat(3, 1fr); padding: 20px; } }
        .info-cell { font-size: 13px; word-break: break-word; }
        .info-cell b { color: #718096; display: block; font-size: 10px; text-transform: uppercase; margin-bottom: 4px; }
        .info-cell code { background: #fff; color: #e53e3e; padding: 2px 5px; border-radius: 4px; border: 1px solid #edf2f7; font-size: 12px; display: inline-block; max-width: 100%; word-break: break-all; }
        .span-all { grid-column: 1 / -1; padding-top: 10px; }
        .code-container { position: relative; margin: 10px 0; }
        .code-box { background: #1a202c; color: #cbd5e0; padding: 15px 15px 50px 15px; border-radius: 10px; font-family: 'Fira Code', monospace; font-size: 12px; word-break: break-all; border-left: 5px solid #3182ce; line-height: 1.5; 
        outline: none; transition: box-shadow 0.2s; /* 新增 */
        }
        @media (min-width: 768px) { .code-box { padding: 15px 160px 15px 15px; } }
        
        /* 当 code-box 获得焦点（正在编辑）时的样式 */
.code-box:focus {
    background: #2d3748 !important;
    box-shadow: 0 0 0 2px #4299e1;
    border-radius: 4px;
}

        .btn-group { position: absolute; right: 10px; bottom: 10px; display: flex; gap: 8px; z-index: 10; }
        @media (min-width: 768px) { .btn-group { top: 10px; bottom: auto; } }
        
        .action-btn { border-radius: 6px; padding: 6px 12px; cursor: pointer; font-size: 11px; border: 1px solid transparent; transition: all 0.2s; font-weight: bold; }
        .copy-btn { background: #2d3748; color: #cbd5e0; border-color: #4a5568; }
        .block-btn { background: #c53030; color: white; border-color: #9b2c2c; }
        .block-btn:hover { background: #e53e3e; }
        
        .analysis-box { display: grid; grid-template-columns: 1fr; gap: 15px; margin-top: 10px; }
        @media (min-width: 768px) { .analysis-box { grid-template-columns: 1fr 1fr; } }
        .tag-card { padding: 14px; border-radius: 10px; font-size: 12.5px; line-height: 1.6; }
        .tag-card.pros { background: #f0fff4; border-left: 4px solid #38a169; color: #22543d; }
        .tag-card.cons { background: #fff5f5; border-left: 4px solid #e53e3e; color: #742a2a; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

        /* 在现有样式中添加 */
        .edit-btn { background: #4a5568; color: white; border-color: #2d3748; }
.edit-btn:hover { background: #718096; }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);



    window.geminiCopyText = (btn, text) => {
        navigator.clipboard.writeText(text).then(() => {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '✅ 已复制';
            setTimeout(() => { btn.innerHTML = originalHTML; }, 2000);
        });
    };




    window.geminiToggleInlineEdit = function (btn) {
        const container = btn.closest('.code-container');
        const codeBox = container.querySelector('.code-box');
        const isEditing = codeBox.getAttribute('contenteditable') === 'true';

        if (!isEditing) {
            // 进入编辑模式
            codeBox.setAttribute('contenteditable', 'true');
            codeBox.focus();
            // 选中文本方便快速修改
            const range = document.createRange();
            range.selectNodeContents(codeBox);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);

            btn.innerHTML = '💾 完成';
            btn.style.background = '#38a169'; // 绿色表示保存
        } else {
            // 退出编辑并同步参数
            codeBox.setAttribute('contenteditable', 'false');
            const newCode = codeBox.innerText.trim();
            const escapedCode = newCode.replace(/'/g, "\\'");

            // 更新屏蔽和复制按钮的点击事件参数
            const blockBtn = container.querySelector('.block-btn');
            const copyBtn = container.querySelector('.copy-btn');
            if (blockBtn) blockBtn.setAttribute('onclick', `geminiApplyBlock('${escapedCode}')`);
            if (copyBtn) copyBtn.setAttribute('onclick', `geminiCopyText(this, '${escapedCode}')`);

            btn.innerHTML = '✏️ 修改';
            btn.style.background = ''; // 恢复 CSS 定义的颜色
        }
    };


    window.geminiToggleEdit = (btn) => {
        const container = btn.closest('.code-container');
        const codeBox = container.querySelector('.code-box');
        const isEditing = codeBox.getAttribute('contenteditable') === 'true';

        if (!isEditing) {
            // 进入编辑模式
            codeBox.setAttribute('contenteditable', 'true');
            codeBox.focus();
            btn.innerHTML = '💾 完成';
            btn.style.background = '#38a169'; // 变成绿色表示保存
        } else {
            // 退出编辑模式并保存
            codeBox.setAttribute('contenteditable', 'false');
            btn.innerHTML = '✏️ 修改';
            btn.style.background = ''; // 恢复原样

            const newCode = codeBox.innerText.trim();
            const escapedCode = newCode.replace(/'/g, "\\'");

            // 核心：动态更新同组“屏蔽”和“复制”按钮的参数
            const blockBtn = container.querySelector('.block-btn');
            const copyBtn = container.querySelector('.copy-btn');

            if (blockBtn) blockBtn.setAttribute('onclick', `geminiApplyBlock('${escapedCode}')`);
            if (copyBtn) copyBtn.setAttribute('onclick', `geminiCopyText(this, '${escapedCode}')`);

            // 同时更新“修改”按钮自身的参数，防止逻辑错乱
            btn.setAttribute('onclick', `geminiToggleEdit(this)`);
        }
    };


    // 处理修改逻辑：弹出输入框允许用户手动编辑选择器
    window.geminiEditCode = (btn, originalText) => {
        const newCode = prompt("✏️ 编辑选择器/路径：", originalText);
        if (newCode !== null && newCode !== originalText) {
            // 找到同层级的 code-box 元素并更新显示
            const container = btn.closest('.code-container');
            const codeBox = container.querySelector('.code-box');
            codeBox.innerText = newCode;

            // 更新该容器内所有按钮的 onclick 参数，确保后续点击“屏蔽”或“复制”的是修改后的代码
            const buttons = container.querySelectorAll('.action-btn');
            const escapedCode = newCode.replace(/'/g, "\\'");

            buttons.forEach(b => {
                if (b.classList.contains('edit-btn')) b.setAttribute('onclick', `geminiEditCode(this, '${escapedCode}')`);
                if (b.classList.contains('block-btn')) b.setAttribute('onclick', `geminiApplyBlock('${escapedCode}')`);
                if (b.classList.contains('copy-btn')) b.setAttribute('onclick', `geminiCopyText(this, '${escapedCode}')`);
            });
        }
    };

    const createSection = (title, code, color, prosArr, consArr, isBlockable = true) => {
        // 预处理优势和劣势分析，避免在模板字符串中出现复杂的逻辑
        const prosHTML = prosArr ? prosArr.map(p => `• ${p.replace(/\${liveData.parent}/g, `<code>${liveData.parent}</code>`)}`).join('<br>') : '';
        const consHTML = consArr ? consArr.map(c => `• ${c.replace(/\${liveData.target}/g, `<code>${liveData.target}</code>`)}`).join('<br>') : '';

        return `
        <div style="margin-top:30px;">
            <span style="font-weight:bold; font-size:15px; color:${color}; margin-bottom:10px; display:block;">${title}</span>
            <div class="code-container">
                <div class="code-box" style="border-left-color:${color}; outline:none;" contenteditable="false">${code}</div>
                <div class="btn-group">
                    <!--button class="action-btn edit-btn" onclick="geminiToggleInlineEdit(this)">✏️ 修改</button--!>
                    ${isBlockable ? `<button class="action-btn block-btn" onclick="geminiApplyBlock('${code.replace(/'/g, "\\'")}')">🛡️ 屏蔽</button>` : ''}
                    <button class="action-btn copy-btn" onclick="geminiCopyText(this, '${code.replace(/'/g, "\\'")}')">📋 复制</button>
                </div>
            </div>
            ${prosArr ? `
            <div class="analysis-box">
                <div class="tag-card pros"><b>✅ 优势分析：</b><br>${prosHTML}</div>
                <div class="tag-card cons"><b>❌ 劣势分析：</b><br>${consHTML}</div>
            </div>` : ''}
        </div>`;
    };


    const modal = document.createElement('div');
    modal.id = 'gemini-tips-modal-overlay';
    modal.className = 'gemini-tips-modal-overlay notranslate';
    modal.innerHTML = `
        <div class="gemini-tips-modal-content">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h2 style="margin:0; font-size:24px; color:#1a202c;">🔍 自动化脚本：元素定位审查报告</h2>
                <span onclick="this.closest('.gemini-tips-modal-overlay').remove()" style="cursor:pointer; font-size:35px; color:#cbd5e0;">&times;</span>
            </div>
            <div class="full-info-grid">
                <div class="info-cell"><b>父元素</b><code>${liveData.parent}</code></div>
                <div class="info-cell"><b>目标元素</b><code>${liveData.target}</code></div>
                <div class="info-cell"><b>目标元素属性特征</b><code>${liveData.attr || '无'}</code></div>
                <div class="info-cell"><b>目标元素尺寸</b>${liveData.size}</div>
                <div class="info-cell"><b>Z/Opacity/Pos</b>${liveData.zPos}</div>
                <div class="info-cell"><b>内联点击事件</b>${liveData.inline}</div>
                <div class="info-cell span-all"><b>目标元素递归向上含链接(Href)</b><small style="color:#3182ce; font-family:monospace; word-break:break-all;">${liveData.href}</small></div>
            </div>

            ${createSection("[ 方案 A ] 目标元素属性特征", liveData.attr || '', "#ed8936",
        ["精准定位：直接反射目标元素的内在特征属性。", "独立性强：不依赖外部 DOM 层级。"],
        ["内容耦合：属性值可能包含动态参数。"], true)}

            ${createSection("[ 方案 B ] 相对 CSS 选择器 (最佳实践)", liveData.relCSS, "#38a169",
            ["结构稳定性极高：仅依赖 ${liveData.parent} 内部结构。", "代码简洁：适合在 <code>eval()</code> 中使用。", "浏览器解析效率最高。"],
            ["索引依赖：需确保 <code>nth-child</code> 正确。"])}


    ${createSection("[ 方案 C ] 绝对 CSS 选择器 (Base ID & nth-child)", liveData.alsoluteCSS || '未捕获', "#3182ce",
                ["层级精确：结合了 ID 锚点与 nth-child 路径。", "定位唯一：在复杂页面中提供极高的指向性。"],
                ["路径冗长：在 eval() 执行时长路径可能导致解析负担。", "结构敏感：中间层级的变化会导致定位失效。"])}

            ${createSection("[ 方案 D ] 完整 XPath 路径 (强力保底)", liveData.xpath, "#805ad5",
                    ["定位维度最全：支持文本匹配和向上查找。", "逻辑保底：复杂页面唯一方案。"],
                    ["性能开销稍大：在大型 DOM 树中稍慢。", "维护难度高：路径对层级敏感。"], false)}

                    

    <details style="margin-top: 15px; background: #f7fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
        <summary style="padding: 10px; font-size: 13px; font-weight: bold; color: #2d3748; cursor: pointer; outline: none;">
            💡 为什么懒加载(Lazyload)经常导致CSS选择器失效？ (点击展开)
        </summary>
        <div style="padding: 0 12px 12px 12px; font-size: 12px; color: #718096; line-height: 1.6; border-top: 1px solid #e2e8f0; margin-top: 5px; padding-top: 10px;">
            <p><strong>1. 属性延迟：</strong> 没滚到视频前，<code>src</code> 是空的或 base64 位图。选择器应优先匹配 <code>[data-src]</code>。</p>
            <p><strong>2. 节点复用：</strong> 某些引擎在滚动时会回收旧节点。如果你的选择器太死（如 <code>nth-child</code>），滚动后位置一变就会抓错。</p>
            <p><strong>3. 影子 DOM：</strong> 广告位经常动态插入，导致 CSS 路径深度突然变化。xPath 的 <code>//</code> 模糊搜索比 CSS 的 <code>></code> 逐级查找更稳。</p>
        </div>
    </details>







<div class="container">
    <header>
        <h1>CSS 选择器知识汇总</h1>
    </header>

    <section>
        <h2>1. 基础选择器 (Basic Selectors)</h2>
        <ul>
            <li><strong>通配选择器 <code>*</code></strong>: 匹配所有元素。</li>
            <li><strong>元素选择器 <code>div</code>, <code>p</code></strong>: 匹配特定的 HTML 标签。</li>
            <li><strong>类选择器 <code>.className</code></strong>: 匹配具有特定 class 属性的元素。</li>
            <li><strong>ID 选择器 <code>#idName</code></strong>: 匹配具有特定 id 的元素。</li>
        </ul>
    </section>

    <section>
        <h2>2. 组合选择器 (Combinators)</h2>
        <ul>
            <li><strong>后代选择器 <code>(空格)</code></strong>: 匹配 A 元素内部的所有 B 元素。</li>
            <li><strong>子代选择器 <code>&gt;</code></strong>: 只匹配 A 元素的直接子元素 B。</li>
            <li><strong>相邻兄弟选择器 <code>+</code></strong>: 匹配紧跟在 A 元素后的第一个兄弟元素 B。</li>
            <li><strong>通用兄弟选择器 <code>~</code></strong>: 匹配 A 元素之后的所有兄弟元素 B。</li>
        </ul>
    </section>

    <section>
        <h2>3. 属性选择器 (Attribute Selectors)</h2>
        <table>
            <tr><th>符号</th><th>说明</th></tr>
            <tr><td><code>[attr]</code></td><td>拥有该属性</td></tr>
            <tr><td><code>[attr="val"]</code></td><td>精确等于 val</td></tr>
            <tr><td><code>[attr^="val"]</code></td><td>以 val 开头</td></tr>
            <tr><td><code>[attr$="val"]</code></td><td>以 val 结尾</td></tr>
            <tr><td><code>[attr*="val"]</code></td><td>包含 val</td></tr>
        </table>
    </section>

    <section>
        <h2>4. 伪类选择器 (Pseudo-classes)</h2>
        <ul>
            <li><strong>用户行为</strong>: <code>:hover</code>, <code>:active</code>, <code>:focus</code>。</li>
            <li><strong>结构伪类</strong>: <code>:first-child</code>, <code>:nth-child(n)</code>, <code>:not()</code>。</li>
            <li><strong>现代逻辑</strong>: 
                <br><code>:is()</code>: 简化多个写法。
                <br><code>:where()</code>: 优先级恒为 0。
                <br><code>:has()</code>: 强大的父级/关联选择器。
            </li>
        </ul>
    </section>

    <section>
        <h2>5. 伪元素选择器 (Pseudo-elements)</h2>
        <ul>
            <li><code>::before</code> / <code>::after</code>: 插入虚拟内容。</li>
            <li><code>::first-line</code> / <code>::first-letter</code>: 文本首行或首字母。</li>
            <li><code>::selection</code>: 用户选中的高亮文本。</li>
        </ul>
    </section>



    <section>
        <h2>6. 大写标签选择器 (如 <code>DIV</code>)</h2>
        <p>在 HTML5 规范中，标签名是不区分大小写的。</p>
        <div class="code-block">
/* 以下选择器在 HTML 中效果完全相同 */
div { color: blue; }
DIV { color: blue; }
dIv { color: blue; }
</div>
        <h3>标签与 ID/Class 的进阶组合</h3>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr><th>组合形式</th><th>示例</th><th>匹配说明</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>标签+类名</strong></td><td><code>DIV.active</code></td><td>匹配 class 为 active 的 div 标签</td></tr>
                    <tr><td><strong>标签+ID</strong></td><td><code>SECTION#top</code></td><td>匹配 ID 为 top 的 section 标签</td></tr>
                    <tr><td><strong>标签+属性</strong></td><td><code>INPUT[type="text"]</code></td><td>匹配特定类型的 input 标签</td></tr>
                    <tr><td><strong>多重逻辑</strong></td><td><code>DIV.box#hero</code></td><td>同时具备该标签、类名和 ID</td></tr>
                </tbody>
            </table>
        </div>
    </section>



    <section class="warning-box">
        <span class="warning-title">⚠️ 潜在问题与注意事项</span>
        <ul>
            <li><strong>优先级冲突</strong>: 过多 ID 或深层嵌套会导致 <code>!important</code> 滥用，破坏维护性。</li>
            <li><strong>性能开销</strong>: 浏览器从右向左解析，过于复杂的后代选择器在大型页面可能引起卡顿。</li>
            <li><strong>兼容性</strong>: 像 <code>:has()</code> 等现代特性在老旧设备上可能失效。</li>
            <li><strong>脚本耦合</strong>: 结合你的 <code>eval()</code> 脚本，频繁动态注入 CSS 可能触发大量重排重绘。</li>
        </ul>
    </section>
</div>







            <button onclick="this.closest('.gemini-tips-modal-overlay').remove()" style="width:100%; margin-top:35px; padding:16px; background:#f7fafc; border:1px solid #e2e8f0; border-radius:12px; font-weight:bold; cursor:pointer;">返回调试界面</button>
        </div>
    `;
    document.body.appendChild(modal);
}
/* 悬浮窗  Start*/

// 1. 注入 CMSNONE 样式
const fccmsNoneCSS = `

/* 给到悬浮窗用 Adblock4limbo */
/* 遮罩层 */
.confirm-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    display: flex !important;
    justify-content: center !important;
    align-items: center;
    z-index: 2147483647 !important;
    opacity: 0;
    visibility: hidden;
    transition: opacity .2s, visibility .2s;
}

.confirm-mask.show {
    opacity: 1;
    visibility: visible;
}

/* 弹窗本体 */
.confirm-dialog {
    background: #fff;
    border-radius: 8px;
    width: 320px;
    max-width: 90vw;
    box-shadow: 0 4px 20px rgba(0, 0, 0, .2);
    animation: pop .2s ease-out;
}

@keyframes pop {
    from {
        transform: scale(.8);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.confirm-header {
    padding: 16px 20px 8px;
    font-weight: 600;
    font-size: 18px;
}

.confirm-body {
    padding: 0 20px 16px;
    color: #555;
}

.confirm-footer {
    padding: 0 20px 16px;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.confirm-footer button {
    min-width: 72px;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.confirm-footer .cancel {
    background: #f0f0f0;
    color: #333;
}

.confirm-footer .ok {
    background: #007bff;
    color: #fff;
}

.confirm-footer .ok:hover {
    background: #0056b3;
}

.confirm-footer .cancel:hover {
    background: #e0e0e0;
}

    .cmsnone {
      z-index: -111;
      display: none !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
  `;

const fcstyleElement = document.createElement('style');
fcstyleElement.type = 'text/css';

if (fcstyleElement.styleSheet) {
    fcstyleElement.styleSheet.cssText = fccmsNoneCSS;
} else {
    fcstyleElement.appendChild(document.createTextNode(fccmsNoneCSS));
}

document.head.appendChild(fcstyleElement);

// 后续用于显示：fc_mask.classList.remove('cmsnone');
// 后续用于隐藏：fc_mask.classList.add('cmsnone');

const fc_mask = document.createElement('div');
fc_mask.id = 'confirmMask';
fc_mask.className = 'confirm-mask notranslate cmsnone';
fc_mask.innerHTML = `
    <div class="confirm-dialog">
      <div class="confirm-header">确认操作</div>
      <div class="confirm-body"></div>
      <div class="confirm-footer">
        <button class="cancel">取消</button>
        <button class="ok">确认</button>
      </div>
    </div>
  `;

document.body.appendChild(fc_mask);

/* ---------- 自定义弹窗逻辑 ---------- */
const fcmask = document.getElementById('confirmMask');
const fccancel = fcmask.querySelector('.cancel');
const fcok = fcmask.querySelector('.ok');
const fcmaskText = document.querySelector('div.confirm-body');

let fcresolvePromise;   // 用于 await 方式（可选）

function showConfirmFC() {
    fcmask.classList.remove('cmsnone')
    fcmask.classList.add('show');

    return new Promise(resolve => {
        fcresolvePromise = resolve;

        // 点击遮罩关闭（可选）
        fcmask.onclick = e => {
            if (e.target === fcmask) closeConfirmFC(false);
        };
        fccancel.onclick = () => closeConfirmFC(false);
        fcok.onclick = () => closeConfirmFC(true);
    });
}

function closeConfirmFC(result) {
    fcmask.classList.remove('show');
    fcmask.onclick = fccancel.onclick = fcok.onclick = null;
    fcresolvePromise(result);
}

/* ---------- 确认后执行原逻辑 ---------- */
window.confirmndExecuteFC = async function confirmndExecuteFC(itext = '', fun) {
    // 更新提示文字
    if (itext !== '') {
        fcmaskText.textContent = itext;
    }

    // 弹出确认框
    const fcconfirmed = await showConfirmFC();
    if (!fcconfirmed) return;   // 用户取消，直接退出

    // 执行传入的回调（若有）
    if (typeof fun === 'function') {
        try {
            await fun();   // 支持同步或异步回调
        } catch (err) {
            console.error('confirmndExecuteFC callback error:', err);
        }
    }
}
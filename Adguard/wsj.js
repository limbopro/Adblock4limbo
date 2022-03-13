if (window.location.href.includes('/articles/')) {
    const closeButton = document.querySelector('div.close-btn[role="button"]');
    if (closeButton) { closeButton.click(); }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const url = window.location.href;
    const snippet = document.querySelector('.snippet-promotion');
    const wsjPro = document.querySelector('meta[name="page.site"][content="wsjpro"]');
    if (snippet || wsjPro) {
      if (!window.location.hash) {
        if (url.includes('?')) {
          window.location.href = url.replace('?', '#refreshed?');
        } else { window.location.href = url + '#refreshed'; }
      } else { window.location.href = window.location.href.replace('wsj.com', 'wsj.com/amp').replace('#refreshed', ''); }
    }
  });
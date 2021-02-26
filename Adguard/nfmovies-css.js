// ==UserScript==
// @name         Nfmovies.ads.block
// @match        www.nfmovies.com/*
// ==/UserScript==

function loadCssCode(code){
    var style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    //for Chrome Firefox Opera Safari
    style.appendChild(document.createTextNode(code));
    //for IE
    //style.styleSheet.cssText = code;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
loadCssCode('.myui-ra-container {display: none !important;} #aaaDiv2 {width: 0% !important;}#aaaDiv {width: 0% !important;}#alqZmizfYfnG {display: none !important;}#arqZmizfYfnG {display: none !important;}img {display: none !important;}');

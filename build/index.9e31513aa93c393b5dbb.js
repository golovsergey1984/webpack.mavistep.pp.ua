(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4Ju/":function(t,e){var n;((n={btnCall:document.getElementById("skype")}).btnCall=document.querySelector(".button1"),n).btnCall.addEventListener("click",(function(){alerty.confirm("Для соединения с мастером, у Вас должен быть установлен Skype! Продолжаем?",{title:"Уточнение",cancelLabel:"Нет",okLabel:"Позвонить"},(function(){location.href="skype:live:.cid.79bd5f21857342f1"}),(function(){alerty.toasts("Установите скайп, и возвращайтесь!",{place:"top"})}))}))},L1EO:function(t,e,n){},OTvV:function(t,e,n){var l=n("mp5j");t.exports=(l.default||l).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,l,o){var a,i=null!=e?e:t.nullContext||{},c=t.hooks.helperMissing,s="function",r=t.escapeExpression;return'<li class="'+r(typeof(a=null!=(a=n.li_class||(null!=e?e.li_class:e))?a:c)===s?a.call(i,{name:"li_class",hash:{},data:o,loc:{start:{line:1,column:11},end:{line:1,column:23}}}):a)+'">\r\n    <form action="'+r(typeof(a=null!=(a=n.form_action||(null!=e?e.form_action:e))?a:c)===s?a.call(i,{name:"form_action",hash:{},data:o,loc:{start:{line:2,column:18},end:{line:2,column:33}}}):a)+'" target="'+r(typeof(a=null!=(a=n.form_target||(null!=e?e.form_target:e))?a:c)===s?a.call(i,{name:"form_target",hash:{},data:o,loc:{start:{line:2,column:43},end:{line:2,column:58}}}):a)+'" id="'+r(typeof(a=null!=(a=n.form_id||(null!=e?e.form_id:e))?a:c)===s?a.call(i,{name:"form_id",hash:{},data:o,loc:{start:{line:2,column:64},end:{line:2,column:75}}}):a)+'">\r\n        <button type="'+r(typeof(a=null!=(a=n.btn_type||(null!=e?e.btn_type:e))?a:c)===s?a.call(i,{name:"btn_type",hash:{},data:o,loc:{start:{line:3,column:22},end:{line:3,column:34}}}):a)+'" class="'+r(typeof(a=null!=(a=n.btn_class||(null!=e?e.btn_class:e))?a:c)===s?a.call(i,{name:"btn_class",hash:{},data:o,loc:{start:{line:3,column:43},end:{line:3,column:56}}}):a)+'" id="'+r(typeof(a=null!=(a=n.btn_id||(null!=e?e.btn_id:e))?a:c)===s?a.call(i,{name:"btn_id",hash:{},data:o,loc:{start:{line:3,column:62},end:{line:3,column:72}}}):a)+'" style="'+r(typeof(a=null!=(a=n.btn_bg||(null!=e?e.btn_bg:e))?a:c)===s?a.call(i,{name:"btn_bg",hash:{},data:o,loc:{start:{line:3,column:81},end:{line:3,column:91}}}):a)+'"\r\n            onmouseover="'+r(typeof(a=null!=(a=n.btn_mouse_on||(null!=e?e.btn_mouse_on:e))?a:c)===s?a.call(i,{name:"btn_mouse_on",hash:{},data:o,loc:{start:{line:4,column:25},end:{line:4,column:41}}}):a)+'" onmouseout="'+r(typeof(a=null!=(a=n.btn_mouse_out||(null!=e?e.btn_mouse_out:e))?a:c)===s?a.call(i,{name:"btn_mouse_out",hash:{},data:o,loc:{start:{line:4,column:55},end:{line:4,column:72}}}):a)+'">\r\n\r\n            <h2 class="'+r(typeof(a=null!=(a=n.h2_class||(null!=e?e.h2_class:e))?a:c)===s?a.call(i,{name:"h2_class",hash:{},data:o,loc:{start:{line:6,column:23},end:{line:6,column:35}}}):a)+'">'+r(typeof(a=null!=(a=n.h2_text||(null!=e?e.h2_text:e))?a:c)===s?a.call(i,{name:"h2_text",hash:{},data:o,loc:{start:{line:6,column:37},end:{line:6,column:48}}}):a)+"</h2>\r\n        </button>\r\n    </form>\r\n</li>"},useData:!0})},YDd5:function(t,e,n){"use strict";n.r(e);n("L1EO"),n("bTpJ"),n("hjJ8"),n("aM7N"),n("8cZI"),n("lmye");var l,o=n("vQ9l"),a=n("OTvV"),i=n.n(a),c={postItem:document.querySelector(".container")};l=o.map((function(t){return i()(t)})).join(""),c.postItem.insertAdjacentHTML("beforeend",l);n("4Ju/"),n("eE7z")},aM7N:function(t,e){t.exports='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta http-equiv="Content-Security-Policy"\n    content="default-src *; style-src \'self\' \'unsafe-inline\' http://cdnjs.cloudflare.com; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\'">\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>MAVI STEP</title>\n  <link href="favicon/favicon.ico" rel="shortcut icon">\n</head>\n\n<body>\n\n\n\n  <div class="wrapper">\n    <ul class="container"></ul>\n    <footer>\n      <div class="footer">\n        All Rights Reserved<br>\n        &copy; 1996\n      </div>\n    </footer>\n  </div>\n</body>\n\n</html>'},bTpJ:function(t,e,n){},eE7z:function(t,e,n){"use strict";(function(t){n("Muwe"),n("y89P"),n("aZFp");
/*!
 * alerty v0.0.1 (https://github.com/undead25/alerty#readme)
 * Copyright 2016 undead25
 * Licensed under the MIT license
 */
!function(){var e=function(t,e){var n=t.className,l=n+(""!==n?" ":"")+e;t.className=l},l=function(t,e){var n=" "+t.className+" ",l=(n=n.replace(/(\s+)/gi," ")).replace(" "+e+" "," ");l=l.replace(/(^\s+)|(\s+$)/g,""),t.className=l},o=function(t,e){var n=t.className.split(/\s+/),l=0;for(l in n)if(n[l]==e)return!0;return!1},a=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},i=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},c=function(t){do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},s=function(){var t={defaults:{okLabel:"确定",cancelLabel:"取消",time:2e3},previousCallback:null,template:'<div class="alerty-overlay" tabindex="-1"></div><div class="alerty"><div class="alerty-title"></div><div class="alerty-content"><p class="alerty-message"></p><div class="alerty-prompt"><input type="text" placeholder="" value=""><div class="input-line"></div></div></div><div class="alerty-action"><a class="btn-cancel"></a><a class="btn-ok"></a></div></div>',setup:function(t,n,l,o,a){"function"==typeof l&&(a=o,o=l);var s=document.querySelector(".alerty");if(s){i(s);var r=this.previousCallback;r&&r()}var u=document.createElement("div");for(u.innerHTML=this.template;u.firstChild;)document.body.appendChild(u.firstChild);var m=document.querySelector(".alerty"),d=document.querySelector(".alerty-overlay"),p=m.querySelector(".alerty-title"),b=m.querySelector(".alerty-message"),f=m.querySelector(".alerty-action"),_=m.querySelector(".btn-ok"),y=m.querySelector(".btn-cancel"),g=m.querySelector(".alerty-prompt"),h=g.querySelector("input");m.id=c("alerty"),d.id="overlay-"+m.id,e(d,"active"),e(m,"alerty-show"),b.innerHTML=n,l&&l.time&&(this.defaults.time=l.time),"prompt"!==t?i(g):(h.focus(),l&&l.inputType&&h.setAttribute("type",l.inputType),l&&l.inputPlaceholder&&h.setAttribute("placeholder",l.inputPlaceholder),l&&l.inputValue&&h.setAttribute("value",l.inputValue)),"toasts"===t?(this.previousCallback=o,i(p),i(f),i(d),e(m,"toasts"),l&&"top"===l.place&&e(m,"place-top"),l&&l.bgColor&&(m.style.backgroundColor=l.bgColor),l&&l.fontColor&&(b.style.color=l.fontColor)):(e(document.body,"no-scrolling"),l&&l.title?p.innerHTML=l.title:i(p),l&&l.okLabel?_.innerHTML=l.okLabel:_.innerHTML=this.defaults.okLabel,m.style.marginTop=-m.offsetHeight/2+"px","confirm"===t||"prompt"===t?l&&l.cancelLabel?y.innerHTML=l.cancelLabel:y.innerHTML=this.defaults.cancelLabel:i(y)),this.bindEvent(m,o,a)},bindEvent:function(t,e,n){var l=this,i=t.querySelector(".btn-ok"),c=t.querySelector(".btn-cancel");o(t,"toasts")&&setTimeout((function(){null!==document.getElementById(t.id)&&l.close(t,e)}),l.defaults.time),i&&a(i,"click",(function(){l.close(t,e)})),c&&a(c,"click",(function(){l.close(t,n)}))},close:function(t,n){var o=t.querySelector("input"),a=document.getElementById("overlay-"+t.id);l(t,"alerty-show"),e(t,"alerty-hide"),setTimeout((function(){a&&l(a,"active"),l(document.body,"no-scrolling"),i(t),i(a),n&&setTimeout((function(){o?n(o.value):n()}),100)}),100)}};return{toasts:function(e,n,l){t.setup("toasts",e,n,l)},alert:function(e,n,l){t.setup("alert",e,n,l)},confirm:function(e,n,l,o){t.setup("confirm",e,n,l,o)},prompt:function(e,n,l,o){t.setup("prompt",e,n,l,o)}}};if(t&&t.exports){t.exports=function(){return new s};var r=new s;for(var u in r)t.exports[u]=r[u]}else"function"==typeof define&&n("K2jg")?define((function(){return new s})):window.alerty=new s}()}).call(this,n("Ono3")(t))},hjJ8:function(t,e,n){},vQ9l:function(t){t.exports=JSON.parse('[{"li_class":"li-index","form_action":"https://mavistep.com.ua","form_target":"_blank","form_id":"","btn_type":"submit","btn_id":"","btn_class":"button","btn_bg":"background-image: url(../images/logo.png);","btn_mouse_on":"style=\'background-image: url(../images/logo_hover.png);\'","btn_mouse_out":"style=\'background-image: url(../images/logo.png);\'","h2_class":"text","h2_text":""},{"li_class":"li-index","form_action":"https://www.youtube.com/channel/UCDJ4PjTmdCz8Vm0qobR8Scg/featured","form_target":"_blank","form_id":"","btn_type":"submit","btn_class":"button","btn_id":"","btn_bg":"background-image: url(../images/youtube.png);","btn_mouse_on":"style=\'background-image: url(../images/youtube_hover.png);\'","btn_mouse_out":"style=\'background-image: url(../images/youtube.png);\'","h2_class":"text","h2_text":""},{"li_class":"li-index","form_action":"","form_target":"","form_id":"","btn_type":"button","btn_id":"skype","btn_class":"button1","btn_bg":"background-image: url(../images/wificalling.png);","btn_mouse_on":"style=\'background-image: url(../images/wificalling_hover.png);\'","btn_mouse_out":"style=\'background-image: url(../images/wificalling.png);\'","h2_class":"text","h2_text":""},{"li_class":"li-index","form_action":"html/index-identify.html","form_target":"_blank","form_id":"","btn_type":"submit","btn_id":"","btn_class":"button","btn_bg":"background-image: url(../images/identify.png);","btn_mouse_on":"style=\'background-image: url(../images/identify_hover.png);\'","btn_mouse_out":"style=\'background-image: url(../images/identify.png);\'","h2_class":"text","h2_text":""},{"li_class":"li-index","form_action":"http://mavistep.pp.ua/","form_target":"_self","form_id":"","btn_type":"submit","btn_id":"","btn_class":"button","btn_bg":"background-image: url(../images/QRcode.png);","btn_mouse_on":"style=\'background-image: url(../images/QRcode_hover.png);\'","btn_mouse_out":"style=\'background-image: url(../images/QRcode.png);\'","h2_class":"text","h2_text":""}]')}},[["YDd5",0,1]]]);
//# sourceMappingURL=index.9e31513aa93c393b5dbb.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{GIFI:function(i){i.exports=JSON.parse('[{"li_class":"li-script","btn_class":"button-identify","input_name":"payment","input_value":"Наличная","input_id":"cash","input_class":"radio","onclick":"getRadioValuePayment()","label_for":"cash","img_src":"../images/Payment/cash.png","img_id":"img-cash","img_class":"img img-adds","img_title":"Форма расчета - наличная","img_alt":"Форма расчета - наличная"},{"li_class":"li-script","btn_class":"button-identify","input_name":"payment","input_value":"Безналичная","input_id":"cashless","input_class":"radio","onclick":"getRadioValuePayment()","label_for":"cashless","img_src":"../images/Payment/cashless.png","img_id":"img-cashless","img_class":"img img-adds","img_title":"Форма расчета - безналичная","img_alt":"Форма расчета - безналичная"},{"li_class":"li-script","btn_class":"button-identify","input_name":"payment","input_value":"Не планирую совершать покупку","input_id":"nomoney","input_class":"radio","onclick":"getRadioValuePayment()","label_for":"nomoney","img_src":"../images/Payment/nomoney.png","img_id":"img-nomoney","img_class":"img img-adds","img_title":"Я не планирую совершать покупку","img_alt":"Я не планирую совершать покупку"}]')},HEMh:function(i,a){i.exports='<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n\r\n\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n    <title>Identify your need</title>\r\n\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n    <div class="wrapper">\r\n        <h1 class="title">Где Вы находитесь?</h1>\r\n        <ul class="wrap">\r\n            <ul class="flex" id="Place"></ul>\r\n            <ul class="flex indentation" style="display:none" id="Payment"></ul>\r\n            <ul class="flex indentation" style=" display:none" id="Loyality"></ul>\r\n            <ul class="flex" style="display:none" id="Usage"></ul>\r\n        </ul>\r\n\r\n\r\n    </div>\r\n    <script src="https://smtpjs.com/v3/smtp.js">\r\n    <\/script>\r\n</body>\r\n\r\n</html>'},SDYd:function(i){i.exports=JSON.parse('[{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Collonil","input_id":"Collonil","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Collonil","img_src":"../images/Usage/Collonil.png","img_id":"img-Collonil","img_class":"img img-adds","img_title":"Я пользуюсь Collonil","img_alt":"Я пользуюсь Collonil"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Silver","input_id":"Silver","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Silver","img_src":"../images/Usage/Silver.png","img_id":"img-Silver","img_class":"img img-adds","img_title":"Я пользуюсь Silver","img_alt":"Я пользуюсь Silver"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Salton","input_id":"Salton","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Salton","img_src":"../images/Usage/Salton.png","img_id":"img-Salton","img_class":"img img-adds","img_title":"Я пользуюсь Salton","img_alt":"Я пользуюсь Salton"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Salamander","input_id":"Salamander","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Salamander","img_src":"../images/Usage/Salamander.png","img_id":"img-Salamander","img_class":"img img-adds","img_title":"Я пользуюсь Salamander","img_alt":"Я пользуюсь Salamander"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Tarrago","input_id":"Tarrago","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Tarrago","img_src":"../images/Usage/Tarrago.png","img_id":"img-Tarrago","img_class":"img img-adds","img_title":"Я пользуюсь Tarrago","img_alt":"Я пользуюсь Tarrago"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Saphir","input_id":"Saphir","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Saphirr","img_src":"../images/Usage/Saphir.png","img_id":"img-Saphir","img_class":"img img-adds","img_title":"Я пользуюсь Saphir","img_alt":"Я пользуюсь Saphir"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Не помню и/или не знаю","input_id":"DoNotKnow","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"DoNotKnow","img_src":"../images/Usage/DoNotKnow.png","img_id":"img-DoNotKnow","img_class":"img img-adds","img_title":"Не помню и/или не знаю","img_alt":"Не помню и/или не знаю"},{"li_class":"li-script","btn_class":"button-identify","input_name":"usage","input_value":"Ничем","input_id":"Nothing","input_class":"radio","onclick":"getRadioValueUsage()","label_for":"Nothing","img_src":"../images/Usage/Nothing.png","img_id":"img-Nothing","img_class":"img img-adds","img_title":"Я ничем не пользуюсь","img_alt":"Я ничем не пользуюсь"}]')},W2wZ:function(i,a,l){var n=l("mp5j");i.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(i,a,l,n,t){var e,s=null!=a?a:i.nullContext||{},o=i.hooks.helperMissing,m="function",c=i.escapeExpression;return'<li class="'+c(typeof(e=null!=(e=l.li_class||(null!=a?a.li_class:a))?e:o)===m?e.call(s,{name:"li_class",hash:{},data:t,loc:{start:{line:1,column:11},end:{line:1,column:23}}}):e)+'">\r\n    <div class=" '+c(typeof(e=null!=(e=l.btn_class||(null!=a?a.btn_class:a))?e:o)===m?e.call(s,{name:"btn_class",hash:{},data:t,loc:{start:{line:2,column:17},end:{line:2,column:30}}}):e)+'">\r\n        <input type="radio" name="'+c(typeof(e=null!=(e=l.input_name||(null!=a?a.input_name:a))?e:o)===m?e.call(s,{name:"input_name",hash:{},data:t,loc:{start:{line:3,column:34},end:{line:3,column:48}}}):e)+'" value="'+c(typeof(e=null!=(e=l.input_value||(null!=a?a.input_value:a))?e:o)===m?e.call(s,{name:"input_value",hash:{},data:t,loc:{start:{line:3,column:57},end:{line:3,column:72}}}):e)+'" id="'+c(typeof(e=null!=(e=l.input_id||(null!=a?a.input_id:a))?e:o)===m?e.call(s,{name:"input_id",hash:{},data:t,loc:{start:{line:3,column:78},end:{line:3,column:90}}}):e)+'" class="'+c(typeof(e=null!=(e=l.input_class||(null!=a?a.input_class:a))?e:o)===m?e.call(s,{name:"input_class",hash:{},data:t,loc:{start:{line:3,column:99},end:{line:3,column:114}}}):e)+'"\r\n            onclick="'+c(typeof(e=null!=(e=l.onclick||(null!=a?a.onclick:a))?e:o)===m?e.call(s,{name:"onclick",hash:{},data:t,loc:{start:{line:4,column:21},end:{line:4,column:32}}}):e)+'">\r\n\r\n        <label for="'+c(typeof(e=null!=(e=l.label_for||(null!=a?a.label_for:a))?e:o)===m?e.call(s,{name:"label_for",hash:{},data:t,loc:{start:{line:6,column:20},end:{line:6,column:33}}}):e)+'"> <img src="'+c(typeof(e=null!=(e=l.img_src||(null!=a?a.img_src:a))?e:o)===m?e.call(s,{name:"img_src",hash:{},data:t,loc:{start:{line:6,column:46},end:{line:6,column:57}}}):e)+'" id="'+c(typeof(e=null!=(e=l.img_id||(null!=a?a.img_id:a))?e:o)===m?e.call(s,{name:"img_id",hash:{},data:t,loc:{start:{line:6,column:63},end:{line:6,column:73}}}):e)+'" class="'+c(typeof(e=null!=(e=l.img_class||(null!=a?a.img_class:a))?e:o)===m?e.call(s,{name:"img_class",hash:{},data:t,loc:{start:{line:6,column:82},end:{line:6,column:95}}}):e)+'" title="'+c(typeof(e=null!=(e=l.img_title||(null!=a?a.img_title:a))?e:o)===m?e.call(s,{name:"img_title",hash:{},data:t,loc:{start:{line:6,column:104},end:{line:6,column:117}}}):e)+'"\r\n                alt="'+c(typeof(e=null!=(e=l.img_alt||(null!=a?a.img_alt:a))?e:o)===m?e.call(s,{name:"img_alt",hash:{},data:t,loc:{start:{line:7,column:21},end:{line:7,column:32}}}):e)+'">\r\n        </label>\r\n    </div>\r\n</li>'},useData:!0})},Wd87:function(i){i.exports=JSON.parse('[{"li_class":"li-script","btn_class":"button-identify","input_name":"loyality","input_value":"Знаком","input_id":"know","input_class":"radio","onclick":"getRadioValueLoyality()","label_for":"know","img_src":"../images/Loyality/Yes.png","img_id":"img-know","img_class":"img img-adds","img_title":"Я знаком с продукцией MAVI STEP","img_alt":"Я знаком с продукцией MAVI STEP"},{"li_class":"li-script","btn_class":"button-identify","input_name":"loyality","input_value":"Не знаком","input_id":"notKnow","input_class":"radio","onclick":"getRadioValueLoyality()","label_for":"notKnow","img_src":"../images/Loyality/No.png","img_id":"img-notKnow","img_class":"img img-adds","img_title":"Я не знаком с продукцией MAVI STEP","img_alt":"Я не знаком с продукцией MAVI STEP"}]')},bE2Q:function(i){i.exports=JSON.parse('[{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"ARTmall","input_id":"ARTmall","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"ARTmall","img_src":"../images/Malls/ARTmall.png","img_id":"img-ARTmall","img_class":"img img-adds","img_title":"ARTmall","img_alt":"ARTmall"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"OceanPlaza","input_id":"OceanPlaza","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"OceanPlaza","img_src":"../images/Malls/OceanPlaza.png","img_id":"img-OceanPlaza","img_class":"img img-adds","img_title":"OceanPlaza","img_alt":"OceanPlaza"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Gulliver","input_id":"Gulliver","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Gulliver","img_src":"../images/Malls/Gulliver.png","img_id":"img-Gulliver","img_class":"img img-adds","img_title":"Gulliver","img_alt":"Gulliver"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Globus","input_id":"Globus","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Globus","img_src":"../images/Malls/Globus.png","img_id":"img-Globus","img_class":"img img-adds","img_title":"Globus","img_alt":"Globus"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Novus","input_id":"Novus","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Novus","img_src":"../images/Malls/Novus.png","img_id":"img-Novus","img_class":"img img-adds","img_title":"Novus","img_alt":"Novus"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"DreamTawn","input_id":"DreamTawn","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"DreamTawn","img_src":"../images/Malls/DreamTawn.png","img_id":"img-DreamTawn","img_class":"img img-adds","img_title":"DreamTawn","img_alt":"DreamTawn"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Cosmopolite","input_id":"Cosmopolite","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Cosmopolite","img_src":"../images/Malls/Cosmopolite.png","img_id":"img-Cosmopolite","img_class":"img img-adds","img_title":"Cosmopolite","img_alt":"Cosmopolite"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Kvadrat","input_id":"Kvadrat","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Kvadrat","img_src":"../images/Malls/Kvadrat.png","img_id":"img-Kvadrat","img_class":"img img-adds","img_title":"Kvadrat","img_alt":"Kvadrat"},{"li_class":"li-script","btn_class":"button-identify","input_name":"place-name","input_value":"Silpo_Stoyanka","input_id":"Silpo_Stoyanka","input_class":"radio","onclick":"getRadioValueLocation()","label_for":"Silpo_Stoyanka","img_src":"../images/Malls/Silpo_Stoyanka.png","img_id":"img-Silpo_Stoyanka","img_class":"img img-adds","img_title":"Silpo_Stoyanka","img_alt":"Silpo_Stoyanka"}]')},hjJ8:function(i,a,l){},kneM:function(i,a,l){"use strict";l.r(a);l("HEMh"),l("8cZI"),l("lmye");var n,t=l("bE2Q"),e=l("GIFI"),s=l("Wd87"),o=l("SDYd"),m=l("W2wZ"),c=l.n(m),g={postLocation:document.getElementById("Place"),postPayment:document.getElementById("Payment"),postLoyality:document.getElementById("Loyality"),postUsage:document.getElementById("Usage")};n=t.map((function(i){return c()(i)})).join(""),g.postLocation.insertAdjacentHTML("beforeend",n),function(i){var a=i.map((function(i){return c()(i)})).join("");g.postPayment.insertAdjacentHTML("beforeend",a)}(e),function(i){var a=i.map((function(i){return c()(i)})).join("");g.postLoyality.insertAdjacentHTML("beforeend",a)}(s),function(i){var a=i.map((function(i){return c()(i)})).join("");g.postUsage.insertAdjacentHTML("beforeend",a)}(o);l("ZXyM");var u,_,r,d="",p=(u=new Date,_=new Array("Вc","Пy","Вт","Ср","Чтв","Птн","Сб"),r=new Array("янв","фев","мар","апр","мая","июня","июля","авг","снт","окт","ноя","дек"),_[u.getDay()]+" "+u.getDate()+" "+r[u.getMonth()]+" "+u.getFullYear()+" г."),y=function(){var i=new Date;return i.getHours()+":"+(i.getMinutes()<10?"0":"")+i.getMinutes()}(),b="",f="",v="";function h(i){console.log(i);for(var a=0;a<i.length;a++)if(i[a].checked)return i[a].value}window.getRadioValueLocation=function(){var i=document.getElementsByName("place-name");d=h(i),document.querySelector(".title").innerHTML="Укажите форму расчета",document.getElementById("Place").style.display="none",document.getElementById("Payment").style.display="block"},window.getRadioValuePayment=function(){var i=document.getElementsByName("payment");b=h(i),document.querySelector(".title").innerHTML="Вы знакомы с Нашей продукцией",document.getElementById("Payment").style.display="none",document.getElementById("Loyality").style.display="block"},window.getRadioValueLoyality=function(){var i=document.getElementsByName("loyality");f=h(i),document.querySelector(".title").innerHTML="Чем Вы обычно пользуетесь?",document.getElementById("Loyality").style.display="none",document.getElementById("Usage").style.display="block"},window.getRadioValueUsage=function(){var i=document.getElementsByName("usage");v=h(i),alert("Магазин: "+d+"\r\nКогда: "+p+"\r\nВремя: "+y+"\r\n\r\n_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____\r\n1.1 Форма расчета: "+b+"\r\n1.2 С Наше продукцией: "+f+"\r\n1.3 Пользуется: "+v),a="<strong>Магазин: </strong>"+d+"<br /><strong>Когда: </strong>"+p+"<br /><strong>Время: </strong>"+y+"<br /><br /><strong>_____1. ОБЩЯЯ ИНФОРМАЦИЯ_____</strong><br /><strong>1.1 Форма расчета: </strong>"+b+"<br /><strong>1.2 С Нашей продукцией: </strong>"+f+"<br /><strong>1.3 Пользуется: </strong>"+v,Email.send({Host:"smtp.gmail.com",Username:"mavistepreport",Password:"MaviStep1996",To:"mavistepreport@gmail.com",From:"mavistepreport@gmail.com",Subject:"customer statistics",Body:a}),document.getElementById("Usage").style.display="none";var a};l("hjJ8")}},[["kneM",0,1]]]);
//# sourceMappingURL=identify.1be79f61a4fb58dbeb8e.js.map
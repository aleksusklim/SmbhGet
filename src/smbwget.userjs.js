﻿// RUN-AT: document-start
// TOP-FRAME-ONLY: no
// ==UserScript==
// @author smbwget
// @name smbwget
// @version 1.3
// @include http://mover.uz/watch/*
// @include https://mover.uz/watch/*
// @include http://v.mover.uz/watch/*
// @include https://v.mover.uz/watch/*
// ==/UserScript==
window._smbwget=null;window._smbwget=function(){if(window._smbwget===null||!window.document||!document.body)return;if(window.opera)window.opera.removeEventListener('AfterEvent',window._smbwget);if(window.document)document.removeEventListener('DOMContentLoaded',window._smbwget);window.removeEventListener('DOMContentLoaded',window._smbwget);window._smbwget=null;
(function(D){if(!D||!D.body)return;var S=function(c){var e=D.createElement('script');e.innerHTML=c;D.body.appendChild(e);},F=function(){
var P=function(b){if(b<0)return '0';if(b<1024)return b+' b';var s=Math.round(b*1000/1024);var n=[' Kb',' MB',' GB!'];for(var t=0;t<3;t++){if(s<10000)return(''+s).substr(0,1)+'.'+(''+s).substr(1,2)+n[t];if(s<100000)return(''+s).substr(0,2)+'.'+(''+s).substr(2,1)+n[t];if(s<1000000)return(''+s).substr(0,3)+n[t];s=Math.round(s/1024);}return '0';},
G=function(c,n,f,g){if(g)g='color:#000;font-style:italic;';else g='font-weight:normal;color:#f00;text-decoration:line-through;';var i,a='',s=['S','M','B','H'],u=[c+'_s',c+'_m',c+'_b',c+'_h'];if(f)for(i=0;i<4;i++)E('//v.mover.uz/'+u[i]+'.mp4',document.getElementById(u[i]));else for(i=0;i<4;i++){a+='<a id="'+u[i]+'" style="display:inline-block;vertical-align:middle;margin:0 8px;'+g+'" target="_blank" href="/'+u[i]+'.mp4" onclick=\'prompt("'+n+'","smbwget \\"'+document.location.protocol+'//v.mover.uz/'+u[i]+'.mp4\\" \\"'+n+' ['+u[i]+'].mp4\\"");return false;\'>'+s[i]+'</a>';}return a;},
E=function(u,e){var x=new XMLHttpRequest(),s=0;x.open('HEAD',u,true);x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){s=P(+x.getResponseHeader('Content-Length'));e.innerHTML='<div title="'+s+'" style="display:inline-block;"><span style="text-decoration:underline;font-weight:bold;color:blue;">'+e.innerHTML+'</span><br><span style="font:normal 12px Arial;color:black;">'+s+'</span></div>';}};x.send(null);};
var i,a=document.getElementsByTagName('meta'),L=document.location.href.replace(/[#?*].*/,'').replace('//mover.','**v.mover.').replace('/watch/','*').replace('/','').replace(/\*/g,'/').replace('#',''),K=L.replace(/.*\//,''),T=L.replace(/^.*\//g,'');for(i=a.length;i--;)if(a[i].attributes.getNamedItem('property')&&a[i].attributes.getNamedItem('property').value=='og:title')T=a[i].attributes.getNamedItem('content').value.replace(/\s+/gm,' ').replace(/[^ a-zA-Z0-9а-яА-ЯёЁ!(){}–_+~-]/gm,'').replace(/\s+/gm,' ').trim();
if(document.location.href.indexOf('v.mover.uz/watch/')>=0){var m=document.location.href.match(/#(.*)?#(.*)?#/);if(m){m[1]=decodeURIComponent(m[1]);m[2]=decodeURIComponent(m[2]);for(var h=document.getElementsByTagName('head'),i=h.length;i--;)h[i].outerHTML='';document.body.innerHTML='<style>*{margin:0;padding:0;overflow:hidden;background:white;}</style><div style="margin-top:2px;font:bold 20px Arial;color:#f00;text-align:center;background:white;width:100%;height:48px;overflow:hidden;">'+G(m[1],m[2],false)+'</div>';G(m[1],m[2],true);}return;}
if(document.defaultView.parent!=document.defaultView){var d=document.defaultView.parent.document;if(d){document.body.innerHTML='';var f=d.getElementsByTagName('iframe');
for(i=f.length;i--;)if(f[i].src.replace(/.*?\/\//,'')==document.location.href.replace(/.*?\/\//,'')){f[i].setAttribute('data-mwget',T);}}return;}
window.smbwgetdiv=function(X){
if((X=document.getElementById('smbwgetdiv')))X.outerHTML='';
var e=document.createElement('div'),A=G(K,T,false,true);e.id='smbwgetdiv';
e.innerHTML='<div style="display:block;z-index:999999;position:absolute;top:0;left:0;background-color:lime;padding:10px;font:bold 20px Arial;color:#f00;text-align:center;" onclick="if(event.shiftKey){this.innerHTML=this.firstElementChild.outerHTML+this.lastElementChild.innerHTML;this.onclick=null;document.getSelection().removeAllRanges();return;};if(!event.shiftKey&&!event.altKey&&!event.metaKey&&!event.ctrlKey){return smbwgetdiv();}if(!event.shiftKey&&!event.altKey&&(event.ctrlKey||event.metaKey))this.outerHTML=\'\';else if(!event.shiftKey&&event.altKey&&!event.ctrlKey&&!event.metaKey){if(this.getElementsByTagName(\'textarea\').length>0)return;'+
'this.onclick=null;this.innerHTML=\'<div>\'+this.firstElementChild.innerHTML+\'</div>\';var O=document.createElement(\'textarea\');this.firstElementChild.appendChild(O);this.style.backgroundColor=\'cyan\';setInterval(function(f,i,r,n,t){f=document.getElementsByTagName(\'iframe\');for(i=f.length;i--;){n=f[i].getAttribute(\'data-name\');if(n&&n!=\'\'){r=f[i].getAttribute(\'data-mwget\');if(r&&r!=\'\'){t=f[i].getAttribute(\'data-type\');r=r+\' [\'+t+\'].mp4\';f[i].outerHTML=\'\';O.value+=(\'ren *\'+n+\'* *\'+r+\'*\').replace(/\\*/g,String.fromCharCode(34))+'+
'String.fromCharCode(10);O.select();O.focus();}}};},1000);}"><div style="display:none;"><div style="height:32px;width:100%;background:yellow;text-align:center;"><div style="padding-top:8px;text-align:center;font:italic 16px Arial;color:#f0f;text-decoration:underline;padding:6px;"> Rename files: </div><div style="position:absolute;top:10px;left:10px;right:10px;overflow:hidden;height:32px;"><input type="file" accept="video/mp4" style="font:bold 256px serif;padding:256px;opacity:0;cursor:pointer;" size="256" multiple onchange="var f=this,i,k,n,s,m,e,a=[],r=[];'+
'for(i=0;i<f.files.length;i++)a.push(f.files[i].name);for(i=0;i<a.length;i++){s=a[i];m=s.match(/([a-zA-Z0-9_]+)_([smbh])\\.mp4/);if(m){k=m[2];m=m[1];}else{m=s.match(/\\[([a-zA-Z0-9_]+)_([smbh])\\]/);if(m){k=m[2];m=m[1];}}if(m){r.push([s,m,k])}};s=\'\';for(i=0;i<r.length;i++){e=document.createElement(\'iframe\');e.style.position=\'absolute\';e.style.left=\'-9999px\';e.setAttribute(\'data-name\',r[i][0]);e.setAttribute(\'data-type\',r[i][1]+\'_\'+r[i][2]);e.src=\'/watch/\'+r[i][1]+\'/?\';document.body.appendChild(e);};"></div></div></div>'+
'<iframe style="z-index:999999;border:0;padding:0;margin:0;width:240px;height:45px;background:gray;" src="//v.mover.uz/watch/#'+encodeURIComponent(K)+'#'+encodeURIComponent(T)+'#"></iframe><div style="display:none">'+A+'</div></div>';
document.body.appendChild(e);};
smbwgetdiv();
};
S('('+F.toString()+')();');})(document);
};if(window.opera)window.opera.addEventListener('AfterEvent',window._smbwget,false);if(window.document)document.addEventListener('DOMContentLoaded',window._smbwget,false);window.addEventListener('DOMContentLoaded',window._smbwget,false);
//EOF
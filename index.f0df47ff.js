function t(t,i,e,s){Object.defineProperty(t,i,{get:e,set:s,enumerable:!0,configurable:!0})}function i(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},h=e.parcelRequiree05d;null==h&&((h=function(t){if(t in s)return s[t].exports;if(t in r){var i=r[t];delete r[t];var e={id:t,exports:{}};return s[t]=e,i.call(e.exports,e,e.exports),e.exports}var h=new Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}).register=function(t,i){r[t]=i},e.parcelRequiree05d=h),h.register("7Vbeu",(function(i,e){var s,r;t(i.exports,"register",(()=>s),(t=>s=t)),t(i.exports,"resolve",(()=>r),(t=>r=t));var h={};s=function(t){for(var i=Object.keys(t),e=0;e<i.length;e++)h[i[e]]=t[i[e]]},r=function(t){var i=h[t];if(null==i)throw new Error("Could not resolve bundle with id "+t);return i}})),h.register("45FFh",(function(i,e){var s;t(i.exports,"getBundleURL",(()=>s),(t=>s=t));var r={};function h(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var i=r[t];return i||(i=function(){try{throw new Error}catch(i){var t=(""+i.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return h(t[2])}return"/"}(),r[t]=i),i}})),h("7Vbeu").register(JSON.parse('{"elBHG":"index.f0df47ff.js","cXQnz":"background.d925e6ae.png","ksgGv":"bird.e01da0da.png","itFLu":"ground.062ae3d3.png","5NUS9":"pipe.d5153c02.png"}'));var a;a=h("45FFh").getBundleURL("elBHG")+h("7Vbeu").resolve("cXQnz");var n;n=h("45FFh").getBundleURL("elBHG")+h("7Vbeu").resolve("ksgGv");var o;o=h("45FFh").getBundleURL("elBHG")+h("7Vbeu").resolve("itFLu");var c;c=h("45FFh").getBundleURL("elBHG")+h("7Vbeu").resolve("5NUS9");const d=t=>new Promise((i=>{const e=new Image;e.onload=()=>i(e),e.src=t}));var l=class{w=25.6;h=80;x=0;y=1024-this.h;renderCount=0;constructor(t){this.image=t}checkCollision(t){return t.y+t.h>this.y}update(){this.x-=6}render(t){t.translate(this.x%this.w,0);for(let i=0;i<31;i++)t.drawImage(this.image,this.w*i,this.y,this.w,this.h);t.setTransform(1,0,0,1,0,0),this.renderCount++}};var u=class{w=104;h=260;velocity=6;pass=!1;constructor({x:t,y:i}){this.x=t,this.y=i}checkPass(t){return!this.pass&&this.x<t}update(){this.x=this.x-6}render(t,i){t.rotate(180*Math.PI/180),t.drawImage(i,-this.x-this.w,-this.y,this.w,597.6231884058),t.setTransform(1,0,0,1,0,0),t.drawImage(i,this.x,this.y+this.h,this.w,597.6231884058)}};var p=class{pipes=[];constructor(t){this.image=t}reset(){this.pipes.length=0}addPipe(){this.pipes.push(new u({x:768,y:130+102.4*(Math.floor(4*Math.random())+1)}))}checkCollision(t){return this.pipes.some((({x:i,y:e,w:s,h:r})=>(i<t.x+t.w&&t.x+t.w<=i+s||i<t.x&&t.x<=i+s)&&(t.y<e||e+r<t.y+t.h)))}update(t,i){this.pipes.forEach((e=>{e.update(),e.checkPass(i)&&(e.pass=!0,t(),this.addPipe())})),this.pipes[0].x+this.pipes[0].w<=0&&this.pipes.shift()}render(t){this.pipes.forEach((i=>i.render(t,this.image)))}};var v=class{w=68;h=52;velocity=.6;gravity=-6;maxGravity=10;curvePoint=7;isDead=!1;constructor(t,{x:i,y:e,w:s,h:r}){this.image=t,this.x=i,this.y=e,this.w=s||this.w,this.h=r||this.h}reset(){this.x=316,this.y=512,this.isDead=!1,this.velocity=.6,this.gravity=-6,this.curveCount=0}dead(){this.isDead=!0}updateGravity(){this.gravity=Math.min(this.gravity,1-this.maxGravity)-3,this.curveCount=0}getDirection(){return this.gravity>=this.curvePoint?(this.curveCount<90&&(this.curveCount+=6),this.curveCount):-20}update(){if(this.isDead)return this.gravity=this.maxGravity+2,void(this.y+=this.gravity);this.y+=this.gravity,this.gravity>this.maxGravity?this.gravity=this.maxGravity:this.gravity+=this.velocity}render(t,{isStart:i}){const e=i?this.getDirection():0;t.translate(this.x+this.w/2,this.y+this.h/2),t.rotate(e*Math.PI/180);const s=this.isDead?0:Math.floor((Math.sin(window.performance.now()/200)+1)/(2/3));t.drawImage(this.image,s*this.image.naturalWidth/3,0,this.image.naturalWidth/3,this.image.naturalHeight,-this.w/2,-this.h/2,this.w,this.h),t.setTransform(1,0,0,1,0,0)}};var g=class{w=150;h=60;x=384-this.w/2;y=512-this.h/2-3;text="RESTART";visible=!1;constructor(t){this.app=t}toggle(){this.visible=!this.visible}isEnter=t=>{const{canvas:i}=this.app,e=i.getBoundingClientRect(),s=(t.pageX-e.left)*i.width/i.clientWidth,r=(t.pageY-e.top)*i.height/i.clientHeight;return this.x<s&&s<this.x+this.w&&this.y<r&&r<this.y+this.h};onMousemove=t=>{this.app.canvas.style.cursor=this.isEnter(t)?"pointer":"auto"};onClick=t=>{this.isEnter(t)&&(document.querySelector("canvas").style="",this.app.canvas.removeEventListener("mousemove",this.onMousemove),this.app.ctx.canvas.removeEventListener("click",this.onClick),this.app.reset())};show(){this.app.canvas.addEventListener("mousemove",this.onMousemove),this.app.canvas.addEventListener("click",this.onClick),this.render()}render(){this.app.ctx.fillStyle="#e86102",this.app.ctx.fillRect(this.x,this.y,this.w,this.h),this.app.ctx.fillStyle="#fff",this.app.ctx.font="32px sans-serif",this.app.ctx.fillText(this.text,384,512)}};var f=class{FPS=1e3/144;constructor(t){this.iamges=t,this.canvas=document.querySelector("canvas"),this.ctx=this.canvas.getContext("2d"),this.ground=new l(t.ground),this.pipes=new p(t.pipe),this.bird=new v(t.bird,{x:316,y:512}),this.restartButton=new g(this),this.reset()}reset(){this.score=0,this.isStart=!1,this.prevTime=0,this.reqId=null,this.canvas.width=768,this.canvas.height=1024,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="48px sans-serif",this.reqId=window.requestAnimationFrame(this.animate),this.pipes.reset(),this.bird.reset(),this.eve()}eve(){this.canvas.addEventListener("click",this.gameStart),this.canvas.addEventListener("click",this.flyBird)}gameStart=()=>{this.pipes.addPipe(),this.isStart=!0,this.canvas.removeEventListener("click",this.gameStart)};flyBird=()=>{this.bird.updateGravity()};checkCollision(){return!this.bird.isDead&&(!!this.ground.checkCollision(this.bird)||this.pipes.checkCollision(this.bird))}stop(){cancelAnimationFrame(this.reqId)}addScore=()=>{this.score++};animate=t=>{if(this.reqId=window.requestAnimationFrame(this.animate),t>this.prevTime+this.FPS){if(this.prevTime=t,this.isStart&&this.update(),this.render(),this.bird.y-this.bird.h>=1024)return this.stop(),void this.renderGameResult();this.checkCollision()&&(this.bird.dead(),this.canvas.removeEventListener("click",this.flyBird),this.renderCrash())}};update(){this.bird.update(),this.bird.isDead||(this.ground.update(),this.pipes.update(this.addScore,this.bird.x))}renderGameResult(){this.restartButton.show()}renderCrash(){this.ctx.fillStyle="#fff",this.ctx.fillRect(0,0,768,1024),this.stop(),setTimeout((()=>{this.reqId=window.requestAnimationFrame(this.animate)}),100)}render(){this.ctx.drawImage(this.iamges.background,0,0,768,1024),this.pipes.render(this.ctx),this.ground.render(this.ctx),this.bird.render(this.ctx,{isStart:this.isStart}),this.ctx.fillStyle="#fff",this.ctx.fillText(this.score,384,256)}};window.onload=async()=>{const t={};t.background=await d(i(a)),t.bird=await d(i(n)),t.ground=await d(i(o)),t.pipe=await d(i(c)),new f(t)};
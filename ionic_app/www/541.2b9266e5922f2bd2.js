"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[541],{541:(T,c,s)=>{s.r(c),s.d(c,{MENU_BACK_BUTTON_PRIORITY:()=>B,OVERLAY_BACK_BUTTON_PRIORITY:()=>l,blockHardwareBackButton:()=>_,startHardwareBackButton:()=>d});var i=s(1670);const _=()=>{document.addEventListener("backbutton",()=>{})},d=()=>{const a=document;let r=!1;a.addEventListener("backbutton",()=>{if(r)return;let f=0,n=[];const p=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){n.push({priority:t,handler:e,id:f++})}}});a.dispatchEvent(p);const E=function(){var t=(0,i.Z)(function*(e){try{if(e?.handler){const o=e.handler(u);null!=o&&(yield o)}}catch(o){console.error(o)}});return function(o){return t.apply(this,arguments)}}(),u=()=>{if(n.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};n.forEach(e=>{e.priority>=t.priority&&(t=e)}),r=!0,n=n.filter(e=>e.id!==t.id),E(t).then(()=>r=!1)}};u()})},l=100,B=99}}]);
//# sourceMappingURL=541.2b9266e5922f2bd2.js.map
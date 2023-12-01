"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[383],{5383:(ie,W,v)=>{v.r(W),v.d(W,{GroceryPage:()=>te});var u=v(1670),P=v(8482),H=v(6575),F=v(2139),S=v(9511);const D=(0,v(8626).fo)("Share",{web:()=>v.e(945).then(v.bind(v,8945)).then(d=>new d.ShareWeb)});var t=v(7822),k=v(5019),B=v(8071),q=v(4860);let J=(()=>{class d{constructor(o){this.http=o,this.dataChangeSubject=new B.X(!1),this.dataChanged$=this.dataChangeSubject.asObservable(),this.apiUrl="http://localhost:8080/api/groceries",this.items=[]}getItems(){return this.http.get(this.apiUrl)}addItem(o){console.log(this.apiUrl),this.http.post(this.apiUrl,o).subscribe(c=>{this.items=c,this.dataChangeSubject.next(!0)})}editItem(o,c){console.log(`${this.apiUrl}/${c}`),this.http.put(`${this.apiUrl}/${c}`,o).subscribe(h=>{this.items=h,this.dataChangeSubject.next(!0)})}deleteItem(o){console.log(o),this.http.delete(`${this.apiUrl}/${o._id}`).subscribe(c=>{console.log(c),this.items=c,this.dataChangeSubject.next(!0)})}handleError(o){console.log(o)}static#e=this.\u0275fac=function(c){return new(c||d)(t.LFG(q.eN))};static#t=this.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})(),I=(()=>{class d{constructor(o,c){this.alertController=o,this.groceryService=c}promptAlert(o,c){var h=this;return(0,u.Z)(function*(){yield(yield h.alertController.create({header:o?"Edit the item..":"Add an item..",inputs:[{placeholder:"Name",name:"name",value:o?o.name:null},{placeholder:"Quantity",name:"quantity",value:o?o.quantity:null,type:"number",min:1}],buttons:[{text:"Cancel",role:"cancel"},{text:"Save",handler:C=>{void 0!==c?h.groceryService.editItem(C,c):h.groceryService.addItem(C)}}]})).present()})()}static#e=this.\u0275fac=function(c){return new(c||d)(t.LFG(k.Br),t.LFG(J))};static#t=this.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})();function G(d,K){1&d&&(t.TgZ(0,"h3",9),t._uU(1," No items available in the list! "),t.qZA())}function ee(d,K){if(1&d){const o=t.EpF();t.TgZ(0,"ion-list")(1,"ion-item-sliding")(2,"ion-item")(3,"ion-label")(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()()(),t.TgZ(8,"ion-item-options")(9,"ion-button",10),t.NdJ("click",function(){const x=t.CHM(o).$implicit,C=t.oxw();return t.KtG(C.editItem(x))}),t._UZ(10,"ion-icon",11),t._uU(11," Edit "),t.qZA(),t.TgZ(12,"ion-button",12),t.NdJ("click",function(){const h=t.CHM(o),x=h.$implicit,C=h.index,z=t.oxw();return t.KtG(z.shareItem(x,C))}),t._UZ(13,"ion-icon",13),t._uU(14," Share "),t.qZA(),t.TgZ(15,"ion-button",14),t.NdJ("click",function(){const x=t.CHM(o).$implicit,C=t.oxw();return t.KtG(C.removeItem(x))}),t._UZ(16,"ion-icon",15),t._uU(17," Delete "),t.qZA()()()()}if(2&d){const o=K.$implicit;t.xp6(5),t.Oqu(o.name),t.xp6(2),t.Oqu(o.quantity)}}let te=(()=>{class d{constructor(o,c,h,x){this.toastController=o,this.groceryService=c,this.inputDialogService=h,this.cdRef=x,this.title="Grocery List",this.items=[],(0,F.a)({trash:S._Ij,create:S.Ue8,add:S.IHx,share:S.BNl}),c.dataChanged$.subscribe(C=>{this.loadItems()})}loadItems(){this.groceryService.getItems().subscribe(o=>{this.items=o})}removeItem(o){console.log("Removing ",o),this.groceryService.deleteItem(o),this.presentToast(`${o.name} has been deleted.`),this.cdRef.detectChanges()}editItem(o){console.log("Editing ",o._id),this.inputDialogService.promptAlert(o,o._id),this.presentToast(`${o.name} has been edited.`),this.cdRef.detectChanges()}addItem(){console.log("Adding Item"),this.inputDialogService.promptAlert(),this.cdRef.detectChanges()}shareItem(o,c){var h=this;return(0,u.Z)(function*(){console.log("Sharing ",o,c),yield D.share({title:"Item",text:"Name: "+o.name+" Quantity: "+o.quantity}),h.presentToast(`${o.name} has been shared.`)})()}presentToast(o){var c=this;return(0,u.Z)(function*(){yield(yield c.toastController.create({message:o,duration:1e3})).present()})()}static#e=this.\u0275fac=function(c){return new(c||d)(t.Y36(k.yF),t.Y36(J),t.Y36(I),t.Y36(t.sBO))};static#t=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-grocery"]],standalone:!0,features:[t.jDz],decls:14,vars:6,consts:[[3,"translucent"],["padding","",3,"fullscreen"],["slot","fixed","horizontal","end","vertical","bottom"],[3,"click"],["name","add"],["collapse","condense"],["size","large"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-center"],["color","primary",3,"click"],["name","create"],["color","light",3,"click"],["name","share"],["color","secondary",3,"click"],["name","trash"]],template:function(c,h){1&c&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-fab",2)(6,"ion-fab-button",3),t.NdJ("click",function(){return h.addItem()}),t._UZ(7,"ion-icon",4),t.qZA()(),t.TgZ(8,"ion-header",5)(9,"ion-toolbar")(10,"ion-title",6),t._uU(11),t.qZA()()(),t.YNc(12,G,2,0,"h3",7),t.YNc(13,ee,18,2,"ion-list",8),t.qZA()),2&c&&(t.Q6J("translucent",!0),t.xp6(3),t.hij(" ",h.title," "),t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(7),t.Oqu(h.title),t.xp6(1),t.Q6J("ngIf",0===h.items.length),t.xp6(1),t.Q6J("ngForOf",h.items))},dependencies:[P.Gu,P.sr,P.wd,P.W2,P.q_,P.Q$,P.Ie,P.IK,P.td,H.ez,H.sg,H.O5,P.gu,P.IJ,P.W4,P.YG]})}return d})()},8626:(ie,W,v)=>{v.d(W,{Uw:()=>d,fo:()=>G});var u=v(1670);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var t=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(t||{});class k extends Error{constructor(e,n,s){super(e),this.message=e,this.code=n,this.data=s}}const q=r=>{var e,n,s,l,i;const f=r.CapacitorCustomPlatform||null,a=r.Capacitor||{},b=a.Plugins=a.Plugins||{},g=r.CapacitorPlatforms,T=(null===(e=g?.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==f?f.name:(r=>{var e,n;return r?.androidBridge?"android":null!==(n=null===(e=r?.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(r)),ce=(null===(n=g?.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==T()),ue=(null===(s=g?.currentPlatform)||void 0===s?void 0:s.isPluginAvailable)||(m=>{const p=N.get(m);return!(!p?.platforms.has(T())&&!ne(m))}),ne=(null===(l=g?.currentPlatform)||void 0===l?void 0:l.getPluginHeader)||(m=>{var p;return null===(p=a.PluginHeaders)||void 0===p?void 0:p.find(A=>A.name===m)}),N=new Map,pe=(null===(i=g?.currentPlatform)||void 0===i?void 0:i.registerPlugin)||((m,p={})=>{const A=N.get(m);if(A)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),A.proxy;const E=T(),j=ne(m);let U;const ve=function(){var y=(0,u.Z)(function*(){return!U&&E in p?U=U="function"==typeof p[E]?yield p[E]():p[E]:null!==f&&!U&&"web"in p&&(U=U="function"==typeof p.web?yield p.web():p.web),U});return function(){return y.apply(this,arguments)}}(),Q=y=>{let w;const L=(...Z)=>{const $=ve().then(_=>{const O=((y,w)=>{var L,Z;if(!j){if(y)return null===(Z=y[w])||void 0===Z?void 0:Z.bind(y);throw new k(`"${m}" plugin is not implemented on ${E}`,t.Unimplemented)}{const $=j?.methods.find(_=>w===_.name);if($)return"promise"===$.rtype?_=>a.nativePromise(m,w.toString(),_):(_,O)=>a.nativeCallback(m,w.toString(),_,O);if(y)return null===(L=y[w])||void 0===L?void 0:L.bind(y)}})(_,y);if(O){const M=O(...Z);return w=M?.remove,M}throw new k(`"${m}.${y}()" is not implemented on ${E}`,t.Unimplemented)});return"addListener"===y&&($.remove=(0,u.Z)(function*(){return w()})),$};return L.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(L,"name",{value:y,writable:!1,configurable:!1}),L},re=Q("addListener"),oe=Q("removeListener"),ye=(y,w)=>{const L=re({eventName:y},w),Z=function(){var _=(0,u.Z)(function*(){const O=yield L;oe({eventName:y,callbackId:O},w)});return function(){return _.apply(this,arguments)}}(),$=new Promise(_=>L.then(()=>_({remove:Z})));return $.remove=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield Z()}),$},V=new Proxy({},{get(y,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return j?ye:re;case"removeListener":return oe;default:return Q(w)}}});return b[m]=V,N.set(m,{name:m,proxy:V,platforms:new Set([...Object.keys(p),...j?[E]:[]])}),V});return a.convertFileSrc||(a.convertFileSrc=m=>m),a.getPlatform=T,a.handleError=m=>r.console.error(m),a.isNativePlatform=ce,a.isPluginAvailable=ue,a.pluginMethodNoop=(m,p,A)=>Promise.reject(`${A} does not have an implementation of "${p}".`),a.registerPlugin=pe,a.Exception=k,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},I=(r=>r.Capacitor=q(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),G=I.registerPlugin;class d{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var s=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i);const f=function(){var b=(0,u.Z)(function*(){return s.removeListener(e,n)});return function(){return b.apply(this,arguments)}}(),a=Promise.resolve({remove:f});return Object.defineProperty(a,"remove",{value:(b=(0,u.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield f()}),function(){return b.apply(this,arguments)})}),a;var b}removeAllListeners(){var e=this;return(0,u.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const s=this.listeners[e];s&&s.forEach(l=>l(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:s=>{this.notifyListeners(n,s)}}}unimplemented(e="not implemented"){return new I.Exception(e,t.Unimplemented)}unavailable(e="not available"){return new I.Exception(e,t.Unavailable)}removeListener(e,n){var s=this;return(0,u.Z)(function*(){const l=s.listeners[e];if(!l)return;const i=l.indexOf(n);s.listeners[e].splice(i,1),s.listeners[e].length||s.removeWindowListener(s.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const o=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),c=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class h extends d{getCookies(){return(0,u.Z)(function*(){const e=document.cookie,n={};return e.split(";").forEach(s=>{if(s.length<=0)return;let[l,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");l=c(l).trim(),i=c(i).trim(),n[l]=i}),n})()}setCookie(e){return(0,u.Z)(function*(){try{const n=o(e.key),s=o(e.value),l=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),f=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${s||""}${l}; path=${i}; ${f};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,u.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,u.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,u.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}G("CapacitorCookies",{web:()=>new h});const C=function(){var r=(0,u.Z)(function*(e){return new Promise((n,s)=>{const l=new FileReader;l.onload=()=>{const i=l.result;n(i.indexOf(",")>=0?i.split(",")[1]:i)},l.onerror=i=>s(i),l.readAsDataURL(e)})});return function(n){return r.apply(this,arguments)}}();class le extends d{request(e){return(0,u.Z)(function*(){const n=((r,e={})=>{const n=Object.assign({method:r.method||"GET",headers:r.headers},e),l=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(l=>l.toLocaleLowerCase()).reduce((l,i,f)=>(l[i]=r[e[f]],l),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)n.body=r.data;else if(l.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[f,a]of Object.entries(r.data||{}))i.set(f,a);n.body=i.toString()}else if(l.includes("multipart/form-data")){const i=new FormData;if(r.data instanceof FormData)r.data.forEach((a,b)=>{i.append(b,a)});else for(const a of Object.keys(r.data))i.append(a,r.data[a]);n.body=i;const f=new Headers(n.headers);f.delete("content-type"),n.headers=f}else(l.includes("application/json")||"object"==typeof r.data)&&(n.body=JSON.stringify(r.data));return n})(e,e.webFetchExtra),s=((r,e=!0)=>r?Object.entries(r).reduce((s,l)=>{const[i,f]=l;let a,b;return Array.isArray(f)?(b="",f.forEach(g=>{a=e?encodeURIComponent(g):g,b+=`${i}=${a}&`}),b.slice(0,-1)):(a=e?encodeURIComponent(f):f,b=`${i}=${a}`),`${s}&${b}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),l=s?`${e.url}?${s}`:e.url,i=yield fetch(l,n),f=i.headers.get("content-type")||"";let b,g,{responseType:a="text"}=i.ok?e:{};switch(f.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":g=yield i.blob(),b=yield C(g);break;case"json":b=yield i.json();break;default:b=yield i.text()}const R={};return i.headers.forEach((T,Y)=>{R[Y]=T}),{data:b,headers:R,status:i.status,url:i.url}})()}get(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,u.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}G("CapacitorHttp",{web:()=>new le})}}]);
//# sourceMappingURL=383.9ab2418765ecd9d8.js.map
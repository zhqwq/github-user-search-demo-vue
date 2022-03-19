(function(){"use strict";var t={1765:function(t,e,n){var r=n(9242),o=n(3396);function a(t,e,n,r,a,u){const i=(0,o.up)("SearchBar"),s=(0,o.up)("List");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i,{addListItems:u.addListItems},null,8,["addListItems"]),(0,o.Wm)(s,{ListItems:a.ListItems},null,8,["ListItems"])],64)}const u=(0,o._)("h2",null,"Search Bar",-1),i=(0,o.Uk)("Search");function s(t,e,n,r,a,s){const l=(0,o.up)("el-input"),c=(0,o.up)("el-form-item"),d=(0,o.up)("el-button"),f=(0,o.up)("el-form");return(0,o.wg)(),(0,o.iD)(o.HY,null,[u,(0,o.Wm)(f,{model:a.form,"label-width":"100px"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:"User Name"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{modelValue:a.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>a.form.name=t),placeholder:"Please enter a Github user name"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{type:"primary",onClick:s.onSearch},{default:(0,o.w5)((()=>[i])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])],64)}var l={name:"SearchBar",data(){return{form:{name:""}}},methods:{onSearch(){fetch(`https://api.github.com/search/users?q=${this.form.name}`).then((t=>t.json())).then((t=>this.addListItems(t.items))).catch((t=>console.error(t)))}},props:["addListItems"]},c=n(89);const d=(0,c.Z)(l,[["render",s]]);var f=d,m=n(7139);const p=t=>((0,o.dD)("data-v-45ff47da"),t=t(),(0,o.Cn)(),t),h=p((()=>(0,o._)("h2",null,"List Content",-1))),v={class:"list"},_=["src"],g={style:{padding:"14px"}};function b(t,e,n,r,a,u){const i=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)(o.HY,null,[h,(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.ListItems,(t=>((0,o.wg)(),(0,o.j4)(i,{key:t.id,"body-style":{padding:"0px"},style:{margin:"10px"}},{default:(0,o.w5)((()=>[(0,o._)("img",{src:t.avatar_url,class:"image"},null,8,_),(0,o._)("div",g,[(0,o._)("span",null,(0,m.zw)(t.login),1)])])),_:2},1024)))),128))])],64)}var w={name:"List",props:["ListItems"]};const L=(0,c.Z)(w,[["render",b],["__scopeId","data-v-45ff47da"]]);var y=L,I={name:"App",components:{SearchBar:f,List:y},data(){return{ListItems:[]}},methods:{addListItems(t){this.ListItems=t}}};const O=(0,c.Z)(I,[["render",a]]);var k=O,x=n(6429);n(4415);const j=(0,r.ri)(k);j.use(x.Z),j.mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var u=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||u>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(i=!1,a<u&&(u=a));if(i){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,u=r[0],i=r[1],s=r[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var c=s(n)}for(e&&e(r);l<u.length;l++)a=u[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunkgithub_user_search_demo_vue"]=self["webpackChunkgithub_user_search_demo_vue"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1765)}));r=n.O(r)})();
//# sourceMappingURL=app.dcbaa137.js.map
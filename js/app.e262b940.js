(function(){var e={72676:function(e,t,n){"use strict";var o=n(45130),r=n(56768),i=n(96450),l=n(88088),u=n(56332),c=n(43813),a=n(41720),d=n(79669),f=n(89193),s=n(86449),p=n(98477),b=n(14366),h=n(88050);function m(e,t,n,o,m,v){const k=(0,r.g2)("file-folder");return(0,r.uX)(),(0,r.Wv)(i.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(p.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(c.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(u.J,{class:"mx-auto"},{default:(0,r.k6)((()=>[(0,r.bF)(b.u,{color:"secondary"},{default:(0,r.k6)((()=>[(0,r.bF)(l.D,{icon:""},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-menu")])),_:1})])),_:1}),(0,r.bF)(h.s,null,{default:(0,r.k6)((()=>[(0,r.eW)("My files")])),_:1}),(0,r.bF)(a.h),(0,r.bF)(l.D,{icon:""},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-magnify")])),_:1})])),_:1}),(0,r.bF)(l.D,{icon:""},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-view-module")])),_:1})])),_:1})])),_:1}),(0,r.bF)(f.x8,{lines:"two"},{default:(0,r.k6)((()=>[(0,r.bF)(s.w,{inset:""},{default:(0,r.k6)((()=>[(0,r.eW)("Folders")])),_:1}),(0,r.bF)(k,{contents:m.files,onDownload:v.downloadFile},null,8,["contents","onDownload"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}n(14603),n(47566),n(98721);var v=n(35926),k=n.n(v);k().config.update({accessKeyId:"AKIA3XVQI3OJS6AOC4FX",secretAccessKey:"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",region:""});const y=new(k().S3),w=async e=>{const t={Bucket:e};try{const e=await y.listObjectsV2(t).promise();return F(e.Contents)}catch(n){throw console.error("Error listing files: ",n),n}},g=async(e,t)=>{const n={Bucket:e,Key:t};try{const e=await y.getObject(n).promise(),o=URL.createObjectURL(new Blob([e.Body])),r=document.createElement("a");r.href=o,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(o){throw console.error("Error downloading file: ",o),o}},F=e=>{const t={};e.forEach((({Key:e,LastModified:n})=>{const o=e.split("/");let r=t;for(let t=0;t<o.length;t++){const e=o[t];t===o.length-1?r[e]={lastModified:n}:(r[e]||(r[e]={}),r=r[e])}}));const n=e=>{const t={},o=Object.keys(e).filter((t=>"object"===typeof e[t]&&!e[t].lastModified)).sort(),r=Object.keys(e).filter((t=>e[t].lastModified)).sort();return o.forEach((o=>{t[o]=n(e[o])})),r.forEach((n=>{t[n]=e[n]})),t};return n(t)};var _=n(24232),O=n(73416),j=n(4529),C=n(64718);function W(e,t,n,o,i,u){const c=(0,r.g2)("file-folder",!0);return(0,r.uX)(),(0,r.Wv)(f.x8,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(n.contents,((t,n)=>((0,r.uX)(),(0,r.Wv)(j.K,{key:n,value:n},{activator:(0,r.k6)((({props:o})=>[u.isFolder(t)?((0,r.uX)(),(0,r.Wv)(C.g,(0,r.v6)({key:0,ref_for:!0},o,{"prepend-icon":"mdi-folder",title:n}),{prepend:(0,r.k6)((()=>[(0,r.bF)(O.y,{color:u.getFileColor(n)},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,{color:"white"},{default:(0,r.k6)((()=>[(0,r.eW)("mdi-folder")])),_:1})])),_:2},1032,["color"])])),append:(0,r.k6)((()=>[(0,r.bF)(l.D,{icon:"",onClick:t=>e.$emit("download",n)},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-download")])),_:1})])),_:2},1032,["onClick"])])),_:2},1040,["title"])):((0,r.uX)(),(0,r.Wv)(C.g,{key:1,class:"list-item","no-action":"true",onClick:t=>e.$emit("download",n),title:n,subtitle:u.formatDate(t.lastModified)},{prepend:(0,r.k6)((()=>[(0,r.bF)(O.y,{color:u.getFileColor(n)},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,{color:"white"},{default:(0,r.k6)((()=>[(0,r.eW)((0,_.v_)(u.getFileIcon(n)),1)])),_:2},1024)])),_:2},1032,["color"])])),append:(0,r.k6)((()=>[(0,r.bF)(l.D,{icon:"",onClick:t=>e.$emit("download",n)},{default:(0,r.k6)((()=>[(0,r.bF)(d.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-download")])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["onClick","title","subtitle"]))])),default:(0,r.k6)((()=>[(0,r.bF)(c,{contents:t,onDownload:u.downloadFile},null,8,["contents","onDownload"])])),_:2},1032,["value"])))),128))])),_:1})}n(44114);var E={name:"FileFolder",props:{contents:{type:Object,required:!0}},data(){return{openFolders:[]}},methods:{toggleFolder(e){this.isOpen(e)?this.openFolders=this.openFolders.filter((t=>t!==e)):this.openFolders.push(e),console.log(this.openFolders)},isOpen(e){return this.openFolders.includes(e)},isFolder(e){return e&&!e.lastModified},async downloadFile(e){this.$emit("download",e)},getFileIcon(e){return e.endsWith(".pdf")?"mdi-file-pdf":e.endsWith(".docx")?"mdi-file-word":e.endsWith(".pptx")?"mdi-file-powerpoint":"mdi-file-document"},getFileColor(e){return e.endsWith(".pdf")?"red":e.endsWith(".docx")?"blue":e.endsWith(".pptx")?"orange":"grey-lighten-1"},formatDate(e){if(!e)return"";const t=new Date(e);return t.toLocaleDateString()+" "+t.toLocaleTimeString()}}},x=n(71241);const D=(0,x.A)(E,[["render",W],["__scopeId","data-v-33106e8a"]]);var M=D,A={components:{FileFolder:M},data(){return{files:{}}},async created(){this.files=await w("tr-curriculum-bucket")},methods:{async downloadFile(e){await g("tr-curriculum-bucket",e)}}};const P=(0,x.A)(A,[["render",m],["__scopeId","data-v-6936d2bb"]]);var I=P,K=(n(35524),n(61480)),S=(0,K.$N)();async function T(){const e=await n.e(53).then(n.t.bind(n,48874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}T(),(0,o.Ef)(I).use(S).mount("#app")},11976:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<l&&(l=i));if(u){e.splice(d--,1);var a=r();void 0!==a&&(t=a)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var u=2&r&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){l[e]=function(){return o[e]}}));return l["default"]=function(){return o},n.d(i,l),i}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.7af08a31.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-vue-s3-project:";n.l=function(o,r,i,l){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var f=a[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var s=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/<REPO_NAME>/"}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var l=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",u.name="ChunkLoadError",u.type=i,u.request=l,r[1](u)}};n.l(l,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,l=o[0],u=o[1],c=o[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var d=c(n)}for(t&&t(o);a<l.length;a++)i=l[a],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkmy_vue_s3_project"]=self["webpackChunkmy_vue_s3_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(72676)}));o=n.O(o)})();
//# sourceMappingURL=app.e262b940.js.map
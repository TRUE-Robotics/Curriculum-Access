(function(){var e={52347:function(e,t,o){"use strict";var n=o(45130),r=o(56768),i=o(96450),l=o(98477);function a(e,t,o,n,a,d){const c=(0,r.g2)("password-check");return(0,r.uX)(),(0,r.Wv)(i.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(l.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(c)])),_:1})])),_:1})}const d={key:0},c={key:1},s=(0,r.Lk)("h1",null,"Access Denied",-1),u=[s];function f(e,t,o,n,i,l){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",null,[i.authenticated?((0,r.uX)(),(0,r.CE)("div",d,[(0,r.bF)(a)])):((0,r.uX)(),(0,r.CE)("div",c,u))])}o(14603),o(47566),o(98721);const h={dev:!1};var p=h,w={data(){return{authenticated:!1}},created(){this.checkPassword()},methods:{checkPassword(){const e=new URLSearchParams(window.location.search),t=e.get("password"),o="xCADSEAABoLcXjhyYz8FUXGxo6amVSgiTXK6ksYQf0lY2t9WLO";t===o||p.dev?this.authenticated=!0:this.authenticated=!1}}},b=o(71241);const m=(0,b.A)(w,[["render",f]]);var y=m,F={components:{PasswordCheck:y}};const v=(0,b.A)(F,[["render",a]]);var g=v,k=(o(35524),o(61480)),_=(0,k.$N)();async function O(){const e=await o.e(53).then(o.t.bind(o,48874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var C=o(81387),j=o(56332),W=o(43813);function E(e,t,o,n,a,d){const c=(0,r.g2)("top-bar"),s=(0,r.g2)("file-folder");return(0,r.uX)(),(0,r.Wv)(i.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(l.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(c,{onSearch:d.searchFiles},null,8,["onSearch"]),(0,r.bF)(W.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(j.J,{class:"mx-auto"},{default:(0,r.k6)((()=>[(0,r.bF)(s,{contents:d.filteredFiles,folder:"",onDownloadFolder:d.downloadFolder,onDownloadFile:d.downloadFile},null,8,["contents","onDownloadFolder","onDownloadFile"])])),_:1})])),_:1})])),_:1})])),_:1})}var x=o(35926),A=o.n(x),D=o(44813),X=o.n(D),L=o(10788);A().config.update({accessKeyId:"AKIA3XVQI3OJS6AOC4FX",secretAccessKey:"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",region:"us-east-2"});const P=new(A().S3),S=async(e,t="")=>{const o={Bucket:e,Prefix:t};let n,r=[];do{n=await P.listObjectsV2(o).promise(),r=r.concat(n.Contents),o.ContinuationToken=n.NextContinuationToken}while(n.IsTruncated);return r},T=async e=>{try{const t=await S(e);return B(t)}catch(t){throw console.error("Error listing files: ",t),t}},I=async(e,t)=>{console.log(t);const o={Bucket:e,Key:t};try{const e=await P.getObject(o).promise();return{key:t,body:e.Body}}catch(n){throw console.error("Error retrieving file: ",n),n}},M=async(e,t)=>{try{const o=await I(e,t),n=window.URL.createObjectURL(new Blob([o.body])),r=document.createElement("a");r.href=n,r.setAttribute("download",t),document.body.appendChild(r),r.click(),document.body.removeChild(r)}catch(o){console.error("Error downloading file: ",o)}},K=async(e,t)=>{console.log(t);const o={Bucket:e,Prefix:t.endsWith("/")?t:`${t}/`},n=new(X());try{const r=await P.listObjectsV2(o).promise(),i=r.Contents.map((e=>e.Key)),l=i.map((async t=>{const{key:r,body:i}=await I(e,t);n.file(r.replace(o.Prefix,""),i)}));await Promise.all(l);const a=await n.generateAsync({type:"blob"});(0,L.saveAs)(a,`${t.split("/").pop()}.zip`)}catch(r){throw console.error("Error downloading folder: ",r),r}},B=e=>{const t={};e.filter((({Key:e})=>!e.endsWith("/"))).forEach((({Key:e,LastModified:o})=>{const n=e.split("/");let r=t;for(let t=0;t<n.length;t++){const e=n[t];t===n.length-1?r[e]={lastModified:o}:(r[e]||(r[e]={}),r=r[e])}}));const o=e=>{const t={},n=Object.keys(e).filter((t=>"object"===typeof e[t]&&!e[t].lastModified)).sort(),r=Object.keys(e).filter((t=>e[t].lastModified)).sort();return n.forEach((n=>{t[n]=o(e[n])})),r.forEach((o=>{t[o]=e[o]})),t};return o(t)};var Q=o(24232),N=o(73416),$=o(70926),V=o(79669),R=o(81993),Y=o(4529),U=o(64718);function q(e,t,o,n,i,l){const a=(0,r.g2)("file-folder",!0);return(0,r.uX)(),(0,r.Wv)(j.J,{flat:"",elevation:"0",style:{paddingLeft:"25px"}},{default:(0,r.k6)((()=>[(0,r.bF)(R.x8,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.contents,((e,t)=>((0,r.uX)(),(0,r.Wv)(Y.K,{key:t,value:t},{activator:(0,r.k6)((({props:n})=>[l.isFolder(e)?((0,r.uX)(),(0,r.Wv)(U.g,(0,r.v6)({key:0,ref_for:!0},n,{"prepend-icon":"mdi-folder",title:t}),{prepend:(0,r.k6)((()=>[(0,r.bF)(N.y,{color:l.getFileColor(t)},{default:(0,r.k6)((()=>[(0,r.bF)(V.w,{color:"white"},{default:(0,r.k6)((()=>[(0,r.eW)("mdi-folder")])),_:1})])),_:2},1032,["color"])])),append:(0,r.k6)((()=>[(0,r.bF)($.D,{icon:"",onClick:e=>l.downloadFolder(o.folder,t)},{default:(0,r.k6)((()=>[(0,r.bF)(V.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-download")])),_:1})])),_:2},1032,["onClick"])])),_:2},1040,["title"])):((0,r.uX)(),(0,r.Wv)(U.g,{key:1,active:!1,inactive:"",class:"list-item",title:t,subtitle:l.formatDate(e.lastModified)},{prepend:(0,r.k6)((()=>[(0,r.bF)(N.y,{color:l.getFileColor(t)},{default:(0,r.k6)((()=>[(0,r.bF)(V.w,{color:"white"},{default:(0,r.k6)((()=>[(0,r.eW)((0,Q.v_)(l.getFileIcon(t)),1)])),_:2},1024)])),_:2},1032,["color"])])),append:(0,r.k6)((()=>[(0,r.bF)($.D,{icon:"",onClick:e=>l.downloadFile(o.folder,t)},{default:(0,r.k6)((()=>[(0,r.bF)(V.w,null,{default:(0,r.k6)((()=>[(0,r.eW)("mdi-download")])),_:1})])),_:2},1032,["onClick"])])),_:2},1032,["title","subtitle"]))])),default:(0,r.k6)((()=>[l.isFolder(e)?((0,r.uX)(),(0,r.Wv)(a,{key:0,contents:e,folder:l.folderName(o.folder,t),onDownloadFolder:l.downloadFolder,onDownloadFile:l.downloadFile},null,8,["contents","folder","onDownloadFolder","onDownloadFile"])):(0,r.Q3)("",!0)])),_:2},1032,["value"])))),128))])),_:1})])),_:1})}o(44114);var J={name:"FileFolder",props:{contents:{type:Object,required:!0},folder:{type:String,required:!0}},data(){return{openFolders:[]}},methods:{folderName(e,t){return""==e?t:e+"/"+t},downloadFolder(e,t){void 0===t?this.$emit("downloadFolder",e):this.$emit("downloadFolder",""==e?t:e+"/"+t)},downloadFile(e,t){void 0===t?this.$emit("downloadFile",e):this.$emit("downloadFile",""==e?t:e+"/"+t)},toggleFolder(e){this.isOpen(e)?this.openFolders=this.openFolders.filter((t=>t!==e)):this.openFolders.push(e),console.log(this.openFolders)},isOpen(e){return this.openFolders.includes(e)},isFolder(e){return e&&!e.lastModified},getFileIcon(e){return e.endsWith(".pdf")?"mdi-file-pdf":e.endsWith(".docx")?"mdi-file-word":e.endsWith(".pptx")?"mdi-file-powerpoint":"mdi-file-document"},getFileColor(e){return e.endsWith(".pdf")?"red":e.endsWith(".docx")?"blue":e.endsWith(".pptx")?"orange":"grey-lighten-1"},formatDate(e){if(!e)return"";const t=new Date(e);return t.toLocaleDateString()+" "+t.toLocaleTimeString()},getIndentationLevel(e){return 20*(e.split("/").length+1)}}};const H=(0,b.A)(J,[["render",q],["__scopeId","data-v-38b1ad50"]]);var z=H,G=o(41720),Z=o(13240),ee=o(14366),te=o(88050);function oe(e,t,o,n,i,l){return(0,r.uX)(),(0,r.Wv)(ee.u,{color:"white",dark:""},{default:(0,r.k6)((()=>[(0,r.bF)(te.s,{style:{paddingLeft:"150px"}},{default:(0,r.k6)((()=>[(0,r.eW)("Curriculum Access")])),_:1}),(0,r.bF)(G.h),(0,r.bF)(Z.W,{modelValue:i.search,"onUpdate:modelValue":t[0]||(t[0]=e=>i.search=e),"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",onInput:t[1]||(t[1]=t=>e.$emit("search",i.search)),style:{paddingRight:"150px"}},null,8,["modelValue"])])),_:1})}var ne={name:"TopBar",data(){return{search:""}}};const re=(0,b.A)(ne,[["render",oe]]);var ie=re,le={components:{FileFolder:z,TopBar:ie},data(){return{files:{},searchQuery:""}},computed:{filteredFiles(){if(!this.searchQuery)return this.files;const e=t=>{const o={};for(const[n,r]of Object.entries(t))if(this.isFolder(r)){const t=e(r);Object.keys(t).length>0&&(o[n]=t)}else n.toLowerCase().includes(this.searchQuery.toLowerCase())&&(o[n]=r);return o};return e(this.files)}},async created(){this.files=await T("introduction-to-robotics")},methods:{async downloadFile(e){await M("introduction-to-robotics",e)},async downloadFolder(e){await K("introduction-to-robotics",e)},searchFiles(e){this.searchQuery=e},isFolder(e){return e&&!e.lastModified}}};const ae=(0,b.A)(le,[["render",E],["__scopeId","data-v-1d49d639"]]);var de=ae,ce=o(26106);function se(e,t,o,n,a,d){const c=(0,r.g2)("top-bar"),s=(0,r.g2)("file-folder");return(0,r.uX)(),(0,r.Wv)(i.E,null,{default:(0,r.k6)((()=>[(0,r.bF)(l.Y,null,{default:(0,r.k6)((()=>[(0,r.bF)(c,{onSearch:d.searchFiles},null,8,["onSearch"]),(0,r.bF)(W.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(j.J,{class:"mx-auto"},{default:(0,r.k6)((()=>[a.loading?((0,r.uX)(),(0,r.Wv)(ce.x,{key:0,indeterminate:"",color:"primary",class:"ma-4"})):((0,r.uX)(),(0,r.Wv)(s,{key:1,contents:d.filteredFiles,folder:"",onDownloadFolder:d.downloadFolder,onDownloadFile:d.downloadFile},null,8,["contents","onDownloadFolder","onDownloadFile"]))])),_:1})])),_:1})])),_:1})])),_:1})}var ue={components:{FileFolder:z,TopBar:ie},data(){return{files:{},searchQuery:"",loading:!0}},computed:{filteredFiles(){if(!this.searchQuery)return this.files;const e=t=>{const o={};for(const[n,r]of Object.entries(t))if(this.isFolder(r)){const t=e(r);Object.keys(t).length>0&&(o[n]=t)}else n.toLowerCase().includes(this.searchQuery.toLowerCase())&&(o[n]=r);return o};return e(this.files)}},async created(){this.files=await T("taking-off-with-pilot"),this.loading=!1},methods:{async downloadFile(e){await M("taking-off-with-pilot",e)},async downloadFolder(e){await K("taking-off-with-pilot",e)},searchFiles(e){this.searchQuery=e},isFolder(e){return e&&!e.lastModified}}};const fe=(0,b.A)(ue,[["render",se],["__scopeId","data-v-c9708470"]]);var he=fe;const pe=[{path:"/",name:"Home",component:de},{path:"/introduction-to-robotics",name:"IntroductionToRobotics",component:de},{path:"/taking-off-with-pilot",name:"TakingOffWithPilot",component:he}],we=(0,C.aE)({history:(0,C.Bt)(),routes:pe});var be=we;O(),(0,n.Ef)(g).use(_).use(be).mount("#app")},11976:function(){}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,d=0;d<n.length;d++)(!1&i||l>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(a=!1,i<l&&(l=i));if(a){e.splice(s--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var i=Object.create(null);o.r(i);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){l[e]=function(){return n[e]}}));return l["default"]=function(){return n},o.d(i,l),i}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.d8cf9488.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="curriculum-access:";o.l=function(n,r,i,l){if(e[n])e[n].push(r);else{var a,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(d=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var f=function(t,o){a.onerror=a.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),d&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/Curriculum-Access/"}(),function(){var e={524:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var l=o.p+o.u(t),a=new Error,d=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+l+")",a.name="ChunkLoadError",a.type=i,a.request=l,r[1](a)}};o.l(l,d,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,l=n[0],a=n[1],d=n[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var s=d(o)}for(t&&t(n);c<l.length;c++)i=l[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},n=self["webpackChunkcurriculum_access"]=self["webpackChunkcurriculum_access"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(52347)}));n=o.O(n)})();
//# sourceMappingURL=app.4ed8f6a8.js.map
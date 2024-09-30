import{_ as a}from"./iframe-kGkVanHV.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-zpMlM1K2.js").then(r=>r.ai),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-PKQXORMH-zpMlM1K2.js","./iframe-kGkVanHV.js","./index-eK40FDle.js","./client-D78dRYOJ.js","./index-fcRgSpbG.js","./index-4FLvW62B.js","./isArray-QqzGDDTr.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as r,H as p}from"./hello-world-def-ec278bc5.js";import{r as a}from"./index-c013ead5.js";import{A as l,a as _,b as L}from"./AppContext-4ae6119d.js";import{A as P}from"./AppListItem-3a69ae6d.js";import{g as A}from"./get-id-2999bd34.js";import"./index-169ee69c.js";import"./_commonjsHelpers-725317a4.js";import"./motion-93d9c72d.js";function i(){const{apps:t}=a.useContext(l)??{},s=a.useContext(_),m=a.useCallback(e=>{s&&(s({type:"OPEN_APP",appInstance:{...e,viewState:"normal",instanceId:A()}}),s({type:"CLOSE_APP_LIST"}))},[s]);return t?r.jsx("ul",{className:"grid grid-cols-4 gap-4 grid-rows-4 h-full p-4 z-10",children:t.map(e=>r.jsx("li",{children:r.jsx(P,{app:e,onClick:m})},e.id))}):r.jsx("div",{children:r.jsx("h1",{children:"No apps available"})})}try{i.displayName="AppList",i.__docgenInfo={description:"The app-list is a list of all the apps in the system",displayName:"AppList",props:{}}}catch{}const j={component:i},o={decorators:[t=>r.jsx(L,{apps:[p,p,p,p],children:r.jsx(t,{})})]};var n,c,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <AppProvider apps={[HELLO_WORLD_APP, HELLO_WORLD_APP, HELLO_WORLD_APP, HELLO_WORLD_APP]}>
        <Story />
      </AppProvider>]
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Primary"];export{o as Primary,C as __namedExportsOrder,j as default};
//# sourceMappingURL=AppList.stories-00183f67.js.map
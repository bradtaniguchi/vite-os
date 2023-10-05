import{j as n,T as _,N as h}from"./hello-world-def-ec278bc5.js";import{r as a}from"./index-c013ead5.js";import{A as m,a as f,b as x}from"./AppContext-4c7bb69b.js";import"./index-169ee69c.js";import"./_commonjsHelpers-725317a4.js";function A({title:t,titleId:e,...o},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},o),t?a.createElement("title",{id:e},t):null,a.createElement("path",{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}),a.createElement("path",{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"}))}const I=a.forwardRef(A),y=I;function c(){const{listOpened:t}=a.useContext(m)??{},e=a.useContext(f),o=a.useCallback(()=>{e&&e(t?{type:"CLOSE_APP_LIST"}:{type:"OPEN_APP_LIST"})},[t,e]);return n.jsx("button",{type:"button",onClick:o,"aria-label":"Start Button",children:n.jsx(y,{className:"h-6 w-6 text-green-300"})})}try{c.displayName="AppIconButton",c.__docgenInfo={description:'TODO: rename for clarity, maybe to "run?"',displayName:"AppIconButton",props:{}}}catch{}function i(t){const{appInstance:e,onClick:o}=t,r=a.useCallback(()=>{o(e)},[e,o]);return n.jsx(_,{content:e.name,children:n.jsx("button",{type:"button","aria-label":"App instance icon",onClick:r,children:e.icon})})}try{i.displayName="AppBarInstanceButton",i.__docgenInfo={description:"Button that represents a single App instance of an app.",displayName:"AppBarInstanceButton",props:{appInstance:{defaultValue:null,description:"",name:"appInstance",required:!0,type:{name:"AppInstance"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(app: AppInstance) => void"}}}}}catch{}function s(){const{appInstances:t}=a.useContext(m)??{},e=a.useContext(f),o=a.useCallback(r=>{r.viewState==="minimized"&&e&&e({type:"MAXIMIZE_APP",appInstanceId:r.instanceId})},[e]);return n.jsx(h,{fluid:!0,rounded:!0,id:"app-bar",className:"m-1",children:n.jsxs("div",{className:"flex flex-row align-middle w-full",children:[n.jsxs("div",{className:"flex w-full",children:[n.jsx(c,{}),(t??[]).map(r=>n.jsx(i,{appInstance:r,onClick:o},r.instanceId))]}),n.jsx("div",{})]})})}try{s.displayName="AppBar",s.__docgenInfo={description:`The AppBar is shown on the side/bottom of the screen and contains
the main pinned applications, along with the "AppMenu" button`,displayName:"AppBar",props:{}}}catch{}const v={title:"AppBar",component:s},p=()=>n.jsx(x,{children:n.jsx(s,{})});var l,d,u;p.parameters={...p.parameters,docs:{...(l=p.parameters)==null?void 0:l.docs,source:{originalSource:`() => <AppProvider>
    <AppBar />
  </AppProvider>`,...(u=(d=p.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const w=["Default"];export{p as Default,w as __namedExportsOrder,v as default};
//# sourceMappingURL=AppBar.stories-f3412f17.js.map

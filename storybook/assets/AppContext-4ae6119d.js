import{H as i,j as p}from"./hello-world-def-ec278bc5.js";import{r as t}from"./index-c013ead5.js";const d={id:"calculator",name:"Calculator",icon:"🧮"},l={id:"explorer",name:"Explorer",icon:"📂"},P={id:"notepad",name:"Notepad",icon:"📝"},u={id:"welcome",name:"Welcome",icon:"👋"},o=[i,u,d,l,P],a=new Set;for(const e of o){if(a.has(e.id))throw new Error(`Duplicate app id: ${e.id}`);a.add(e.id)}const _=t.createContext(null),A=t.createContext(null);function I(e,r){switch(r.type){case"OPEN_APP_LIST":return{...e,listOpened:!0};case"CLOSE_APP_LIST":return{...e,listOpened:!1};case"CLOSE_APP":return{...e,appInstances:e.appInstances.filter(({instanceId:n})=>n!==r.appInstanceId)};case"OPEN_APP":return{...e,appInstances:[...e.appInstances,r.appInstance]};case"MINIMIZE_APP":return{...e,appInstances:e.appInstances.map(n=>n.instanceId===r.appInstanceId?{...n,viewState:"minimized"}:n)};case"MAXIMIZE_APP":return{...e,appInstances:e.appInstances.map(n=>n.instanceId===r.appInstanceId?{...n,viewState:"normal"}:n)};default:return e}}function s(e){const{apps:r}=e,[n,c]=t.useReducer(I,{listOpened:!1,apps:r??o,appInstances:[]});return t.useEffect(()=>{console.log(">> state:",n)},[n]),p.jsx(_.Provider,{value:n,children:p.jsx(A.Provider,{value:c,children:e.children})})}try{s.displayName="AppProvider",s.__docgenInfo={description:"Component that provides the AppProvider context to manage global app state.",displayName:"AppProvider",props:{apps:{defaultValue:null,description:"List of apps that could be provided to override the defaults.",name:"apps",required:!1,type:{name:"App[]"}}}}}catch{}export{_ as A,A as a,s as b};
//# sourceMappingURL=AppContext-4ae6119d.js.map

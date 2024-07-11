import{_ as le,r as V,g as ae,h as se,i as l,o as n,c as C,a as r,b as t,w as e,d as a,u as b,l as O,k as y,s as T,F as R,j as A,t as w,m as M,p as ne,e as oe}from"./BMSvwMrE.js";import{r as j}from"./CLI_fKsg.js";import"./Dnd51l0P.js";const ee=D=>(ne("data-v-87a0591d"),D=D(),oe(),D),ie={class:"text-center pa-10"},ce=ee(()=>r("p",{class:"text-caption text-medium-emphasis"},"Data",-1)),re=ee(()=>r("p",{class:"text-caption text-medium-emphasis"},"Receiver",-1)),de=ee(()=>r("p",{class:"text-caption text-medium-emphasis"},"Purposes",-1)),ue={__name:"InPlaceWithdraw",setup(D){const k=V(!1),P=V(null),S=V("");V("");const g=V([]),x=V([]),s=V([]),m=[{name:"Usage profile",legalBasis:"consent",receiver:[{name:"Platform",key:"plattform",data:[{name:"Purchased products",key:"products"},{name:"Price",key:"cost"}]}]}];function N(){let B=[],f=[],p=[];for(let d of m){p.push({name:d.name,legalBasis:d.legalBasis,legalBasisText:d.legalBasisText,highlighted:!1,selected:!1});for(let o of d.receiver){f.map(i=>i.key).includes(o.key)||f.push({name:o.name,key:o.key,nonEu:o.nonEu,example:o.example,highlighted:!1,selected:!1});for(let i of o.data)B.map(v=>v.key).includes(i.key)||B.push({name:i.name,key:i.key,highlighted:!1,selected:!1})}}p[0].highlighted=!0,g.value=[...B],x.value=[...f],s.value=[...p],U(p[0]),S.value=p[0].name}function U(B){let f=[],p=[];for(let i of m.filter(v=>v.name==B.name)[0].receiver)f.push(...i.data.map(v=>v.key));p=m.filter(i=>i.name==B.name)[0].receiver.map(i=>i.key);let d=g.value;for(let i of d)f.includes(i.key)?i.highlighted=!0:i.highlighted=!1;g.value=[...d];let o=x.value;for(let i of o)p.includes(i.key)?i.highlighted=!0:i.highlighted=!1;x.value=[...o]}return ae(async()=>{N()}),se(k,B=>{}),(B,f)=>{const p=l("v-icon"),d=l("v-btn"),o=l("v-badge"),i=l("v-tab"),v=l("v-tabs"),h=l("v-alert"),u=l("v-col"),$=l("v-row"),E=l("v-list-item-subtitle"),I=l("v-list-item"),H=l("v-list-item-title"),L=l("v-list"),z=l("v-tooltip"),G=l("v-switch"),q=l("v-list-item-action"),J=l("v-container"),K=l("v-window-item"),Q=l("v-window"),X=l("v-card"),Z=l("v-dialog");return n(),C(R,null,[r("div",ie,[t(o,{"offset-x":"-10","offset-y":"-10"},{badge:e(()=>[t(p,{size:"x-large",onClick:f[0]||(f[0]=c=>k.value=!0)},{default:e(()=>[a("mdi-magnify")]),_:1})]),default:e(()=>[t(d,{color:"primary"},{default:e(()=>[a(" Order Now! ")]),_:1})]),_:1})]),t(Z,{modelValue:b(k),"onUpdate:modelValue":f[3]||(f[3]=c=>O(k)?k.value=c:null),width:"auto"},{default:e(()=>[t(X,{elevation:"9",outlined:"",class:"ma-2","max-width":"700px"},{default:e(()=>[t(v,{modelValue:b(P),"onUpdate:modelValue":f[1]||(f[1]=c=>O(P)?P.value=c:null),color:"deep-purple-accent-4","align-tabs":"center"},{default:e(()=>[t(i,{value:1},{default:e(()=>[a("Data Processings")]),_:1})]),_:1},8,["modelValue"]),t(Q,{modelValue:b(P),"onUpdate:modelValue":f[2]||(f[2]=c=>O(P)?P.value=c:null)},{default:e(()=>[t(K,{value:1},{default:e(()=>[t(J,{fluid:""},{default:e(()=>[t($,null,{default:e(()=>[t(u,null,{default:e(()=>[t(h,{type:"info",title:"Withdraw Consent",text:"Here you will find all the processing that is done when ordering. Use the buttons at the bottom to withdraw consent before ordering. Click a purposes to get more information about data and receivers.",variant:"tonal"})]),_:1})]),_:1}),t($,null,{default:e(()=>[t(u,{cols:"6"},{default:e(()=>[ce,t(L,{density:"compact",class:"selectLists rounded"},{default:e(()=>[b(g).filter(c=>c.highlighted).length==0?(n(),y(I,{key:0},{default:e(()=>[t(E,null,{default:e(()=>[a("Select a purpose to see details")]),_:1})]),_:1})):T("",!0),(n(!0),C(R,null,A(b(g).filter(c=>c.highlighted),(c,W)=>(n(),y(I,{key:W,value:c,color:"primary",active:b(S)==c.key},{default:e(()=>[c.example?(n(),y(E,{key:0,textContent:w(c.name)},null,8,["textContent"])):T("",!0),c.example?(n(),y(H,{key:2,textContent:w(c.example)},null,8,["textContent"])):(n(),y(H,{key:1,textContent:w(c.name)},null,8,["textContent"]))]),_:2},1032,["value","active"]))),128))]),_:1})]),_:1}),t(u,{cols:"6"},{default:e(()=>[re,t(L,{density:"compact",class:"selectLists rounded"},{default:e(()=>[b(x).filter(c=>c.highlighted).length==0?(n(),y(I,{key:0},{default:e(()=>[t(E,null,{default:e(()=>[a("Select a purpose to see details")]),_:1})]),_:1})):T("",!0),(n(!0),C(R,null,A(b(x).filter(c=>c.highlighted),(c,W)=>(n(),y(I,{key:W,value:c,active:b(S)==c.key,color:"primary"},{append:e(()=>[c.nonEu?(n(),y(z,{key:0,text:"Receivers outside the EU",location:"start"},{activator:e(({props:_})=>[t(p,M({ref_for:!0},_),{default:e(()=>[a("mdi-earth")]),_:2},1040)]),_:1})):T("",!0)]),default:e(()=>[c.example?(n(),y(E,{key:0,textContent:w(c.name)},null,8,["textContent"])):T("",!0),c.example?(n(),y(H,{key:2,textContent:w(c.example)},null,8,["textContent"])):(n(),y(H,{key:1,textContent:w(c.name)},null,8,["textContent"]))]),_:2},1032,["value","active"]))),128))]),_:1})]),_:1})]),_:1}),t($,null,{default:e(()=>[t(u,{cols:"12"},{default:e(()=>[de,t(L,{density:"compact",class:"rounded",style:{border:"solid 5px","border-color":"lightgray"},elevation:"3"},{default:e(()=>[(n(!0),C(R,null,A(b(s).filter(c=>c.legalBasis=="consent"),(c,W)=>(n(),y(I,{key:W,value:c,variant:c.highlighted?"tonal":"text",color:"primary",onClick:_=>{S.value=c.name,U(c)},active:b(S)==c.name},{append:e(()=>[t(q,{end:""},{default:e(()=>[t(G,{disabled:c.legalBasis=="contract",color:c.legalBasis=="contract"?"":"primary","model-value":(c.legalBasis=="contract",!0),"hide-details":"",class:"pt-1"},{label:e(()=>[]),_:2},1032,["disabled","color","model-value"]),c.legalBasis=="contract"?(n(),y(z,{key:0,text:c.legalBasisText,location:"start"},{activator:e(({props:_})=>[t(p,M({ref_for:!0},_),{default:e(()=>[a(" mdi-help-circle-outline ")]),_:2},1040)]),_:2},1032,["text"])):T("",!0)]),_:2},1024)]),default:e(()=>[t(H,{textContent:w(c.name)},null,8,["textContent"])]),_:2},1032,["value","variant","onClick","active"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])],64)}}},_e=le(ue,[["__scopeId","data-v-87a0591d"]]),me={class:"d-flex justify-center"},pe=r("thead",null,[r("tr",null,[r("th",{class:"text-left"},"Choice"),r("th",{class:"text-left"},"Data"),r("th",{class:"text-left"},"Receiver")])],-1),fe=r("p",{class:"text-h6"},"3. Select shipping",-1),ve={__name:"DpShootOut",setup(D){V(!1);const k=[{choice_name:"DHL Standard",receiver:["DHL","Plattform"],data:["Address","Name"]},{choice_name:"DHL Express",receiver:["DHL","Plattform"],data:["Address","Name"]},{choice_name:"UPS",receiver:["UPS","Plattform"],data:["Address","Name"]},{choice_name:"Store Pick-up",receiver:["Plattform"],data:["Customer Reference","Name"]}];return(P,S)=>{const g=l("v-icon"),x=l("v-chip"),s=l("v-chip-group"),m=l("v-table"),N=l("v-tooltip"),U=l("v-radio"),B=l("v-radio-group"),f=l("v-sheet"),p=l("v-badge");return n(),C("div",me,[t(p,null,{badge:e(()=>[t(N,{"no-click-animation":"",class:"ma-0"},{activator:e(({props:d})=>[t(g,M(d,{size:"x-large"}),{default:e(()=>[a("mdi-magnify")]),_:2},1040)]),default:e(()=>[t(m,{"fixed-header":"",class:"pa-0 ma-0"},{default:e(()=>[pe,r("tbody",null,[(n(),C(R,null,A(k,d=>r("tr",{key:d.choice_name},[r("td",null,w(d.choice_name),1),r("td",null,[(n(!0),C(R,null,A(d.data,(o,i)=>(n(),C("p",{key:i,class:"py-1"},[t(x,null,{default:e(()=>[a(w(o),1)]),_:2},1024)]))),128))]),r("td",null,[t(s,null,{default:e(()=>[(n(!0),C(R,null,A(d.receiver,(o,i)=>(n(),y(x,{key:i},{default:e(()=>[a(w(o),1)]),_:2},1024))),128))]),_:2},1024)])])),64))])]),_:1})]),_:1})]),default:e(()=>[t(f,{style:{border:"1px solid grey"},class:"pa-2 pr-8 ma-1",rounded:""},{default:e(()=>[fe,t(B,null,{default:e(()=>[t(U,{label:"DHL Standard",value:"1"}),t(U,{label:"DHL Express",value:"2"}),t(U,{label:"UPS",value:"3"}),t(U,{label:"Store Pick-up",value:"3"})]),_:1})]),_:1})]),_:1})])}}},te=D=>(ne("data-v-e0c33705"),D=D(),oe(),D),he={class:"text-center pa-10"},ye=te(()=>r("p",{class:"text-caption text-medium-emphasis"},"Data",-1)),ge=te(()=>r("p",{class:"text-caption text-medium-emphasis"},"Receiver",-1)),xe=te(()=>r("p",{class:"text-caption text-medium-emphasis"},"Purposes",-1)),ke={__name:"InPlaceTransparency",setup(D){const k=V(!1),P=V(null),S=V("");V("");const g=V([]),x=V([]),s=V([]),m=[{name:"Checkout order",legalBasis:"contract",legalBasisText:"You can not withdraw, as this processing is necessary for the operation of the platform.",receiver:[{name:"Plattform",key:"plattform",data:[{name:"Name",key:"name"},{name:"Date of birth",key:"birthdate"},{name:"Address",key:"address"},{name:"Bank account",key:"bank"}]},{name:"Payment",key:"payment",nonEu:!0,example:"Paypal",data:[{name:"Name",key:"name"},{name:"Bank account",key:"bank"}]},{name:"Shipping",key:"shipping",data:[{name:"Name",key:"name"},{name:"Address",key:"address"}]}]},{name:"Usage profile",legalBasis:"consent",receiver:[{name:"Platform",key:"plattform",data:[{name:"Purchased products",key:"products"},{name:"Price",key:"cost"}]}]}];function N(){let p=[],d=[],o=[];for(let i of m){o.push({name:i.name,legalBasis:i.legalBasis,legalBasisText:i.legalBasisText,highlighted:!1,selected:!1});for(let v of i.receiver){d.map(h=>h.key).includes(v.key)||d.push({name:v.name,key:v.key,nonEu:v.nonEu,example:v.example,highlighted:!1,selected:!1});for(let h of v.data)p.map(u=>u.key).includes(h.key)||p.push({name:h.name,key:h.key,highlighted:!1,selected:!1})}}g.value=[...p],x.value=[...d],s.value=[...o]}function U(p){let d=g.value;for(let u of d)p.key==u.key?u.selected=!0:u.selected=!1,u.highlighted=!1;g.value=[...d];let o=m.filter(u=>u.receiver.map($=>$.data)[0].map($=>$.key).includes(p.key)),i=s.value;for(let u of i)o.filter($=>$.name==u.name).length>0?u.highlighted=!0:u.highlighted=!1;s.value=[...i];let v=[];for(let u of m)for(let $ of u.receiver)$.data.map(E=>E.key).includes(p.key)&&v.push($.key);let h=x.value;for(let u of h)v.includes(u.key)?u.highlighted=!0:u.highlighted=!1;x.value=[...h]}function B(p){let d=g.value,o=[],i=[];for(let u of m)for(let $ of u.receiver)$.key==p.key&&(o.push(...$.data.map(E=>E.key)),i.push(u.name));for(let u of d)o.includes(u.key)?u.highlighted=!0:u.highlighted=!1;g.value=[...d];let v=s.value;for(let u of v)i.includes(u.name)?u.highlighted=!0:u.highlighted=!1;s.value=[...v];let h=x.value;for(let u of h)u.highlighted=!1;x.value=[...h]}function f(p){let d=[],o=[];for(let h of m.filter(u=>u.name==p.name)[0].receiver)d.push(...h.data.map(u=>u.key));o=m.filter(h=>h.name==p.name)[0].receiver.map(h=>h.key);let i=g.value;for(let h of i)d.includes(h.key)?h.highlighted=!0:h.highlighted=!1;g.value=[...i];let v=x.value;for(let h of v)o.includes(h.key)?h.highlighted=!0:h.highlighted=!1;x.value=[...v]}return ae(async()=>{N()}),(p,d)=>{const o=l("v-icon"),i=l("v-btn"),v=l("v-badge"),h=l("v-tab"),u=l("v-tabs"),$=l("v-alert"),E=l("v-col"),I=l("v-row"),H=l("v-list-item-subtitle"),L=l("v-list-item-title"),z=l("v-list-item"),G=l("v-list"),q=l("v-tooltip"),J=l("v-switch"),K=l("v-list-item-action"),Q=l("v-container"),X=l("v-window-item"),Z=l("v-window"),c=l("v-card"),W=l("v-dialog");return n(),C(R,null,[r("div",he,[t(v,{"offset-x":"-10","offset-y":"-10"},{badge:e(()=>[t(o,{size:"x-large",onClick:d[0]||(d[0]=_=>k.value=!0)},{default:e(()=>[a("mdi-magnify")]),_:1})]),default:e(()=>[t(i,{color:"primary"},{default:e(()=>[a(" Order Now! ")]),_:1})]),_:1})]),t(W,{modelValue:b(k),"onUpdate:modelValue":d[3]||(d[3]=_=>O(k)?k.value=_:null),width:"auto"},{default:e(()=>[t(c,{elevation:"9",outlined:"",class:"ma-2","max-width":"700px"},{default:e(()=>[t(u,{modelValue:b(P),"onUpdate:modelValue":d[1]||(d[1]=_=>O(P)?P.value=_:null),color:"deep-purple-accent-4","align-tabs":"center"},{default:e(()=>[t(h,{value:1},{default:e(()=>[a("Data Processings")]),_:1})]),_:1},8,["modelValue"]),t(Z,{modelValue:b(P),"onUpdate:modelValue":d[2]||(d[2]=_=>O(P)?P.value=_:null)},{default:e(()=>[t(X,{value:1},{default:e(()=>[t(Q,{fluid:""},{default:e(()=>[t(I,null,{default:e(()=>[t(E,null,{default:e(()=>[t($,{type:"info",title:"Learn about data processings",text:"Here you will find all the processing that is done when ordering. Click on data, recipients or purposes to get more information.",variant:"tonal"})]),_:1})]),_:1}),t(I,null,{default:e(()=>[t(E,{cols:"6"},{default:e(()=>[ye,t(G,{density:"compact",class:"selectLists rounded"},{default:e(()=>[(n(!0),C(R,null,A(b(g),(_,Y)=>(n(),y(z,{key:Y,value:_,variant:_.highlighted?"tonal":"text",onClick:F=>{U(_),S.value=_.key},color:"primary",active:b(S)==_.key},{default:e(()=>[_.example?(n(),y(H,{key:0,textContent:w(_.name)},null,8,["textContent"])):T("",!0),_.example?(n(),y(L,{key:2,textContent:w(_.example)},null,8,["textContent"])):(n(),y(L,{key:1,textContent:w(_.name)},null,8,["textContent"]))]),_:2},1032,["value","variant","onClick","active"]))),128))]),_:1})]),_:1}),t(E,{cols:"6"},{default:e(()=>[ge,t(G,{density:"compact",class:"selectLists rounded"},{default:e(()=>[(n(!0),C(R,null,A(b(x),(_,Y)=>(n(),y(z,{key:Y,value:_,variant:_.highlighted?"tonal":"text",onClick:F=>{S.value=_.key,B(_)},active:b(S)==_.key,color:"primary"},{append:e(()=>[_.nonEu?(n(),y(q,{key:0,text:"Receivers outside the EU",location:"start"},{activator:e(({props:F})=>[t(o,M({ref_for:!0},F),{default:e(()=>[a("mdi-earth")]),_:2},1040)]),_:1})):T("",!0)]),default:e(()=>[_.example?(n(),y(H,{key:0,textContent:w(_.name)},null,8,["textContent"])):T("",!0),_.example?(n(),y(L,{key:2,textContent:w(_.example)},null,8,["textContent"])):(n(),y(L,{key:1,textContent:w(_.name)},null,8,["textContent"]))]),_:2},1032,["value","variant","onClick","active"]))),128))]),_:1})]),_:1})]),_:1}),t(I,null,{default:e(()=>[t(E,{cols:"12"},{default:e(()=>[xe,t(G,{density:"compact",class:"rounded",style:{border:"solid 1px","border-color":"lightgray"}},{default:e(()=>[(n(!0),C(R,null,A(b(s),(_,Y)=>(n(),y(z,{key:Y,value:_,variant:_.highlighted?"tonal":"text",color:"primary",onClick:F=>{S.value=_.name,f(_)},active:b(S)==_.name},{append:e(()=>[t(K,{end:""},{default:e(()=>[t(J,{disabled:_.legalBasis=="contract",color:_.legalBasis=="contract"?"":"primary","model-value":_.legalBasis=="contract"?!0:"","hide-details":"",class:"pt-1"},{label:e(()=>[]),_:2},1032,["disabled","color","model-value"]),_.legalBasis=="contract"?(n(),y(q,{key:0,text:_.legalBasisText,location:"start"},{activator:e(({props:F})=>[t(o,M({ref_for:!0},F),{default:e(()=>[a(" mdi-help-circle-outline ")]),_:2},1040)]),_:2},1032,["text"])):T("",!0)]),_:2},1024)]),default:e(()=>[t(L,{textContent:w(_.name)},null,8,["textContent"])]),_:2},1032,["value","variant","onClick","active"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])],64)}}},be=le(ke,[["__scopeId","data-v-e0c33705"]]),Pe=r("p",{class:"text-h4"},"Create an Account",-1),we=r("p",{class:"text-overline"},"Enter information about you",-1),Ce=r("p",{class:"text-caption"},"Purchase handling",-1),$e=r("p",null,"This data is not used for profiling",-1),Be=r("p",null,"This data is not processed outside the EU",-1),De=r("p",null," This data is processed based on legitimate interests ",-1),Ve=r("p",{class:"text-caption"},"Payment",-1),Se=r("p",null,"This data is not used for profiling",-1),Ue=r("p",null,"This data is processed outside the EU",-1),Te=r("p",null," This data is processed based on legitimate interests ",-1),Ne=r("p",{class:"text-caption"},"Purchase handling",-1),Ee=r("p",null,"This data is not used for profiling",-1),Re=r("p",null,"This data is not processed outside the EU",-1),Le=r("p",null," This data is processed based on legitimate interests ",-1),Ie={__name:"ReceiverPurpose",setup(D){const k=V(!1),P=V(!1);return(S,g)=>{const x=l("v-text-field"),s=l("v-col"),m=l("v-icon"),N=l("v-badge"),U=l("v-chip"),B=l("v-card-title"),f=l("v-row"),p=l("v-container"),d=l("v-expansion-panel-title"),o=l("v-divider"),i=l("v-list-subheader"),v=l("v-list-item"),h=l("v-list"),u=l("v-expansion-panel-text"),$=l("v-expansion-panel"),E=l("v-expansion-panels"),I=l("v-card"),H=l("v-dialog");return n(),y(p,null,{default:e(()=>[Pe,we,t(f,{class:"py-2"},{default:e(()=>[t(s,{cols:"8"},{default:e(()=>[t(x,{label:"Name"})]),_:1}),t(s,{class:"mt-3"},{default:e(()=>[t(U,{variant:"outlined"},{default:e(()=>[t(N,{content:"2",inline:"",class:"pr-4"},{default:e(()=>[t(m,null,{default:e(()=>[a("mdi-domain")]),_:1})]),_:1}),t(N,{content:"2",inline:""},{default:e(()=>[t(m,null,{default:e(()=>[a("mdi-file-document-outline")]),_:1})]),_:1})]),_:1}),t(H,{modelValue:b(k),"onUpdate:modelValue":g[0]||(g[0]=L=>O(k)?k.value=L:null),activator:"parent",width:"auto",transition:"dialog-bottom-transition"},{default:e(()=>[t(I,{"min-width":"500px","max-width":"600px"},{default:e(()=>[t(B,null,{default:e(()=>[a(" Receiver & Purposes for Name ")]),_:1}),t(E,null,{default:e(()=>[t($,null,{default:e(()=>[t(d,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{cols:"9"},{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[a(" Webshop 24 ")]),_:1})]),_:1}),t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[Ce]),_:1})]),_:1})]),_:1}),t(s,{class:"py-0"},{default:e(()=>[t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-robot ")]),_:1}),t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,null,{default:e(()=>[t(s,null,{default:e(()=>[t(m,{color:"grey",class:""},{default:e(()=>[a(" mdi-robot ")]),_:1}),$e]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),Be]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1}),De]),_:1})]),_:1})]),_:1}),t(h,{density:"compact"},{default:e(()=>[t(i,null,{default:e(()=>[a("Further data processed by this receiver")]),_:1}),t(v,null,{default:e(()=>[a(" Address ")]),_:1}),t(v,null,{default:e(()=>[a(" Date of birth ")]),_:1}),t(v,null,{default:e(()=>[a(" Payment information ")]),_:1})]),_:1})]),_:1})]),_:1}),t($,null,{default:e(()=>[t(d,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{cols:"9"},{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[a(" Paypal ")]),_:1})]),_:1}),t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[Ve]),_:1})]),_:1})]),_:1}),t(s,{class:"py-0"},{default:e(()=>[t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-robot ")]),_:1}),t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,null,{default:e(()=>[t(s,null,{default:e(()=>[t(m,{color:"grey",class:""},{default:e(()=>[a(" mdi-robot ")]),_:1}),Se]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),Ue]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1}),Te]),_:1})]),_:1})]),_:1}),t(h,{density:"compact"},{default:e(()=>[t(i,null,{default:e(()=>[a("Further data processed by this receiver")]),_:1}),t(v,null,{default:e(()=>[a(" Name ")]),_:1}),t(v,null,{default:e(()=>[a(" Address ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(o),t(f,{class:"py-2"},{default:e(()=>[t(s,{cols:"8"},{default:e(()=>[t(x,{label:"Date of birth"})]),_:1}),t(s,{align:"left",class:"mt-3"},{default:e(()=>[t(U,{variant:"outlined"},{default:e(()=>[t(N,{content:"1",inline:"",class:"pr-4"},{default:e(()=>[t(m,null,{default:e(()=>[a("mdi-domain")]),_:1})]),_:1}),t(N,{content:"1",inline:""},{default:e(()=>[t(m,null,{default:e(()=>[a("mdi-file-document-outline")]),_:1})]),_:1})]),_:1}),t(H,{modelValue:b(P),"onUpdate:modelValue":g[1]||(g[1]=L=>O(P)?P.value=L:null),activator:"parent",width:"auto",transition:"dialog-bottom-transition"},{default:e(()=>[t(I,{"min-width":"500px","max-width":"600px"},{default:e(()=>[t(B,null,{default:e(()=>[a(" Receiver & Purposes for Date of birth ")]),_:1}),t(E,null,{default:e(()=>[t($,null,{default:e(()=>[t(d,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{cols:"9"},{default:e(()=>[t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[a(" Webshop 24 ")]),_:1})]),_:1}),t(f,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[Ne]),_:1})]),_:1})]),_:1}),t(s,{class:"py-0"},{default:e(()=>[t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-robot ")]),_:1}),t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(u,null,{default:e(()=>[t(p,null,{default:e(()=>[t(f,null,{default:e(()=>[t(s,null,{default:e(()=>[t(m,{color:"grey",class:""},{default:e(()=>[a(" mdi-robot ")]),_:1}),Ee]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"grey",class:"mr-1"},{default:e(()=>[a(" mdi-earth ")]),_:1}),Re]),_:1}),t(o,{vertical:""}),t(s,null,{default:e(()=>[t(m,{color:"red",class:"mr-1"},{default:e(()=>[a(" mdi-scale-balance ")]),_:1}),Le]),_:1})]),_:1})]),_:1}),t(h,{density:"compact"},{default:e(()=>[t(i,null,{default:e(()=>[a("Further data processed by this receiver")]),_:1}),t(v,null,{default:e(()=>[a(" Address ")]),_:1}),t(v,null,{default:e(()=>[a(" Name ")]),_:1}),t(v,null,{default:e(()=>[a(" Payment information ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},Ae=r("p",{class:"text-h4"},"Your Profile",-1),He={class:"text-overline"},Oe={class:"font-weight-black"},We={key:0},ze={__name:"DataTable",setup(D){const k=V([{type:"category",name:"Personal Data"},{type:"data",description:"Name",value:"Herrmann Schaf",receivers:["Plattform","Paypal","UPS"]},{type:"data",description:"Date of Birth",value:"01.01.1970",receivers:["Plattform","Paypal"]},{type:"category",name:"Usage Data"},{type:"data",description:"Location Data",value:null,examples:["GPS Data","IP Geolocation","Network Information"],receivers:["Plattform"]},{type:"data",description:"Usage Profile",value:null,examples:["Product History","Navigation Data","Timing Data"],receivers:["Plattform","Google"]}]),P=V([{name:"Plattform",category:""},{name:"Google",category:"Advertisment"},{name:"Paypal",category:"Payment"},{name:"UPS",category:"Shipping"}]);function S(g){let x=P.value;for(let s of x)g.receivers.includes(s.name)?s.highlighted=!0:s.highlighted=!1;P.value=[...x]}return(g,x)=>{const s=l("v-col"),m=l("v-row"),N=l("v-list-item-title"),U=l("v-container"),B=l("v-list-item"),f=l("v-list"),p=l("v-list-subheader"),d=l("v-list-item-subtitle");return n(),y(U,null,{default:e(()=>[Ae,t(m,null,{default:e(()=>[t(s,{cols:"8"},{default:e(()=>[t(f,null,{default:e(()=>[(n(!0),C(R,null,A(b(k),o=>(n(),y(B,{key:o.name,value:o,color:"primary"},{default:e(()=>[o.type=="category"?(n(),y(N,{key:0},{default:e(()=>[t(m,null,{default:e(()=>[t(s,null,{default:e(()=>[r("p",He,w(o.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)):(n(),y(N,{key:1,onClick:i=>S(o)},{default:e(()=>[t(U,null,{default:e(()=>[t(m,{class:"py-0"},{default:e(()=>[t(s,{class:"py-0"},{default:e(()=>[r("p",Oe,w(o.description),1)]),_:2},1024),t(s,{class:"py-0"},{default:e(()=>[o.examples?(n(),C("ul",We,[(n(!0),C(R,null,A(o.examples,i=>(n(),C("li",{key:i},w(i),1))),128))])):T("",!0),a(" "+w(o.value),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),t(s,null,{default:e(()=>[t(f,null,{default:e(()=>[t(p,null,{default:e(()=>[a("Data Receiver")]),_:1}),(n(!0),C(R,null,A(b(P),o=>(n(),y(B,{rounded:"s",key:o.name,variant:o.highlighted?"tonal":"plain"},{default:e(()=>[t(d,null,{default:e(()=>[a(w(o.category),1)]),_:2},1024),t(N,null,{default:e(()=>[a(w(o.name),1)]),_:2},1024)]),_:2},1032,["variant"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}}},Fe={class:"text-overline"},je=r("p",{class:"text-h5"},"Context",-1),Ge={class:"text-body-1 pb-4"},Ye=r("p",{class:"text-h5"},"Problem",-1),Me={class:"text-body-1 pb-4"},qe=r("p",{class:"text-h5"},"Objective",-1),Je={class:"text-body-1 pb-4"},Ke=r("p",{class:"text-h5"},"Solution",-1),Qe={class:"text-body-1 pb-4"},Xe=r("p",{class:"text-h5"},"Example",-1),Ze={class:"text-body-1 pb-4"},et={key:0},tt={key:1},lt={key:2},at={key:3},nt={key:4},ct={__name:"Interaction",props:{demo:String},setup(D){return(k,P)=>{const S=l("v-col"),g=l("v-row"),x=l("v-divider"),s=l("v-card-title"),m=_e,N=ve,U=be,B=Ie,f=ze,p=l("v-card"),d=l("v-container");return n(),y(p,null,{default:e(()=>[t(d,null,{default:e(()=>[t(g,null,{default:e(()=>[t(S,null,{default:e(()=>[r("p",Fe,[j(k.$slots,"title")]),je]),_:3})]),_:3}),r("p",Ge,[j(k.$slots,"context")]),Ye,r("p",Me,[j(k.$slots,"problem")]),qe,r("p",Je,[j(k.$slots,"objective")]),Ke,r("p",Qe,[j(k.$slots,"solution")]),t(x),Xe,r("p",Ze,[j(k.$slots,"demo")]),D.demo?(n(),y(p,{key:0,elevation:"10",class:"ma-3"},{default:e(()=>[t(s),D.demo=="withdraw"?(n(),C("div",et,[t(m)])):T("",!0),D.demo=="shootout"?(n(),C("div",tt,[t(N)])):T("",!0),D.demo=="transparency"?(n(),C("div",lt,[t(U)])):T("",!0),D.demo=="rec_purp"?(n(),C("div",at,[t(B)])):T("",!0),D.demo=="data_table"?(n(),C("div",nt,[t(f)])):T("",!0)]),_:1})):T("",!0)]),_:3})]),_:3})}}};export{ct as default};

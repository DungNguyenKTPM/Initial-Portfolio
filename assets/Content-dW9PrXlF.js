import{j as e,L as j,r as c}from"./index-B3zO9XZz.js";import{I as N,s as P}from"./styles.module-CkT7dnk3.js";import{B as w}from"./Button-Cc8nfoRW.js";import{P as z}from"./ProjectPreview-lLBPsMVU.js";import{P as M}from"./constants-DbljaUFi.js";import{H as C,F}from"./handpointright-BA7f32bb.js";import{u as y,S as I,M as A,c as g,a as E}from"./Footer-BL1VpNjQ.js";function H(){const{containerAboutMe:s,readmore:n,readmoreBtn:o}=P;return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[" ",N.map((t,r)=>e.jsxs("div",{className:s,children:[e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("h1",{children:"About Me"}),e.jsx("img",{src:t.Avatar,alt:""})]}),e.jsxs("div",{children:[e.jsxs("p",{className:n,children:[e.jsx("span",{children:"    "}),"I graduated from ",t.Education," with a major in ",t.Major,"."," ",t.Description]}),e.jsxs(j,{className:o,to:"/about",children:[" ","...Read more"," "]})]})]},r))]})})}const B="/assets/Avatar-DnU26c-a.png",D="_containerIntro_vsdhe_2",L="_avatarSetting_vsdhe_14",R="_introSetting_vsdhe_20",k="_nameSetting_vsdhe_33",T="_professionSetting_vsdhe_44",$={containerIntro:D,avatarSetting:L,introSetting:R,nameSetting:k,professionSetting:T};function q(){const{containerIntro:s,avatarSetting:n,introSetting:o,nameSetting:t,professionSetting:r}=$,l=[{FullName:"Nguyen Huynh Huy Dung",Profession:"Software Developer"}];return e.jsx(e.Fragment,{children:e.jsxs("div",{className:s,children:[e.jsx("img",{className:n,src:B,alt:""}),e.jsxs("div",{className:o,children:[" ",l.map((i,m)=>e.jsx("div",{children:e.jsxs("p",{children:["Hi, my name is ",e.jsx("br",{}),e.jsx("span",{className:t,children:i.FullName}),e.jsx("br",{}),"I'm a"," ",e.jsx("span",{className:r,children:i.Profession})]})},m)),e.jsx(j,{to:"/about",children:e.jsx(w,{content:"About Me",href:"/about",isPrimary:!0})})]})]})})}const U="_containerContent_1te9b_1",G="_projectsPreview_1te9b_10",J="_zigzag__list_1te9b_20",K="_zigzag__items_1te9b_25",O="_moreProject_1te9b_74",Q="_moreBtn_1te9b_82",V="_containerFormContact_1te9b_109",W="_contentContact_1te9b_123",X="_visibleMore_1te9b_136",Y="_visibleElement_1te9b_141",Z={containerContent:U,projectsPreview:G,zigzag__list:J,zigzag__items:K,moreProject:O,moreBtn:Q,containerFormContact:V,contentContact:W,visibleMore:X,visibleElement:Y},ee="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%23ffffffc9'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M256%2016a240%20240%200%201%200%200%20480%20240%20240%200%201%200%200-480zm0%20496A256%20256%200%201%201%20256%200a256%20256%200%201%201%200%20512zM381.7%20221.7l-120%20120c-3.1%203.1-8.2%203.1-11.3%200l-120-120c-3.1-3.1-3.1-8.2%200-11.3s8.2-3.1%2011.3%200L256%20324.7%20370.3%20210.3c3.1-3.1%208.2-3.1%2011.3%200s3.1%208.2%200%2011.3z'/%3e%3c/svg%3e";function le(){const{containerContent:s,projectsPreview:n,zigzag__list:o,zigzag__items:t,moreProject:r,moreBtn:l,visibleMore:i,visibleElement:m,aboutMe:x,containerFormContact:h,contentContact:v}=Z,{scrollPosition:a}=y(),[p,f]=c.useState(!1),[u,b]=c.useState(!1),[te,S]=c.useState(!1);return c.useEffect(()=>{b(a>2850),f(a>2850),S(a>5e3),console.log(a)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(A,{}),e.jsx(q,{}),e.jsxs("div",{className:s,children:[e.jsxs("div",{className:n,children:[e.jsx("h1",{children:"My Projects"}),e.jsxs("ul",{className:o,children:[" ",M.map((d,_)=>e.jsx("li",{className:t,children:e.jsx(z,{url:d.ImageProject,name:d.Name,href:d.Href,index:_+1})},_))]})]}),e.jsx("div",{className:g(r,{[i]:p}),children:e.jsxs(j,{to:"/projects",className:g(l,{[m]:u}),children:[e.jsx("p",{children:"More project"}),e.jsx("img",{src:ee,alt:""})]})}),e.jsx("div",{className:x,children:e.jsx(H,{})}),e.jsxs("div",{className:h,children:[e.jsx("div",{className:v,children:e.jsxs("p",{children:["Have a question or want to work together? ",e.jsx("br",{}),"Shoot me a message via the contact form",e.jsx("img",{src:C,alt:""})]})}),e.jsx(F,{})]})]}),e.jsx(E,{})]})}export{le as default};

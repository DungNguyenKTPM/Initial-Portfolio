import{j as e,L as j,r as d}from"./index-1UmjOjYh.js";import{I as S,s as N}from"./styles.module-CK9YA7R7.js";import{B as P}from"./Button-Me06g-lN.js";import{P as w}from"./ProjectPreview-BmYLhDAJ.js";import{P as z}from"./constants-B1BSAyN0.js";import{H as M,F as C}from"./handpointright-B5BFu-PO.js";import{u as F,S as y,M as I,c as g,a as A}from"./Footer-ChHa8CsU.js";function E(){const{containerAboutMe:s,readmore:n,readmoreBtn:o}=N;return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[" ",S.map((t,r)=>e.jsxs("div",{className:s,children:[e.jsxs("div",{children:[e.jsx("hr",{}),e.jsx("h1",{children:"About Me"}),e.jsx("img",{src:t.Avatar,alt:""})]}),e.jsxs("div",{children:[e.jsxs("p",{className:n,children:[e.jsx("span",{children:" "}),"I graduated from ",t.Education," with a major in"," ",t.Major,". ",t.Description]}),e.jsxs(j,{className:o,to:"/about",children:[" ","...Read more"," "]})]})]},r))]})})}const H="/Initial-Portfolio/assets/Avatar-DnU26c-a.png",B="_containerIntro_vsdhe_2",D="_avatarSetting_vsdhe_14",L="_introSetting_vsdhe_20",R="_nameSetting_vsdhe_33",k="_professionSetting_vsdhe_44",T={containerIntro:B,avatarSetting:D,introSetting:L,nameSetting:R,professionSetting:k};function $(){const{containerIntro:s,avatarSetting:n,introSetting:o,nameSetting:t,professionSetting:r}=T,c=[{FullName:"Nguyen Huynh Huy Dung",Profession:"Software Developer"}];return console.log("Introdution log"),e.jsx(e.Fragment,{children:e.jsxs("div",{className:s,children:[e.jsx("img",{className:n,src:H,alt:""}),e.jsxs("div",{className:o,children:[" ",c.map((a,l)=>e.jsx("div",{children:e.jsxs("p",{children:["Hi, my name is ",e.jsx("br",{}),e.jsx("span",{className:t,children:a.FullName}),e.jsx("br",{}),"I'm a"," ",e.jsx("span",{className:r,children:a.Profession})]})},l)),e.jsx(j,{to:"/about",children:e.jsx(P,{content:"About Me",href:"/about",isPrimary:!0})})]})]})})}const q="_containerContent_1te9b_1",U="_projectsPreview_1te9b_10",G="_zigzag__list_1te9b_20",J="_zigzag__items_1te9b_25",K="_moreProject_1te9b_74",O="_moreBtn_1te9b_82",Q="_containerFormContact_1te9b_109",V="_contentContact_1te9b_123",W="_visibleMore_1te9b_136",X="_visibleElement_1te9b_141",Y={containerContent:q,projectsPreview:U,zigzag__list:G,zigzag__items:J,moreProject:K,moreBtn:O,containerFormContact:Q,contentContact:V,visibleMore:W,visibleElement:X},Z="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%23ffffffc9'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M256%2016a240%20240%200%201%200%200%20480%20240%20240%200%201%200%200-480zm0%20496A256%20256%200%201%201%20256%200a256%20256%200%201%201%200%20512zM381.7%20221.7l-120%20120c-3.1%203.1-8.2%203.1-11.3%200l-120-120c-3.1-3.1-3.1-8.2%200-11.3s8.2-3.1%2011.3%200L256%20324.7%20370.3%20210.3c3.1-3.1%208.2-3.1%2011.3%200s3.1%208.2%200%2011.3z'/%3e%3c/svg%3e";function ie(){const{containerContent:s,projectsPreview:n,zigzag__list:o,zigzag__items:t,moreProject:r,moreBtn:c,visibleMore:a,visibleElement:l,aboutMe:x,containerFormContact:h,contentContact:v}=Y,{scrollPosition:i}=F(),[p,f]=d.useState(!1),[u,b]=d.useState(!1);return console.log("Content log"),d.useEffect(()=>{b(i>2850),f(i>2850),console.log(i)},[i]),e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(I,{}),e.jsx($,{}),e.jsxs("div",{className:s,children:[e.jsxs("div",{className:n,children:[e.jsx("h1",{children:"My Projects"}),e.jsxs("ul",{className:o,children:[" ",z.map((m,_)=>e.jsx("li",{className:t,children:e.jsx(w,{url:m.ImageProject,name:m.Name,href:m.Href,index:_+1})},_))]})]}),e.jsx("div",{className:g(r,{[a]:p}),children:e.jsxs(j,{to:"/projects",className:g(c,{[l]:u}),children:[e.jsx("p",{children:"More project"}),e.jsx("img",{src:Z,alt:""})]})}),e.jsx("div",{className:x,children:e.jsx(E,{})}),e.jsxs("div",{className:h,children:[e.jsx("div",{className:v,children:e.jsxs("p",{children:["Have a question or want to work together? ",e.jsx("br",{}),"Shoot me a message via the contact form",e.jsx("img",{src:M,alt:""})]})}),e.jsx(C,{})]})]}),e.jsx(A,{})]})}export{ie as default};

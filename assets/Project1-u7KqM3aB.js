import{j as s}from"./index-DN-feupf.js";import{S as P,M as y,a as T}from"./Footer-BubPsizP.js";import{a as f,s as D}from"./constants-C0wiiA9j.js";import{j as H}from"./carousel.min-CVvKbAcZ.js";function w(){const{containerProject:n,headingProject:d,context:o,headingImg:I,overview:j,descriptionProject:x,middleHr:c,goal:t,containerFeature:h,DescriptionFeature:m,imgCarosel:p}=D;return s.jsxs(s.Fragment,{children:[s.jsx(P,{}),s.jsx(y,{}),f.map((v,u)=>s.jsx("div",{children:v.Project1.map((r,g)=>s.jsxs("div",{className:n,children:[s.jsxs("div",{className:d,children:[s.jsxs("h2",{className:o,children:["Project: ",s.jsx("br",{}),s.jsx("span",{children:r.Name})]}),s.jsx("img",{src:r.ImageProject,alt:""}),r.Overview.map((e,a)=>s.jsxs("ul",{className:j,children:[s.jsxs("li",{children:["Role: ",s.jsx("span",{children:e.Role})]}),s.jsxs("li",{children:["Type: ",s.jsx("span",{children:e.Type})]}),s.jsxs("li",{children:["Language: ",s.jsx("span",{children:e.Language})]}),s.jsxs("li",{children:["Technology: ",s.jsx("span",{children:e.Technology})]})]},a))]}),s.jsxs("div",{className:x,children:[" ",r.Description.map((e,a)=>s.jsxs("div",{children:[s.jsx("div",{className:c,children:s.jsx("h2",{children:"Goal"})}),s.jsx("p",{className:t,children:e.Goal}),s.jsx("div",{className:c,children:s.jsx("h2",{children:"Feature"})}),s.jsxs("div",{children:[" ",e.Feature.map((i,N)=>s.jsxs("div",{className:h,children:[s.jsxs("div",{className:m,children:[s.jsx("h4",{children:i.NameFeature}),s.jsx("p",{children:i.DescriptionFeature})]}),s.jsx("div",{className:p,children:s.jsx(H.Carousel,{autoPlay:!0,infiniteLoop:!0,interval:2e3,stopOnHover:!0,children:i.ImageFeature.map((l,F)=>s.jsx("div",{children:s.jsx("img",{src:l.Src,alt:l.Alt})},F))})})]},N))]})]},a))]})]},g))},u)),s.jsx(T,{})]})}export{w as default};

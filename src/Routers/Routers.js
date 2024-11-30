import { lazy } from "react";

const routers = [
  {
    path: "/",
    component: lazy(() => import("../components/Content/Content"))
  },
  {
    path: "/projects",
    component: lazy(() => import("../components/Content/Projects/Projects"))
  },
  {
    path: "/about",
    component: lazy(() => import("../components/Content/About/About"))
  },
  {
    path: "/contact",
    component: lazy(() => import("../components/Content/Contact/Contact"))
  },
];

const projectRouters = [
  {
    path: "/projects/project1",
    component: lazy(() => import("../components/Content/Projects/Project1/Project1"))
  },
  {
    path: "/projects/project2",
    component: lazy(() => import("../components/Content/Projects/Project2/Project2"))
  },
  {
    path: "/projects/project3",
    component: lazy(() => import("../components/Content/Projects/Project3/Project3"))
  },
];

export { routers, projectRouters};

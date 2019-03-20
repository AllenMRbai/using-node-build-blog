import Main from "@/layouts/Main";
import Login from "@/pages/Login";

export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/main",
    component: Main,
    children: [
      {
        path: "admin",
        name: "admin",
        component: () => import(/* webpackChunkName:"Admin" */ "@/pages/Admin")
      },
      {
        path: "blogs",
        name: "blogs",
        component: () => import(/* webpackChunkName:"Blogs" */ "@/pages/Blogs")
      },
      {
        path: "detail",
        name: "detail",
        component: () =>
          import(/* webpackChunkName:"Detail" */ "@/pages/Detail")
      },
      {
        path: "edit",
        name: "edit",
        component: () => import(/* webpackChunkName:"Edit" */ "@/pages/Edit")
      }
    ]
  }
];

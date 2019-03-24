import Main from "@/layouts/Main";
import Doc from "@/layouts/Doc";
import Blogs from "@/pages/Blogs";

export default [
  {
    path: "/",
    redirect: "/main/blogs"
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName:"Login" */ "@/pages/Login")
  },
  {
    path: "/registry",
    name: "registry",
    component: () =>
      import(/* webpackChunkName:"Registry" */ "@/pages/Registry")
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
        component: Blogs
      },
      {
        path: "detail/:id",
        name: "detail",
        component: () =>
          import(/* webpackChunkName:"Detail" */ "@/pages/Detail")
      },
      {
        path: "edit/:type", //pramas: "create" "update"
        name: "edit",
        component: () => import(/* webpackChunkName:"Edit" */ "@/pages/Edit")
      }
    ]
  },
  {
    path: "/doc",
    component: Doc,
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(/* webpackChunkName:"doc-Home" */ "@/pages/doc/Home")
      },
      {
        path: "spacing",
        name: "spacing",
        component: () =>
          import(/* webpackChunkName:"doc-Spacing" */ "@/pages/doc/Spacing")
      },
      {
        path: "cssHelper",
        name: "cssHelper",
        component: () =>
          import(/* webpackChunkName:"doc-CssHelper" */ "@/pages/doc/CssHelper")
      },
      {
        path: "sassVar",
        name: "sassVar",
        component: () =>
          import(/* webpackChunkName:"doc-SassVar" */ "@/pages/doc/SassVar")
      },
      {
        path: "layout",
        name: "layout",
        component: () =>
          import(/* webpackChunkName:"doc-Layout" */ "@/pages/doc/Layout")
      },
      {
        path: "menu",
        name: "menu",
        component: () =>
          import(/* webpackChunkName:"doc-MenuComp" */ "@/pages/doc/MenuComp")
      },
      {
        path: "formComp",
        name: "formComp",
        component: () =>
          import(/* webpackChunkName:"doc-FormComp" */ "@/pages/doc/FormComp")
      },
      {
        path: "icon",
        name: "icon",
        component: () =>
          import(/* webpackChunkName:"doc-Icon" */ "@/pages/doc/Icon")
      },
      {
        path: "dialog",
        name: "dialog",
        component: () =>
          import(/* webpackChunkName:"doc-Dialog" */ "@/pages/doc/Dialog")
      },
      {
        path: "otherComp",
        name: "otherComp",
        component: () =>
          import(/* webpackChunkName:"doc-OtherComp" */ "@/pages/doc/OtherComp")
      }
    ]
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "Error404" */ "@/pages/Error404.vue")
  }
];

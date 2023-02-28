const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "",
        name: "pertama",
        component: () => import("pages/ErrorNotFound.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("pages/access/LoginPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

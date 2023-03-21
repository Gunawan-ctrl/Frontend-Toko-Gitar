const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    meta: {
      authAdmin: true,
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "/kategori",
        name: "kategori",
        component: () => import("pages/Kategori.vue"),
      },
      {
        path: "/data-barang",
        name: "dataBarang",
        component: () => import("pages/DataBarang.vue"),
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

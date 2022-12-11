import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/layout",
    component: () => import("@/views/layout/layoutIndex.vue"),
    children: [
      {
        path: "user",
        name: "user",
        component: () => import("@/views/userManager/index.vue"),
        children: [
          {
            path: "list",
            name:"userList",
            component: () => import("@/views/userManager/userList/listIndex.vue"),
          },
          {
            path: "permission",
            name: "userPermission",
            component: () => import("@/views/userManager/permission/index.vue")
          }
        ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

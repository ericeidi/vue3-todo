import { createRouter, createWebHistory } from "vue-router";
import HomeTodoView from "../views/HomeTodoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-todo",
      component: HomeTodoView,
    },
  ],
});

export default router;

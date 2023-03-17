import { createRouter, createWebHistory } from "vue-router";
import Counter from "../components/MyCounter.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import CountryPage from "../views/country/CountryPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CountryPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

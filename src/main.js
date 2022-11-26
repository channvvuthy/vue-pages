import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "./styles/app.css";
import conf from "./conf";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster();

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    toaster.error(error.response.data.error, {
      position: "top",
    });
    return Promise.reject(error);
  }
);

createApp(App).use(store).use(router).mount("#app");

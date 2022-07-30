import Vue from "vue";
// import axios from "axios";

import App from "./App.vue";
import router from "./router";
import { createMockServer } from "./mocks/api";

import "./index.css";

// axios.defaults.baseURL = "http://127.0.0.1:8000";

createMockServer();

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

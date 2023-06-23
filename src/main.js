


import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import СontextualAvertising from "@/components/СontextualAvertising";
import Seo from "@/components/Seo";
import Smm from "@/components/Smm";
import Target from "@/components/Target";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: СontextualAvertising,
  },
  {
    path: "/seo",
    component: Seo,
  },
  {
    path: "/smm",
    component: Smm,
  },
  {
    path: "/target",
    component: Target,
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
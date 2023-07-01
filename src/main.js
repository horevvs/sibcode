import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project



import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import СontextualAvertising from "@/components/СontextualAvertising";
import Seo from "@/components/Seo";
import Smm from "@/components/Smm";
import Target from "@/components/Target";
import Add from "@/components/Add";
import Manual from "@/components/Manual";
import Archive from "@/components/Archive";
import Changeproject from "@/components/Changeproject";
import GenerateaReport from "@/components/GenerateaReport";

Vue.use(VueRouter);
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

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
  },
  {
    path: "/add",
    component: Add,
  },
  {
    path: "/manual",
    component: Manual,
  },
  {
    path: "/archive",
    component: Archive,
  },
  {
    path: "/changeproject",
    component: Changeproject,
  },
  {
    path: "/generateaReport",
    component: GenerateaReport,
  },
];


Changeproject
const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return { 
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false
     }
  },
  render: (h) => h(App),
}).$mount("#app");


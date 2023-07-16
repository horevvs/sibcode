// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import Seo from "@/components/Seo";
import Smm from "@/components/Smm";
import Target from "@/components/Target";
import Add from "@/components/Add";
import Manual from "@/components/Manual";
import Archive from "@/components/Archive";
import Changeproject from "@/components/Changeproject";
import GenerateaReportseo from "@/components/GenerateaReportseo";
import GenerateaReportsmm from "@/components/GenerateaReportsmm";
import GenerateaReporttarget from "@/components/GenerateaReporttarget";
import GenerateaReportsAvertising from "@/components/GenerateaReportsAvertising";


import tinymce from 'vue-tinymce-editor'
Vue.component('tinymce', tinymce)


Vue.use(VueRouter);


const routes = [

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
    path: "/generateaReportseo",
    component: GenerateaReportseo,
  },
  {
    path: "/generateaReportsmm",
    component: GenerateaReportsmm,
  },
  {
    path: "/generateaReporttarget",
    component: GenerateaReporttarget,
  },
  {
    path: "/generateaReportsAvertisingt",
    component: GenerateaReportsAvertising,
  },
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


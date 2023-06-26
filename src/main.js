


import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import СontextualAvertising from "@/components/СontextualAvertising";
import Seo from "@/components/Seo";
import Smm from "@/components/Smm";
import Target from "@/components/Target";
import Add from "@/components/Add";

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
  },
  {
    path: "/add",
    component: Add,
  }
];

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
      visible5: false
     }
  },


  methods: {
    increment() {
      // `this` указывает на экземпляр компонента
      this.count++
    }
  },
  
  
  render: (h) => h(App),
}).$mount("#app");
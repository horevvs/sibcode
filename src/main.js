


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
  methods:{
    Hide: function(){
      alert('hello world')
    }},
 


  
  render: (h) => h(App),
}).$mount("#app");
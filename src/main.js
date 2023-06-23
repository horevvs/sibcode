// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import World from "@/components/World";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: HelloWorld,
  },
  {
    path: "/world",
    component: World,
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
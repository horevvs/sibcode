
<template>
  <div>
    <Linki />
    <AddExitheader />
    <router-view />
    <Archive v-if="$route.path !== '/add' && $route.path !== '/manual' && $route.path !== '/changeproject'" />
  </div>
</template>

<style>
@import "./css/style.css";
</style>

<script>
import Archive from "./components/Archive.vue";
import AddExitheader from "./components/AddExitheader.vue";
import Linki from "./components/Linki.vue";

export default {
  name: "App",
  components: {
    Archive,
    AddExitheader,
    Linki
  },
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: true,
      visible8: true,
      isActive: true,
      isActiveseo: true,
      isActivesmm: true,
      isActivetarget: true
    };

  },
  methods: {
    Hide2: function () {
      if (this.visible8 == false) {
        this.visible8 = !this.visible8;
      }
    },
  }
};
</script> 


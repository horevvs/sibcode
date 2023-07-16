
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
  }
};
</script> 


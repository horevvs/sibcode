
<template>
  <div>
    <div v-if="$route.path !== '/add' && $route.path !== '/changeproject'">
      <div class="d-flex rounded-circleflex-row mt-3 mx-3 mb-3">
        <div @:click="Hide2" class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/" exact active-class="has" tag="div"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
            <div class="text-light">Контекстная реклама</div>
          </router-link>
        </div>

        <div @click="Hide2" class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/seo" active-class="has" tag="div"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
            <div class="text-light cursor">Seo</div>
          </router-link>
        </div>

        <div @click="Hide2" class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/smm" active-class="has" tag="div"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
            <div>Smm</div>
          </router-link>
        </div>

        <div @click="Hide2" class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/target" active-class="has" tag="div"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
            <div class="text-light">Target</div>
          </router-link>
        </div>
      </div>
    </div>





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

export default {
  name: "App",
  components: {
    Archive,
    AddExitheader,
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
    // Hide: function () {
    //   if (this.visible7 == false) {
    //     this.visible7 = !this.visible7;
    //   }
    // },
    // Hideshow: function () {
    //   if (this.visible7 == true) {
    //     this.visible7 = !this.visible7;
    //   }

    // },
    Hide2: function () {
      if (this.visible8 == false) {
        this.visible8 = !this.visible8;
      }
    },
    // Hideshow2: function () {
    //   if (this.visible8 == true) {
    //     this.visible8 = !this.visible8;
    //   }
    // },
  }
};



</script> 


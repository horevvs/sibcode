<template>
  <div>
    <div>
      <div class="d-flex rounded-circleflex-row mt-3 mx-3 mb-3">
        <div
          v-on:click="Hide2"
          class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5"
        >
          <router-link
            to="/"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            <div  class="text-light">Контекстная реклама</div></router-link
          >
        </div>

        <div
        @click="Hide2"
          class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5"
        >
          <router-link
            to="/seo"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Seo</div></router-link
          >
        </div>

        <div
        @click="Hide2"
          class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5"
        >
          <router-link
            to="/smm"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div>Smm</div>
          </router-link>
        </div>

        <div
        @click="Hide2" class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link
            to="/target"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Target</div></router-link
          >
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mx-5">
      <router-link to="/add">
        <button  v-on:click="Hideshow"
    
          type="button"
          class="btn btns btn-secondary link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          Добавить проект
        </button>
      </router-link>
      <button type="button" class="btn btn-secondary">
        <a
          href="https://report-dev.uat.sibcode.team/login"
          class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
          >Выход</a
        >
      </button>
    </div>

    <router-view />
    <Archive v-show="visible7" />
  </div>
</template>


<script>
import Archive from "./components/Archive.vue";

export default {
  name: "App",
  components: {
    Archive,
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
    };
  },
  methods: {
    Hide: function () {
      if (this.visible7 == false ) {
        this.visible7 = !this.visible7;
      }
    },
    Hideshow: function () {
      if (this.visible7 == true) {
        this.visible7 = !this.visible7;
      }

    },
     Hide2: function () {
      if (this.visible8 == false) {
        this.visible8 = !this.visible8;
      }
      window.location.reload()
    },
    Hideshow2: function () {
      if (this.visible8 == true) {
        this.visible8 = !this.visible8;
      }
    }
  }
};
</script> 


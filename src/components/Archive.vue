<template>
  <div>
    <div v-if="$route.path !== '/generateaReportseo' && $route.path !== '/generateaReportsAvertisingt' 
    && $route.path !== '/generateaReportsmm' && $route.path !== '/generateaReporttarget' "  
    class="d-flex mt-2 mx-5 col-5 justify-content-between">
      <div>Список Активных проектов</div>
      <button
        v-on:click="visible6 = !visible6"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        Архив
      </button>
    </div>

    <div  v-show="visible6" v-if="$route.path !== '/generateaReportseo' && $route.path !== '/generateaReportsAvertisingt' 
    && $route.path !== '/generateaReportsmm' && $route.path !== '/generateaReporttarget' " class="mx-5 col-5" >
      <div>
        <div class="d-flex justify-content-around">
          <router-link
            to="/generateaReport"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">qwe</div>
          </router-link>

          <router-link
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">(Из архива)</div></router-link
          >

          <router-link
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div v-on:click="Hideshow2" class="text-dark">
              Настройки
            </div></router-link
          >
        </div>

        <div class="d-flex justify-content-around">
          <router-link
     
            v-if="$route.path == '/'"
            to="/generateaReportsAvertisingt"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">tests</div></router-link
          >

          <router-link
            v-if="$route.path == '/seo'"
            to="/generateaReportseo"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">seos</div></router-link
          >

          <router-link
            v-if="$route.path == '/smm'"
            to="/generateaReportsmm"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">smm</div></router-link
          >

          <router-link
            v-if="$route.path == '/target'"
            to="/generateaReporttarget"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">target</div></router-link
          >

          <router-link
            to="/add"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">(Из архива)</div></router-link
          >

          <router-link
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">Настройки</div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "App",
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
    };
  },
  methods: {
    Hide: function () {
      if (this.visible7 == false) {
        this.visible7 = !this.visible7;
      }
    },
    Hide2: function () {
      if (this.visible8 == false) {
        this.visible8 = !this.visible8;
      }
      window.location.reload();
    },
    Hideshow2: function () {
      if (this.visible8 == true) {
        this.visible8 = !this.visible8;
      }
    },
  },
};
</script> 

  
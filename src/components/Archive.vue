
<template>
  <div  v-show="visible8">
    <div class="d-flex mt-2 mx-5 col-5  justify-content-between">
      <div>Список Активных проектов</div>
      <button
        v-on:click="visible6 = !visible6"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        Архив
      </button>
      
    </div>

    <div class="mx-5 col-5" v-show="visible6">
      <div >
        <div class="d-flex justify-content-around">
        <router-link
            to="/add"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">qwe</div></router-link
          >
          <router-link
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">(Из архива)</div></router-link
          >
   
        <router-link  
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div   v-on:click="Hideshow2" class="text-dark">Настройки</div></router-link
          >
      </div> 

      <div class="d-flex justify-content-around">
        <router-link
            to="/add"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">test</div></router-link
          >
          <router-link
            to="/add"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-dark">(Из архива)</div></router-link
          >
   
        <router-link
            to="/changeproject"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div v-on:click="Hideshow2" class="text-dark">Настройки</div></router-link
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
      visible6: false,
      visible7: false,
      visible8: true,
    };
  },
  methods: {
    Hideshow2: function () {
      if (this.visible8 == true) {
        this.visible8 = !this.visible8;
      }
    },
  }
};
</script> 

  
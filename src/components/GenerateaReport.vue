<template>
    
    <div>report</div>
    
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
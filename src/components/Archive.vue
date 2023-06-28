
<template>
  <div v-on:click="visible6 = !visible6">
    <div class="d-flex mt-2 mx-5 col-5 bg-warning justify-content-between">
      <div>Список Активных проектов</div>
      <button type="button" class="btn btn-secondary btn-sm">Архив</button>
    </div>

    <div class="mx-5 col-5 bg-warning" v-show="visible6">
      будет какой-то текст с компонентами ссылками и роутами
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
    };
  },
};
</script> 

  
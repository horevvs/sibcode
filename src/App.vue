<template>
  <div>
    <div>
      <div class="d-flex flex-row mt-3 mx-3 mb-3">
        <div class="m-3 p-2 w-25 text-center bg-secondary fs-5">
          <router-link
            to="/"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Контекстная реклама</div></router-link
          >
        </div>

        <div class="m-3 p-2 w-25 text-center bg-secondary fs-5">
          <router-link
            to="/seo"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Seo</div></router-link
          >
        </div>
        <div class="m-3 p-2 w-25 text-center bg-secondary fs-5">
          <router-link
            to="/smm"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div>Smm</div></router-link
          >
        </div>
        <div class="m-3 p-2 w-25 text-center bg-secondary fs-5">
          <router-link
            to="/target"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Target</div></router-link
          >
        </div>
      </div>
    </div>

    <UnderHeader />
    <router-view />
  </div>
</template>

 <script>
import UnderHeader from "./components/UnderHeader.vue";

export default {
  name: "App",
  data: function () {
    return {
      visible: true,
    }
  },

  // меняем тру на фолс и получаем скрытый элемент. идея такая общий контейнер скрываетться когда нажимаю на  адд и рендериться компонентт адд
  components: {
    UnderHeader,
  },
};
</script> 


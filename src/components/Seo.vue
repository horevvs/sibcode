<template>
  <div  class="hello">


    <div>
  <div  v-if="$route.path !== '/add'&& $route.path !== '/changeproject' && $route.path !== '/'  " class="d-flex justify-content-between mx-5">
      <router-link to="/add">
        <button 
          type="button"
          class="btn btns btn-secondary link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
          Добавить проект
        </button>
      </router-link>
     
      <button type="button" class="btn btn-secondary">
        <a href="https://report-dev.uat.sibcode.team/login"
          class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
          Выход</a>
      </button>
    </div>
  </div>

  </div>
</template>




<template>
  <div>
    <div>
      <div class="d-flex  rounded-circleflex-row mt-3 mx-3 mb-3">
        <div class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
            <div class="text-light">Контекстная реклама</div></router-link>
        </div>

        <div class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link to="/seo"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Seo</div></router-link>
        </div>
        <div class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
          <router-link
            to="/smm"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"><div>Smm</div></router-link>
        </div>
        <div class="m-3 p-2 w-25  rounded text-center bg-secondary fs-5">
          <router-link
            to="/target"
            class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            ><div class="text-light">Target</div></router-link>
        </div>
      </div>
    </div>
    <div  class="d-flex justify-content-between mx-5 ">
    <router-link to="/add">
    <button  type="button" class="btn btns btn-secondary link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"> Добавить проект</button>
    </router-link>
    <button type="button" class="btn btn-secondary "><a href="https://report-dev.uat.sibcode.team/login" class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">Выход</a> </button>
    
 
  </div>


    <router-view />
  </div>
</template>



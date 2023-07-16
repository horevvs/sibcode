<template>
    <div v-if="$route.path !== '/add' && $route.path !== '/changeproject'">
        <div class="d-flex rounded-circleflex-row mt-3 mx-3 mb-3">
            <div class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
                <router-link to="/" exact active-class="has" tag="div"
                    class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                    <div class="text-light">Контекстная реклама</div>
                </router-link>
            </div>

            <div class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
                <router-link to="/seo" active-class="has" tag="div"
                    class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                    <div class="text-light cursor">Seo</div>
                </router-link>
            </div>

            <div  class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
                <router-link to="/smm" active-class="has" tag="div"
                    class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                    <div>Smm</div>
                </router-link>
            </div>

            <div  class="m-3 p-2 w-25 rounded text-center bg-secondary fs-5">
                <router-link to="/target" active-class="has" tag="div"
                    class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                    <div class="text-light">Target</div>
                </router-link>
            </div>
        </div>
    </div>
</template>


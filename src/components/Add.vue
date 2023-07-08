<template>
  <div>
    <div class="fs-3 adds">Добавить проект</div>
    <div class="d-flex flex-column p-5">
      <div class="mt-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Название</label>
            <input
              type="email"
              class="form-control border control border-secondary bg-secondary-subtle w-25"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </form>
      </div>

      <div>
        <div class="point">
          <div>
            <router-link class="text-dark fw-bold" to="/manual"> Инструкция по применению </router-link>
            <router-view />
          </div>
        </div>

        <div class="mt-2 point" v-on:click="visible = !visible">
          Подключение Яндекс Метрика
        </div>
        <form v-show="visible">
          <div class="d-flex flex-column">
            <input
              type="email"
              class="form-control-sm form-input bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите ключ API"
            />

            <input
              type="email"
              class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите username от Метрика"
            />

            <input
              type="email"
              class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите id компании"
            />

            <input
              type="email"
              class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите id целей для метрии (пример в инструкции)"
            />
          </div>
        </form>
      </div>

      <div class="mt-2 point" v-on:click="visible2 = !visible2">
        Подключение Яндекс Директ
      </div>
      <form v-show="visible2">
        <div class="mb-3 d-flex flex-column">
          <input
            type="email"
            class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
            id="yandexApi"
            aria-describedby="emailHelp"
            placeholder="Введите ключ API"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="usernameMetrika"
            aria-describedby="emailHelp"
            placeholder="Введите username от Метрика"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="idCompany"
            aria-describedby="emailHelp"
            placeholder="Введите id компании"
          />
        </div>
      </form>

      <div class="mt-2 point" v-on:click="visible3 = !visible3">
        Подключение Яндекс Callibri
      </div>
      <form v-show="visible3">
        <div class="mb-3 d-flex flex-column">
          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите ключ API"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите Email пользователя"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите site id"
          />
        </div>
      </form>

      <div class="mt-2 point" v-on:click="visible4 = !visible4">
        Подключение Топ визор
      </div>
      <form v-show="visible4">
        <div class="mb-3 d-flex flex-column">
          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите ключ API"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите id пользователя"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите project id"
          />
          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите  id региона"
          />
          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите  название для группы"
          />
        </div>
      </form>

      <div class="mt-2 point" v-on:click="visible5 = !visible5">
        Подключение VK
      </div>
      <form v-show="visible5">
        <div class="mb-3 d-flex flex-column">
          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите ключ oath"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите id рекламного кабинет"
          />

          <input
            type="email"
            class="form-control-sm mt-3 bg-secondary-subtle col-4"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Введите id клиента"
          />
        </div>
      </form>

      <button type="button" class="btn mt-3 col-3 bg-secondary-subtle">
        Добавить проект
      </button>
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
      },
   
    }
  };
  </script>


<style>
@import "../css/style.css";
</style>
  
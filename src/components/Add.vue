<template>
  <div>
    <div class="fs-3 adds">Добавить проект</div>
    <div class="d-flex flex-column p-5">
      <div class="mt-5">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Название</label>
            <input type="email" class="form-control border control border-secondary bg-secondary-subtle w-25"
              id="exampleInputEmail1" aria-describedby="emailHelp" />
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

        <div class="mt-2 point" @click="YandexMetrika = !YandexMetrika">
          Подключение Яндекс Метрика
        </div>
        <form v-show="YandexMetrika">
          <div class="d-flex flex-column">
            <input type="email" class="form-control-sm form-input bg-secondary-subtle col-4" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Введите ключ API" />

            <input type="email" class="form-control-sm mt-3 form-input bg-secondary-subtle col-4" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Введите username от Метрика" />

            <input type="email" class="form-control-sm mt-3 form-input bg-secondary-subtle col-4" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Введите id компании" />

            <input type="email" class="form-control-sm mt-3 form-input bg-secondary-subtle col-4" id="exampleInputEmail1"
              aria-describedby="emailHelp" placeholder="Введите id целей для метрии (пример в инструкции)" />
          </div>
        </form>
      </div>

      <div class="mt-2 point" @click="YandexDirect = !YandexDirect">
        Подключение Яндекс Директ
      </div>
      <form v-show="YandexDirect">
        <div class="mb-3 d-flex flex-column">
          <input type="email" class="form-control-sm mt-3 form-input bg-secondary-subtle col-4" id="yandexApi"
            aria-describedby="emailHelp" placeholder="Введите ключ API" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="usernameMetrika"
            aria-describedby="emailHelp" placeholder="Введите username от Метрика" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="idCompany"
            aria-describedby="emailHelp" placeholder="Введите id компании" />
        </div>
      </form>

      <div class="mt-2 point" @click="YandexCallibri = !YandexCallibri">
        Подключение Яндекс Callibri
      </div>
      <form v-show="YandexCallibri">
        <div class="mb-3 d-flex flex-column">
          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите ключ API" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите Email пользователя" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите site id" />
        </div>
      </form>

      <div class="mt-2 point" @click="TopVisor = !TopVisor">
        Подключение Топ визор
      </div>
      <form v-show="TopVisor">
        <div class="mb-3 d-flex flex-column">
          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите ключ API" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите id пользователя" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите project id" />
          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите  id региона" />
          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите  название для группы" />
        </div>
      </form>

      <div class="mt-2 point" @click="SwitchVK = !SwitchVK">
        Подключение VK
      </div>
      <form v-show="SwitchVK">
        <div class="mb-3 d-flex flex-column">
          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите ключ oath" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите id рекламного кабинет" />

          <input type="email" class="form-control-sm mt-3 bg-secondary-subtle col-4" id="exampleInputEmail1"
            aria-describedby="emailHelp" placeholder="Введите id клиента" />
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
      YandexMetrika: false,
      YandexDirect: false,
      YandexCallibri: false,
      TopVisor: false,
      SwitchVK: false,
    }
  }
}
</script>


<style>
@import "../css/style.css";
</style>
  
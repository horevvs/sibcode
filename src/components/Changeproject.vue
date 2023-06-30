<template>
    <div>
      <div class="fs-3 adds">Изменить проект</div>

      <div class="d-flex flex-column p-5">
        <div>
          <div class="point">
            <div>
              <router-link class="text-dark fs-4 fw-bold" to="/manual"> Инструкция по применению </router-link>
              <router-view />
            </div>
          </div>

           <div class="mt-2">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">test</label>
              <input
                type="email"
                value="test"
                class="form-control border control border-secondary bg-secondary-subtle w-25"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </form>
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
                value="y0_AgAAAABbQ5XTAAjzIQAAAADX5uQg-iyJ4nrmTTe6cAuMcxWtIaVoaFE"
                aria-describedby="emailHelp"
                placeholder="Введите ключ API"
              />
  
              <input
                type="email"
                value="absteplo-369388-nizy"
                class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Введите username от Метрика"
              />
  
              <input
                type="email"
                value="1"
                class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Введите id компании"
              />
  
              <input
                type="email"
                value="22244420: 41870524, 41870746, 44049263, 227893731"
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
              value="y0_AgAAAABbQ5XTAAjzIQAAAADX5uQg-iyJ4nrmTTe6cAuMcxWtIaVoaFE"
              class="form-control-sm mt-3 form-input bg-secondary-subtle col-4"
              id="yandexApi"
              aria-describedby="emailHelp"
              placeholder="Введите ключ API"
            />
  
            <input
              type="email"
              value="absteplo-369388-nizy"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="usernameMetrika"
              aria-describedby="emailHelp"
              placeholder="Введите username от Метрика"
            />
  
            <input
              type="email"
              value="1"
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
              value="SftVVxNbhLc_DqFtUXmq"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите ключ API"
            />
  
            <input
              type="email"
              value="kav@webstripe.ru"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите Email пользователя"
            />
  
            <input
              type="email"
              value="54423"
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
              value="ee4aaa71d3da820d6a38ef1e219d4a9d"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите ключ API"
            />
  
            <input
              type="email"
              value="98402"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите id пользователя"
            />
  
            <input
              type="email"
              value="6667521"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите project id"
            />
            <input
              type="email"
              value="87"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите  id региона"
            />
            <input
              type="email"
              value="нагревательные секции (в стяжку, обогрев грунта, прогрев бетона)"
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
              value="vk1.a.njvSBulI6DeSD9xCE-YZXWCu0KpSOJ4bYVl0Mr2FMG7XbnRx_-V_4hvCQrux48GC-0-W90JlevmDCSxhQ5rOYl0y30XGFifQqWkV3OIjuLTE8hckwY0jCi0YFLa8kykWGl3NBVP4aNOTO610i74vnPuw2ZxLEr8U3RYhMCaWgY-zEIsWDhuoPBOiUK5AGdRho71f63WN0hflMyBAw_h88A"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите ключ oath"
            />
  
            <input
              type="email"
              value="1900015007"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите id рекламного кабинет"
            />
  
            <input
              type="email"
              value="1606939860"
              class="form-control-sm mt-3 bg-secondary-subtle col-4"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Введите id клиента"
            />
          </div>
        </form>
  
        <button type="button" class="btn mt-3 col-3 bg-secondary-subtle">
          Сохранить
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
       
      };
    },
  };
  </script> 
  
  
  <style>
  @import "../css/style.css";
  </style>
    
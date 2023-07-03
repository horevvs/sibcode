<template>
  <div class="d-flex flex-column mt-5 mx-5">
    <div class="d-flex justify-content-between">
      <button
        v-on:click="Hideshow"
        type="button"
        class="btn btns bg-secondary-subtle link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        <a class="text-body-emphasis" href="/">Назад</a>
      </button>

      <button type="button" class="btn bg-secondary-subtle">
        <a
          href="https://report-dev.uat.sibcode.team/login"
          class="link-light text-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
        >
          Выход</a
        >
      </button>
    </div>

    <div class="text-center">Формирование отчёта</div>

    <div class="d-flex mt-3">
      <div class="mx-2">
        <section id="mySection">
          <date-picker
            v-model="value2"
            value-type="format"
            format="YYYY-MM-DD"
            placeholder="Выберите дату"
          ></date-picker>
        </section>
      </div>
      -
      <div class="mx-2">
        <section>
          <date-picker
            v-model="value3"
            value-type="format"
            format="YYYY-MM-DD"
            placeholder="Выберите дату"
          ></date-picker>
        </section>
      </div>

      <button
        v-on:click="Showreport"
        type="button"
        class="btn mx-5 bg-secondary-subtle"
      >
        Выбрать период
      </button>
    </div>

    <div class="fs-5 mx-2" v-show="hide">
      Отчетный период за: {{ value2 }} - {{ value3 }}
    </div>

    <div class="form-check mt-5">
      <input
        class="form-check-input bg-secondary-subtle"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label class="form-check-label" for="flexCheckDefault">
        Показать динамику
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input bg-secondary-subtle"
        type="checkbox"
        value=""
        id="flexCheckChecked"
        checked
      />
      <label class="form-check-label" for="flexCheckChecked">
        Показать результат по группе запросов
      </label>
    </div>

    <div class="details_page-body-project_manager mt-5">
      <div class="text">Проектный менеджер</div>
      <select></select>
    </div>

    <button type="button" class="btn btn-secondary col-2 mt-5">
      Сформировать PDF отчёт
    </button>

    <div
      
      class="details_page-body-delete_pdf createreport"
    >
      Удалить отчёт <span style="display: none"></span> с сервера (Нажать только
      после создания)
    </div>
  </div>
</template>

<style>
@import "../css/style.css";
</style>


<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "App",
  components: { DatePicker },
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: true,
      value2: null,
      value3: null,
      hide: false,
      checked: true,
    };
  },
  methods: {
    Hide: function () {
      if (this.visible7 == false) {
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
      window.location.reload();
    },
    Hideshow2: function () {
      if (this.visible8 == true) {
        this.visible8 = !this.visible8;
      }
    },
    Showreport: function () {
      if (
        this.value2 !== null &&
        this.value3 !== null &&
        this.checked == true
      ) {
        this.hide = !this.hide;
        this.checked = !this.checked;
      }
    },
  },
};
</script> 


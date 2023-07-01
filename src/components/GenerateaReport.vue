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

    <div class="d-flex">
      <div class="mx-2">
        <section>
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

      <button  v-on:click="Showreport" type="button" class="btn mx-5 bg-secondary-subtle">
        Выбрать период
      </button>
    </div>

    <div class="fs-5" v-show="hide"> Отчетный период за:  {{ value2 }} - {{ value3 }}</div>
  </div>
</template>


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
      value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
      value2: "",
      value3: "",
      hide: false,
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
      if (this.hide !== true) {
        this.hide = !this.hide;
      }
    },
  },
};
</script> 


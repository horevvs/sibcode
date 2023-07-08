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

    <div class="table1 mt-5">
      <table>
        <tr>
          <td></td>
          <td>Охват</td>
          <td>Просмотры</td>
          <td>Лайки</td>
          <td>Комментарии</td>
          <td>Подписки</td>
          <td>Репосты</td>
        </tr>
        <tr>
          <td class="bg-secondary">ВКонтакте</td>
          <td><input id="vk-Reichweite" value="" type="text" /></td>
          <td><input id="vk-views" value="" type="text" /></td>
          <td><input id="vk-like" value="" type="text" /></td>
          <td><input id="vk-comments" value="" type="text" /></td>
          <td><input id="vk-sub" value="" type="text" /></td>
          <td><input id="vk-repost" value="" type="text" /></td>
        </tr>
        <tr>
          <td class="bg-secondary">Яндекс.Дзен</td>
          <td><input id="ya-Reichweite" value="" type="text" /></td>
          <td><input id="ya-views" value="" type="text" /></td>
          <td><input id="ya-like" value="" type="text" /></td>
          <td><input id="ya-comments" value="" type="text" /></td>
          <td><input id="ya-sub" value="" type="text" /></td>
          <td><input id="ya-repost" value="" type="text" /></td>
        </tr>
        <tr>
          <td class="bg-secondary">Telegram</td>
          <td><input id="telegram-Reichweite" value="" type="text" /></td>
          <td><input id="telegram-views" value="" type="text" /></td>
          <td><input id="telegram-like" value="" type="text" /></td>
          <td><input id="telegram-comments" value="" type="text" /></td>
          <td><input id="telegram-sub" value="" type="text" /></td>
          <td><input id="telegram-repost" value="" type="text" /></td>
          `
        </tr>
        <tr>
          <td class="bg-secondary">Instagram</td>
          <td><input id="instagramm-Reichweite" value="" type="text" /></td>
          <td><input id="instagramm-views" value="" type="text" /></td>
          <td><input id="instagramm-like" value="" type="text" /></td>
          <td><input id="instagramm-comments" value="" type="text" /></td>
          <td><input id="instagramm-sub" value="" type="text" /></td>
          <td><input id="instagramm-repost" value="" type="text" /></td>
          `
        </tr>
      </table>
      Таблица 1. Статистика социальных сетей
      <div class="preloader hide">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div>
      <div class="mx-2 mt-5">
        <p> <b> Сравнение с предыдущим месяцем</b> </p>
        <tinymce id="d1" v-model="data"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b> План постов на следующий месяц</b> </p>
        <tinymce id="d2" v-model="data2"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b> Что планируется сделать</b> </p>
        <tinymce id="d3" v-model="data3"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b> Выводы</b> </p>
        <tinymce id="d4" v-model="data4"></tinymce>
      </div>
    </div>
    

    <div class="details_page-body-project_manager mt-5">
      <div class="text">Проектный менеджер</div>
      <select>
        <option value="">1</option>
        <option value="">2</option>
      </select>
    </div>

    <button type="button" class="btn btn-secondary col-2 mt-5">
      Сформировать PDF отчёт
    </button>

    <div class="details_page-body-delete_pdf createreport">
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



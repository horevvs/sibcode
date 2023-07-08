<template>
  <div>
    <div class="d-flex justify-content-between mx-5">
      <button v-on:click="Hideshow" type="button"
        class="btn btns bg-secondary-subtle link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
        <a class="text-body-emphasis" href="/">Назад</a>
      </button>

      <button type="button" class="btn bg-secondary-subtle">
        <a href="https://report-dev.uat.sibcode.team/login"
          class="link-light text-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
          Выход</a>
      </button>
    </div>

    <div class="text-center mx-5">Формирование отчёта</div>

    <div class="d-flex mt-3">
      <div class="mx-5">
        <section id="mySection">
          <date-picker v-model="value2" value-type="format" format="YYYY-MM-DD" placeholder="Выберите дату"></date-picker>
        </section>
      </div>
      -
      <div class="mx-5">
        <section>
          <date-picker v-model="value3" value-type="format" format="YYYY-MM-DD" placeholder="Выберите дату"></date-picker>
        </section>
      </div>

      <button @click="Showreport" type="button" class="btn mx-5 bg-secondary-subtle">
        Выбрать период
      </button>
    </div>

    <div class="fs-5 mx-5 mt-2 " v-show="hide">
      Отчетный период за: {{ value2 }} - {{ value3 }}
    </div>



    <div class="table1 mx-5 mt-5">
      <table>
        <tr>
          <th>Система</th>
          <th>Показы</th>
          <th>Клики</th>
          <th>CTR</th>
          <th>Ср. цена клика</th>
          <th>Расход</th>
        </tr>
        <tr>
          <td>Яндекс.Директ</td>
          <td><input id="direct-views" value="0" type="text" class="bg-secondary-subtle"></td>
          <td><input id="direct-click" value="0" type="text" class="bg-secondary-subtle"></td>
          <td><input id="direct-CTR" value="0" type="text" class="bg-secondary-subtle"></td>
          <td><input id="direct-avg_price" value="0" type="text" class="bg-secondary-subtle"></td>
          <td><input id="direct-price" value="0" type="text" class="bg-secondary-subtle"></td>
        </tr>
      </table>
      Таблица 1 -результаты Яндекс.директ <div class="preloader hide">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <div>
      <div class="text text_head mt-5 mx-5">Конверсии</div>
      <div class="preloader hide">
        <div class="lds-ellipsis"> </div>
      </div>
      <label for="Callibri" class="text mx-5">Звонки (Callibri)</label>
      <input name="Callibri" type="text" class="col-1" value="0">
    </div>






    <div class="text text_head mx-5 mt-5">Свои цели</div>
    <div class="task1 mx-5 mt-1" id="target">
      <input class="task_name" id='res' type="text" placeholder="type task">
      <input class="task_count  mx-3 col-1" id='res2' type="text" value="">
    </div>
    <button @click="Addtask" type="button" class="btn  mx-5 mt-3 btn-outline-secondary">Add task</button>


    <div class="details_page-body-project_manager mx-5 mt-5">
      <div class="text">Проектный менеджер</div>
      <select></select>
    </div>


    <button type="button" class="btn btn-secondary mx-5 col-2 mt-5">
      Сформировать PDF отчёт
    </button>

    <div class="details_page-body-delete_pdf createreport mx-5">
      Удалить отчёт <span style="display: none"></span> с сервера (Нажать только
      после создания)
    </div>

    <h1>TinyMCE Quick Start Guide</h1>
    <form method="post">
      <textarea id="mytextarea">Hello, World!</textarea>
    </form>





  </div>
</template>

<style>
@import "../css/style.css";
</style>

<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
<script>
      tinymce.init({
        selector: '#mytextarea'
      });
    </script>

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
      result: null 
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
    Addtask: function () {
      this.result = document.getElementById('res').value;
      alert(this.result)
      let target = document.querySelector('#target');
      target.insertAdjacentHTML('beforeEnd',
      '<div class="task1  mt-1"> <input class="task_name"  type="text" placeholder= > <input class="task_count  mx-3 col-1"  type="text" value=""> </div>');}
  }
  ,
};
</script> 
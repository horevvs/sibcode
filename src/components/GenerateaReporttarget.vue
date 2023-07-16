<template>
  <div class="d-flex flex-column mt-5 mx-5">
    <div class="d-flex justify-content-between">
      <button
      
        type="button"
        class="btn btns bg-secondary-subtle link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
      >
        <a class="text-body-emphasis" href="/">Назад</a>
      </button>

      <button type="button" class="btn bg-secondary-subtle">
        <a href="https://report-dev.uat.sibcode.team/login" class="link-light text-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
          Выход </a>
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
        @click="Showreport"
        type="button"
        class="btn mx-5 bg-secondary-subtle">
        Выбрать период
      </button>
    </div>

    <div class="fs-5 mx-2" v-show="hide">
      Отчетный период за: {{ value2 }} - {{ value3 }}
    </div>

    <div class="form-check mt-5">
      <input
        class="form-check-input bg-secondary"
        type="checkbox"
        value=""
        id="flexCheckDefault" />
      <label class="form-check-label" for="flexCheckDefault">
        Получить данные из ВК
      </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input bg-secondary"
        type="checkbox"
        value=""
        id="flexCheckChecked"
       />
      <label class="form-check-label" for="flexCheckChecked">
        Получить данные из ВК(метрика)
      </label>
    </div>



    <div class="table1">
            <table>
                <tr>
                    <th>Система</th>
                    <th>Потрачено</th>
                    <th>Показы</th>
                    <th>Переходы</th>
                    <th>CTR</th>
                    <th>eCPC</th>
                </tr>
                <tr id="vk_tr">
                    <td>ВК</td>
                    <td><input id="vk-spent" class="vk_td" value="0" type="text"></td>
                    <td><input id="vk-impressions" class="vk_td" value="0" type="text"></td>
                    <td><input id="vk-clicks" class="vk_td" value="0" type="text"></td>
                    <td><input id="vk-CTR" class="vk_td" value="0" type="text"></td>
                    <td><input id="vk-eCPC" class="vk_td" value="0" type="text"></td>
                </tr>
            </table>
            Таблица 1 -результаты рекламы в вк   <div class="preloader hide">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> </div>
        </div>
    <div>
      <div class="mx-2 mt-5">
        <p> <b>Что было сделано</b> </p>
        <tinymce id="d1" v-model="data"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b>Выводы</b> </p>
        <tinymce id="d2" v-model="data2"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b> Что планируется сделать</b> </p>
        <tinymce id="d3" v-model="data3"></tinymce>
      </div>
      <div class="mx-2 mt-2">
        <p> <b>Дополнительно</b> </p>
        <tinymce id="d4" v-model="data4"></tinymce>
      </div>
    </div>

    <div class="details_page-body-project_manager mt-5">
      <div class="text">Проектный менеджер</div>
      <select>
        <option value="">ФИО проектного менеджера</option>
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


<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "App",
  components: { DatePicker },
  data() {
    return {
      value2: null,
      value3: null,
      hide: false,
      checked: true,
    };
  },
  methods: {

    
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



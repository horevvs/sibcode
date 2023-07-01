<template>
    <div class="box">
      <section>
        <p>date range</p>
        <date-picker v-model="value1" type="date" range placeholder="Select date range"></date-picker>
      </section>
      <p>
      <code>  {{ value2 }} </code>>
        </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Range',
    data() {
      return {
        value1: [new Date(2019, 9, 8), new Date(2019, 9, 19)],
        value2: [],
      };
    },
  };
  </script>
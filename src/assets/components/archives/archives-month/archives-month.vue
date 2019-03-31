<template>
  <section class="archives-block month">
    <h3 class="h3">2012 Archives by Month</h3>
    <ul>
      <li class="month-item" v-for="(Months, index) in Month" :key="index">
        <a href="" class="month-link"> {{ '- ' + Months }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'archives-month',
  data() {
    return {
      Month: ['January', 'February', 'Match', 'April'],
    };
  },
};
</script>
<style scoped></style>

<template>
  <section class="archives-block month">
    <h3 class="h3">2012 Archives by Month</h3>
    <ul>
      <li v-for="(month, i) in months" :key="i" class="month-item">
        <a href="" class="month-link"> {{ '- ' + month }}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ArchivesMonth',
  data() {
    return {
      months: ['January', 'February', 'Match', 'April'],
    };
  },
};
</script>
<style scoped></style>

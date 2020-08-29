<template>
      <Chart />
</template>

<script>


import Chart from '../components/ApexChart'
export default {
  name: 'Employee',
  components: {
    Chart
  },
  methods: {
    mounted() {
      alert("He");
      this.$store.dispatch("getEmpById",1);
    },
  }
}
</script>
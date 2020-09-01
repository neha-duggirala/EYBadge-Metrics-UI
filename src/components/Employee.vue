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
    mounted() {
      this.$store.dispatch("getEmpById",1);
      console.log(this.$store.state.NewEmployeeObj);
    }
}
</script>
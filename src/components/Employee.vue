<template>
  <div>
    <Chart />
    <BarChart />
  </div>
</template>

<script>
import Chart from "../components/ApexChart";
import BarChart from "../components/BarChart";
export default {
  name: "Employee",
  components: {
    Chart,
    BarChart
  },
    mounted() {
      this.$store.dispatch("getEmp");
      console.log(this.$store.state.NewEmployeeObj);
    }
};
</script>
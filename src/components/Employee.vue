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
    BarChart,
  },
};
</script>
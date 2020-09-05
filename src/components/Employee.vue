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
  mounted() {
    this.$store.dispatch("getEmpById", this.$route.params.id);
    // this.$store.dispatch("getEmpChartDataById");
  },
  // destroyed() {
  //   this.$store.state.chartData = {
  //     testCoverage: [],
  //     codeSmellPercent: [],
  //     codeQualityPercent: [],
  //     throughput: [],
  //     kloc: [],
  //     dates: [],
  //   };
  // },
  destroyed(){
    this.$store.dispatch("destoryChartData");
  }
};
</script>
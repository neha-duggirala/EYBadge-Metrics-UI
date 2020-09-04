<template>
  <div>
    <Chart />
    <BarChart />
    <v-btn
      class="ats-add-category-btn mr-5"
      color="#f5f5f5"
      tile
      label="cancel"
      value="cancel"
      @click="loadData()"
    >Load Data</v-btn>
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
    this.$store.dispatch("getEmpChartDataById", this.$route.params.id);
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
  methods: {
    loadData() {
      this.$store.dispatch("getEmpChartDataById", this.$route.params.id);
    },
  },
};
</script>
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
    BarChart
  },
  methods: {
    loadData() {
      this.$store.dispatch("getEmpChartDataById");}
    },
    beforeMount() {
      this.$store.dispatch("getEmpChartDataById",this.$route.params.id);
    },
};
</script>
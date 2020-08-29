<template>
  <div class="example">
    <apexcharts width="800" height="550" type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "basic-bar",
        },

        annotations: {
          xaxis: [
            {
              x: "May",
              x2: "August",
              fillColor: "#B3F7CA",
              label: {
                text: "Badge Duration",
              },
            },
          ],
        },
        xaxis: {
          categories: this.$store.state.chartData.months,
        },
      },
      series: [
        {
          name: "Test Coverage",
          data: this.$store.state.chartData.testCoverage,
        },
        {
          name: "Code Quality",
          data: this.$store.state.chartData.codeQualityPercent,
        },
        {
          name: "Code Smell",
          data: this.$store.state.chartData.codeSmellPercent,
        },
        {
          name: "Throughput",
          data: this.$store.state.chartData.throughput,
        },
      ],
    };
  },
};
</script>
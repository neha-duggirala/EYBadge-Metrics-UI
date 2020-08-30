<template>
  <div class="example">
    <apexcharts width="800" height="550" :options="chartOptions" :series="series"></apexcharts>
    <vue-horizontal-timeline :items="items"/>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
// import { VueHorizontalTimeline } from "vue-horizontal-timeline";


export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
    // timeline: vue-horizontal-timeline,
  },
  data: function () {
    return {
      items: [
      {
        title: "1947",
        content:
          "The Paraguayan Civil War, also known as the Barefoot Revolution and the Second Paraguayan Civil War, was a conflict in Paraguay that lasted from March to August 1947."
      },
      {
        title: "1954",
        content:
          "The Algerian War, was a war between France and the Algerian National Liberation Front (French: Front de Libération Nationale – FLN) from 1954 to 1962, which led to Algeria gaining its independence from France."
      }
    ],
      chartOptions: {
        chart: {
          id: "basic-bar",
        },
         fill: {
              type:'solid',
            },

        annotations: {
          xaxis: [
            {
              x: "May",
              x2: "August",
              fillColor: "#B3F7CA",
              label: {
                orientation: 'vertical',
                text: this.$store.state.badgeData
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
          type: 'line',
          data: this.$store.state.chartData.testCoverage,
        },
        {
          name: "Code Quality",
          type: 'line',
          data: this.$store.state.chartData.codeQualityPercent,
        },
        {
          name: "Code Smell",
          type: 'line',
          data: this.$store.state.chartData.codeSmellPercent,
        },
        {
          name: "Throughput",
          type: 'line',
          data: this.$store.state.chartData.throughput,
        },
      ],
    };
  }
};
</script>
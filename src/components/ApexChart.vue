<template>
  <div>
    <h1>Developer KPI Metrics</h1>
    <apexcharts width="1000" height="550" :options="chartOptions" :series="series"></apexcharts>
        <h1>Innovation Timeline</h1>
    <vue-horizontal-timeline min-width=200px timeline-background= '#FFFFFF' :items="items"/>
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
      items: [
      {
        title: "January",
        content:
          "Idea to Enhance the company: Follow a performance management tool"
      },
      {
        title: "Febuary",
      },
      {
        title: "March",
        content:
          ""
      },
      {
        title: "April",
        content:
          ""
      },
      {
        title: "May",
        content:
          ""
      },
      {
        title: "June",
        content:
          ""
      },
      {
        title: "July",
        content:
          ""
      },
      {
        title: "August",
        content:
          "Idea to enhance the project: Use tool like Resharper"
      },
      {
        title: "September",
        content:
          ""
      },
      {
        title: "November",
        content:
          ""
      },
      {
        title: "December",
        content:
          ""
      },
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
              x: "2020-04-20",
              x2: "2019-12-10",
              fillColor: "#B3F7CA",
              label: {
                orientation: 'horizontal',
                text: "Entity Framework Core Badge earned(Gold), Grade:'A'",
              },
            },
          ],
        },
        xaxis: {
          categories: this.$store.state.chartData.dates,
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
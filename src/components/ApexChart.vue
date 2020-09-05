<template>
  <div>
    <h1>Associate Software Engineer's KPI Metrics</h1>
    <apexcharts width="1000" height="550" :options="chartOptions" :series="series2"></apexcharts>
    <h1>Innovation Timeline</h1>
    <vue-horizontal-timeline min-width="200px" timeline-background="#FFFFFF" :items="items" />
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
            "Idea to Enhance the company: Follow a performance management tool",
        },
        {
          title: "Febuary",
        },
        {
          title: "March",
          content: "",
        },
        {
          title: "April",
          content: "",
        },
        {
          title: "May",
          content: "",
        },
        {
          title: "June",
          content: "",
        },
        {
          title: "July",
          content: "",
        },
        {
          title: "August",
          content: "Idea to enhance the project: Use tool like Resharper",
        },
        {
          title: "September",
          content: "",
        },
        {
          title: "November",
          content: "",
        },
        {
          title: "December",
          content: "",
        },
      ],
    };
  },
  computed: {
    chartOptions: {
      get() {
        return {
          stroke: {
            width: "2"
      },
          chart: {
            id: "basic-bar",
          },
          fill: {
            type: "solid",
          },
          xaxis: {
            categories: this.$store.state.chartData.dates,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: "#D8E3F0",
                  colorTo: "#BED1E6",
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
          },

        annotations: {
          xaxis: [
            {
              x: "2019-10-14",
              x2: "2020-01-01",
              fillColor: "#B3F7CA",
              label: {
                orientation: "horizontal",
                text: ".Net Web API Core Badge earned(Gold), Grade:'A'",
              },
            }
            ],
          },
        };
      },
    },
    series2: {
      get() {
        return [
          {
            name: "Test Coverage",
            type: "line",
            data: this.$store.state.chartData.testCoverage,
          },
          {
            name: "Code Quality",
            type: "line",
            data: this.$store.state.chartData.codeQualityPercent,
          },
          {
            name: "Code Smell",
            type: "line",
            data: this.$store.state.chartData.codeSmellPercent,
          },
          {
            name: "Throughput",
            type: "line",
            data: this.$store.state.chartData.throughput,
          },
        ];
      },
    },
  },
};
</script>
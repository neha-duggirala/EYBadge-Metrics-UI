<template>
  <div>
    <h1>My KPI Metrics</h1>
    <apexcharts width="1000" height="550" :options="chartOptions" :series="series2"></apexcharts>
    <h1>WorkFlow Log Graph For Today</h1>
    <vue-horizontal-timeline min-width="200px" line-color="#FFFFFF" timeline-background="#323754" :items="items" />
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
          title: "10:00 AM",
          content:
            "Started understanding Task 1",
        },
        {
          title: "11:00 AM",
          content: "Task 1 docs and report preparation done "
        },
        {
          title: "12:00 PM",
          content: "Got an Adhoc bug from Team 2",
        },
        {
          title: "1:00 PM",
          content: "",
        },
        {
          title: "2:00 PM",
          content: "Fixed the Adhoc bug",
        },
        {
          title: "3:00 PM",
          content: "",
        },
        {
          title: "4:00 PM",
          content: "Feature enhancement discussion with Team 2",
        },
        {
          title: "5:00 PM",
          content: "",
        },
        {
          title: "6:00 PM",
          content: "",
        },
        {
          title: "7:00 PM",
          content: "Tasks creation for the feature",
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
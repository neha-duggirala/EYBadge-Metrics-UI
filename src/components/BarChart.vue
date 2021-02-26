<template>
  <div id="barchart">
    <h1>Developer KLOC</h1>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series2"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "BarChart",
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        annotations: {
          xaxis: [
            {
              x: "2019-10-14",
              x2: "2020-01-01",
              fillColor: "#323754",
              label: {
                orientation: 'horizontal',
                text: " .Net Web API Core Badge earned(Gold), Grade:'A'",
              },
            },
          ],
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top", // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#323754"],
          },
        },

        xaxis: {
          categories: this.$store.state.chartData.dates,
          position: "top",
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
                colorFrom: "#323754",
                colorTo: "#323754",
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
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        title: {
          text: "Monthly KLOC by developer in 2019",
          floating: true,
          offsetY: 330,
          align: "center",
          style: {
            color: "#323754",
          },
        },
      },
    };
  },
  computed: {
    series2: {
      get() {
        return ( [
        {
          name: "KLOC",
          data: this.$store.state.chartData.kloc,
        },
      ])
      },
    },
  },
};
</script>

<style>
</style>
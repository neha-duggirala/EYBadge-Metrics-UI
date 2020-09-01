<template>
  <div id="barchart">
    <h1>Developer KLOC</h1>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
      series: [
        {
          name: "KLOC",
          data: this.$store.state.chartData.kloc,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
        },
        annotations: {
          xaxis: [
            {
              x: "May",
              x2: "August",
              fillColor: "#FFFF15",
              label: {
                orientation: 'horizontal',
                text: "Entity Framework Core Badge earned(Gold), Grade:'A'",
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
            colors: ["#304758"],
          },
        },

        xaxis: {
          categories: this.$store.state.chartData.months,
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
            color: "#444",
          },
        },
      },
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <apexcharts type="bar" height="350" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "ColumnChart",
  components: {
    apexcharts: VueApexCharts,
  },
  data: function () {
    return {
      series: [
        {
          name: "Commited",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Completed",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        legend: {
      show: true,
      markers: {
          fillColors: ['#afaf00', '#FFFF4d'],
      },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Q",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "Story Points",
          },
        },
        fill: {
          opacity: 1,
          colors: ['#afaf00', '#FFFF4d']
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " Story " + " points";
            },
          },
        },
      },
    };
  },
};
</script>

<style>
</style>
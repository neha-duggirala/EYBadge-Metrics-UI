<template>
  <div>
    <div>
      <apexcharts type="bar" height="350" :options="chartOptions1" :series="series1"></apexcharts>
    </div>
    <div>
      <apexcharts type="pie" width="500" :options="chartOptions2" :series="series2"></apexcharts>
    </div>
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
        myStyle:{
            backgroundColor:"#000000" 
            },
      series2: [12, 7, 10, 9, 10, 5],
      series1: [
        {
          name: "Commited",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Completed",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      chartOptions2: {
        chart: {
          width: "25%",
          type: "pie",
        },
        labels: [
          "Neha (Dev1)",
          "Sindhu (Dev2)",
          "Developer 3",
          "Developer 4",
          "Developer 5",
          "Ankitha - QA",
        ],
        theme: {
          monochrome: {
            color: "#000000",
            enabled: true,
          },
        },
        plotOptions: {
          pie: {
            dataLabels: {
              offset: -5,
            },
          },
        },
        title: {
          text: "Story points covered in recent sprint",
        },
        dataLabels: {
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex];
            return [name, val.toFixed(1) + "%"];
          },
        },
        legend: {
          show: false,
        },
      },
      chartOptions1: {
        chart: {
          type: "bar",
          height: 350,
        },
        legend: {
          show: true,
          markers: {
            fillColors: ["#000000", "#FFFF4d"],
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
            "Q2.3",
            "Q2.4",
            "Q2.5",
            "Q2.6",
            "Q2.7",
            "Q2.8",
            "Q3.1",
            "Q3.2",
            "Q3.3",
          ],
        },
        yaxis: {
          title: {
            text: "Story Points",
          },
        },
        fill: {
          opacity: 1,
          colors: ["#000000", "#FFFF4d"],
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
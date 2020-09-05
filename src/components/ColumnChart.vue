<template>
  <div>
    <div>
      <apexcharts type="line" height="350" :options="chartOptions1" :series="series1"></apexcharts>
    </div>
    <hr />
    <table>
      <tr>
        <td>
          <div>
            <apexcharts type="pie" width="500" :options="chartOptions2" :series="series2"></apexcharts>
          </div>
        </td>
        <td>
          <div>
            <apexcharts
              type="line"
              width="700"
              height="400"
              :options="chartOptions3"
              :series="series3"
            ></apexcharts>
          </div>
        </td>
      </tr>
    </table>
    <dataTable :items="BadgeData"></dataTable>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import VueDataTable from "vue-data-table";

export default {
  name: "ColumnChart",
  components: {
    apexcharts: VueApexCharts,
    dataTable: VueDataTable,
  },
  data: function () {
    return {
      Headers: [
        "Employee Id",
        "Badge Domain",
        "Badge Sub-Domain",
        "Badge Type",
        "Completed On",
      ],
      BadgeData: [
        ["GPN 273", "Analytics", "Data visualization", "Silver", "21-01-2020"],
        ["GPN 273", "Analytics", "Data visualization", "Silver", "21-01-2020"],
        ["GPN 273", "Analytics", "Data visualization", "Silver", "21-01-2020"],
        ["GPN 273", "Analytics", "Data visualization", "Silver", "21-01-2020"],
      ],
      myStyle: {
        backgroundColor: "#000000",
      },
      series3: [
        {
          data: [53, 51, 43, 43, 43, 29, 17, 10, 5, 3],
        },
      ],
      series2: [12, 7, 10, 9, 10, 5],
      series1: [
        {
          name: "Commited",
          type: "column",
          data: [65, 63, 64, 65, 64, 65, 63, 62, 61],
        },
        {
          name: "Completed",
          type: "column",
          data: [63, 64, 63, 67, 65, 65, 63, 64, 64],
        },
        // {
        //   name: "Hey",
        //   type: "line",
        //   data: [86, 56, 51, 67, 86, 70, 41, 14, 65],
        // },
      ],
      chartOptions3: {
        chart: {
          type: "line",
          height: 350,
        },
        stroke: {
          curve: "stepline",
          colors: "#000000",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Q3.3 Burndown Chart - Story Points",
          align: "left",
        },
        markers: {
          colors: "#FFFF00",
          hover: {
            sizeOffset: 4,
          },
        },
      },
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
          text: "Story points covered in Q3.3",
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
        annotations: {
          
          points: [
            {
              x: "Q2.6",
              y: 60,
              image: {
                path: "http://localhost:8080/badge.ico",
                height: "30",
                width: "30",
                tooltip: {
                  y: {
                    formatter: () => "Badge By developr 4",
                  },
                },
              },
            },
            {
              x: "Q3.2",
              y: 60,
              image: {
                path: "http://localhost:8080/badge.ico",
                height: "30",
                width: "30",
                tooltip: {
                  y: {
                    formatter: () => "Badge By developr 4",
                  },
                },
              },
            },
            {
              x: "Q2.7",
              y: 60,
              image: {
                path: "http://localhost:8080/badge.ico",
                height: "30",
                width: "30",
                tooltip: {
                  y: {
                    formatter: () => "Badge By developr 4",
                  },
                },
              },
            },
          ],
        },
        title: {
          text: "Velocity Chart",
        },
        chart: {
          type: "line",
          height: 350,
        },
        legend: {
          show: true,
          markers: {
            fillColors: ["#323232", "#FFFF4d"],
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
          colors: ["#323232", "#FFFF4d"],
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
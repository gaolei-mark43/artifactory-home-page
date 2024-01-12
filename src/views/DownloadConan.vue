<template>
    <div>
      <p>conan库</p>
      <div v-for="(data, index) in chartData" :key="index">
        <div :id="'chart' + (index + 1)"></div>
      </div>
    </div>
  
  </template>
  
  <script>
  import { ref, onMounted, nextTick } from "vue";
  import axios from "axios";
  import Highcharts from "highcharts";
  
  export default {
    setup() {
      const chartData = ref([]);
  
      onMounted(() => {
        fetchData();
      });
  
      const fetchData = () => {
        axios
          .get("http://172.31.65.60:9098/conan")
          .then((response) => {
            chartData.value = response.data;
            createCharts();
          })
          .catch((error) => {
            console.error(error);
          });
      };
  
      const createCharts = () => {
        nextTick(() => {
          chartData.value.forEach((data, index) => {
            const chartContainer = document.getElementById("chart" + (index + 1));
    
            const series = [
              {
                name: data.name,
                data: data.data.map((item) => {
                  return [Date.parse(item[0]), item[1]];
                }),
                dataLabels: {
                  enabled: true,
                  formatter: function () {
                    return this.y;
                  },
                },
              },
            ];
    
            Highcharts.chart(chartContainer, {
              chart: {
                type: "line",
              },
              title: {
                text: data.name + " 每日下载量",
              },
              xAxis: {
                type: "datetime",
              },
              yAxis: {
                title: {
                  text: "下载量",
                },
              },
              series: series,
            });
          });
        });
      };
  
      return { chartData };
    },
  };
  </script>
  
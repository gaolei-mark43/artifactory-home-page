<template>
    <div>
      <h3>本地库</h3>
      <div class="inline-container">
        <p>目前共有{{ dataCount }}个本地库,包含{{ packageTypeCount.Maven }}个maven库、{{packageTypeCount.Npm}}个npm库、{{packageTypeCount.Conan}}个conan库、{{packageTypeCount.Conda}}个conda库、{{ packageTypeCount.CocoaPods }}个cocoapods库、{{ packageTypeCount.Pub }}个flutter/Dart库、<br>{{ packageTypeCount.Pypi }}个pypi库</p>
        <button @click="exportTable" style="float: right;">导出表格</button>
      </div>
        <table class="table" id="table">
            <thead>
                <tr>
                    <th>仓库名称</th>
                    <th>仓库描述</th>
                    <th>仓库类型</th>
                    <th>包类型</th>
                    <th>仓库url</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data" :key="item.key">
                    <td><a :href="'/local-repo-detail/' + item.key">{{ item.key }}</a></td>
                    <td>{{ item.description }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.packageType }}</td>
                    <td>{{ item.url }}</td>
                </tr>
            </tbody>
        </table>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { exportTableToExcel } from '@/utils/exportTable.js';
  export default {
    name: 'VirtualRepo',
    data() {
      return {
        data: [],
        dataCount: 0,
        packageTypeCount: {}
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        axios
          .get('http://http://127.0.0.1/:9098/local_repo')
          .then((response) => {
            this.data = response.data;
            this.dataCount = this.data.length;
            this.calculatePackageTypeCount();
          })
          .catch((error) => {
            console.error(error);
          });
      },
      calculatePackageTypeCount() {
      // 重置 packageTypeCount 字典
      this.packageTypeCount = {
        Maven: 0,
        CocoaPods: 0,
        Conan: 0,
        Conda: 0,
        Npm: 0,
        Pypi: 0,
        Pub: 0
      };

      // 遍历数据数组并计算出现次数
      for (const item of this.data) {
        const packageType = item.packageType;
        if (packageType in this.packageTypeCount) {
          this.packageTypeCount[packageType]++;
        }
      }
    },
      exportTable() {
          exportTableToExcel('table', 'table');
      }
    }
    };
  </script>
<style>
.inline-container p,
.inline-container button {
  display: inline;
}

  .table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
      font-size: 0.9em;
      font-family: sans-serif;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  
  .table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
  }
  
  .table th,
  .table td {
      padding: 12px 15px;
  }
  
  .table tbody tr {
      border-bottom: 1px solid #dddddd;
  }
  
  .table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
  }
  
  .table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
  }
  
  .table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
  }
  
  .table tbody td:nth-child(8) {
      text-align: left;
      width: 10%;
  }
  </style>
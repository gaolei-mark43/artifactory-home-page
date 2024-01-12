<template>
    <div>
      <p>{{ repoName }}：仓库详情及仓库排除目录</p>
      <button @click="exportTable" style="float: right;">导出表格</button>
    </div>
    <div>
      <table class="table" id="table">
        <thead>
          <tr>
            <th>仓库名称</th>
            <th>仓库描述</th>
            <th>包类型</th>
            <th>仓库说明</th>
            <th>代理url</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ data.key }}</td>
            <td>{{ data.description }}</td>
            <td>{{ data.packageType }}</td>
            <td>{{ data.notes }}</td>
            <td>{{ data.url }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { exportTableToExcel } from '@/utils/exportTable.js';

  export default {
    name: 'RemoteRepoDetail',
    data() {
      return {
        data: []
      };
    },
    methods: {
      fetchData() {
        axios
          .get('http://http://127.0.0.1/:9098/repo/'+this.repoName)
          .then((response) => {
            this.data = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    created() {
      this.repoName = this.$route.params.repoName;
      this.fetchData();
    },
    exportTable() {
          exportTableToExcel('table', 'table');
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
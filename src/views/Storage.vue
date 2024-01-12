<template>
    <div>
        <p>{{ description }}</p>
        <button @click="exportTable">导出表格</button>
        <table class="table" id="table">
            <thead>
                <tr>
                    <th>仓库名称</th>
                    <th>仓库类型</th>
                    <th>文件夹数</th>
                    <th>文件数</th>
                    <th>使用空间</th>
                    <th>对象数</th>
                    <th>包类型</th>
                    <th>百分比</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="repo in data" :key="repo.name">
                    <td>{{ repo.repoKey }}</td>
                    <td>{{ repo.repoType }}</td>
                    <td>{{ repo.foldersCount }}</td>
                    <td>{{ repo.filesCount }}</td>
                    <td>{{ repo.usedSpace }}</td>
                    <td>{{ repo.itemsCount }}</td>
                    <td>{{ repo.packageType }}</td>
                    <td style="text-align:left">{{ repo.percentage }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { exportTableToExcel } from '@/utils/exportTable.js';

export default {
  data() {
    return {
      description: '私服存储总表',
      data: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get('http://http://127.0.0.1/:9098/storageinfo')
        .then((response) => {
          this.data = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    exportTable() {
        exportTableToExcel('table', 'table');
    }
  }
};
</script>


<style>
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

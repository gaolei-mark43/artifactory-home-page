<template>
  <div class="table-container">
    <h3>今日下载{{ responseData.stringValue }}列表</h3>
    <p>今日{{ responseData.stringValue }}截至当前下载量: {{ responseData.arrayValue.length }}</p>
    <div>
      <label for="search">搜索仓库:</label>
      <input id="search" type="text" v-model="searchInput" />
      <button type="submit" @click="fetchData(searchInput)">查询</button>
      <button @click="exportTable" style="float: right;">导出表格</button>

    </div>
    <table id="example" class="table" >
      <thead>
        <tr>
          <th>仓库名</th>
          <th>文件名</th>
          <th>路径</th>
          <th>下载时间</th>
          <th>下载账号</th>
          <th>总下载量</th>
        </tr>
      </thead>
      <tbody v-if="responseData.loading">
  <tr>
    <td colspan="6">加载中...</td>
  </tr>
</tbody>
<tbody v-else>
  <tr v-for="item in responseData.arrayValue" :key="item.id">
    <td>{{ item[2] }}</td>
    <td>{{ item[0] }}</td>
    <td>{{ item[3] }}</td>
    <td>{{ item[1] }}</td>
    <td>{{ item[4] }}</td>
    <td>{{ item[5] }}</td>
  </tr>
</tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import { exportTableToExcel } from '@/utils/exportTable.js';

export default {
  setup() {
    const responseData = reactive({
      arrayValue: [],
      stringValue: '',
      loading: false
    });

    const searchInput = reactive('pypi-repo');

    const fetchData = (searchValue) => {
      const url = `http://172.31.65.60:9098/table/${searchValue}`;
      responseData.loading = true;
      axios
        .get(url)
        .then((response) => {
          const [arrayData, stringValue] = response.data;
          responseData.arrayValue = arrayData;
          responseData.stringValue = stringValue;

          const dataTable = $('#example').DataTable();
          dataTable.clear().draw();
          dataTable.rows.add(responseData.arrayValue);
          dataTable.columns.adjust().draw();
        })
        .catch((error) => {
          console.error('获取数据出错:', error);
        }).finally(() => {
          responseData.loading = false;
        });
    };

    onMounted(() => {
      // fetchData('');
      $('#example').DataTable({
        data: responseData.arrayValue,
        columns: [
          { title: '仓库名', data: '2' },
          { title: '文件名', data: '0' },
          { title: '路径', data: '3' },
          { title: '下载时间', data: '1' },
          { title: '下载账号', data: '4' },
          { title: '总下载量', data: '5' },
        ],
        paging: true,
        lengthMenu: [10, 100,200,500, 1000],
        searching: true,
        ordering: true,
        language: {
          "lengthMenu": "每页显示 _MENU_ 条记录",
          "zeroRecords": "没有匹配的记录",
          "info": "显示第 _START_ 到 _END_ 条记录，总共 _TOTAL_ 条记录",
          "infoEmpty": "没有数据",
          "infoFiltered": "(从 _MAX_ 条记录中过滤)",
          "search": "搜索:",
          "paginate": {
            "first": "首页",
            "last": "尾页",
            "next": "下一页",
            "previous": "上一页"
          },
        },
      });
    });

    return {
      responseData,
      fetchData,
      searchInput,
    };
  },
  methods:{
      exportTable() {
        exportTableToExcel('example', '下载列表');      }
    }
  
};
</script>

<style scoped>
table {
  table-layout: fixed;
}
td {
  white-space: normal;
  word-break: break-word;
}
</style>
<template>
    <div>
      <button @click="sendGetRequest">一键解锁</button>
      <p>http://127.0.0.1/机器crontab已每十分钟解锁一次，此页面可快捷解锁全部被锁用户</p>
      <p>被锁列表</p>
      <table class="table" id="table">
        <thead>
          <tr>
            <th>所在环境</th>
            <th>被锁用户</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in depend_data" :key="item.id">
            <td>办公网</td>
            <td>{{ item }}</td>
          </tr>
          <tr v-for="item in artifacts_data" :key="item.id">
            <td>公网</td>
            <td>{{ item }}</td>
          </tr>
          <tr v-if="isLoading">
            <td colspan="2">加载中...</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <!-- 自定义弹窗组件 -->
    <div class="custom-modal" v-if="showDialog">
      <div class="modal-content">
        <h2>解锁结果</h2>
        <p class="result">{{ responseData.msg + "s" }}</p>
        <button @click="closeDialog">关闭</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'Unlock',
    data() {
      return {
        showDialog: false, // 控制弹窗的显示和隐藏
        isLoading: true, // 加载中状态
        depend_data: [],
        artifacts_data: [],
        responseData: {},
      };
    },
    created() {
      this.fetchData();
      this.fetchData2();
    },
    methods: {
      fetchData() {
        this.isLoading = true; // 开始请求数据，显示加载中状态
        axios
          .get('http://http://127.0.0.1/:9098/artifacts_lock_user')
          .then((response) => {
            this.depend_data = response.data;
            this.isLoading = false; // 请求成功，隐藏加载中状态
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false; // 请求失败，隐藏加载中状态
          });
      },
      fetchData2() {
        this.isLoading = true; // 开始请求数据，显示加载中状态
        axios
          .get('http://http://127.0.0.1/:9098/pub_artifacts_lock_user')
          .then((response) => {
            this.artifacts_data = response.data;
            this.isLoading = false; // 请求成功，隐藏加载中状态
          })
          .catch((error) => {
            console.error(error);
            this.isLoading = false; // 请求失败，隐藏加载中状态
          });
      },
      async sendGetRequest() {
        try {
          const url = 'http://http://127.0.0.1/:9098/unlock_all_user';
          const response = await axios.get(url);
          console.log('响应数据:', response.data);
          this.responseData = response.data;
          this.showDialog = true; // 显示弹窗
        } catch (error) {
          console.error('发送GET请求时出错:', error);
        }
      },
      closeDialog() {
        this.showDialog = false; // 关闭弹窗
        window.location.reload(); // 刷新页面
      },
    },
  };
  </script>
  <style scoped>
    .custom-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }
    
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .result {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
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
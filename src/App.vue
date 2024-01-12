<template>
  <div>
    <nav>
      <!-- 一级菜单 -->
      <img class="logo" src="./static/greenlogo.png" alt="">
      <router-link to="/home">主页</router-link>
      <router-link to="/DownloadMain">下载量</router-link>
      <router-link to="/Storage">存储详情</router-link>
      <router-link to="/virtual_repo">虚拟库</router-link>
      <router-link to="/local_repo">本地库</router-link>
      <router-link to="/remote_repo">代理库</router-link>
      <router-link to="/table">今日下载详情</router-link>
      <router-link to="/Unlock">One-Tap Unlock</router-link>
      <button @click="exportAsPDF">导出 PDF</button> <!-- 新增的导出按钮 -->
    </nav>
    <!-- 路由视图渲染的地方 -->
    <router-view></router-view>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'App',
  methods: {
    exportAsPDF() {
      const content = this.$el;
      const fileName = `${this.$options.name}.pdf`;
      html2pdf().from(content).save(fileName);
    }
  }
};
</script>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  div {
    max-width: 1100px;
    margin: 0 auto;
    padding: 20px;
  }

  nav {
    background-color: #009879;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  nav a {
    text-decoration: none;
    color: #fff;
    padding: 12px 15px;
  }

  nav a:hover {
    background-color: #007d70;
  }

  /* Active link style */
  nav a.router-link-active {
    background-color: #007d70;
    border-radius: 5px;
  }

  router-view {
    padding: 20px;
    border: 1px solid #dddddd;
    border-radius: 5px;
  }

  .logo {
    width: 119px;
    height: 46px;
  }
</style>

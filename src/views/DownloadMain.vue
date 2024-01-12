<template>
    <div>
        <h3>每日下载量趋势</h3>
        <p>展示maven远程、maven本地、npm、pypi、cocoapods、conan、conda和pub多种类型仓库每日总下载量</p>
        <router-link to="/DownloadMvnRemote/" target="_blank">
        <button>maven远程库</button>
        </router-link>
        <router-link to="/DownloadMvnLocal/" target="_blank">
        <button>maven本地库</button>
        </router-link>
        <router-link to="/DownloadNpm/" target="_blank">
        <button>npm库</button>
        </router-link>
        <router-link to="/DownloadPypi/" target="_blank">
        <button>pypi库</button>
        </router-link>
        <router-link to="/DownloadCocoapods/" target="_blank">
        <button>cocoapods库</button>
        </router-link>
        <router-link to="/DownloadConan/" target="_blank">
        <button>conan库</button>
        </router-link>
        <router-link to="/DownloadConda/" target="_blank">
        <button>conda库</button>
        </router-link>
        <router-link to="/DownloadPub/" target="_blank">
        <button>pub库</button>
        </router-link>
        
    </div>
</template>
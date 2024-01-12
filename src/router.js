import { createRouter, createWebHistory } from 'vue-router';
import VirtualRepoDetail from './views/VirtualRepoDetail.vue';
import LocalRepoDetail from './views/LocalRepoDetail.vue';
import RemoteRepoDetail from './views/RemoteRepoDetail.vue';
import local_repo from './views/LocalRepo.vue';
import remote_repo from './views/RemoteRepo.vue';


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/DownloadMain',
    component: () => import('./views/DownloadMain.vue')
  },
  {
    path: '/DownloadMvnRemote',
    component: () => import('./views/DownloadMvnRemote.vue')
  },
  {
    path: '/DownloadMvnLocal',
    component: () => import('./views/DownloadMvnLocal.vue')
  },
  {
    path: '/DownloadNpm',
    component: () => import('./views/DownloadNpm.vue')
  },
  {
    path: '/DownloadPypi',
    component: () => import('./views/DownloadPypi.vue')
  },
  {
    path: '/DownloadCocoaPods',
    component: () => import('./views/DownloadCocoaPods.vue')
  },
  {
    path: '/DownloadConan',
    component: () => import('./views/DownloadConan.vue')
  },
  {
    path: '/DownloadConda',
    component: () => import('./views/DownloadConda.vue')
  },
  {
    path: '/DownloadPub',
    component: () => import('./views/DownloadPub.vue')
  },
  {
    path: '/Storage',
    component: () => import('./views/Storage.vue')
  },
  {
    path: '/virtual_repo',
    component: () => import('./views/VirtualRepo.vue')
  },
  {
    path: '/virtual-repo-detail/:repoName',
    name: 'VirtualRepoDetail',
    component: VirtualRepoDetail
  },
  {
    path: '/local_repo',
    name: 'local_repo',
    component: local_repo
  },
  {
    path: '/local-repo-detail/:repoName',
    name: 'LocalRepoDetail',
    component: LocalRepoDetail
  },
  {
    path: '/remote_repo',
    name: 'remote_repo',
    component: remote_repo
  },
  {
    path: '/remote-repo-detail/:repoName',
    name: 'RemoteRepoDetail',
    component: RemoteRepoDetail
  },
  {
    path: '/table',
    component: () => import('./views/Table.vue')
  },
  {
    path: '/Unlock',
    component: () => import('./views/Unlock.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

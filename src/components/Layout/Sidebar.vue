<template>
  <el-aside class="sidebar" style="width:220px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isOpen"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Monitor /></el-icon>
          <router-link to="/">        dd  </router-link>
            <span>시스템 현황</span>

        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <router-link to="/process">    aa  </router-link>
        <template #title>프로세스 관리</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
  </template>
  
  <script lang="ts" setup>
  import { toRefs } from 'vue'
  import { useCommonStore } from '../../stores/sideBar'
  import {
    Monitor,
    Document,
    Menu as IconMenu,
    Setting,
  } from '@element-plus/icons-vue'
  
  const sideBarStore = useCommonStore();
  const { isOpen } = toRefs(sideBarStore.isOpenSidebar)
  console.log("sidebar", isOpen)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  </script>
  
  <style>
  .el-menu-vertical-demo{
    width: 200px;
    /* min-height: 400px; */
    height: 100vh;
  }

  .sidebar {
    display: grid;

  }
  </style>
  
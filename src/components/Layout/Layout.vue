<template>
  <div class="common-layout">
    <el-container style="flex-direction: column;">
        <Header :isCollapse="isCollapse" />
      <el-container>
        <Sidebar  :isCollapse="isCollapse" @toggleCollapse="toggleCollapse" />
        <el-main>
          <RouterView />
          <!-- <HelloWorld /> -->
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script  lang="ts" setup>
  import Header from './Header.vue';
  import Sidebar from './Sidebar.vue';
  import HelloWorld from '../HelloWorld.vue';
  import { ref } from 'vue'

  const isCollapse = ref(true)

  const toggleCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
</script>
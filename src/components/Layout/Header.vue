<!-- Header.vue -->
<template>
        <div class="header">
            <el-button class="btn" @click="toggleCollapse" style="margin-left: 10px;">
                <el-icon v-if="isOpen"><Expand /></el-icon>
                <el-icon v-else><Fold /></el-icon>
            </el-button>
            <!-- <h3>header</h3> -->
        </div>
</template>
  
<script setup lang="ts">
import { toRefs } from 'vue'
import { useCommonStore } from '../../stores/sideBar' 
import { Expand, Fold } from '@element-plus/icons-vue';

const sideBarStore = useCommonStore();

const { isOpen } = toRefs(sideBarStore.isOpenSidebar)

const toggleCollapse = () => {
    sideBarStore.setIsOpenSideBar(!isOpen.value)
}


</script>
  
  <style scoped>
  .header {
    display: flex;
    /* padding: 20px; */
    background-color:rgb(208 99 25);
    align-items: center;
    height: 50px;
  }
 


  </style>
  

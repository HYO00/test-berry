<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Group" name="first">
            <button style="font-size: 14px; background-color: rgb(188, 114, 114);">Add Group</button>
            <TreeComponent />
      </el-tab-pane>
      <el-tab-pane label="Server" name="second">
        <DrawerForm />
        <!-- <button style="font-size: 14px;">Add Server</button> -->
        <ServerTree />
      </el-tab-pane>
    </el-tabs>
</template>

<script lang="ts" setup>
import TreeComponent from '../Tree/TreeComponent.vue';
import ServerTree from '../Tree/ServerTree.vue'
import DrawerForm from '../Drawer/DrawerForm.vue'
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

</script>

<style>
.demo-tabs > .el-tabs__content {
  /* padding: 32px; */
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  /* display: none; */
}
</style>
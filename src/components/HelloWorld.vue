<template>

  <el-container style="margin-bottom: 20px;">
    <el-aside>
      <TreeTab />
      <!-- <TreeComponent /> -->
    </el-aside>
    <el-main>
      <ServerCanvas />
      <!-- <NetWorkGraph /> -->
      <!-- <div>HelloWorld</div> -->
    </el-main>
  </el-container>
    <div style="width: 1200px;">
      <!-- <ListItem /> -->
    </div>


</template>

<script setup lang="ts">
// import TreeComponent from "./../components/Tree/TreeComponent.vue"
// import ListItem from "./../components/List/ListItem.vue"
// import NetWorkGraph from "./../components/Canvas/NetworkGraph.vue"
import TreeTab from "./../components/Tab/TreeTab.vue"
import ServerCanvas from "./../components/ServerCanvas/ServerCanvas.vue"
</script>

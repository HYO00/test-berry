<template>
    <el-input v-model="filterText" placeholder="Filter keyword" />
  
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      style="height: 500px"
    />
  </template>
  
  <script lang="ts" setup>
  import { ref, watch } from 'vue'
  import { ElTree } from 'element-plus'
  
  interface Tree {
    [key: string]: any
  }
  
  const filterText = ref('')
  const treeRef = ref<InstanceType<typeof ElTree>>()
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  
  watch(filterText, (val) => {
    treeRef.value!.filter(val)
  })
  
  const filterNode = (value: string, data: Tree) => {
    if (!value) return true
    return data.label.includes(value)
  }
  
  const data: Tree[] = [
    {
      id: 1,
      label: 'Server1',
      children: [
        {
          id: 4,
          label: 'Broker 1',
        },
        {
            id: 9,
            label: 'Agent',
        }
      ],
    },
    {
      id: 2,
      label: 'Server 2',
      children: [
        {
          id: 5,
          label: 'Agent 2',
        },
      ],
    },
    {
      id: 3,
      label: 'Server 3',
    },
  ]
  </script>
  
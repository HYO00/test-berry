<template>
    <el-input v-model="filterText" placeholder="Filter keyword" />
    <el-tree
      ref="treeRef"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      @node-contextmenu="handleContextMenu"
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
      label: 'Root',
      children: [
        {
          id: 4,
          label: 'group 1',
          children: [
            {
                id:13,
                label: 'Server 1',
                children: [
                    {
                        id: 14,
                        label: 'Broker 1',
                    },
                    {
                        id: 15,
                        label: 'Agent1',
                    },
                    {
                        id: 16,
                        label: 'Agent2',
                    },
                ]
            }
          ],
        },
        {
          id: 2,
          label: 'group 2',
          children: [
                {
                id: 5,
                label: 'Server 2',
                children:[
                    {
                    id: 6,
                    label: 'Broker2',
                    },
                    {
                    id: 7,
                    label: 'Agent5',
                    },
                ]
                }
            ],
        },
        {
          id: 21,
          label: 'group 3',
          children: [
                {
                id: 25,
                label: 'Server 2',
                children:[
                    {
                    id: 26,
                    label: 'Broker2',
                    },
                    {
                    id: 27,
                    label: 'Agent5',
                    },
                ]
                },
                {
                id: 35,
                label: 'Server 3',
                children:[
                    {
                    id: 36,
                    label: 'Agent 7',
                    },
                    {
                    id: 37,
                    label: 'Agent 8',
                    },
                ]
                }
            ],
        },
          ],
        },  
  ]
  </script>

<style>
/* .demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
  display: none;
} */
</style>
  
<script setup lang="ts">
import { reactive, ref } from "vue"
import * as vNG from "v-network-graph"
import data, { Node, Edge } from "./data"

const nodes = reactive({ ...data.nodes })
const edges = reactive({ ...data.edges })

// In Node and Edge configuration, instead of concrete values,
// you can specify functions that return a configuration value
// with each node or edge as an argument.
// In addition, custom types for Node and Edge can be explicitly
// specified in `defineConfigs` to specify the argument types
// for callback functions.
const configs = reactive(
  vNG.defineConfigs<Node, Edge>({
    node: {
      normal: {
        type: "circle",
        radius: node => node.size, // Use the value of each node object
        color: node => node.color,
      },
      hover: {
        radius: node => node.size + 2,
        color: node => node.color,
      },
      selectable: true,
      label: {
        visible: node => !!node.label,
      },
      focusring: {
        color: "darkgray",
      },
    },
    edge: {
      normal: {
        width: edge => edge.width, // Use the value of each edge object
        color: edge => edge.color,
        dasharray: edge => (edge.dashed ? "4" : "0"),
      },
    },
  })
)

const nextNodeIndex = ref(Object.keys(data.nodes).length + 1)
const nextEdgeIndex = ref(Object.keys(data.edges).length + 1)
const selectedNodes = ref<string[]>([])
const selectedEdges = ref<string[]>([])

function addSkyBlueNode() {
  addNode({ size: 32, color: "lightskyblue", icon: "&#xe320", label: true })
}

function addHotPinkNode() {
  addNode({ size: 32, color: "hotpink", label: true })
}

function addGrayNode() {
  addNode({ size: 16, color: "gray", label: false })
}

function addBlackNode() {
  addNode({ size: 48, color: "gren", label: false })
}

function addNode(node: Omit<Node, "name">) {
  const nodeId = `node${nextNodeIndex.value}`
  const name = `Node ${nextNodeIndex.value}`
  nodes[nodeId] = { name, ...node } as Node
  nextNodeIndex.value++
}

function removeNode() {
  for (const nodeId of selectedNodes.value) {
    delete nodes[nodeId]
  }
}

function addSkyBlueEdge() {
  addEdge({ width: 3, color: "skyblue" })
}

function addHotPinkEdge() {
  addEdge({ width: 3, color: "hotpink" })
}

function addGrayEdge() {
  addEdge({ width: 5, color: "gray", dashed: true })
}

function addBlackEdge() {
  addEdge({ width: 1, color: "black" })
}

function addEdge(edge: Omit<Edge, "source" | "target">) {
  if (selectedNodes.value.length !== 2) return
  const [source, target] = selectedNodes.value
  const edgeId = `edge${nextEdgeIndex.value++}`
  edges[edgeId] = { source, target, ...edge } as Edge
}

function removeEdge() {
  for (const edgeId of selectedEdges.value) {
    delete edges[edgeId]
  }
}

function isEdgeAddable() {
  return selectedNodes.value.length == 2
}
</script>

<template>
  <div class="demo-control-panel appearance">
    <div>
      <label>Node:</label>
      <el-button @click="addSkyBlueNode">Add Broker</el-button>
      <el-button @click="addHotPinkNode">Add Agent</el-button>
      <el-button @click="addGrayNode">Add Gray</el-button>
      <el-button @click="addBlackNode">Add Black</el-button>
      <el-button :disabled="selectedNodes.length == 0" @click="removeNode"
        >Remove</el-button
      >
    </div>
  </div>

  <v-network-graph
    v-model:selected-nodes="selectedNodes"
    v-model:selected-edges="selectedEdges"
    :nodes="nodes"
    :edges="edges"
    :layouts="data.layouts"
    :configs="configs"
  >
  <defs>
      <!-- Cannot use <style> directly due to restrictions of Vue. -->
      <component is="style">
        @font-face { font-family: 'Material Icons'; font-style: normal; font-weight:
        400; src:
        url(https://fonts.gstatic.com/s/materialicons/v97/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)
        format('woff2'); }
      </component>
    </defs>
    <template #override-node="{ nodeId, scale, config, ...slotProps }">
      <circle :r="config.radius * scale" :fill="config.color" v-bind="slotProps" />
      <!-- Use v-html to interpret escape sequences for icon characters. -->
      <text
        font-family="Material Icons"
        :font-size="22 * scale"
        fill="#ffffff"
        text-anchor="middle"
        dominant-baseline="central"
        style="pointer-events: none"
        v-html="nodes[nodeId].icon"
      />
    </template>
  </v-network-graph>

</template>
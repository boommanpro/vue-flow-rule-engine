<script setup lang="ts">
const props = defineProps({
  node: {
    type: Object,
    required: true,
  },
  sourcePosition: {
    type: String,
  },
  targetPosition: {
    type: String,
  },
})

const addParam = () => {

}
</script>

<template>
  <div>
    <div v-for="(param, index) in node.params" :key="index" class="param">
      <input v-model="param.name" placeholder="请输入参数名称"/>
      <select v-model="param.type">
        <option value="String">String</option>
        <option value="Number">Number</option>
        <option value="Boolean">Boolean</option>
        <option value="File">File</option>
        <option value="Object">Object</option>
        <option value="Array">Array</option>
      </select>
    </div>
    <button @click="addParam()">+</button>
  </div>
  <div class="input-item">
    <el-Checkbox/>
  </div>
  <div class="input-item">

  </div>
</template>

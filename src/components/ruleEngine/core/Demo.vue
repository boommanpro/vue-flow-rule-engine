<script setup>
import {computed, toRef} from 'vue'
import {Handle, Position, useHandleConnections} from '@vue-flow/core'
import {NodeToolbar} from "@vue-flow/node-toolbar";
import RunIcon from "@/components/ruleEngine/icons/RunIcon.vue";
import CopyIcon from "@/components/ruleEngine/icons/CopyIcon.vue";
import DeleteIcon from "@/components/ruleEngine/icons/DeleteIcon.vue";
import DefinedParameterItem from "@/components/ruleEngine/core/base/DefinedParameterItem.vue";
import AiNodeToolBar from "@/components/ruleEngine/core/AiNodeToolBar.vue";

const props = defineProps({
  id:{
    type: String,
    required: true,
  },
  data: {
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

const sourceConnections = useHandleConnections({
  type: 'target',
})

const targetConnections = useHandleConnections({
  type: 'source',
})

const deleteNode = (id) => {
  // 删除节点
  // ...
  console.log(id)
}

const node = {
  id: '执行节点',
  type: 'process',
  deletable: false,
  params: []
}
let paramIndexCounter = 0;

const addParam = () => {
  node.params.push({name: '', type: 'String', index: paramIndexCounter.toString()});
  paramIndexCounter++;

}

</script>

<template>
  <div class="ai-flow__nodes">
    <div class=".ai-flow__node">
      <ai-node-tool-bar :id="id"/>
      <div class="tf-node-wrapper">
        <div class="tf-node-wrapper-title">
          vue-flow-rule-engine
        </div>
        <div class="tf-node-wrapper-body">
          <h3>{{ node.id }}</h3>
          <defined-parameter-item/>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.tf-node-wrapper {
  border-radius: 5px;
  min-width: 300px;
  background: #fff;

  &-title {
    height: 30px;
    background: #EFF1F5;
    color: #bcbcbc;
    font-size: 12px;
    display: flex;
    align-items: center;
    padding-left: 5px;
    border-bottom: 1px solid #ccc;
    font-weight: 300;
    letter-spacing: 1px;
  }

  &-body {
    padding: 10px;
  }
}

.ai-flow__nodes {
  .ai-flow__node {
    border: 3px solid transparent;
    border-radius: 5px;
    box-sizing: border-box;

    .ai-flow__handle {
      width: 16px;
      height: 16px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;

      &::after {
        content: ' ';
        background: #2563EB;
        width: 8px;
        height: 8px;
        border-radius: 100%;
        transition: width 0.1s, height 0.1s;
      }

      &:hover {
        &::after {
          width: 16px;
          height: 16px;
        }
      }
    }

    &:after {
      content: ' ';
      position: absolute;
      border-radius: 5px;
      top: -2px;
      left: -2px;
      border: 1px solid #ccc;
      height: calc(100% + 2px);
      width: calc(100% + 2px);
    }

    &:hover {
      border: 3px solid #bacaef7d;
    }

    &.selectable.selected {
      border: 3px solid #bacaef7d;
      box-shadow: var(--xy-node-boxshadow-selected);
    }

    &:hover:after {
      display: none;
    }

    &.selectable.selected:after {
      display: none;
    }
  }
}
</style>

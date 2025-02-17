<script setup>
import AiNodeToolBar from "@/components/ruleEngine/core/AiNodeToolBar.vue";

const props = defineProps({
  id: {
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
// 添加一个选中状态的 prop
  selected: {
    type: Boolean,
    default: false
  }
})

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
    <!-- 根据 selected prop 添加 selectable 和 selected 类 -->
    <div class="ai-flow__node selectable"
         :class="{ selected: selected }">
      <ai-node-tool-bar :id="id"/>
      <div class="tf-node-wrapper">
        <div class="tf-node-wrapper-title">
          vue-flow-rule-engine
        </div>
        <div class="tf-node-wrapper-body">
          <h3>{{ node.id }}</h3>
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
    border-radius: 5px;
    box-sizing: border-box;
    /* 初始状态设置透明边框 */

    border: 1px solid transparent;

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
      top: -1px;
      left: -1px;
      border: 1px solid #ccc;
      height: calc(100% + 1px);
      width: calc(100% + 1px);
    }

    &:hover {
      /* 悬停时改变边框颜色 */
      border-color: rgba(34, 49, 80, 0.49);
    }

    &.selectable.selected {
      /* 选中时改变边框颜色 */
      border-radius: 5px;
      border-color: rgba(0, 77, 255, 0.49);
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

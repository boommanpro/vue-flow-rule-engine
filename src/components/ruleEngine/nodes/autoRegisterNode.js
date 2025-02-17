// src/components/ruleEngine/siderbar/autoRegisterNode.js

import {markRaw} from 'vue';
import Demo from "@/components/ruleEngine/core/Demo.vue";

export default async function autoRegisterNode() {
    const nodeTypes = {};

    // 获取指定目录下的所有 .vue 文件
    const modules = import.meta.glob('@/components/ruleEngine/nodes/**/*.vue');

    for (const path in modules) {
        // 获取文件名（去掉 .vue 后缀）
        const componentName = path.replace(/^.*\/([^/]+)\.vue$/, '$1');

        // 动态导入组件
        const component = await modules[path]();

        // 使用 markRaw 标记组件对象
        nodeTypes[componentName] = markRaw(component.default);
    }
    //demo 测试
    nodeTypes['Demo'] = markRaw(Demo);
    console.log(nodeTypes);
    //demo 测试
    return nodeTypes;
}

import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Edge, Node } from '@vue-flow/core';

const useStore = defineStore('vue-flow-pinia', () => {
    const nodes = ref<Node[]>([
        {
            id: '1',
            type: 'Demo',
            label: 'Demo',
            position: { x: 250, y: 100 },
        },
    ]);

    const isMouseMode = ref(true);

    const edges = ref<Edge[]>();

    const reset = () => {
        edges.value = [];
        nodes.value = [];
    };

    const log = () => {
        console.log('nodes', nodes.value, 'edges', edges.value);
    };

    const toggleClass = () => {
        nodes.value = nodes.value.map((node) => {
            return {
                ...node,
                class: node.class === 'dark' ? 'light' : 'dark',
            };
        });
    };

    const updatePositions = () => {
        nodes.value = nodes.value.map((node) => {
            return {
                ...node,
                position: {
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                },
            };
        });
    };
    // 切换模式的方法
    const changeMouse = (vale:boolean) => {
        isMouseMode.value = vale
    };

    return {
        nodes,
        edges,
        reset,
        log,
        toggleClass,
        updatePositions,
        isMouseMode,
        changeMouse
    };
});

export default useStore;

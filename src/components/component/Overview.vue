<script setup lang="ts">
import InteractiveMode from '../ruleEngine/control/InteractiveMode.vue';
import Sizing from '../ruleEngine/control/Sizing.vue';
import OverviewCard from './base/OverviewCard.vue';

</script>

<template>
    <OverviewCard>
        <template #title>
            交互模式按钮
        </template>
        <template #content>
            <div style="height: 400px;">

            </div>
            <InteractiveMode/>
        </template>
    </OverviewCard>

    <OverviewCard>
        <template #title>
            大小调整组件
        </template>
        <template #content>
            <div style="height: 400px;">
            </div>
            <Sizing/>
        </template>
    </OverviewCard>


</template>
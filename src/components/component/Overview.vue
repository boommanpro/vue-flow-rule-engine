<script setup lang="ts">
import InteractiveMode from '../ruleEngine/control/InteractiveMode.vue';
import Sizing from '../ruleEngine/control/Sizing.vue';
import Thumbnail from '../ruleEngine/control/Thumbnail.vue';
import OverviewCard from './base/OverviewCard.vue';
import ControlDemo from './demo/ControlDemo.vue';

</script>

<template>
    <ControlDemo/>
    <!-- <OverviewCard>
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

    <OverviewCard>
        <template #title>
            缩略图
        </template>
        <template #content>
            <div style="height: 400px;">
            </div>
            <Thumbnail/>
        </template>
    </OverviewCard> -->

</template>
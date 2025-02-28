<script setup lang="ts">
import InteractiveMode from '../ruleEngine/control/InteractiveMode.vue';
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

</template>
/* import the required styles */
import "@vue-flow/core/dist/style.css";

/* import the default theme (optional) */
import "@vue-flow/core/dist/theme-default.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import autoRegisterNode from "@/components/ruleEngine/nodes/autoRegisterNode.js";
import {createApp} from 'vue'
import App from './App.vue'
import useStore  from '@/components/ruleEngine/store'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(ElementPlus)
const store = useStore();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
autoRegisterNode().then((nodeTypes) => {
    store.nodeTypes = nodeTypes;
    app.mount('#app')
}).catch((error) => {
    console.error('Failed to register nodes:', error);
});



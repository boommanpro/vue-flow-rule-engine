/* import the required styles */
import "@vue-flow/core/dist/style.css";

/* import the default theme (optional) */
import "@vue-flow/core/dist/theme-default.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createApp} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')

// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import RuleEngine from '@/components/ruleEngine/RuleEngine.vue'; // 假设Home.vue是你要访问的主页
import Overview from '@/components/component/overview.vue'; // 假设Preview.vue是你要访问的预览页


const routes = [
    {
      path: '/',
      name: 'RuleEngine',
      component: RuleEngine
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview
    }
  ];

const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  // タイトル設定
  const BASE_TITLE = import.meta.env.VITE_APP_TITLE as string;
  document.title = (to.meta.title as string) || BASE_TITLE;
});

export default router

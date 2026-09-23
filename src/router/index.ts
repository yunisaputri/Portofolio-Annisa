import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../view/HomeView.vue";
import projectView from "../view/projectView.vue";
import KontakView from "../view/KontakView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/project", name: "project", component: projectView },
    { path: "/kontak", name: "kontak", component: KontakView },
  ],

  // Atur perilaku scroll di sini
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 }; // Kembali ke atas halaman jika pindah rute biasa
  },
  
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import ContactPage from '../views/contactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailPage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    }
  ]
})

export default router

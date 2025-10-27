<template>
  <section id="products" class="py-16 bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        {{ t('products.category') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div
          @click="jumpToProductsPage"
          v-for="category in categories"
          :key="category.id"
          class="group cursor-pointer overflow-hidden rounded-lg bg-gray-700 transition-transform"
        >
          <div class="aspect-[3/4] overflow-hidden">
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-full object-cover transition-transform group-hover:scale-110"
              loading="lazy"
            >
          </div>
          <div class="p-6 bg-gray-600">
            <h3 class="text-xl font-semibold text-white text-center">{{ category.name }}</h3>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button class="px-8 py-3 border-1 bg-white text-gray-800 hover:bg-gray-800 hover:text-white hover:border-white hover:border-1 transition-colors font-medium cursor-pointer">
          {{ t('products.viewMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()

const categories = computed(() => [
  {
    id: 1,
    name: t('nav.yogaPants'),
    image: 'https://ext.same-assets.com/3683566378/4004780314.webp'
  },
  {
    id: 2,
    name: t('nav.brassiere'),
    image: 'https://ext.same-assets.com/3683566378/573338388.webp'
  },
  {
    id: 3,
    name: t('nav.waistcoat'),
    image: 'https://ext.same-assets.com/3683566378/3306561882.webp'
  }
])

const jumpToProductsPage = () => {
  router.push('/products')
}
</script>

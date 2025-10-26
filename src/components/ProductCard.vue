<template>
  <div class="bg-white group cursor-pointer" @click="goToDetail">
    <!-- Product Image -->
    <div class="relative aspect-[3/4] overflow-hidden mb-3">
      <img
        :src="currentImage"
        :alt="product.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      >

      <!-- Wishlist button -->
      <button
        class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-opacity opacity-0 group-hover:opacity-100"
        @click.stop="toggleWishlist"
      >
        <svg
          class="w-5 h-5"
          :class="isWishlisted ? 'fill-red-500 stroke-red-500' : 'fill-none stroke-gray-800'"
          viewBox="0 0 24 24"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>

    <!-- Color swatches -->
    <div v-if="product.colors.length > 1" class="flex items-center gap-2 mb-2 flex-wrap ml-5">
      <button
        v-for="color in product.colors.slice(0, 5)"
        :key="color.name"
        :title="color.name"
        class="w-6 h-6 rounded-full border-2 transition-all"
        :class="currentColorIndex === product.colors.indexOf(color) ? 'border-gray-800' : 'border-gray-300'"
        :style="{ backgroundColor: color.hex }"
        @click.stop="selectColor(product.colors.indexOf(color))"
      />
      <button
        v-if="product.colors.length > 5"
        class="text-xs text-gray-600 hover:text-gray-800"
        @click.stop
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Best Gift Badge -->
    <!-- <div v-if="product.isBestGift" class="flex items-center gap-1 mb-1">
      <svg class="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
      </svg>
      <span class="text-xs text-red-600 font-medium">{{ t('product.bestGift') }}</span>
    </div> -->

    <!-- Product Name -->
    <h3 class="text-sm font-medium text-gray-900 mb-1 ml-5">{{ product.name }}</h3>

    <!-- Product Subtitle -->
    <p v-if="product.subtitle" class="text-xs text-gray-600 mb-1 ml-5">{{ product.subtitle }}</p>

    <!-- Price -->
    <p class="text-sm text-gray-900 mb-3 ml-5">${{ product.price }}</p>

    <!-- Compare checkbox -->
    <!-- <Checkbox
      class="text-xs text-gray-600 hover:text-gray-800"
      @click.stop
    >
      {{ t('product.compare') }}
    </Checkbox> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import type { Product } from '../types/product'
// import Checkbox from './ui/Checkbox.vue'

const { t } = useI18n()
const router = useRouter()

const props = defineProps<{
  product: Product
}>()

const currentColorIndex = ref(0)
const isWishlisted = ref(false)

const currentImage = computed(() => {
  return props.product.colors[currentColorIndex.value]?.image || props.product.image
})

const selectColor = (index: number) => {
  currentColorIndex.value = index
}

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value
}

const goToDetail = () => {
  router.push({ name: 'product-detail', params: { id: props.product.id } })
}
</script>

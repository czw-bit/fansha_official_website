<template>
  <section id="about" class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <p class="text-gray-400 text-6xl font-light mb-4">BRAND PROFILE</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {{ t('company.profile') }}
          </h2>
          <p class="text-gray-600 leading-relaxed mb-8">
            {{ t('company.description') }}
          </p>
          <button class="px-8 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium cursor-pointer">
            {{ t('products.viewMore') }}
          </button>
        </div>

        <!-- Image Carousel -->
        <div class="relative h-[400px] overflow-hidden rounded-lg">
          <div
            v-for="(image, index) in certificateImages"
            :key="index"
            class="absolute inset-0 transition-opacity duration-1000"
            :class="currentImage === index ? 'opacity-100' : 'opacity-0'"
          >
            <img
              :src="image"
              alt="Certificate"
              class="w-full h-full object-contain bg-gray-100"
              loading="lazy"
            >
          </div>

          <!-- Navigation Arrows -->
          <button
            @click="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10 cursor-pointer"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10 cursor-pointer"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            <button
              v-for="(_, index) in certificateImages"
              :key="index"
              @click="currentImage = index"
              class="w-2 h-2 rounded-full transition-all"
              :class="currentImage === index ? 'bg-gray-800 w-6' : 'bg-gray-400'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentImage = ref(0)
let intervalId: number | null = null

const certificateImages = [
  'https://ext.same-assets.com/3683566378/503200320.jpeg',
  'https://ext.same-assets.com/3683566378/3134279981.jpeg',
  'https://ext.same-assets.com/3683566378/3702293382.png'
]

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % certificateImages.length
}

const previousImage = () => {
  currentImage.value = currentImage.value === 0 ? certificateImages.length - 1 : currentImage.value - 1
}

const startAutoPlay = () => {
  intervalId = window.setInterval(() => {
    nextImage()
  }, 4000)
}

const stopAutoPlay = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

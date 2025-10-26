<template>
  <section id="home" class="relative h-[500px] sm:h-[1080px] overflow-hidden bg-gray-900">
    <div class="relative h-full">
      <!-- Slides -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-opacity duration-3000"
        :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
      >
        <video v-show="index === 0" src="/images/home/banner/home_banner.mp4" class="w-full h-full object-cover" autoplay muted loop></video>
        <img
          v-show="index !== 0"
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover"
          loading="lazy"
        >
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center text-white px-4 max-w-4xl">
            <h2 class="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              {{ slide.title }}
            </h2>
            <p class="text-lg sm:text-xl md:text-2xl mb-2 animate-fade-in-delay">
              {{ slide.subtitle }}
            </p>
            <p v-if="slide.brand" class="text-2xl sm:text-3xl font-semibold mt-6 animate-fade-in-delay-2">
              {{ slide.brand }}
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="previousSlide"
        class="absolute left-25 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10 cursor-pointer"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-25 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all z-10 cursor-pointer"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Dots Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full transition-all"
          :class="currentSlide === index ? 'bg-white w-8' : 'bg-white bg-opacity-50'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentSlide = ref(0)
let intervalId: number | null = null

const slides = computed(() => [
  {
    image: '/images/home/banner/home_banner-02.jpg',
    // title: t('hero.title1'),
    // subtitle: t('hero.subtitle1'),
    // brand: t('hero.brand')
    title: '',
    subtitle: '',
    brand: ''
  },
  {
    image: '/images/home/banner/home_banner-01.jpg',
    // title: t('hero.title1'),
    // subtitle: t('hero.subtitle1'),
    // brand: t('hero.brand')
    title: '',
    subtitle: '',
    brand: ''
  },
  {
    image: '/images/home/banner/home_banner-02.jpg',
    // title: t('hero.title2'),
    // subtitle: t('hero.subtitle2'),
    title: '',
    subtitle: '',
    brand: ''
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const startAutoPlay = () => {
  intervalId = window.setInterval(() => {
    nextSlide()
  }, 5000)
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

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s both;
}
</style>

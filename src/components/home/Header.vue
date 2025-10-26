<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <h1 class="text-lg sm:text-xl font-bold text-gray-900">
            {{ t('nav.home') === '首页' ? '泉州诚芳服饰有限公司' : 'QUANZHOU CHENGFANG CLOTHING CO.,LTD' }}
          </h1>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.home') }}</a>
          <div class="relative group">
            <a href="#about" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.about') }}</a>
          </div>
          <div class="relative group">
            <a href="#products" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.products') }}</a>
          </div>
          <a href="#news" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.news') }}</a>
          <a href="#contact" class="text-gray-700 hover:text-gray-900 transition-colors">{{ t('nav.contact') }}</a>

          <!-- Language Switcher -->
          <button
            @click="toggleLanguage"
            class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-sm font-medium"
          >
            {{ currentLanguage === 'zh' ? 'EN' : '中文' }}
          </button>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a href="#home" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">{{ t('nav.home') }}</a>
        <a href="#about" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">{{ t('nav.about') }}</a>
        <a href="#products" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">{{ t('nav.products') }}</a>
        <a href="#news" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">{{ t('nav.news') }}</a>
        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">{{ t('nav.contact') }}</a>
        <button
          @click="toggleLanguage"
          class="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          {{ currentLanguage === 'zh' ? 'English' : '中文' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../../stores/language'

const { t, locale } = useI18n()
const languageStore = useLanguageStore()
const mobileMenuOpen = ref(false)

const currentLanguage = computed(() => languageStore.currentLanguage)

const toggleLanguage = () => {
  languageStore.toggleLanguage()
  locale.value = languageStore.currentLanguage
  mobileMenuOpen.value = false
}
</script>

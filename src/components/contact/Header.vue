<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center gap-4">
        <!-- 汉堡菜单按钮 -->
        <button
          @click="toggleMenu"
          class="p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="Menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <nav
      v-if="isMenuOpen"
      class="border-t bg-white"
    >
      <ul class="container mx-auto px-4 py-4 space-y-2">
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.home') }}</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.aboutUs') }}</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.products') }}</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.faq') }}</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.news') }}</a></li>
        <li><a href="#" class="block py-2 hover:text-blue-500 transition-colors">{{ t('nav.contactUs') }}</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

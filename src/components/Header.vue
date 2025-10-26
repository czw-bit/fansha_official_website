<template>
  <header class="bg-white sticky top-0 z-50">
    <!-- Top promo bar -->
    <!-- <div class="bg-gray-200 px-4 py-2 text-sm text-center relative">
      <span class="text-gray-800">{{ t('header.promo') }} <a href="#" class="underline">{{ t('header.signUp') }}</a></span>
      <button class="absolute right-4 top-1/2 -translate-y-1/2" @click="closePromo">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div> -->

    <!-- Main header -->
    <div class="border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M8 12 Q 10 8, 12 12 T 16 12" stroke="currentColor" stroke-width="2" fill="none"/>
              </svg>
              <span class="text-xl font-medium">lululemon</span>
            </a>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-sm hover:text-gray-600">{{ t('header.women') }}</a>
            <el-dropdown>
              <span class="el-dropdown-link">
                <a href="#" class="text-sm font-semibold">{{ t('header.men') }}</a>
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item disabled>Action 4</el-dropdown-item>
                  <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <a href="#" class="text-sm hover:text-gray-600">{{ t('header.accessories') }}</a>
            <a href="#" class="text-sm hover:text-gray-600">{{ t('header.whatsNew') }}</a>
          </nav>

          <!-- Right actions -->
          <div class="flex items-center space-x-4">
            <!-- Language switcher -->
            <div class="relative">
              <button
                @click="toggleLanguage"
                class="flex items-center gap-1 px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span class="hidden sm:inline">{{ locale === 'en' ? 'EN' : '中文' }}</span>
              </button>
            </div>
            <!-- Search -->
            <button class="p-2 hover:bg-gray-100 rounded-full" @click="toggleSearch">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <!-- Account -->
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <!-- Cart -->
            <button class="p-2 hover:bg-gray-100 rounded-full">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            <!-- Mobile menu button -->
            <button class="md:hidden p-2 hover:bg-gray-100 rounded-full" @click="toggleMenu">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search overlay -->
    <div v-if="showSearch" class="border-b border-gray-200 bg-white">
      <div class="container mx-auto px-4 py-4">
        <div class="relative">
          <Input
            type="text"
            placeholder="Search"
            class="w-full pl-10 bg-gray-50"
          />
          <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="showMenu" class="md:hidden border-b border-gray-200 bg-white">
      <nav class="container mx-auto px-4 py-4 space-y-4">
        <a href="#" class="block text-sm hover:text-gray-600">Women</a>
        <a href="#" class="block text-sm font-semibold">Men</a>
        <a href="#" class="block text-sm hover:text-gray-600">Accessories</a>
        <a href="#" class="block text-sm hover:text-gray-600">What's New</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Input from './ui/Input.vue'
import { ArrowDown } from '@element-plus/icons-vue'

const { t, locale } = useI18n()

const showSearch = ref(false)
const showMenu = ref(false)

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const closePromo = () => {
  // Close promo bar logic
}

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
  localStorage.setItem('locale', locale.value)
}
</script>

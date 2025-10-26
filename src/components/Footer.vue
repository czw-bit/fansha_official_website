<template>
  <footer class="bg-gray-900 text-white">
    <!-- Slogan Section -->
    <div class="bg-gray-50 py-16" style="background-image: url('/images/home/banner/footer_banner.jpg'); background-size: cover; background-position: center;height: 400px;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {{ t('slogan.years') }}
        </h2>
        <h3 class="text-3xl sm:text-4xl font-bold text-gray-900">
          {{ t('slogan.focus') }}
        </h3>
        <button class="mt-8 px-8 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium">
          {{ t('nav.contact') }}
        </button>
      </div>
    </div>

    <!-- Main Footer -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Company Info -->
          <div class="lg:col-span-2">
            <h3 class="text-xl font-semibold mb-4">{{ t('footer.company') }}</h3>
            <div class="space-y-2 text-gray-300">
              <p>{{ t('footer.address') }}</p>
              <p>{{ t('footer.mobile') }}: +86-13110813176</p>
              <p>{{ t('footer.wechat') }}: qz2644383577</p>
              <p>{{ t('footer.email') }}: 13110813176@163.com</p>
              <p>{{ t('footer.website') }}: www.chengfangfitness.com</p>
            </div>
          </div>

          <!-- About -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ t('footer.about') }}</h3>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#about" class="hover:text-white transition-colors">{{ t('nav.profile') }}</a></li>
              <li><a href="#about" class="hover:text-white transition-colors">{{ t('nav.equipment') }}</a></li>
              <li><a href="#about" class="hover:text-white transition-colors">{{ t('nav.certificate') }}</a></li>
            </ul>
          </div>

          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ t('footer.products') }}</h3>
            <ul class="space-y-2 text-gray-300">
              <li><a href="#products" class="hover:text-white transition-colors">{{ t('nav.yogaPants') }}</a></li>
              <li><a href="#products" class="hover:text-white transition-colors">{{ t('nav.brassiere') }}</a></li>
              <li><a href="#products" class="hover:text-white transition-colors">{{ t('nav.waistcoat') }}</a></li>
              <li><a href="#products" class="hover:text-white transition-colors">{{ t('nav.other') }}</a></li>
            </ul>
          </div>

          <!-- QR Code -->
          <div>
            <h3 class="text-lg font-semibold mb-4">{{ t('footer.scanCode') }}</h3>
            <div class="bg-white p-4 inline-block rounded">
              <img
                src="https://ext.same-assets.com/3683566378/2396654988.png"
                alt="QR Code"
                class="w-32 h-32"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-400 text-sm">
          Copyright © 2023 {{ t('footer.company') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

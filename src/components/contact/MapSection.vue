<template>
  <div class="mt-12">
    <div class="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-md border border-gray-200">
      <!-- 地图背景 -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- 网格线背景 -->
        <svg class="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ccc" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <!-- 地图标记 -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="relative animate-bounce">
            <!-- 标记图标 -->
            <svg class="w-16 h-16 text-red-500 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C7.589 0 4 3.589 4 8c0 6.75 8 16 8 16s8-9.25 8-16c0-4.411-3.589-8-8-8zm0 11.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
            </svg>
            <!-- 信息卡片 -->
            <div class="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-lg shadow-xl border border-gray-200 whitespace-nowrap">
              <p class="text-sm font-semibold text-gray-800">{{ t('footer.companyName') }}</p>
              <p class="text-xs text-gray-600 mt-1 max-w-xs">{{ t('contact.addressValue') }}</p>
              <div class="mt-2 flex items-center gap-2 text-xs text-blue-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>晋江市, 福建省, 中国</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 百度地图Logo -->
      <div class="absolute bottom-3 left-3 bg-white px-2 py-1 rounded shadow">
        <img src="https://ext.same-assets.com/3683566378/2863631041.png" alt="Baidu Map" class="h-5 opacity-80" >
      </div>

      <!-- 版权信息 -->
      <div class="absolute bottom-3 right-3 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        © 2025 Baidu
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
</style>

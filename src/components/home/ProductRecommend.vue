<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
        {{ t('products.recommended') }}
      </h2>

      <div class="text-center mb-8">
        <button class="px-8 py-3 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium cursor-pointer">
          {{ t('products.viewMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

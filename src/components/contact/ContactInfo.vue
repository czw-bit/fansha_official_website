<template>
  <div class="space-y-6">
    <div class="mb-8">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 relative inline-block pb-3">
        {{ t('contact.title') }}
        <div class="absolute bottom-0 left-0 w-24 h-1 bg-black"/>
      </h2>
    </div>

    <p class="text-gray-600 leading-relaxed">
      {{ t('contact.subtitle') }}
    </p>

    <div class="space-y-4 mt-8">
      <div>
        <p class="font-semibold text-gray-800">{{ t('contact.address') }}: {{ t('contact.addressValue') }}</p>
      </div>

      <div>
        <p class="text-gray-800">
          <span class="font-semibold">{{ t('contact.mobile') }}:</span>
          <a href="tel:+86-13110813176" class="hover:text-blue-500 ml-2">+86-13110813176</a>
        </p>
      </div>

      <div>
        <p class="text-gray-800">
          <span class="font-semibold">{{ t('contact.wechat') }}:</span>
          <span class="ml-2">qz2644383577</span>
        </p>
      </div>

      <div>
        <p class="text-gray-800">
          <span class="font-semibold">{{ t('contact.email') }}:</span>
          <a href="mailto:13110813176@163.com" class="hover:text-blue-500 ml-2">13110813176@163.com</a>
        </p>
      </div>

      <div>
        <p class="text-gray-800">
          <span class="font-semibold">{{ t('contact.website') }}:</span>
          <a href="http://www.chengfangfitness.com" target="_blank" class="hover:text-blue-500 ml-2">www.chengfangfitness.com</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

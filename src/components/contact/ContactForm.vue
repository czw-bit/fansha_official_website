<template>
  <div class="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100">
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <input
          v-model="form.name"
          type="text"
          :placeholder="`${t('contact.form.name')} *`"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
        >
      </div>

      <div>
        <input
          v-model="form.email"
          type="email"
          :placeholder="`${t('contact.form.email')} *`"
          required
          class="w-full px-4 py-3 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
        >
      </div>

      <div>
        <input
          v-model="form.phone"
          type="tel"
          :placeholder="t('contact.form.phone')"
          class="w-full px-4 py-3 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
        >
      </div>

      <div>
        <input
          v-model="form.region"
          type="text"
          :placeholder="t('contact.form.region')"
          class="w-full px-4 py-3 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
        >
      </div>

      <div>
        <textarea
          v-model="form.content"
          :placeholder="`${t('contact.form.content')} *`"
          required
          rows="6"
          class="w-full px-4 py-3 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-black text-white py-4 rounded font-medium hover:bg-gray-800 transition-colors"
      >
        {{ t('contact.form.submit') }}
      </button>
    </form>

    <!-- 在线咨询弹窗图标 -->
    <div class="mt-6 flex justify-end">
      <div class="relative bg-gray-100 rounded-lg p-4 flex items-center gap-3">
        <img
          src="https://ext.same-assets.com/3683566378/3325541088.png"
          alt="Customer Service"
          class="w-12 h-12 rounded-full"
        >
        <span class="text-sm text-gray-600">{{ t('floating.consultation') }}</span>
        <button
          class="absolute -top-2 -right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-400"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  region: '',
  content: ''
})

const handleSubmit = () => {
  alert(t('contact.form.submit'))
  // 这里可以添加实际的表单提交逻辑
}
</script>

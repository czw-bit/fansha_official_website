<template>
  <div class="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-3">
    <!-- Phone -->
    <a
      href="tel:+8613110813176"
      class="w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      title="Phone"
    >
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    </a>

    <!-- WhatsApp -->
    <a
      href="https://api.whatsapp.com/send?phone=+8613110813176&text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      class="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      title="WhatsApp"
    >
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>

    <!-- WeChat -->
    <button
      @click="showWechat = !showWechat"
      class="w-12 h-12 rounded-full bg-green-400 hover:bg-green-500 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      title="WeChat"
    >
      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01.174-.555c1.527-1.122 2.51-2.805 2.51-4.658-.001-3.54-3.88-6.524-8.066-6.524zm-2.046 3.554c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982zm4.092 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/>
      </svg>
    </button>

    <!-- WeChat QR Code Popup -->
    <div
      v-if="showWechat"
      class="absolute right-16 top-24 bg-white rounded-lg shadow-2xl p-4"
    >
      <div class="text-center">
        <p class="text-gray-900 font-medium mb-2">{{ t('contact.wechat') }}</p>
        <p class="text-gray-600 text-sm mb-3">qz2644383577</p>
        <img
          src="https://ext.same-assets.com/3683566378/2396654988.png"
          alt="WeChat QR"
          class="w-32 h-32"
        >
      </div>
      <button
        @click="showWechat = false"
        class="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full hover:bg-gray-700"
      >
        ×
      </button>
    </div>

    <!-- Email -->
    <a
      href="mailto:13110813176@163.com"
      class="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      title="Email"
    >
      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    </a>

    <!-- Chat -->
    <button
      @click="showChat = !showChat"
      class="w-12 h-12 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center shadow-lg transition-all hover:scale-110"
      title="Chat"
    >
      <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    </button>
  </div>

  <!-- Chat Widget -->
  <div
    v-if="showChat"
    class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-80 sm:w-96 bg-white rounded-lg shadow-2xl z-50 overflow-hidden"
  >
    <!-- Chat Header -->
    <div class="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
          <span class="text-2xl">👋</span>
        </div>
        <div>
          <h3 class="font-semibold">{{ t('contact.online') }}</h3>
          <p class="text-xs opacity-90">{{ t('contact.service') }}</p>
        </div>
      </div>
      <button
        @click="showChat = false"
        class="text-white hover:bg-white hover:bg-opacity-20 rounded p-1"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Chat Body -->
    <div class="p-4 h-64 overflow-y-auto bg-gray-50">
      <div class="mb-4">
        <p class="text-xs text-gray-500 text-center mb-2">2025-10-09 03:43</p>
        <div class="flex items-start">
          <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white mr-2">
            CS
          </div>
          <div class="bg-white rounded-lg px-4 py-2 max-w-[70%] shadow-sm">
            <p class="text-sm text-gray-800">{{ t('contact.hello') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="p-4 border-t bg-white">
      <input
        type="text"
        :placeholder="t('contact.enterContent')"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
      >
      <div class="flex justify-between items-center mt-2">
        <div class="flex space-x-2">
          <button class="text-gray-500 hover:text-purple-500 text-sm">{{ t('contact.understandProduct') }}</button>
          <button class="text-gray-500 hover:text-purple-500 text-sm">{{ t('contact.understandCompany') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showWechat = ref(false)
const showChat = ref(false)
</script>

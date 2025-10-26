<template>
  <div class="border rounded-md">
    <button
      @click="isOpen = !isOpen"
      class="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
    >
      <span class="font-medium text-left">{{ title }}</span>
      <svg
        class="w-5 h-5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div v-if="isOpen" class="px-4 pb-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
}>()

const isOpen = ref(false)
</script>

<template>
  <label
    :class="cn(
      'flex items-center cursor-pointer group',
      props.class
    )"
  >
    <div class="relative">
      <input
        type="checkbox"
        :checked="checked"
        @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)"
        class="peer sr-only"
        v-bind="$attrs"
      >
      <div
        class="w-5 h-5 border-2 border-gray-300 rounded transition-all
               peer-checked:bg-gray-900 peer-checked:border-gray-900
               peer-focus:ring-2 peer-focus:ring-gray-900 peer-focus:ring-offset-2
               group-hover:border-gray-500
               peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
               flex items-center justify-center"
      >
        <svg
          v-if="checked"
          class="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
    <span v-if="$slots.default" class="ml-2 text-sm select-none">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../lib/utils'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  checked?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
})

defineEmits<{
  'update:checked': [value: boolean]
}>()
</script>

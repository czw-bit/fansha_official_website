<template>
  <select
    :class="cn(
      'flex h-11 w-full appearance-none border border-gray-300 bg-white px-4 py-2 pr-10 text-sm transition-colors',
      'focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:border-gray-400',
      'bg-no-repeat bg-right',
      props.class
    )"
    :style="selectStyle"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '../../lib/utils'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  class?: string
}

const props = defineProps<Props>()

const selectStyle = computed(() => ({
  backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M5 7.5L10 12.5L15 7.5\" stroke=\"%23374151\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>')",
  backgroundPosition: 'right 0.75rem center',
  backgroundSize: '1.25rem'
}))
</script>

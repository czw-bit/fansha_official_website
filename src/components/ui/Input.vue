<template>
  <input
    :class="cn(
      'flex h-11 w-full border border-gray-300 bg-white px-4 py-2 text-sm transition-colors',
      'placeholder:text-gray-400',
      'focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'hover:border-gray-400',
      props.class
    )"
    v-bind="$attrs"
  >
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import { cn } from '../../lib/utils'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  class?: string
}

const props = defineProps<Props>()
</script>

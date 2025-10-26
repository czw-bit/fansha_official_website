<template>
  <div :class="cn('flex items-center justify-center', props.class)">
    <div
      :class="cn(
        'animate-spin rounded-full border-2 border-gray-300 border-t-gray-900',
        sizeClasses[size]
      )"
    />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../lib/utils'

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
}

interface Props extends /* @vue-ignore */ HTMLAttributes {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})
</script>

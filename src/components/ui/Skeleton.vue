<template>
  <div
    :class="cn(
      'animate-pulse rounded-md bg-gray-200',
      props.class
    )"
  />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ HTMLAttributes {
  class?: string
}

const props = defineProps<Props>()
</script>

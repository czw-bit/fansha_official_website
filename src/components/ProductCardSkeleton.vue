<template>
  <div class="bg-white">
    <!-- Image skeleton -->
    <Skeleton class="aspect-[3/4] mb-3" />

    <!-- Color swatches skeleton -->
    <div class="flex items-center gap-2 mb-2">
      <Skeleton class="w-6 h-6 rounded-full" />
      <Skeleton class="w-6 h-6 rounded-full" />
      <Skeleton class="w-6 h-6 rounded-full" />
      <Skeleton class="w-6 h-6 rounded-full" />
    </div>

    <!-- Name skeleton -->
    <Skeleton class="h-4 w-3/4 mb-2" />

    <!-- Price skeleton -->
    <Skeleton class="h-4 w-16 mb-3" />

    <!-- Checkbox skeleton -->
    <Skeleton class="h-4 w-24" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from './ui/Skeleton.vue'
</script>

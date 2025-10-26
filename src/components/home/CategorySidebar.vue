<template>
  <div class="bg-white">
    <h3 class="text-xl font-bold mb-4 pb-4 border-b-4 border-gray-900">
      {{ t('productList.category') }}
    </h3>
    <ul class="space-y-1">
      <li v-for="category in categories" :key="category.id">
        <router-link
          :to="`/products/${category.id}`"
          class="block px-4 py-3 transition-colors"
          :class="currentCategory === category.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
        >
          {{ category.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const route = useRoute()

const currentCategory = computed(() => route.params.category || '8')

const categories = computed(() => [
  { id: '14', name: t('categories.yogaPants') },
  { id: '8', name: t('categories.brassiere') },
  { id: '9', name: t('categories.waistcoat') },
  { id: '7', name: t('categories.overall') },
  { id: '10', name: t('categories.jacket') },
  { id: '11', name: t('categories.sportsLong') },
  { id: '12', name: t('categories.halfSleeve') },
  { id: '13', name: t('categories.cropped') },
  { id: '15', name: t('categories.breeches') },
  { id: '16', name: t('categories.pants') },
  { id: '17', name: t('categories.textile') }
])
</script>

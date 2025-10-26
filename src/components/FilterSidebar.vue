<template>
  <aside class="bg-white h-full overflow-y-auto">
    <!-- Mobile filter header -->
    <div class="lg:hidden flex items-center justify-between p-4 border-b">
      <h2 class="text-lg font-medium">{{ t('filters.filters') }}</h2>
      <button @click="$emit('close')" class="p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Filter sections -->
    <div class="divide-y divide-gray-200">
      <!-- Category Filter -->
      <FilterSection
        :title="t('filters.category')"
        :is-open="openSections.category"
        @toggle="toggleSection('category')"
      >
        <div class="space-y-2">
          <Checkbox
            v-for="cat in categories"
            :key="cat"
            :checked="selectedFilters.categories.includes(cat)"
            @update:checked="() => updateFilter('categories', cat)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            {{ t(`categories.${cat}`) }}
          </Checkbox>
        </div>
      </FilterSection>

      <!-- Type Filter -->
      <FilterSection
        :title="t('filters.type')"
        :is-open="openSections.type"
        @toggle="toggleSection('type')"
      >
        <div class="space-y-2">
          <Checkbox
            v-for="type in types"
            :key="type"
            :checked="selectedFilters.types.includes(type)"
            @update:checked="() => updateFilter('types', type)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            {{ t(`types.${type}`) }}
          </Checkbox>
        </div>
      </FilterSection>

      <!-- Size Filter -->
      <FilterSection
        :title="t('filters.size')"
        :is-open="openSections.size"
        @toggle="toggleSection('size')"
      >
        <div class="grid grid-cols-3 gap-2">
          <button
            v-for="size in sizes"
            :key="size"
            @click="updateFilter('sizes', size)"
            :class="[
              'px-3 py-2 text-sm border rounded transition-colors',
              selectedFilters.sizes.includes(size)
                ? 'border-gray-900 bg-gray-900 text-white'
                : 'border-gray-300 hover:border-gray-800 hover:bg-gray-50'
            ]"
          >
            {{ size }}
          </button>
        </div>
      </FilterSection>

      <!-- Fit Filter -->
      <FilterSection
        :title="t('filters.fit')"
        :is-open="openSections.fit"
        @toggle="toggleSection('fit')"
      >
        <div class="space-y-2">
          <Checkbox
            v-for="fit in fits"
            :key="fit"
            :checked="selectedFilters.fits.includes(fit)"
            @update:checked="() => updateFilter('fits', fit)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            {{ t(`fits.${fit}`) }}
          </Checkbox>
        </div>
      </FilterSection>

      <!-- Color Filter -->
      <FilterSection
        :title="t('filters.colour')"
        :is-open="openSections.color"
        @toggle="toggleSection('color')"
      >
        <div class="grid grid-cols-2 gap-3">
          <Checkbox
            v-for="color in colors"
            :key="color.key"
            :checked="selectedFilters.colors.includes(color.key)"
            @update:checked="() => updateFilter('colors', color.key)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            <div class="flex items-center">
              <div
                class="w-5 h-5 rounded-full border border-gray-300 mr-2"
                :style="{ backgroundColor: color.hex }"
              />
              <span class="text-sm" style="white-space: nowrap;">{{ t(`colors.${color.key}`) }}</span>
            </div>
          </Checkbox>
        </div>
      </FilterSection>

      <!-- Collection Filter -->
      <FilterSection
        :title="t('filters.collection')"
        :is-open="openSections.collection"
        @toggle="toggleSection('collection')"
      >
        <div class="space-y-2">
          <Checkbox
            v-for="col in collections"
            :key="col"
            :checked="selectedFilters.collections.includes(col)"
            @update:checked="() => updateFilter('collections', col)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            {{ t(`collections.${col}`) }}
          </Checkbox>
        </div>
      </FilterSection>

      <!-- Activity Filter -->
      <FilterSection
        :title="t('filters.activity')"
        :is-open="openSections.activity"
        @toggle="toggleSection('activity')"
      >
        <div class="space-y-2">
          <Checkbox
            v-for="act in activities"
            :key="act"
            :checked="selectedFilters.activities.includes(act)"
            @update:checked="() => updateFilter('activities', act)"
            class="hover:bg-gray-50 p-2 rounded"
          >
            {{ t(`activities.${act}`) }}
          </Checkbox>
        </div>
      </FilterSection>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterSection from './FilterSection.vue'
import Checkbox from './ui/Checkbox.vue'

const { t } = useI18n()

const emit = defineEmits<{
  close: []
  'update:filters': [filters: FilterState]
}>()

interface FilterState {
  categories: string[]
  types: string[]
  sizes: string[]
  fits: string[]
  colors: string[]
  collections: string[]
  activities: string[]
}

const selectedFilters = reactive<FilterState>({
  categories: [],
  types: [],
  sizes: [],
  fits: [],
  colors: [],
  collections: [],
  activities: []
})

const updateFilter = (category: keyof FilterState, value: string) => {
  const index = selectedFilters[category].indexOf(value)
  if (index > -1) {
    selectedFilters[category].splice(index, 1)
  } else {
    selectedFilters[category].push(value)
  }
  emit('update:filters', selectedFilters)
}

const openSections = reactive({
  category: false,
  type: false,
  size: true,
  fit: true,
  color: true,
  collection: true,
  activity: true
})

const toggleSection = (section: keyof typeof openSections) => {
  openSections[section] = !openSections[section]
}

const categories = [
  'coatsJackets',
  'hoodiesSweatshirts',
  'pants',
  'shirts',
  'shorts',
  'socks',
  'sweaters',
  'swimTrunks',
  'underwear'
]

const types = [
  'hoodies',
  'athleticShorts',
  'halfZipSweatshirts',
  'linerShorts',
  'fivePocketPants',
  'athleticJackets',
  'athleticPants'
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']

const fits = [
  'tightFit',
  'slimFit',
  'classicFit',
  'relaxedFit',
  'oversizedFit'
]

const colors = [
  { key: 'black', hex: '#000000' },
  { key: 'white', hex: '#ffffff' },
  { key: 'grey', hex: '#a2a09e' },
  { key: 'brown', hex: '#9d8565' },
  { key: 'khaki', hex: '#c8c0af' },
  { key: 'navy', hex: '#37475f' },
  { key: 'blue', hex: '#6592ba' },
  { key: 'red', hex: '#d45b60' },
  { key: 'green', hex: '#6e7456' },
  { key: 'burgundy', hex: '#955a44' }
]

const collections = [
  'abc',
  'alwaysDown',
  'paceBreaker',
  'softJersey',
  'steadyState',
  'zeroedIn',
  'restfeel'
]

const activities = [
  'casual',
  'workout',
  'running',
  'golf',
  'work',
  'hiking',
  'swim',
  'tennis',
  'travel',
  'yoga',
  'training'
]
</script>

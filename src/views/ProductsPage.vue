<template>
  <div class="min-h-screen bg-gray-50">

    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 py-4">
      <nav class="flex items-center gap-2 text-sm text-gray-600">
        <a href="#" class="hover:text-gray-900">{{ t('nav.mensClothes') }}</a>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-900">{{ t('nav.casual') }}</span>
      </nav>
    </div>

    <!-- Page title and filter toggle -->
    <div class="container mx-auto px-4 mb-6">
      <div class="flex items-center justify-between">
        <h1 class="text-2xl md:text-3xl font-medium">{{ t('page.title') }}</h1>
        <button
          @click="toggleMobileFilter"
          class="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span class="text-sm font-medium">{{ t('page.filterSort') }}</span>
        </button>
      </div>
      <p class="text-sm text-gray-600 mt-2">{{ filteredProducts.length }} {{ t('page.products') }}</p>
    </div>

    <!-- Main content -->
    <div class="container mx-auto px-4 pb-12">
      <div class="flex gap-8">
        <!-- Desktop Filter Sidebar -->
        <div class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-20">
            <FilterSidebar @update:filters="handleFilterUpdate" />
          </div>
        </div>

        <!-- Product Grid -->
        <div class="flex-1" style="margin-top: -80px;">
          <!-- Sort dropdown -->
          <div class="flex justify-end mb-9">
            <Select class="w-64">
              <option>{{ t('sort.featured') }}</option>
              <option>{{ t('sort.newArrivals') }}</option>
              <option>{{ t('sort.topRated') }}</option>
              <option>{{ t('sort.priceHighToLow') }}</option>
              <option>{{ t('sort.priceLowToHigh') }}</option>
            </Select>
          </div>

          <!-- Products grid -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <ProductCard
              v-for="product in paginatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <!-- Load more button -->
          <div class="flex justify-center mt-12">
            <Button
              v-if="displayCount < filteredProducts.length"
              @click="loadMore"
              variant="outline"
              size="lg"
            >
              {{ t('page.viewMore') }}
            </Button>
          </div>

          <!-- Viewing count -->
          <div class="text-center mt-8 text-sm text-gray-600">
            {{ t('page.viewing') }} {{ Math.min(displayCount, filteredProducts.length) }} {{ t('page.of') }} {{ filteredProducts.length }}
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Filter Overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="showMobileFilter"
          class="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          @click="toggleMobileFilter"
        >
          <Transition name="slide">
            <div
              v-if="showMobileFilter"
              class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white overflow-y-auto"
              @click.stop
            >
              <FilterSidebar @close="toggleMobileFilter" @update:filters="handleFilterUpdate" />

              <!-- Apply button -->
              <div class="sticky bottom-0 bg-white border-t p-4">
                <Button
                  @click="toggleMobileFilter"
                  class="w-full"
                  size="lg"
                >
                  {{ t('filters.applyFilters') }}
                </Button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import FilterSidebar from '../components/FilterSidebar.vue'
import ProductCard from '../components/ProductCard.vue'
import Button from '../components/ui/Button.vue'
import Select from '../components/ui/Select.vue'
import { products } from '../data/products'

const { t } = useI18n()

const showMobileFilter = ref(false)
const displayCount = ref(24)

interface FilterState {
  categories: string[]
  types: string[]
  sizes: string[]
  fits: string[]
  colors: string[]
  collections: string[]
  activities: string[]
}

const currentFilters = ref<FilterState>({
  categories: [],
  types: [],
  sizes: [],
  fits: [],
  colors: [],
  collections: [],
  activities: []
})

const handleFilterUpdate = (filters: FilterState) => {
  currentFilters.value = filters
}

const filteredProducts = computed(() => {
  let result = [...products]

  // Filter by category
  if (currentFilters.value.categories.length > 0) {
    result = result.filter(p => currentFilters.value.categories.includes(p.category.toLowerCase().replace(/[^a-z]/g, '')))
  }

  // Filter by type
  if (currentFilters.value.types.length > 0) {
    result = result.filter(p => currentFilters.value.types.includes(p.type.toLowerCase().replace(/[^a-z]/g, '')))
  }

  // Filter by size
  if (currentFilters.value.sizes.length > 0) {
    result = result.filter(p => p.sizes.some(size => currentFilters.value.sizes.includes(size)))
  }

  // Filter by fit
  if (currentFilters.value.fits.length > 0 && currentFilters.value.fits.some(f => f)) {
    result = result.filter(p => p.fit && currentFilters.value.fits.includes(p.fit.toLowerCase().replace(/[^a-z]/g, '')))
  }

  // Filter by collection
  if (currentFilters.value.collections.length > 0) {
    result = result.filter(p => p.collection && currentFilters.value.collections.includes(p.collection.toLowerCase().replace(/[^a-z]/g, '')))
  }

  return result
})

const paginatedProducts = computed(() => {
  return filteredProducts.value.slice(0, displayCount.value)
})

const toggleMobileFilter = () => {
  showMobileFilter.value = !showMobileFilter.value
}

const loadMore = () => {
  displayCount.value += 24
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

<template>
  <div class="bg-white">

    <!-- Top Banner -->
    <!-- <div class="bg-gradient-to-r from-sky-300 to-cyan-200 py-2 text-center">
      <p class="text-sm font-medium text-gray-800">ORDER $1000,GET EXTRA 10%OFF</p>
    </div> -->

    <!-- Breadcrumb -->
    <div class="container mx-auto px-4 py-4">
      <nav class="flex items-center gap-2 text-sm text-gray-600">
        <router-link to="/" class="hover:text-gray-900">{{ t('nav.mensClothes') }}</router-link>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <span class="text-gray-900">{{ product.name }}</span>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 pb-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left: Images -->
        <div>
          <!-- Main Image -->
          <div class="mb-14 rounded-lg overflow-hidden">
            <img :src="selectedImage" :alt="product.name" class="h-auto" style="max-width: 100%;width: 430px;margin: auto;">
          </div>

          <!-- Thumbnail Images -->
          <div class="grid grid-cols-6 gap-2">
            <button
              v-for="(img, index) in product.images"
              :key="index"
              @click="selectedImage = img"
              class="border-2 rounded-md overflow-hidden hover:border-gray-400 transition-colors"
              :class="selectedImage === img ? 'border-gray-800' : 'border-gray-200'"
              style="width: 80px;"
            >
              <img :src="img" :alt="`View ${index + 1}`" class="h-full object-cover" style="max-width: 100%;width: 80px;">
            </button>
          </div>          
        </div>

        <!-- Right: Product Info -->
        <div>
          <h1 class="text-2xl md:text-3xl font-bold mb-2">{{ product.name }}</h1>
          <p class="text-sm text-gray-600 font-bold mb-2">{{ t('productDetail.sku') }} {{ product.sku }}</p>

          <!-- Color Selection -->
          <div class="mb-6">
            <p class="text-sm font-medium mb-3">{{ t('productDetail.color') }} {{ selectedColor.name }}</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="color in product.colors"
                :key="color.name"
                @click="selectColor(color)"
                :title="color.name"
                class="w-10 h-10 rounded-md border-2 transition-all hover:scale-110"
                :class="selectedColor.name === color.name ? 'border-gray-800 ring-2 ring-gray-300' : 'border-gray-300'"
                :style="{ backgroundColor: color.hex }"
              />
            </div>
          </div>

          <!-- Customization Notice -->
          <div class="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
            <p class="text-sm text-amber-800 mb-1">
              <span class="mr-1">⚡</span>{{ t('productDetail.customizedLogo') }}
            </p>
            <p class="text-xs text-amber-700">{{ t('productDetail.customizedLogoMOQ') }}</p>
            <p class="text-xs text-amber-700">{{ t('productDetail.customizedLogoMinQty') }}</p>
          </div>

          <!-- Select Items Table -->
          <!-- <div class="mb-6">
            <h3 class="font-semibold mb-4">{{ t('productDetail.selectItems') }}</h3>
            <div class="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
              <table class="w-full border-collapse min-w-[500px] md:min-w-full">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-2 md:px-4 py-2 text-left text-xs md:text-sm">{{ t('productDetail.size') }}</th>
                    <th class="px-2 md:px-4 py-2 text-left text-xs md:text-sm hidden sm:table-cell">{{ t('productDetail.weight') }}</th>
                    <th class="px-2 md:px-4 py-2 text-left text-xs md:text-sm">{{ t('productDetail.inStock') }}</th>
                    <th class="px-2 md:px-4 py-2 text-left text-xs md:text-sm">{{ t('productDetail.quantity') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="size in product.sizes" :key="size" class="border-b">
                    <td class="px-2 md:px-4 py-3 font-medium text-sm md:text-base">{{ size }}</td>
                    <td class="px-2 md:px-4 py-3 text-xs md:text-sm text-gray-600 hidden sm:table-cell">{{ product.weight }}</td>
                    <td class="px-2 md:px-4 py-3 text-xs md:text-sm text-gray-600">{{ product.sizeInventory[size] }}</td>
                    <td class="px-2 md:px-4 py-3">
                      <div class="flex items-center gap-1 md:gap-2">
                        <Button @click="decreaseQty(size)" size="icon" variant="outline" class="w-7 h-7 md:w-8 md:h-8 p-0 text-xs">−</Button>
                        <Input
                          type="number"
                          v-model.number="quantities[size]"
                          min="0"
                          class="w-12 md:w-16 h-8 md:h-9 px-1 md:px-2 text-center text-xs md:text-sm"
                        />
                        <Button @click="increaseQty(size)" size="icon" variant="outline" class="w-7 h-7 md:w-8 md:h-8 p-0 text-xs">+</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> -->

          <!-- Price Summary -->
          <!-- <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <div class="grid grid-cols-2 gap-2 text-sm mb-2">
              <span class="text-gray-600">{{ t('productDetail.totalPiece') }}:</span>
              <span class="font-semibold">{{ totalPieces }} {{ t('page.products') }}</span>

              <span class="text-gray-600">{{ t('productDetail.totalWeight') }}:</span>
              <span class="font-semibold">{{ totalWeight }}g</span>

              <span class="text-gray-600">{{ t('productDetail.logoSetupFee') }}:</span>
              <span>$0.00</span>

              <span class="text-gray-600">{{ t('productDetail.printingCost') }}:</span>
              <span>$0.00</span>
            </div>
            <div class="border-t pt-2 mt-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Total:</span>
                <span class="text-2xl font-bold">${{ totalPrice.toFixed(2) }}</span>
              </div>
            </div>
          </div> -->

          <!-- CTA Button -->
          <!-- <Button class="w-full mb-4" size="lg">
            {{ t('productDetail.loginGetPrice') }}
          </Button> -->

          <!-- Trust Badges -->
          <!-- <div class="flex items-center justify-around py-4 border-t border-b">
            <div class="text-center">
              <div class="w-10 h-10 mx-auto mb-1 flex items-center justify-center bg-blue-100 rounded-full">
                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                </svg>
              </div>
              <p class="text-xs font-medium">{{ t('productDetail.securePayment') }}</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 mx-auto mb-1 flex items-center justify-center bg-green-100 rounded-full">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <p class="text-xs font-medium">{{ t('productDetail.globalShipping') }}</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 mx-auto mb-1 flex items-center justify-center bg-purple-100 rounded-full">
                <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-xs font-medium">{{ t('productDetail.qualityGuarantee') }}</p>
            </div>
          </div> -->

          <!-- Collapsible Sections -->
          <div class="mt-6 space-y-2">
            <!-- Size Chart -->
            <CollapsibleSection :title="t('productDetail.sizeChart')">
              <p class="text-sm text-gray-600">
                The size chart is usually located at the last image in the product image list. If you cannot find it, please contact us.
              </p>
            </CollapsibleSection>

            <!-- Description -->
            <CollapsibleSection :title="t('productDetail.description')">
              <div class="text-sm space-y-2">
                <p><span class="font-medium">Pattern Type:</span> {{ product.description.patternType }}</p>
                <p><span class="font-medium">Details:</span> {{ product.description.details }}</p>
                <p><span class="font-medium">Bra Type:</span> {{ product.description.braType }}</p>
                <p><span class="font-medium">Support:</span> {{ product.description.support }}</p>
                <p><span class="font-medium">Fabric:</span> {{ product.description.fabric }}</p>
                <p><span class="font-medium">Material:</span> {{ product.description.material }}</p>
                <p><span class="font-medium">Composition:</span> {{ product.description.composition }}</p>
                <p><span class="font-medium">Care Instructions:</span> {{ product.description.careInstructions }}</p>
                <p><span class="font-medium">Chest Pad:</span> {{ product.description.chestPad }}</p>
              </div>
            </CollapsibleSection>
            <!-- Bulk Pricing Table -->
            <div class="mt-8">
              <h3 class="text-base md:text-lg font-semibold mb-4">{{ t('productDetail.bulkPricing') }}</h3>
              <div class="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
                <table class="w-full border-collapse border min-w-[500px] md:min-w-full">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="px-2 md:px-4 py-2 border text-left text-xs md:text-sm">{{ t('productDetail.quantity') }}</th>
                      <th class="px-2 md:px-4 py-2 border text-left text-xs md:text-sm">{{ t('productDetail.pricePerPiece') }}</th>
                      <th class="px-2 md:px-4 py-2 border text-left text-xs md:text-sm">{{ t('productDetail.discount') }}</th>
                      <th class="px-2 md:px-4 py-2 border text-left text-xs md:text-sm hidden sm:table-cell">{{ t('productDetail.discountCode') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(tier, index) in product.bulkPricing" :key="index" class="border-b">
                      <td class="px-2 md:px-4 py-2 border text-xs md:text-sm">{{ tier.quantity }}</td>
                      <td class="px-2 md:px-4 py-2 border text-xs md:text-sm">${{ tier.price }}</td>
                      <td class="px-2 md:px-4 py-2 border text-xs md:text-sm">{{ tier.discount }}</td>
                      <td class="px-2 md:px-4 py-2 border text-xs md:text-sm hidden sm:table-cell">{{ tier.code }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CollapsibleSection from '../components/CollapsibleSection.vue'
import Button from '../components/ui/Button.vue'
import Input from '../components/ui/Input.vue'
import { sportsBraProduct } from '../data/sportsBraProduct'

const { t } = useI18n()

const product = ref(sportsBraProduct)
const selectedImage = ref(product.value.images[0])
const selectedColor = ref(product.value.colors[0])

const quantities = ref<Record<string, number>>({
  'S': 1,
  'M': 1,
  'L': 1,
  'XL': 1
})

const selectColor = (color: typeof product.value.colors[0]) => {
  selectedColor.value = color
  selectedImage.value = color.image
}

const increaseQty = (size: string) => {
  quantities.value[size]++
}

const decreaseQty = (size: string) => {
  if (quantities.value[size] > 0) {
    quantities.value[size]--
  }
}

const totalPieces = computed(() => {
  return Object.values(quantities.value).reduce((sum, qty) => sum + qty, 0)
})

const totalWeight = computed(() => {
  const weightPerPiece = parseFloat(product.value.weight)
  return (totalPieces.value * weightPerPiece).toFixed(1)
})

const totalPrice = computed(() => {
  return totalPieces.value * product.value.price
})
</script>

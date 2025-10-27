<template>
  <section id="news" class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flexbox flexbox-between flexbox-middle mb-12 border-b border-gray-300">
        <!-- Title -->
        <div class="flexbox flexbox-middle">
          <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {{ t('news.title') }}
          </h2>
          <p class="text-gray-400 text-xl ml-5">NEWS</p>
        </div>

        <!-- Tabs -->
        <div class="flex">
          <button
            @click="activeTab = 'brand'"
            class="px-6 py-5 font-medium transition-colors border-b-2"
            :class="activeTab === 'brand' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'"
          >
            {{ t('news.brandNews') }}
          </button>
          <button
            @click="activeTab = 'industry'"
            class="px-6 py-5 font-medium transition-colors border-b-2"
            :class="activeTab === 'industry' ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'"
          >
            {{ t('news.industryNews') }}
          </button>
        </div>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          @click="jumpToProductsPage"
          v-for="article in articles"
          :key="article.id"
          class="group cursor-pointer"
        >
          <div class="aspect-[4/3] overflow-hidden rounded-lg mb-4">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform group-hover:scale-110"
              loading="lazy"
            >
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
            {{ article.title }}
          </h3>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">
            {{ article.excerpt }}
          </p>
          <button class="text-gray-900 font-medium flex items-center transition-transform">
            {{ t('news.viewDetails') }}
            <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t, locale } = useI18n()
const activeTab = ref('brand')

const articles = computed(() => {
  const isZh = locale.value === 'zh'

  return [
    {
      id: 1,
      image: '/images/home/banner/NEWS-01.jpg',
      title: isZh ? '穿瑜伽服运动有什么用？' : 'What is the use of wearing yoga suits for exercise?',
      excerpt: isZh
        ? '瑜伽服的面料必须透气。当我们练习瑜伽时，经过大量的热身后，身体会大汗淋漓。如果面料不透气，不吸汗，蒸笼会形成...'
        : 'The fabric of yoga suits must be breathable. When we practice yoga. After a large amount of warm-up, the body will sweat profusely...'
    },
    {
      id: 2,
      image: '/images/home/banner/NEWS-02.jpg',
      title: isZh ? '诚芳服饰官方网站全新改版上线，更好的服务客户' : 'The official website of Chengfang Clothing has undergone a new facelift',
      excerpt: isZh
        ? '泉州诚芳服饰有限公司主要从事户外运动、瑜伽服、健身服、运动夹克、运动文胸等产品...'
        : 'Quanzhou Chengfang Clothing Co., Ltd. is mainly engaged in outdoor sports, yoga clothing, fitness clothing...'
    },
    {
      id: 3,
      image: '/images/home/banner/NEWS-03.jpg',
      title: isZh ? '回馈社会，我们在行动' : 'Giving back to society, we are taking action',
      excerpt: isZh
        ? '公司始终坚持追求绿色环保的生产工艺和成品；将能源管理、废物管理、环境管理应用于可持续发展实践...'
        : 'The company always persistently pursues green and environmentally friendly production processes...'
    },
    {
      id: 4,
      image: '/images/home/banner/NEWS-04.jpg',
      title: isZh ? '瑜伽服装厂家告诉初学者购买瑜伽服要注意什么？' : 'What do yoga clothing manufacturers tell beginners to pay attention to?',
      excerpt: isZh
        ? '首先要考虑的是你的预算。俗话说，量力而行。在购买瑜伽服之前，你应该检查你的财务能力...'
        : 'The first thing to consider is your budget. As the saying goes, act according to your ability...'
    }
  ]
})

const jumpToProductsPage = () => {
  router.push('/products')
}
</script>

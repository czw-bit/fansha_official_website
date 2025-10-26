<template>
  <footer class="bg-gray-900 text-white mt-16">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- 公司信息 -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t('footer.companyName') }}</h3>
          <div class="space-y-2 text-sm text-gray-400">
            <p>{{ t('contact.address') }}: {{ t('contact.addressValue') }}</p>
            <p>{{ t('contact.mobile') }}: <a href="tel:+86-13110813176" class="hover:text-white">+86-13110813176</a></p>
            <p>{{ t('contact.wechat') }}: qz2644383577</p>
            <p>{{ t('contact.email') }}: <a href="mailto:13110813176@163.com" class="hover:text-white">13110813176@163.com</a></p>
            <p>{{ t('contact.website') }}: <a href="http://www.chengfangfitness.com" target="_blank" class="hover:text-white">www.chengfangfitness.com</a></p>
          </div>
        </div>

        <!-- 导航链接 -->
        <div class="md:col-span-1">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold mb-3">{{ t('nav.aboutUs') }}</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">{{ t('nav.profile') }}</a></li>
                <li><a href="#" class="hover:text-white">{{ t('nav.equipment') }}</a></li>
                <li><a href="#" class="hover:text-white">{{ t('nav.certificate') }}</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold mb-3">{{ t('nav.products') }}</h4>
              <ul class="space-y-2 text-sm text-gray-400">
                <li><a href="#" class="hover:text-white">{{ t('nav.yogaPants') }}</a></li>
                <li><a href="#" class="hover:text-white">{{ t('nav.brassiere') }}</a></li>
                <li><a href="#" class="hover:text-white">{{ t('nav.waistcoat') }}</a></li>
                <li><a href="#" class="hover:text-white">{{ t('nav.other') }}</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-4">
            <h4 class="font-semibold mb-3">{{ t('nav.news') }}</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white">{{ t('nav.companyNews') }}</a></li>
              <li><a href="#" class="hover:text-white">{{ t('nav.tradeNews') }}</a></li>
            </ul>
          </div>
        </div>

        <!-- 二维码 -->
        <div class="flex flex-col items-center md:items-end">
          <div class="bg-white p-3 rounded">
            <img
              src="https://ext.same-assets.com/3683566378/3325541088.png"
              alt="QR Code"
              class="w-32 h-32"
            >
          </div>
          <p class="text-sm text-gray-400 mt-2 text-center">{{ t('footer.scanCode') }}</p>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
        <p>{{ t('footer.copyright') }} {{ t('footer.poweredBy') }} <a href="http://www.300.cn" target="_blank" class="hover:text-white">www.300.cn</a></p>
        <div class="flex items-center justify-center gap-2 mt-2">
          <img src="https://ext.same-assets.com/3683566378/3325541088.png" alt="Chengfang" class="w-5 h-5" >
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35058202001226" target="_blank" class="hover:text-white">
            闽公网安备35058202001226号
          </a>
        </div>
        <p class="mt-2">
          <a href="https://beian.miit.gov.cn" target="_blank" class="hover:text-white">闽ICP备2023014255号-1</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

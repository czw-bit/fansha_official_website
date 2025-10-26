import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<'zh' | 'en'>(
    (localStorage.getItem('language') as 'zh' | 'en') || 'zh'
  )

  const setLanguage = (lang: 'zh' | 'en') => {
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'zh' ? 'en' : 'zh'
    setLanguage(newLang)
  }

  return {
    currentLanguage,
    setLanguage,
    toggleLanguage
  }
})

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import FloatingContact from './components//home/FloatingContact.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />
    <router-view />
    <Footer />
    <FloatingContact />
  </div>
</template>

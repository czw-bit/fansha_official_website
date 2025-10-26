<script setup lang="ts">
import Header from '../components/contact/Header.vue'
import Hero from '../components/contact/Hero.vue'
import Breadcrumb from '../components/contact/Breadcrumb.vue'
import ContactInfo from '../components/contact/ContactInfo.vue'
import ContactForm from '../components/contact/ContactForm.vue'
import MapSection from '../components/contact/MapSection.vue'
import Footer from '../components/contact/Footer.vue'
import FloatingButtons from '../components/contact/FloatingButtons.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-16 md:pb-0">
    <Header />
    <Hero />
    <Breadcrumb />

    <main class="container mx-auto px-4 py-8 md:py-12" style="background: #fff; padding: 60px 125px;">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <ContactInfo />
        <ContactForm />
      </div>

      <MapSection />
    </main>

    <Footer />
    <FloatingButtons />
  </div>
</template>

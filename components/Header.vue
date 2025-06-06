<script setup>
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const isMobileMenuOpen = ref(false)

onMounted(() => {
  if (!locale.value) {
    setLocale('en')
  }
})

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="py-[20px] px-[20px] md:px-[50px] lg:px-[148px]">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <nuxt-link to="/" class="text-xl font-bold text-dark">MySite</nuxt-link>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-[33px] text-[18px]">
        <nuxt-link to="/works">{{ $t('header.works') }}</nuxt-link>
        <nuxt-link to="/posts">{{ $t('header.blog') }}</nuxt-link>
        <nuxt-link to="/contact">{{ $t('header.contact') }}</nuxt-link>
        <div class="flex gap-2 ml-4">
          <button @click="setLocale('en')">EN</button>
          <button @click="setLocale('ua')">UA</button>
        </div>
      </nav>

      <!-- Burger button (mobile only) -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile nav -->
    <div v-if="isMobileMenuOpen" class="md:hidden mt-4 flex flex-col space-y-2 text-[18px]">
      <nuxt-link to="/works" @click="toggleMenu">{{ $t('header.works') }}</nuxt-link>
      <nuxt-link to="/posts" @click="toggleMenu">{{ $t('header.blog') }}</nuxt-link>
      <nuxt-link to="/contact" @click="toggleMenu">{{ $t('header.contact') }}</nuxt-link>
      <div class="flex gap-2">
        <button @click="setLocale('en')">EN</button>
        <button @click="setLocale('ua')">UA</button>
      </div>
      <!-- <LanguageSwitcher/> -->
    </div>
  </header>
</template>

<style></style>
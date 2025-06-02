<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
</script>

<template>
  <div class="flex items-center gap-2">
    <button @click="setLocale('en')" :class="{ 'ring ring-blue-400 rounded': locale === 'en' }">
      <img src="/icons/flags/en.svg" alt="EN" class="w-6 h-6" />
    </button>
    <button @click="setLocale('ua')" :class="{ 'ring ring-blue-400 rounded': locale === 'ua' }">
      <img src="/icons/flags/uk.svg" alt="UA" class="w-6 h-6" />
    </button>
  </div>
</template>
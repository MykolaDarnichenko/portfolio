<script setup lang="ts">
  const { locale } = useI18n()

  const { data: featuredWorks } = await useAsyncData(() =>
  queryCollection('works').order('date', 'DESC').all()
)

  const getField = (work: any, field: string) => {
  return locale.value === 'ua' ? work[`${field}Ua`] ?? work[field] : work[field]
  }
</script>

<template>
    <section class="px-[10px] pt-[12px] pb-[38px] md:px-[50px]
  lg:px-[148px] md:pt-[20px] sm:pb-[32px]">

  <h1 class="text-center text-2xl">Роботи</h1>

    <div class="flex flex-col gap-[17px] md:gap-[30px]">
    <article v-for="work in featuredWorks" :key="work.path" 
    class="text-dark flex flex-col gap-[18px] pt-[12px] pb-[20px] md:flex-row md:py-[24px]">
    <img :src="`${useRuntimeConfig().app.baseURL}${work.img}`" :alt="work.topic"
    class="rounded-[6px] md:max-w-[246px] object-contain">
    <div>
      <NuxtLink :to="work.path">
      <h3 class="font-bold text-dark text-[24px] leading-[125%]
      md:text-[30px] md:leading-normal">{{ getField(work, 'title') }}</h3>
    </NuxtLink>
      <div class="flex items-center gap-[22px] text-[16px] mt-[16px] md:gap-[24px]
      sm:text-[18px]
      ">
        <span class="bg-[#142850] font-black text-white text-[16px] px-[12px] py-[4px] rounded-[16px]
        md:text-[18px]">{{ work.date }}</span>
        <span class="text-light text-[16px]
        md:text-[20px]">{{ getField(work, 'topic') }}</span>
      </div>
      <p class="text-[16px] mt-[24px] md:text-[20px] md:mt-[18px]">{{ getField(work, 'description') }}</p>
    </div>
    </article>
  </div>

  </section>
</template>
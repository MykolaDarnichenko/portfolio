<script setup lang="ts">
const { locale } = useI18n()

const { data: posts } = await useAsyncData(() =>
  queryCollection('posts').order('date', 'DESC').all()
)

const getField = (post: any, field: string) => {
  return locale.value === 'ua' ? post[`${field}Ua`] ?? post[field] : post[field]
}
</script>

<template>

  <section class="bg-[#EDF7FA] px-[10px] pt-[12px] pb-[38px] md:px-[50px]
  lg:px-[148px] sm:pt-[20px] sm:pb-[32px]">

  <h1 class="text-center text-2xl">Блог</h1>

  <div class="flex flex-col gap-[17px]
  sm:gap-[20px]">
    <article v-for="post in posts" :key="post.path" 
    class="bg-white w-full text-dark px-[20px] pt-[12px] pb-[20px]
    sm:px-[22px] sm:py-[24px]">
    <NuxtLink :to="post.path">
      <h3 class="font-bold text-[22px] leading-[136%]
      sm:text-[26px] sm:leading-normal">{{ getField(post, 'title') }}</h3>
    </NuxtLink>
      <div class="flex gap-[24px] text-[16px] pt-[12px] sm:pt-[17px]
      sm:text-[18px]
      ">
        <span>{{ getField(post, 'date') }}</span>
        <div class="bg-black w-[1px] h-[20px]"></div>
        <span>{{ getField(post, 'topic') }}</span>
      </div>
      <p class="text-[16px] pt-[19px] sm:pt-[11px]">{{ getField(post, 'description') }}</p>
    </article>
  </div>

  </section>
</template>

<style>

</style>
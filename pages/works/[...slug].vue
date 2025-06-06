<script setup lang="ts">
// const route = useRoute()
// const { locale } = useI18n()

// const rawPath = route.path.replace(/^\/(ua|en)/, '') || '/'
// const contentPath = rawPath // Например: /posts/design

// const post = ref<any>(null)

// const fetchPost = async () => {
//   const { data } = await useAsyncData(`post-${contentPath}`, () =>
//     queryCollection('posts').path(contentPath).first()
//   )
//   post.value = data.value
// }

// await fetchPost()

// watch(locale, async () => {
//   await fetchPost()
// })

// const getField = (post: any, field: string): string => {
//   const uaField = `${field}Ua`
//   if (locale.value === 'ua') {
//     if (uaField in post) return post[uaField]
//     console.warn(`⚠️ Field ${uaField} not found in post`, post)
//   }
//   return post[field]
// }

const { data, getField } = useMarkdownContent('works')

</script>

<template>
    <section v-if="data" class="bg-[#EDF7FA] px-[10px] pt-[12px] pb-[38px] md:px-[50px]
  lg:px-[148px] sm:pt-[20px] sm:pb-[32px]">

  <div class="flex flex-col gap-[17px]
  md:flex-row sm:gap-[20px]">
    <article 
    class="bg-white w-full text-dark px-[20px] pt-[12px] pb-[20px]
    sm:px-[22px] sm:py-[24px]">
      <h3 class="font-bold text-[22px] leading-[136%]
      sm:text-[26px] sm:leading-normal">{{ getField('title') }}</h3>
      <div class="flex gap-[24px] text-[16px] pt-[12px] sm:pt-[17px]
      sm:text-[18px]
      ">
        <span>{{ getField('date') }}</span>
        <div class="bg-black w-[1px] h-[20px]"></div>
        <span>{{ getField('topic') }}</span>
      </div>
      <p class="text-[16px] pt-[19px] sm:pt-[11px]">{{ getField('description') }}</p>
    </article>
  </div>

  </section>

  <div v-else>
    <p>Сторінку не знайдено</p>
  </div>
</template>
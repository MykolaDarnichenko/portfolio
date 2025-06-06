<script setup lang="ts">
const { locale } = useI18n()

const { data: recentPosts } = await useAsyncData(() =>
  queryCollection('posts').order('date', 'DESC').limit(2).all()
)

// const { data: posts } = await useAsyncData(() => queryCollection('content').path('/posts').all())

// const posts = ref([
//   {
//     id: 1,
//     title: 'Making a design system from scratch',
//     titleUa: 'Створення системи дизайну з нуля',
//     date: '12 Feb 2020',
//     dateUa: '12 Лют 2020',
//     topic: 'Design, pattern',
//     topicUa: 'Дизайн, візерунок',
//     description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//     descriptionUa: "Вони дуже м'які і не залишають ніде, де є біль. Він любить піклуватися про свою сім'ю. Вправа принесе результат."
//   },
//   {
//     id: 2,
//     title: 'Creating pixel perfect icons in Figma',
//     titleUa: 'Створення піксельних піктограм у Figma',
//     date: '12 Feb 2020',
//     dateUa: '12 Лют 2020',
//     topic: 'Figma, icon design',
//     topicUa: 'Figma, дизайн іконок',
//     description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
//     descriptionUa: "Вони дуже м'які і не залишають ніде, де є біль. Він любить піклуватися про свою сім'ю. Вправа принесе результат."
//   },
// ])

const getField = (post: any, field: string) => {
  return locale.value === 'ua' ? post[`${field}Ua`] ?? post[field] : post[field]
}
</script>

<template>
    <section class="bg-[#EDF7FA] px-[10px] pt-[12px] pb-[38px] md:px-[50px]
  lg:px-[148px] sm:pt-[20px] sm:pb-[32px]">

    <div class="flex justify-center md:justify-between md:items-center pb-[12px] sm:pb-[20px]">
      <h2 class="text-[18px] text-dark leading-[333%] md:text-[22px] md:leading-[272%]">{{ $t('main.recent_posts.title') }}</h2>
      <nuxtLink to="/posts" class="hidden md:block text-[#00A8CC] text-[16px]">{{ $t('main.recent_posts.view') }}</nuxtLink>
    </div>

  <div class="flex flex-col gap-[17px]
  md:flex-row sm:gap-[20px]">
    <article v-for="post in recentPosts" :key="post.path" 
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
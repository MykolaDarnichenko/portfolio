<script setup>
//   const posts = ref([
//     { id: 1, title: 'Making a design system from scratch', date: '12 Feb 2020', topic: 'Design, pattern', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
//     { id: 1, title: 'Creating pixel perfect icons in Figma', date: '12 Feb 2020', topic: 'Figma, icon design', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
// ])
</script>

<template>
  <section class="flex flex-col gap-[34px] px-[23px] pt-[34px] pb-[58px]
  md:flex-row md:justify-between md:gap-[40px] md:pt-0 sm:pb-[71px] md:px-[50px] lg:px-[148px]">
    <div class="flex flex-col order-2 items-center gap-[33px] 
    md:order-1 md:pt-[18px] md:items-start md:justify-center md:gap-[40px] md:max-w-[497px] text-center md:text-left
    xl:max-w-[50vw]">
      <h1 class="font-bold text-dark text-[32px] leading-[125%]
      md:text-[44px] md:leading-[136%]">{{ $t('main.resume.title') }}</h1>
        <p class="font-normal text-[16px]">{{ $t('main.resume.text') }}</p>
<div>
  <a
    href="/files/resume.pdf"
    download
    class="px-[20px] py-[13px] bg-[#FF6464] font-medium text-white text-[20px] capitalize"
  >
  {{ $t('main.resume.button') }}
  </a>
</div>
    </div>
    <div class="order-1 self-center md:order-2">
      <img src="/images/avatar.png" alt="Avatar" class="w-[50vw] h-[50vw] max-w-[250px] max-h-[250px] rounded-full border border-[black] object-cover
      xl:w-[50vw] xl:h-[50vw] xl:max-w-[300px] xl:max-h-[300px]">
    </div>
  </section>

  <!-- <section class="bg-[#EDF7FA] px-[10px] pt-[12px] pb-[38px]
  sm:px-[148px] sm:pt-[20px] sm:pb-[32px]">
    <div class="flex justify-between pb-[12px] sm:pb-[20px]">
      <h2>{{ $t('main.recent_posts.title') }}</h2>
      <nuxtLink to="/blog">{{ $t('main.recent_posts.view') }}</nuxtLink>
    </div> -->

    <RecentPosts/>

    <!-- <div class="flex flex-col gap-[30px]">
      <article v-for="post in posts" :key="post.id" 
    class="bg-white">
      <h3>{{ post.title }}</h3>
      <div>
        <span>{{ post.date }}</span>
        <span>{{ post.topic }}</span>
      </div>
      <p>{{ post.description }}</p>
    </article>
    </div> -->

  <!-- </section> -->

  <FeaturedWorks/>

</template>

<style>

</style>
<script setup lang="ts">
  const { locale } = useI18n()

  const works = ref([
    {
      id: 1,
      title: 'Designing Dashboards',
      titleUa: 'Проектування інформаційних панелей',
      img: '/images/works/dashboard.png',
      date: '2020',
      topic: 'Dashboard',
      topicUa: 'Приладова панель',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      descriptionUa: "Вони дуже м'які і не залишають ніде, де є біль. Він любить піклуватися про свою сім'ю. Вправа принесе результат."
    },
    {
      id: 2,
      title: 'Vibrant Portraits of 2020',
      titleUa: 'Яскраві портрети 2020 року',
      img: '/images/works/illustration.png',
      date: '2018',
      topic: 'Illustration',
      topicUa: 'Ілюстрація',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      descriptionUa: "Вони дуже м'які і не залишають ніде, де є біль. Він любить піклуватися про свою сім'ю. Вправа принесе результат."
    },
  ])

  const getField = (work: any, field: string) => {
  return locale.value === 'ua' ? work[`${field}Ua`] ?? work[field] : work[field]
  }
</script>

<template>
    <section class="px-[10px] pt-[12px] pb-[38px] md:px-[50px]
  lg:px-[148px] md:pt-[20px] sm:pb-[32px]">

    <div class="flex justify-center md:justify-between md:items-center pb-[12px] md:pb-[20px]">
      <h2 class="text-[18px] text-dark leading-[333%] md:text-[22px] md:leading-[272%]">{{ $t('main.featured_works.title') }}</h2>
      <nuxtLink to="/blog" class="hidden md:block text-[#00A8CC] text-[16px]">{{ $t('main.featured_works.view') }}</nuxtLink>
    </div>

    <div class="flex flex-col gap-[17px] md:gap-[30px]">
    <article v-for="work in works" :key="work.id" 
    class="text-dark flex flex-col gap-[18px] pt-[12px] pb-[20px] md:flex-row md:py-[24px]">
    <img :src="work.img" :alt="work.topic"
    class="rounded-[6px] md:max-w-[246px] object-contain">
    <div>
      <h3 class="font-bold text-dark text-[24px] leading-[125%]
      md:text-[30px] md:leading-normal">{{ getField(work, 'title') }}</h3>
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
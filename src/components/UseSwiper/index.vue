<template>
  <!-- swiper -->
  <div class="example-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in imgList" :key="index" :style="{backgroundImage: `url('${item}')`}">Slide 1</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          // slidesPerView: 4,
          // spaceBetween: 20,
          // slidesPerGroup: 4,
          // loopFillGroupWithBlank: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        },
        imgList: [
          require('@/assets/1.jpg'),
          require('@/assets/2.jpg'),
          require('@/assets/3.jpeg'),
          require('@/assets/4.jpeg'),
          require('@/assets/5.jpg'),
          require('@/assets/6.jpg'),
        ]
      }
    },
    mounted(){

    }
  }
</script>
<style>
  .swiper-container{
    width: 700px;
    position: static ;
  }
  .swiper-wrapper{
    width: 700px;
    margin: 0 auto;
  }
  .swiper-slide{
    width: 250px;
    height: 400px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .example-container{
    position: relative;
    top: 30%;
  }
</style>
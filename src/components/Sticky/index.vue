<template>
  <div class="sticky">
    <p>我是header</p>
    <section ref="sticky" :style="{ position: position }"></section>
    <div v-for="i in new Array(100)" :key="i">内容</div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    components: {

    },
    props: {

    },
    data() {
      return {
        position: '',
        scrollTop: 0
      }
    },
    computed: {

    },
    mounted() {
      // 也可以通过js的方法进行定位
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(){
        let stickyDom = this.$el
        let scrollTop = stickyDom.getBoundingClientRect().top
        if(scrollTop <=  0){
          this.position = 'fixed'
        } else {
          this.position = ''
        }
      } 
    }
  }
</script>

<style lang="scss" scoped>
  p{
    height: 50px;
    width: 100%;
  }
  section{
    width: 100%;
    height: 50px;
    background: lightseagreen;
    top: 0;
    // top: 0;   //css中的粘性定位可以实现元素滚动的时候粘性
    // position: sticky;
  }
  div{
    line-height: 50px;
  }
</style>
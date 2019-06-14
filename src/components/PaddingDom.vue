<template>
  <div class="padding-dom">
    <div class="padding-dom__banner">
      <!-- <img src="@/assets/1.jpg" alt=""> -->
    </div>
    <div class="padding-dom__content">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'paddingDom',
    components: {

    },
    props: {

    },
    data () {
      return {
  
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
// 如果元素的padding值是百分比时是按照当前元素的父级元素的宽度来计算的
// 如果的元素的padding值是百分比并且元素设置了绝对定位 ， 那么元素会按照
// 具有定位属性的父级元素的宽度作为参考，如果没有就会按照跟元素就行参考

  .padding-dom__banner{
    // padding-bottom: 57%;
  }

  img{
    width: 100%;
    height: 100%;
  }

  .padding-dom__content{
    width: 300px;
    height: 150px;
    background: red;
  }
  .inner{
    position: absolute;
    width: 80px;
    height: 50px;
    background: lightblue;
    padding: 10%;
  }
</style>
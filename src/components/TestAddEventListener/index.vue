<template>
  <div class="test-addEventListener">
    <div class="box" ref="box">
      <div class="inner" ref="inner"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'name',
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
      let box = this.$refs.box
      let inner = this.$refs.inner

      // addEventListener   可以给一个元素绑定多个事件
      // addEventListener中的第三个参数指的是  事件是在什么阶段执行的
      //  false-默认值  事件实在冒泡阶段执行   true事件实在捕获阶段执行的
      box.addEventListener('click', this.handleBox, true)

      inner.addEventListener('click', () => {
        console.log('inner')
      }, false)
    },
  
    methods: {
      handleBox () {
        console.log('box')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin margin{
    margin: 0 auto;
  }
  .box{
    width: 400px;
    height: 400px;
    background-color: lightcoral;
    @include margin;
  }
  .inner{
    width: 200px;
    height: 200px;
    background-color:lightseagreen;
    @include margin;
  }
</style>
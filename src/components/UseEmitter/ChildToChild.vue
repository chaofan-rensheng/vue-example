<template>
  <div class="child-to-child">
    <div>
      孙子组件
    </div>
    <el-button type="primary" @click="handleButton">点击子组件里面的组件</el-button>
  </div>
</template>

<script>
  import Emitter from './emitter'
  export default {
    name: 'ChildToChild',
    componentName: 'ChildToChild',
    mixins: [Emitter],
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
      handleButton () {
        this.dispatch('Parent', 'listenerToChild', ['我是孙子组件', '我是第二个参数'])
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
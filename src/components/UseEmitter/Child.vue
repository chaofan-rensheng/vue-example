<template>
  <div class="child">
    子组件
    <div>
      <el-button type="primary" @click="dispatchTest">点击试试</el-button>
    </div>
  </div>
</template>

<script>
  import Emitter from './emitter'
  export default {
    name: 'Child',
    componentName: 'Child',
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
      dispatchTest () {
        this.dispatch('Parent', 'listenerToChild', '我是子组件')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
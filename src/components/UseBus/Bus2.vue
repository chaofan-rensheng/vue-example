<template>
  <div class="bus2">
    <div>bus2</div>
    <el-button @click="handleClickBus2">点击试试 bus2</el-button>
  </div>
</template>

<script>
  import { bus } from './index'
  export default {
    name: 'Bus2',
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
      handleClickBus2 () {
        console.log('-------', bus)
        bus.aaa = 22222
        bus.$emit('handleClickBus1', '我是测试数据')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="bus1">
    <div> bus1 </div>

    <Bus2></Bus2>

  </div>
</template>

<script>
  import { bus } from './index'
  import Bus2 from './Bus2'
  export default {
    name: 'Bus1',
    components: {
      Bus2
    },
    props: {

    },
    data () {
      return {
  
      }
    },
    computed: {

    },
    created () {
      bus.$on('handleClickBus1', this.handleBus)
    },
    methods: {
      handleBus (value) {
        console.log('handleBus', value, bus.aaa)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
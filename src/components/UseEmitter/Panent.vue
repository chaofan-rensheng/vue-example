<template>
  <div class="parent">
    <div>parent</div>
    <hr>
    <Child></Child>
    <hr>
    <Common>
      <child-to-child></child-to-child>
    </Common>
  </div>
</template>

<script>
  import Emitter from './emitter'
  import Child from './Child'
  import ChildToChild from './ChildToChild'
  import Common from './Common'
  export default {
    name: 'Parent',
    componentName: 'Parent',
    mixins: [Emitter],
    components: {
      Child,
      ChildToChild,
      Common
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
      this.$on('listenerToChild', (...arg) => {
        console.log('listenerToChild -----', ...arg)
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="component-a">
    <h3 v-on="$listeners">和平精英</h3>
    <!-- <h3 v-on="$listeners.test">刺激战场</h3> -->
    <div>{{$attrs.name}}----{{$attrs.value}}</div>
    <Child v-bind="$attrs"></Child>
  </div>
</template>

<script>
  import Child from './Child'
  export default {
    name: 'ComponentA',
    components: {
      Child
    },
    props: {
      name: {
        type: String,
        default: 'eeee'
      }
    },
    data () {
      return {
  
      }
    },
    computed: {

    },
    mounted () {
      console.log(this.$listeners, this.$attrs, this.$props)
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="use-sync">
    <component-a :visible.sync="visible"></component-a>
  </div>
</template>

<script>
  import ComponentA from './ComponnetA'
  export default {
    name: 'UseSync',
    components: {
      ComponentA
    },
    props: {
  
    },
    data () {
      return {
        visible: true
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

</style>
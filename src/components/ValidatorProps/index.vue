<template>
  <div class="name">
    <div>validator props</div>
    <el-button @click="handleClick">渐渐</el-button>
    <component-a :count="count"></component-a>
  </div>
</template>

<script>
  import ComponentA from './Components/ComponentA'
  export default {
    name: 'name',
    components: {
      ComponentA
    },
    props: {
  
    },
    data () {
      return {
        count: 10
      }
    },
    computed: {

    },
    mounted () {
      console.log('validator props')
    },
    methods: {
      handleClick () {
        this.count -= 1
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
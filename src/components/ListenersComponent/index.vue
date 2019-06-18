<template>
  <div class="listeners-component">
    <div  class="box">
      <component-a @click="handleClick" @test="handleTest" value="value" name="fsfsfsfs" class="sss"></component-a>
    </div>
  </div>
</template>

<script>
  import ComponentA from './Components/ComponentA'
  export default {
    name: 'ListenersComponent',
    components: {
      ComponentA
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
      handleClick () {
        console.log('box click')
      },

      handleTest () {
        console.log('handleTest')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    width: 100px;
    height: 100px;
    background: lightblue;
  }
</style>
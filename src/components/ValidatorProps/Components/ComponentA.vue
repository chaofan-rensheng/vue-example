<template>
  <div class="component-a">
    <div class="box">{{count}}</div>
  </div>
</template>

<script>
  export default {
    name: 'name',
    components: {

    },
    props: {
      count: {
        type: Number,
        default: 100,
        validator: function (value) {
          return value >= 0
        }
      }
    },
    data () {
      return {
  
      }
    },
    computed: {

    },
    mounted () {
      console.log(this.$parent.$options, 'parent')
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .box{
    width: 200px;
    height: 200px;
    background: lightseagreen;
  }
</style>
<template>
  <div class="component-a">
    <div>component a---{{visible}}</div>
    <el-button type="primary" @click="handleClick">点击试试 false</el-button>
    <el-button type="primary" @click="handleClickFalse">点击试试 true</el-button>
  </div>
</template>

<script>
  export default {
    name: 'ComponentA',
    components: {

    },
    props: {
      visible: ''
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
        this.$emit('update:visible', false)
      },

      handleClickFalse () {
        this.$emit('update:visible', true)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
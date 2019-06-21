<template>
  <span class="base-cascader" v-clickOutside="handleClose">
    <el-input placeholder="请选择" @focus="handleFocus" style="width: 200px"></el-input>
    <cascader-menu></cascader-menu>
  </span>  
</template>

<script>
  import CascaderMenu from './menu'
  export default {
    name: 'BaseCascader',
    components: {
      CascaderMenu
    },
    props: {
      options: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        menu: null,
        showCascaderList: false,
        current: 0
      }
    },
    computed: {

    },
    mounted () {
      // this.menu = new Vue(CascaderMenu).$mount()
    },
    methods: {
      handleFocus () {
        this.showCascaderList = true
      },
      handleClose () {
        this.showCascaderList = false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
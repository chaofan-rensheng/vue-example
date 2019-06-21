<template>
  <div class="use-mixins">
    <div>useMxin</div>
    <el-button type="primary" @click="handleClick">点击试试</el-button>
  </div>
</template>

<script>
  import test from '@/mixins/test'
  export default {
    name: 'UseMixins',
    components: {

    },
    mixins: [test],
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

    }
  }
</script>

<style lang="scss" scoped>

</style>
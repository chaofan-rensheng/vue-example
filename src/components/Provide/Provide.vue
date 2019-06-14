<template>
  <div class="provide">
    provide
    <provide-child ref='provideChild'></provide-child>
  </div>
</template>
<script>
import ProvideChild from './ProvideChild'
export default {
  name: 'provide',
  data () {
    return {
      datas: [
        {
          id: 1,
          label: '产品一'
        },
        {
          id: 1,
          label: '产品二'
        },
        {
          id: 1,
          label: '产品三'
        }
      ],
      number: 10
    }
  },

  components: {
    ProvideChild
  },

  provide () { //  父组件提供数据
    return {
      datas: this.datas,
      _this: this // 可以提供this  把父组件中的所有数据都提供给子组件
    }
  },

  mounted () {
    this.$refs.provideChild.handleChange() // 在父组件中调用子组件的方法
  },

  methods: {
    handleClick (value) {
      console.log('click ' + value)
    }
  }
}
</script>


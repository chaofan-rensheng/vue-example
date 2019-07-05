<template>
  <div class="provide">
    provide
    <provide-child ref='provideChild'></provide-child>
    <el-button @click="handleAdd">点击试试</el-button>
    <el-button type="primary" @click="handleProvide">点击传简单对象试试</el-button>
  </div>
</template>
<script>
import Vue from 'vue'
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
      number: 10,
      message: 100000
    }
  },

  components: {
    ProvideChild
  },

  // 这里传简单数据类型和传复杂数据类型还是有区别的
  // 如果传入的是复杂数据类型在父组件中修改之后，子组件也会被修改，这是因为指针指向的是同一个地址
  // 如果传入的是简单的数据类型   父组件中修改子后  子组件中不会同步修改

  provide () { //  父组件提供数据
    return {
      message: this.message,
      datas: this.datas,
      _this: this // 可以提供this  把父组件中的所有数据都提供给子组件
    }
  },

  // 方法二:使用2.6最新API Vue.observable 优化响应式 provide
  // provide () {
  //   this.message = Vue.observable({
  //     color: 'blue'
  //   })
  //   return {
  //     theme: this.theme
  //   }
  // },

  mounted () {
    this.$refs.provideChild.handleChange() // 在父组件中调用子组件的方法
  },

  methods: {
    handleClick (value) {
      console.log('click ' + value)
    },

    handleAdd () {
      this.number += 1
      console.log(this.number)
    },

    handleProvide () {
      this.message += 1
    }
  }
}
</script>

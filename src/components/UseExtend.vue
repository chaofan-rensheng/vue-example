<template>
  <div class="use-extend">
    <h3>
      这是一个例子
    </h3>
    <el-button type='primary' @click='click'>点击</el-button>
  </div>
</template>
<script>
import MyAlert from '@/components/Extend/index'
export default {
  name: 'example',
  data () {
    return {

    }
  },
  methods: {
    click(){
      // MyAlert('你好')  //这种是导入组件的样式
      this.$MyAlert('use extend')  //这种是挂载到vue的原型上面
    }
  }
}
</script>


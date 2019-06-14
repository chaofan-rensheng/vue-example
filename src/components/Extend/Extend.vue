<template>
    <div class="useExtend">
         <transition name="el-message-fade">
            <div  v-show="visible" class="my-msg">{{message}}</div>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'useExtend',
  data () {
    return {
      message: '',  // 需要提示用户的内容
      visible: true // 显示与隐藏
    }
  },
  methods: {
    close () {
      setTimeout(() => {
        this.$emit('results', 'test') // 自定义方法
        this.visible = false // 隐藏元素
        this.$el.remove() // 移除DOM
      }, 2000)
    }
  },
  mounted () {
    this.close()
  }
}
</script>


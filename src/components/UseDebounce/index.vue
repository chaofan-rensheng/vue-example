<template>
  <div class="use-debounce">
    <div>use debounce</div>
    <el-button type='primary' @click="handleClick">debounce</el-button>
  </div>
</template>

<script>
export default {
  name: 'UseDebounce',
  components: {

  },
  props: {

  },
  data () {
    return {
      timer: null,
      numTimer: null,
      num: 0
    }
  },
  computed: {

  },
  mounted () {
    // document.addEventListener('scroll', this.debounce1((value) => {
    //   console.log('打印了', value)
    // }, 1000))

    document.addEventListener('scroll', this.debounce2((value) => {
      console.log('打印了', value)
    }, 1000, true))
  },
  methods: {
    // 防抖函数的原理：就是设置一个延时函数，在规定的延时结束后进行正常的操作，如果延时没有结束没次点击
    // 都要重新进行延时

    handleClick () {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.timer = null
        }, 3000)
      } else {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.timer = null
        }, 3000)
      }
    },

    debounce1 (fn, wait = 50) {
    // 通过闭包缓存一个定时器 id
      let timer = null
      // 将 debounce 处理结果当作函数返回
      // 触发事件回调时执行这个返回函数
      return function (...args) {
        // 如果已经设定过定时器就清空上一次的定时器
        if (timer) clearTimeout(timer)

        // 开始设定一个新的定时器，定时器结束后执行传入的函数 fn
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
      }
    },

    // 实现 2
    // immediate 表示第一次是否立即执行
    debounce2 (fn, wait = 50, immediate) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)

        // ------ 新增部分 start ------
        // immediate 为 true 表示第一次触发后执行
        // timer 为空表示首次触发
        if (immediate && !timer) {
          fn.apply(this, args)
        }
        // ------ 新增部分 end ------

        timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
      }
    }

    //  节流函数指的是 函数在每段间隔内都执行一次   场景：监听滚动事件添加节流函数后，每隔固定的一段时间执行一次
    //  防抖函数指的是 函数在一段时间内，无论出发了多少次，都只执行最后一次

  }
}
</script>

<style lang="scss" scoped>
  .use-debounce{
    width: 400px;
    height: 2000px;
    margin: 0 auto;
    background: lightcoral;
  }
</style>

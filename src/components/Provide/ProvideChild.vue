<template>
  <div class="provide-child">
    provide child
    <ul>
      <li v-for="(item, index) in datas" :key='index'>
        {{item.label}}
      </li>
    </ul>
    <div>{{_this.number}}</div>

    <div>{{message.num}}</div>
  </div>
</template>
<script>
export default {
  name: 'provideChild',
  data () {
    return {
      name: 'provideChild'
    }
  },

  inject: ['datas', '_this', 'message'], // 子组件注入数据

  mounted () {
    // console.log(this.datas, this._this.number,  'ppppppp')
    this._this.handleClick('provide child') // 在子组件中获取父组件中的方法  并传递数据
  },

  methods: {
    handleChange () {
      console.log('handleChange aaaa')
    }
  }
}
</script>

<template>
  <div class="use-cascader" ref="container">
    <base-cascader :options="options"></base-cascader>
  </div>
</template>

<script>
  import BaseCascader from './main'
export default {
    name: 'UseCascader',
    components: {
      BaseCascader
    },
    props: {

    },
    data () {
      return {
        options: [
          {value: 'zhinan',
            label: '指南',
            children: [
              {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'sikaoti',
                label: '思考题',
                children: [{
                  value: 'aaa',
                  label: 'aaa'
                }, {
                  value: 'bbb',
                  label: 'bbb'
                }, {
                  value: 'ccc',
                  label: 'ccc'
                }]
              }
            ]
          }
        ],
        menuList: [
          {
            name: '哈哈',
            value: 'haha'
          }, {
            name: '哼哼',
            value: 'hengheng'
          }, {
            name: '咚咚',
            value: 'dongdong'
          }
        ]
      }
    },
    computed: {

    },
    provide () {
      return {
        cascader: this
      }
    },
    mounted () {

    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>
  .use-cascader{
    padding: 20px;               
    border: 1px solid red;
  }         
</style>
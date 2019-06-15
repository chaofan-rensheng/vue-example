<template>
  <div class="use-base-form">
    <base-form :formData="formData" v-model="submitData" @handleSubmit="handleSubmit">
    </base-form>
  </div>
</template>

<script>
import BaseForm from './index'

const sexSelect = [{
  value: '0',
  label: '无'
}, {
  value: '1',
  label: '男'
}, {
  value: '2',
  label: '女'
}]

const citySelect = [{
  value: '100',
  label: '杭州'
}, {
  value: '101',
  label: '苏州'
}, {
  value: '102',
  label: '郑州'
}]

const cascaderSelect = [{
  value: 'zhinan',
  label: '指南',
  children: [{
    value: 'shejiyuanze',
    label: '设计原则'
  }, {
    value: 'shejisilu',
    label: '设计思路'
  }]
}, {
  value: 'xuqiu',
  label: '需求',
  children: [{
    value: 'xuqiuyaunli',
    label: '需求原理'
  }, {
    value: 'xuqiuneirong',
    label: '需求内容'
  }]
}]

export default {
  name: 'UseBaseForm',
  components: {
    BaseForm
  },
  props: {

  },
  data () {
    return {
      submitData: {},
      formData: [
        { type: 'input',
          label: '姓名',
          name: 'useName',
          placeholder: '请输入姓名',
          maxlength: 11,
          rules: {required: true, message: '姓名不能为空'}
        },
        { type: 'input',
          label: '年龄',
          name: 'age',
          rules: [{required: true, message: '年龄不能为空'}]
        },
        { type: 'select',
          label: '性别',
          name: 'sex',
          options: sexSelect,
          rules: [{required: true, message: '性别不能为空'}]
        },
        { type: 'select',
          label: '城市',
          name: 'city',
          options: citySelect,
          rules: [{required: true, message: '性别不能为空'}]
        }, {
          type: 'cascader',
          label: '类型',
          name: 'type',
          options: cascaderSelect
        }, {
          label: '时间',
          type: 'datePicker',
          name: 'item'
        }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    handleSubmit () {
      console.log('handleSubmit   提交数据', this.submitData)
    }
  }
}
</script>

<style lang="scss">
  .use-base-form{
    .el-select, .el-cascader, .el-input{
      width: 100%;
    }
  }
</style>
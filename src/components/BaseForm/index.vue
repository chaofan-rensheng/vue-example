<template>
  <div class="base-form" v-bind="$attrs" v-on="$listeners">
    <el-form :model="formModel"  ref="baseForm" label-width="200px" style="width: 500px; margin: 0 auto;">
      <el-form-item v-for="(item, index) in this.$attrs.formData" 
        :key="index" 
        :label="item.label"
        :prop="item.name"
        :rules="item.rules">
        <el-input v-if="item.type === 'input'" v-model="formModel[item.name]" :placeholder="item.placeholder" :maxlength="item.maxlength"></el-input>
        <el-select v-else-if="item.type === 'select'" v-model="formModel[item.name]" placeholder="请选择">
          <el-option
            v-for="option in item.options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :placeholder="item.placeholder">
          </el-option>
        </el-select>
        <el-cascader v-else-if="item.type === 'cascader'"
          v-model="formModel[item.name]"
          :placeholder="item.placeholder"
          :options="item.options">
        </el-cascader>
        <el-date-picker v-else-if="item.type === 'datePicker'"
          v-model="formModel[item.name]"
          type="date"
          value-format="timestamp"
          :placeholder="item.placeholder ? item.placeholder : '请选择日期'">
        </el-date-picker>
      </el-form-item>
      <el-form-item style="textAlign: center">
        <el-button type="primary" @click="hadnleReset">重置</el-button>
        <el-button type="primary" @click="handleSubmit">{{this.$attrs.submitText ? this.$attrs.submitText : '确定'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

/**
 * @description: 
 * @param { Array } formData  表单数据
 * @param { String } type  表单控件类型
 * @param { String } name  表单控件属性
 * @param { String } label  表单控件label
 * @param { Array } label  表单控件校验规则
 * @param { Boolean } isReset 是否需要重置按钮
 * @param { String } placeholder  表单控件中的提示文字
 * @param { Number } maxlength  表单控件的可输入长度
 * @param { String } submitText 表单提交按钮文案
 * @function handleSubit 表单提交数据
 * eg.<base-form :formData="formData" v-model="submitData" @handleSubmit="handleSubmit"></base-form>
 */    

<script>
  export default {
    name: 'BaseForm',
    components: {

    },
    props: ['value'],
    data () {
      return {
        formModel: {
  
        }
      }
    },
    computed: {
  
    },
    mounted () {
      this.formatData()
      this.$refs.baseForm.resetFields()
    },
  
    methods: {
      formatData () {
        var obj = {}
        if (this.value) {
          this.formModel = this.value
        } else {
          this.$attrs.formData.forEach((item, index) => {
            obj[item.name] = item.type === 'cascader' ? [] : ''
          })
          this.formModel = obj
        }
      },

      handleSubmit () {
        this.$refs.baseForm.validate((valid) => {
          if (valid) {
            this.$emit('input', this.formModel)
            this.$emit('handleSubmit')
          }
        })
      },

      hadnleReset () {
        this.$refs.baseForm.resetFields()
      }
  
    }
  }
</script>

<style lang="scss" scoped>

</style>
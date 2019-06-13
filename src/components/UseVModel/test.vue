<template>
  <div class="test">
    test
    <h3>这是父组件中的值-----{{value}}</h3>
    <input type="text" @input="handleChange">
  </div>
</template>
<script>
export default {
  name: 'test',
  props: ['value'],
  data(){
    return{

    }
  },
  methods: {
    handleChange(e){
      this.$emit('input', e.target.value)
    }
  }
}
</script>

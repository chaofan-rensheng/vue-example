<template>
  <div class="use-vModel">
    use vModel
    <Test v-model="params"></Test>
    <!-- v-model只是vue中的一种语法糖  相当于<Test :value="params" @input="params = $event.target.value"></Test> -->
  </div>
</template>
<script>
import Test from './test'
export default {
  name: 'useVModel',
  components: {
    Test
  },
  data(){
    return{
      params: 'sssss'
    }
  }
}
</script>

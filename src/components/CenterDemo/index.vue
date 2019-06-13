<template>
  <div class="center-demo">
    <div class="demo1">
      <div class="demo1_inner"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'centerDemo',
  data(){
    return {

    }
  }
}
</script>
<style>
  .demo1{
    width: 400px;
    height: 400px;
    background: lightgray;
    display: flex;  
    /* 实现子元素的垂直水平居中 */
  }
  .demo1_inner{
    width: 100px;
    height: 100px;
    background: lightseagreen;
    margin: auto;
  }
</style>


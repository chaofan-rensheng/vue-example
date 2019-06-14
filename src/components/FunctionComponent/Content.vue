<template>
  <div class="content">
    <h3>content component</h3>
    <render-dom :render="renderBtn" back-value="primary" ></render-dom>
  </div>
</template>
<script>
import renderBtn from './index'
import RenderDom from './renderDom'
export default {
  components: {
    RenderDom
  },
  data () {
    return {
      renderBtn,
      index: 1
    }
  }

}
</script>
<style>
  .btn-primary{
    width: 100px;
    height: 100px;
    background-color:lightseagreen;
    margin: 0 auto;
  }
  .aClass{
    border-radius: 20px;
  }
  span{
    width: 50px;
    height: 50px;
    display: inline-block;
    background: lightblue;
  }
</style>



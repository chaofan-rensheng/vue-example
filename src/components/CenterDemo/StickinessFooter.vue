<template>
  <div class="stickinessFooter">
    <!-- 第一种方式实现粘性footer -->
    <!-- <div class="g-container">
      <div class="g-real-box">
        <p>content</p>
      </div>
      <div class="g-footer"></div>
    </div> -->

    <!-- 第二种方式实现粘性footer -->
    <div class="g-container">
      <div class="g-real-box">
          <p>Sticky Footer</p>
      </div>
    </div>
    <div class="g-footer"></div>
  </div>
</template>
<script>
export default {
  name: 'stickinessFooter',
  data(){
    return{
      
    }
  }
}
</script>
<style>
/* 第一种方式 */
/* .g-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
p{
  font-size: 20px;
  color: lightgrey;
  height: 500px;
}
.g-footer {
    margin-top: auto;
    flex-shrink: 0;
    height: 50px;
    background: deeppink;
} */

/* 第二种方式 */
html,body {
    width: 100%;
    height: 100vh;
}

.g-container {
    width: 100%;
    min-height: 100vh;
    margin-bottom: -30px;
}

.g-real-box {
    padding-bottom: 30px;
}

.g-footer {
    height: 30px;
    background: deeppink;
}

p {
    line-height: 200px;
    text-align: center;
    background: #ddd;
}
</style>



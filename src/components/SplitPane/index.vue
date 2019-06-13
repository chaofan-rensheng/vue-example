<template>
  <div class="split-pane">
    <h4>split pane{{rightWidth}}</h4>
    <div class="split-pane__main" @mousemove="handleMouseMove">
      <div class="split-pane__right" :style="{width: rightWidth + '%'}"></div>
      <div class="split-pane__line-horizontal" @mousedown="handleMouseDown" @mouseup="handleMouseUp" ></div>
      <div class="split-pane__left" :style="{width: 98 - rightWidth + '%'}">
        <div class="left__top" :style="{width: leftWidth + '%', height: leftHeight}"></div>
        <div class="split-pane__line-vertical"></div>
        <div class="left__bottom" :style="{width: leftWidth + '', height: leftHeight}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'split-pane',
    components: {

    },
    props: {

    },
    data() {
      return{
        rightWidth: 49,
        leftWidth: 100,
        leftHeight: '49%',
        clientWidth: 0,
        downX: 0,
        moveX: 0
      }
    },
    computed: {
      
    },
    mounted() {
      this.clientWidth = document.body.clientWidth
      window.addEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize(){
        // console.log(document.body.clientHeight, document.body.clientWidth)
        this.clientWidth = document.body.clientWidth
      },

      handleMouseDown(e){
        this.downX = e.clientX
      },
      
      handleMouseMove(e){
        console.log(this.downX, '[][][][]')
        if(this.downX > 0){
          this.moveX = e.clientX - this.downX
          if(this.moveX > 0){

          } else {
            let percentage = 0
            percentage = (Math.abs(this.moveX) / this.clientWidth * 100).toFixed()
            this.rightWidth = this.rightWidth < 10 ? 10 : this.rightWidth - percentage
          }
        }
      },

      handleMouseUp(e){
        // console.log('handleMouseUp', e.clientX, e.clientY)
        this.downX = 0
        console.log(this.downX, 'up')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin line( $width, $height, $direction){
    width: $width;
    height: $height;
    // border: 1px solid red;
    background: red;
    cursor: col-resize;
    @if $direction=='horizontal' {
      margin: 0 3px;
    } @else {
      margin: 3px 0;
    }
  }
  .split-pane__main{
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .split-pane__right{
    height: 100%;
    background: lightcoral;
  }
  .split-pane__line-horizontal{
    @include line(2%, 100%, 'horizontal')
  }
  .split-pane__line-vertical{
    @include line(100%, 2%, 'vertical')
  }
  .split-pane__left{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .split-pane__left{
    .left__top{
      background: lightgreen;
    }
    .left__bottom {
      background: lightpink;
    }
  }

</style>
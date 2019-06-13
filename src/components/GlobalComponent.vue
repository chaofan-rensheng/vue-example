<template>
    <div class="global-component">
        <h3 class="font30">global component</h3>
    </div>
</template>
<script>
export default {
    name: 'globalComponent',
    data(){
        return {
        
        }
    }
}
</script>
<style lang='scss'>
    h3{
        @include textCenter;
        @include wh(100%, 100px);
        background: lightblue;
    }
</style>



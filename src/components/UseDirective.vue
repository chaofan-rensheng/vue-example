<template>
  <div class="useDirective">
    use directive
    <input v-focus/>

    <div v-demo:test="{aaa:'haha'}" class="test-demo"></div>
  </div>
</template>
<script>
export default {
  name: 'useDirective'
}
</script>
<style>
  .test-demo{
    width: 200px;
    height: 200px;
    background-color: lightseagreen;
  }
</style>



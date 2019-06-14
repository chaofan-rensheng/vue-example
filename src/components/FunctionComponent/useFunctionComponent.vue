<template>
  <div class="useFunctinComponent">
    <Content @parentClick="handleParentClick"></Content>
  </div>
</template>
<script>
import Content from './Content'
export default {
  components: {
    Content
  },
  methods: {
    handleParentClick () {
      console.log('-------------------')
    }
  },
  mounted () {

  }

}
</script>
<style>
  .useFunctinComponent{
    text-align: center;
  }
</style>


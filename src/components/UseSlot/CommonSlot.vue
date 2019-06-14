<template>
  <div class="common-slot">
    <h3>use slot</h3>
    <slot name='content' params="params" :bookmark="bookmark"></slot>
    <!-- 在子组件中  slot传递数据 -->
  </div>
</template>
<script>
export default {
  name: 'commonSlot',
  data () {
    return {
      aaa: 'fddsfsdfsdfs'
    }
  },
  methods: {
    bookmark () {
      console.log('click bookmark')
    }
  }
}
</script>

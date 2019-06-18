<template>
  <div class="common-slot">
    <h3>use slot</h3>
    <div v-if="$slots.test">test  this.$slots可以判断是否有插槽插入</div>
    <slot name="test"></slot>

    <slot></slot>

    <slot name='content' params="params" :bookmark="bookmark"></slot>
    <!-- 在子组件中  slot传递数据 -->
  </div>
</template>
<script>
export default {
  name: 'commonSlot',
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.$slots.test, this.$slots.default, 'ffff')
  },
  methods: {
    bookmark () {
      console.log('click bookmark')
    }
  }
}
</script>

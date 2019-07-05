<template>
  <div class="component-a">
    <slot >
      <div>默认内容</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'componentA',
  components: {

  },
  props: {

  },
  data () {
    return {
      message: 'child'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    handleClick () {
      console.log('handleClick')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

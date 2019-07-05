<template>
  <div class="demo1">
    <!-- native 监听组件根元素的事件 -->
    <component-a @click.native="handleParnetClick" ref="child"></component-a>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
export default {
  name: 'demo1',
  components: {
    ComponentA
  },
  props: {

  },
  data () {
    return {
      message: 'parent'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    handleParnetClick () {
      console.log('handlePatentClick')
    }
  }
}
</script>

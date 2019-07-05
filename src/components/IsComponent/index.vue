<template>
  <div class="is-component">
    <el-button type="primary" @click="handleChangeComponent">切换组件</el-button>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
export default {
  name: 'IsComponent',
  components: {
    ComponentA,
    ComponentB
  },
  props: {

  },
  data () {
    return {
      currentComponent: ComponentA
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    handleChangeComponent () {
      this.currentComponent = this.currentComponent === ComponentA ? ComponentB : ComponentA
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

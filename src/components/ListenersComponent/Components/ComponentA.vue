<template>
  <div class="component-a">
    <h3 v-on="$listeners">componentA</h3>
  </div>
</template>

<script>
  export default {
    name: 'ComponentA',
    components: {

    },
    props: {
      name: {
        type: String,
        default: 'eeee'
      }
    },
    data () {
      return {
  
      }
    },
    computed: {

    },
    mounted () {
      console.log(this.$listeners, this.$attrs, this.$props, '------')
    },
    methods: {
  
    }
  }
</script>

<style lang="scss" scoped>

</style>
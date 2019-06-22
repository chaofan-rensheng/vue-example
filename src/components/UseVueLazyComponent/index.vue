<template>
  <div class="use-vue-lazy-component">
    <div>use vue lazy component</div>
    <component-a></component-a>
  </div>
</template>

<script>
  import ComponentA from './ComponentA.vue';
  export default {
    name: 'name',
    components: {
      ComponentA
    },
    props: {

    },
    data() {
      return{
      
      }
    },
    computed: {

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
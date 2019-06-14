<template>
  <div class="use-model">
    use model
    <model v-model="aa"></model>
  </div>
</template>
<script>
import Model from './Model'
export default {
  name: 'useModel',
  components: {
    Model
  },
  data () {
    return {

    }
  }
}
</script>

<template>
  <div class="inline-tag-input">
    <static-component v-model="tags"></static-component>
  </div>
</template>
<script>
import StaticComponent from './StaticComponent'
export default {
  name: 'inlineTagInput',
  components: {
    StaticComponent
  },
  data(){
    return{
      tags: ['aaaaa', 'bbbb']
    }
  }
}
</script>

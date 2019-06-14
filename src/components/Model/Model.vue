<template>
  <div class='model'>
    model
  </div>
</template>
<script>
export default {
  name: 'model',
  props: {
    value: String,
    checked: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    // console.log(this.checked, 'model checked')
  }
}
</script>


<template>
  <div class="use-el">
    fdsafs
    <div class="one">one</div>
    <div class="one">one</div>
    <div class="one">one</div>
    <div class="one">one</div>
    <div class="two">two</div>

    <el-cascader :options="options" @change="handleChange"></el-cascader>
  </div>
</template>

<script>
  export default {
    name: 'UseEl',
    components: {

    },
    props: {

    },
    data () {
      return {
        f: ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'],
        options: []
      }
    },
    computed: {

    },
    mounted () {
      console.log(this.$el.querySelectorAll('.one'), 'mounted')
      // this.loop()

      this.getAreaData()
    },
    methods: {
      getAreaData () {
        this.$areaData().then(({ data }) => {
          this.options = this.filterAreaData(data.children)
        })
      },
  
      filterAreaData (children, value) {
        children.map(item => {
          item.label = item.name
          item.value = item.code
          if (item.children && item.children.length > 0) {
            this.filterAreaData(item.children, [])
          }
        })
        return children
      },

      handleChange (value) {
        console.log('handleChange', value)
      }
  
      // loop () {
      //   location.hash = this.f[Math.floor((Date.now() / 100) % this.f.length)]
      //   setTimeout(this.loop, 50)
      // }
    }
  }
</script>

<style lang="scss" scoped>

</style>
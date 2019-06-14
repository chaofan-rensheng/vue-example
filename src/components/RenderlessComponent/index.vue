<script>
export default {
  props: ['value'],
  data () {
    return {
      newTag: ''
    }
  },
  methods: {
    removeTag (tag) {
      this.$emit('input', this.value.filter(t => t !== tag))
    },

    addTag () {
      if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
        return false
      }

      this.$emit('input', [...this.value, this.newTag.trim()])
      this.newTag = ''
    }
  },

  mounted () {
    console.log(this.$scopedSlots, 'index')
  },

  render () {
    return this.$scopedSlots.default({
      tags: this.value,
      removeTag: this.removeTag,
      inputAttrs: {
        value: this.newTag
      },
      inputEvents: {
        input: function (e) {
          this.newTag = e.target.value
        },
        keydown: (e) => {
          if (e.keyCode === 13) {
            e.preventDefault()
            this.addTag()
          }
        }
      }
    })
  }
}
</script>
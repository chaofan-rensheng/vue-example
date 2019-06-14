<template>
  <div class="use-renderless-component">
    <RenderlessComponent v-model="tags">
      <div slot-scope="{ tags, removeTag, inputAttrs, inputEvents }" class="tags-input"> 
        <span class="tags-input-tag tag-item" v-for="tag in tags" :key="tag">
          <span>{{ tag }}</span>
          <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button> 
        </span> 
        <input class="tags-input-text" placeholder="Add tag" 
          v-bind="inputAttrs" v-on="inputEvents"> 
      </div>
    </RenderlessComponent>
  </div>
</template>

<script>
  import RenderlessComponent from './index'
  export default {
    name: 'name',
    components: {
      RenderlessComponent
    },
    props: {

    },
    data () {
      return {
        tags: [
          'Testing', 'Design'
        ]
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .tag-item{
    margin-right: 10px;
    background: lightcoral;
    padding: 0 10px;
  }
</style>
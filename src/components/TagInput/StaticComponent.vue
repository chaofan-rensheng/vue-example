<template>
  <div class="Static-component">
    <renderless-tags-input :value="value" @input="(tags) => {$emit('input', tags)}">
        <div slot-scope="{tags,inputEvents,inputAttrs,removeTag,addTag}" class="input-tags-wrap--two">
            <div class="tag_list--container">
                <div class="tag_input--wrap">
                    <input type="text" class="tag_input--two" placeholder="Add tag..." v-on="inputEvents" v-bind="inputAttrs">
                    <button type="button" class="tag_input--button" @click="addTag">添加</button>
                </div>
                <div v-for="(tag,index) in tags" :key="index" class="tag--wrap">
                    <span>{{index+1}}： {{tag}}</span>
                    <button class="" @click="removeTag(tag)">删除</button>
                </div>
            </div>
        </div>

    </renderless-tags-input>
  </div>
</template>
<script>
import RenderlessTagsInput from './RenderlessTagsInput'
export default {
  name: 'staticComponent',
  components: {
    RenderlessTagsInput
  },
  props: ['value'],
  data () {
    return {

    }
  }
}
</script>
<style lang='scss'>
  
</style>



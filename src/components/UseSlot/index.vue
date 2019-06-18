<template>
  <div class="use-slot">
    <common-slot>
      <div slot="test">test------- haha</div>

      <div>我是默认内容</div>

      <!-- 在父组件中通过slot-scope来获取到子组件中传递过来的数据 -->
      <div slot="content" slot-scope="{ params, bookmark }" @click="bookmark">{{params}}</div>
    </common-slot>
  </div>   
</template>
<script>
import CommonSlot from './CommonSlot'
export default {
  name: 'useSlot',
  components: {
    CommonSlot
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

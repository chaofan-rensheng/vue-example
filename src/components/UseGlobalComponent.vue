<template>
    <div class="use-global-component">
        use global component
        <global-component></global-component>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'useGlobalComponent',
    data () {
        return {
            formData: {
                name: 'aaa',
                age: 13,
                sex: '男'
            }
        }
    },
    mounted(){
        delete this.formData.name  //删除对象的某个属性
        Vue.delete(this.formData, 'age') //删除对象的某个属性
    }
}
</script>


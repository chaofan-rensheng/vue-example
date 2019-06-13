import Vue from 'vue';
import Extend from './Extend.vue';
let MyAlertConstructor = Vue.extend(Extend);
let instance;
var MyAlert=function(message){ //自定义传入的参数
  // 创建实例并且过滤参数
  instance= new MyAlertConstructor({
    data:{
      message:message
    }})
  // 挂载实例
  instance.$mount();
  document.body.appendChild(instance.$el)
  return instance;
}
export default MyAlert;

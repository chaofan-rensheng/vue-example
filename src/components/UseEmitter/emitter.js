function broadcast (componentName, eventName, params) {
  // 向下遍历每个子节点，触发相应的向下广播的 事件
  this.$children.forEach(child => {
    var name = child.$options.componentName

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]))
    }
  })
}
export default {
  methods: {
     // 向上遍历父节点，来获取指定父节点，通过$emit 在相应的 组件中触发 eventName  事件
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.componentName
      // 上面的componentName 需要在每个vue 实例中额外配置自定义属性 componentName,
      // 可以简单替换成var name = parent.$options._componentTag;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }
      if (parent) {
        console.log(parent, '-------')
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

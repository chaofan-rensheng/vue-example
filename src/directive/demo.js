export const demo = {
  inserted: function (el, binding, vnode) {
    console.log(el, 'demo directive')
    console.log(binding, 'demo directive')
    console.log(vnode, 'demo directive')

    var s = JSON.stringify
    el.innerHTML =
      'name: ' + s(binding.name) + '<br>' +
      'value: ' + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: ' + s(binding.arg) + '<br>' +
      'modifiers: ' + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
}

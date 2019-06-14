export default {
  name: 'RenderCell',
  functional: true,
  props: {
    render: Function,
    backValue: String
  },
  render: (h, ctx) => {
    console.log(ctx.parent, 'render dom')
    // 这里的parent指的是当前实例的父组件   div不算是一层parent， 其中最外层的元素也算是一层parent
    return ctx.props.render(h, ctx.props.backValue, ctx.parent)
  }
}

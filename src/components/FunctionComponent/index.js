
export default (h, backValue, btn) => {
  return h('div', {
    'class': [`btn-${backValue}`],
    on: {
      click () {
        console.log('render click', btn.index)
        btn.$emit('parentClick')
      }
    }
  }, [
    h('span', {
      'class': 'inner',
      on: {
        click (event) {
          console.log('click span')
          event.stopPropagation()
        }
      }
    }, '我是最里面的span')
  ])
}

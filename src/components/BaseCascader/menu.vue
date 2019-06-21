<script>
export default {
  name: 'CascaderMenu',

  data () {
    return {

    }
  },
  mounted () {

    // 给render函数里面的dom元素挂载事件
    // this.$nextTick(() => {
    //   this.cascader.menuList.map(item => {
    //     this.$refs[item.value].addEventListener('click', this.handleClick, false)
    //   })
    // })
  },
  methods: {
    handleClick (e) {
      console.log('handleClick', e.target, '-----')
    },
    handleMenuClick (value) {
      console.log('handleMenuClick', value)
    }
  },
  inject: ['cascader'],
  render (h) {
    const menu = this._l(this.cascader.menuList, (menu, menuIndex) => <li
    onClick={() => this.handleMenuClick(menu)}
    ref={menu.value}>
      name:{menu.name}-----value:{menu.value}---index:{menuIndex}
    </li>)
    return (
      <ul>
        {menu}
      </ul>
    )
  }

}
</script>
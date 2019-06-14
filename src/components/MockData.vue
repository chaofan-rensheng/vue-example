<template>
  <div class="mockData">
    mockData
    <el-table :data="tableList" border>
      <el-table-column prop="userid"  label="ID"></el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" :style="{width: '100px', height: '100px'}">
        </template>
      </el-table-column>
      <el-table-column prop="username"  label="姓名"></el-table-column>
      <el-table-column prop="email"  label="邮箱"></el-table-column>
      <el-table-column prop="date"  label="出生日期"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'mockData',
  data () {
    return {
      tableList: []
    }
  },

  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('/api/tableList').then(({ data }) => {
        this.tableList = data.data
      })

      axios.get('https://www.easy-mock.com/mock/5cf08f769b1d864ffed7220c/example/mock').then(res => {
        console.log('easy mock', res)
      })

      axios.post('https://www.easy-mock.com/mock/5cf0d17524e9ab73e850eaf0/example/list').then(res => {
        console.log('easy mock post', res)
      })
    },
    handleScroll (e) {
      console.log(e, 'handleScroll')
    }
  }
}
</script>


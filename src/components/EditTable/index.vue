<template>
  <div class="edit-table">
    <h3>edit table</h3>
    <el-table :data="list" border>
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name">
        <template slot-scope="scope">
          <!-- <el-input v-if="scope.row.edit" v-model="scope.row.name"></el-input>
          <span v-else>{{scope.row.name}}</span> -->
          <EditRow v-model="scope.row.name" ></EditRow>
        </template>
      </el-table-column>
      <el-table-column label="性别" prop="sex">
        <template slot-scope="scope">
          <el-select v-if="scope.row.edit" v-model="scope.row.sex">
            <el-option label="男" :value="true"></el-option>
            <el-option label="女" :value="false"></el-option>
          </el-select>
          <span v-else>{{scope.row.sex ? '男' : '女'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="日期" prop="date" >
        <template slot-scope="scope">
          <el-input v-if="scope.row.edit" v-model="scope.row.date"></el-input>
          <span v-else>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" prop="email">
        <template slot-scope="scope">
          <el-input v-if="scope.row.edit" v-model="scope.row.email"></el-input>
          <span v-else>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column label="城市" prop="city">
        <template slot-scope="scope">
          <el-input v-if="scope.row.edit" v-model="scope.row.city"></el-input>
          <span v-else>{{scope.row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleOperationRow(scope)">{{scope.row.edit ? '保存' : '编辑'}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
  import EditRow from './Components/EditRow'
  export default {
    name: 'EditTable',
    components: {
      EditRow
    },
    props: {

    },
    data() {
      return{
        list: [
          {
            "name": "袁超",
            "id": 200,
            "sex": false,
            "date": "2017-03-24",
            "email": "y.lhcnlbl@uuqcyt.lv",
            "city": "邯郸市",
            "edit": false
          },
          {
            "name": "赵敏",
            "id": 201,
            "sex": true,
            "date": "1981-07-27",
            "email": "g.xjnco@sggjvldt.lu",
            "city": "萍乡市",
            "edit": false
          },
          {
            "name": "段军",
            "id": 202,
            "sex": true,
            "date": "1990-01-04",
            "email": "y.usefmyvt@owhohjs.ge",
            "city": "临沂市",
            "edit": false
          },
          {
            "name": "韩娟",
            "id": 203,
            "sex": false,
            "date": "1999-10-09",
            "email": "w.mqlje@nloydcpe.mr",
            "city": "临汾市",
            "edit": false
          },
          {
            "name": "石敏",
            "id": 204,
            "sex": false,
            "date": "2012-07-30",
            "email": "k.puwphkocy@lxnyqydubp.sg",
            "city": "昌吉回族自治州",
            "edit": false
          },
          {
            "name": "常涛",
            "id": 205,
            "sex": false,
            "date": "2018-03-10",
            "email": "c.jfbz@mpfienw.pro",
            "city": "福州市",
            "edit": false
          },
          {
            "name": "吕杰",
            "id": 206,
            "sex": false,
            "date": "1991-12-11",
            "email": "v.rcek@vxdolmm.pt",
            "city": "柳州市",
            "edit": false
          },
          {
            "name": "薛杰",
            "id": 207,
            "sex": true,
            "date": "2002-12-03",
            "email": "j.hwgeikxr@dcnxcpft.kh",
            "city": "北京市",
            "edit": false
          },
          {
            "name": "侯丽",
            "id": 208,
            "sex": true,
            "date": "1995-01-07",
            "email": "h.fnvubxp@itxpzonfy.org",
            "city": "文山壮族苗族自治州",
            "edit": false
          },
          {
            "name": "罗涛",
            "id": 209,
            "sex": false,
            "date": "2008-12-18",
            "email": "e.uyrjgzfb@ykzce.nu",
            "city": "黄南藏族自治州",
            "edit": false
          }
        ],
        dialogVisible: true
      }
    },
    computed: {

    },
    mounted() {

    },
    methods: {
      handleOperationRow(scope){
        let editRow = {...scope.row}
        if(editRow.edit === false){
          editRow.edit = true
          this.$set(this.list, scope.$index, editRow)
        } else {
          editRow.edit = false
          this.$set(this.list, scope.$index, editRow)
        }
      }
    }
  }
</script>

<style lang="scss">
  
</style>
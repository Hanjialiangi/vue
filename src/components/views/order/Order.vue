<template>
<div>
    <el-button @click="add">新增</el-button>
    <el-button @click="record">记录</el-button>
    <el-button @click="show">展示</el-button>
    <el-table
      class="mt-10"
     :data="AllList"
     border
     >
     <el-table-column type="index" label="序号" min-width="50"></el-table-column>
     <el-table-column label="歌手名称" prop="singerName" min-width="50">
       <template v-slot="scope">
         <span v-if="scope.row.edit"><el-input v-model="scope.row.singerName"></el-input></span>
         <span v-else @click="handleConsole(scope)">{{scope.row.singerName}}</span>
       </template>
     </el-table-column>
     <el-table-column label="歌曲名称" prop="songName" min-width="120" align="center">
       <template v-slot="scope">
         <span v-if="scope.row.edit"><el-input v-model="scope.row.songName"></el-input></span>
         <span v-else>{{scope.row.songName}}</span>
       </template>
     </el-table-column>
     <el-table-column label="操作" min-width="90">
       <template v-slot="scope">
           <el-button type="text" style="width: 30px;" class="tb-btn" size="small" @click="handleDelRow(scope)">删除</el-button>
           <el-button v-if="!scope.row.edit" type="text" style="width: 30px;" class="tb-btn" size="small" @click="handleEditRow(scope)">编辑</el-button>
           <el-button type="text" style="width: 30px;" class="tb-btn" size="small" @click="handleSaveRow(scope)" :disabled="!scope.row.edit">保存</el-button>
       </template>
     </el-table-column>
     </el-table>
     </div>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class Barrage extends Vue {
    AllList=[{singerName: '周杰伦', songName: '反方向的钟', edit: false}]
    ip=''
    add () {
      let list = {
        singerName: '',
        songName: '',
        edit: true
      }
      this.AllList.push(list)
    }
  // 保存
    handleSaveRow (scope) {
      scope.row.edit = false
      console.log(this.AllList)
    }
    // 编辑
    handleEditRow (scope) {
      scope.row.edit = true
    }
  /// 删除
    handleDelRow (scope) {
      this.$confirm('确定删除吗', '提示').then(() => {
        this.AllList.splice(scope.$index, 1)
      })
    }
    record () {
      this.$axios.get(`https://api.vvhan.com/api/getIpInfo`).then(res => {
        console.log(res.data) // 记录ip
      })
    }
    show () {
    }
}
</script>
<style scoped></style>

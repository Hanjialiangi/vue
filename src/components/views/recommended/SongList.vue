<template>
<div>
    <el-row :gutter="180">
        <el-col :span="4" v-for="(item,index) in list1" :key="index">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
                <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" :src="item.url"/>
                    <span>{{item.label}}</span>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
    <el-row :gutter="180">
        <el-col :span="4" v-for="item in list2" :key="item.id">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
                <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" :src="item.url"/>
                    <span>{{item.label}}</span>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
</div>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class SongList extends Vue {
    list1 =[{}];
    list2 =[{}];

    mounted () {
      this.$axios.get('/api/song/list').then(res => {
        this.list1.pop(); this.list2.pop()
        if (res.data) {
          for (let i = 0; i < res.data.length; i++) {
            if (i > 4) {
              this.list2.push(res.data[i])
            } else { this.list1.push(res.data[i]) }
          }
        }
      })
    }
}
</script>
<style lang="scss" scoped>
.image {
    width: 200px;
    height: 200px;
}
.el-row{
    margin-top:20px;
}
.el-col {
    border-radius: 10px;
}
.box{
    width:200px;
    border:none;
    border-radius: 10px;
}
a{
    text-decoration: none;
}
</style>

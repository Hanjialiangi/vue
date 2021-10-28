<template>
    <el-row :gutter="1">
        <el-col :span="8" v-for="(item,index) in list" :key="index">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
            <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                <img class="image" :src="item.url"/>
                <span style="margin-left:5px">{{item.label}}</span>
            </el-card>
            </router-link>
        </el-col>
    </el-row>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class RecommendedMV extends Vue {
    list =[{}]

    mounted () {
      this.$axios.get('/api/recommended/mv').then(res => {
        if (res.data) {
          this.list = res.data
        }
      })
    }
}
</script>
<style lang="scss" scoped>
.el-row{
    margin-top: 20px;
}
.box{
    border:none;
    width: 300px;
    border-radius: 10px;
}
.image{
    width:300px;
    height:200px;
}
a{
    text-decoration: none;
}
</style>

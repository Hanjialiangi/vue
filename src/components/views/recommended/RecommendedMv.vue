<template>
    <el-row :gutter="1">
        <el-col :span="8" v-for="item in list" :key="item.id">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
            <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                <img class="image" :src="require(`@/assets/mv/${item.name}.jpg`)"/>
                <span>{{item.label}}</span>
            </el-card>
            </router-link>
        </el-col>
    </el-row>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class RecommendedMV extends Vue {
    list =[
      {
        'id': '1',
        'name': 'mv1',
        'label': '起风了  吴青峰'
      }, {
        'id': '2',
        'name': 'mv2',
        'label': '芊芊  回音哥'
      }, {
        'id': '3',
        'name': 'mv3',
        'label': '多余的解释 许嵩'
      }
    ]
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

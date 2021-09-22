<template>
     <el-row :gutter="1">
        <el-col :span="8" v-for="item in list" :key="item.id">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
            <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                <img class="image" :src="require(`@/assets/personal/${item.name}.jpg`)"/>
                <span>{{item.label}}</span>
            </el-card>
            </router-link>
        </el-col>
    </el-row>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import {personal} from '@/Text/content.ts'
@Component
export default class PersonalSend extends Vue {
    list = personal;
}
</script>
<style lang="scss" scoped>
a{
    text-decoration: none;
}
.el-row{
    margin-top:20px;
}
.image{
    width:300px;
    height:200px;
}
.box{
    width:300px;
    border:none;
    border-radius: 10px;
}
.box span{
    text-align: left;
}
</style>

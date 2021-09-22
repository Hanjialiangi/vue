<template>
<div>
    <el-row :gutter="180">
        <el-col :span="4" v-for="item in list1" :key="item.id">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
                <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                    <img class="image" :src="require(`@/assets/songlist/${item.name}.jpg`)"/>
                    <span>{{item.label}}</span>
                </el-card>
            </router-link>
        </el-col>
    </el-row>
    <el-row :gutter="180">
        <el-col :span="4" v-for="item in list2" :key="item.id">
            <router-link :to ="`/correspondingsonglist/${item.id}`">
            <el-card class="box" :body-style="{ padding: '0px' }" shadow="hover">
                <img class="image" :src="require(`@/assets/songlist/${item.name}.jpg`)"/>
                <span>{{item.label}}</span>
            </el-card>
            </router-link>
        </el-col>
    </el-row>
</div>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import {text, value} from '@/Text/content.ts'
@Component
export default class SongList extends Vue {
    list1 =text;
    list2 =value;
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

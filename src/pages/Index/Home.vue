<template>
    <el-tabs v-model="activeName">
        <el-tab-pane label="个人推荐" name="recommended">
        <ImageDisplay></ImageDisplay>
        <h2>推荐歌单<i class="el-icon-arrow-right"/></h2>
        <SongList/>
        <br/>
        <h2>独家放送<i class="el-icon-arrow-right"/></h2>
        <PersonalSend/>
        <br/>
        <h2>推荐MV<i class="el-icon-arrow-right"/></h2>
        <RecommendedMV />
        </el-tab-pane>
        <el-tab-pane label="专属订制" name="exclusive"><Order/></el-tab-pane>
        <el-tab-pane label="歌单" name="playlist">歌单</el-tab-pane>
        <el-tab-pane label="排行榜" name="ranklist">排行榜</el-tab-pane>
        <el-tab-pane label="歌手" name="singger">歌手</el-tab-pane>
        <el-tab-pane label="最新音乐" name="newmusic">最新音乐</el-tab-pane>
    </el-tabs>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import ImageDisplay from '@/components/views/recommended/ImageDisplay'
import SongList from '@/components/views/recommended/SongList'
import PersonalSend from '@/components/views/recommended/PersonalSend'
import RecommendedMV from '@/components/views/recommended/RecommendedMV'
import Order from '@/components/views/order/Order'

@Component({
  components: {
    ImageDisplay,
    SongList,
    PersonalSend,
    RecommendedMV,
    Order
  }
})
export default class Home extends Vue {
    activeName='recommended';
}
</script>
<style lang="scss" scoped >
.el-tabs__item {
    font-size:14px;
}
/deep/ .el-tabs__item.is-active{
    color:#000;
    font-size:16px;
    font-weight: bolder;
}
/deep/ .el-tabs__item:hover{
    color:#000;
}
/deep/ .el-tabs__nav-wrap::after{
    width:0%;
}
/deep/ .el-tabs__active-bar{
    background-color:#008000;
    height:3px;
}
</style>

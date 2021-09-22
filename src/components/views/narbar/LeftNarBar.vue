<template>
    <el-col :span="12">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#000"
      :default-active="$route.path"
      router
      active-text-color="#000">
      <el-menu-item index="/home">
        <template slot="title">
          <span>发现音乐</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/playcustomer">
        <span slot="title">播客</span>
      </el-menu-item>
      <el-menu-item index="/correspondingsonglist">
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">朋友</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">直播</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">私人FM</span>
      </el-menu-item>
      <el-menu-item-group>
          <template slot="title">我的音乐</template>
          <el-menu-item index="1-1">
            <i class="iconfont icon-yinle"/>
            本地音乐
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="iconfont icon-iconset0425 "/>
            下载管理
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="iconfont icon-zuijinbofang "/>
            最近播放
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="iconfont icon-wangpan"/>
            我的音乐网盘
          </el-menu-item>
          <el-menu-item index="1-5">
            <i class="iconfont icon-ego-favorite"/>
            我的收藏
          </el-menu-item>
        </el-menu-item-group>
       <el-menu-item-group>
          <template slot="title">创建的歌单</template>
          <el-menu-item index="2-1">我喜欢的音乐</el-menu-item>
       </el-menu-item-group>
    </el-menu>
  </el-col>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class LeftNarBar extends Vue {

}
</script>
<style lagmn="scss" scoped>
.el-col-12{
    width:100%;
}
.el-menu-item, .el-submenu__title{
    height:45px;
    line-height:45px;
}
.el-menu-item.is-active{
    background-color:gray;
    font-weight: bolder;
    font-size:16px;
}
</style>

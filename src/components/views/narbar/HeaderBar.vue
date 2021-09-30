<template>
  <div class="topBar">
    <img src="~@/assets/images/logo.svg" width="40" height="40"/>
    <span class="logo-title">网易云音乐</span>
    <div class="draw-circle"><i class="el-icon-arrow-left"/></div>
    <div class="draw-circle extend"><i class="el-icon-arrow-right"/></div>
    <el-input placeholder="搜索" prefix-icon="el-icon-search"></el-input>
    <div class="microphone"><i class="el-icon-microphone"/></div>
    <el-avatar :src="userInfo.link"></el-avatar>
    <div class="username-config">{{userInfo.userName}}<i class="el-icon-caret-bottom"/></div>
    <span class="username-config"><a href="#">开通vip</a></span>
    <div class="button-group">
    <i class="iconfont icon-pifu"/>
    <i class="iconfont icon-swticonshezhitianchong"/>
    <i class="iconfont icon-youxiang"/>
    <i class="iconfont icon-vertical_line"/>
    <i class="iconfont icon-chuangkouwindow33"/>
    <i class="iconfont icon-zuixiaohua"/>
    <i class="iconfont icon-zuidahua"/>
    <i class="iconfont icon-guanbi" @click="Close"/>
    </div>
  </div>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component({})
export default class HeaderBar extends Vue {
   userInfo={
     link: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
     userName: '古巴'
   };
   Close () {
     window.opener = null
     window.open('about:blank', '_top').close()
   }
}
</script >
<style lang="scss" scoped>
.topBar{
    display:flex;
    flex-direction:row;
    align-items:center;
    background-color:#0d8e22;
    padding-left:2rem;
    height:4rem;

    img {
      display: flex;
      flex-direction: row;
    }

    i{
        display: flex;
        align-items: center;
        flex-direction: row;
        color:#fff;
        margin-left:0.2rem;
    }
    a{
        text-decoration: none;
        color:rgba(255, 255, 255, 0.562);
    }
    .logo-title{
        color:#fff;
        font-size:20px;
        font-family:"FangSong";
    }
    .draw-circle{
        display: flex;
        height:25px;
        width:25px;
        margin-left:2rem;
        border-radius: 100%;
        background-color:#008000;

    &.extend{
        margin-left:0.5rem;
    }
    }
    .el-input{
        margin-left:1.2rem;
        width:auto !important;
    }
    /deep/ .el-input__icon{
        color:#fff;
    }
    /deep/ .el-input__inner {
        border-radius: 20px;
        background: #008000;
        border:1px solid #008000;
    }
    .microphone{
        display: flex;
        margin-left:0.5rem;
        height:30px;
        width:30px;
        margin-left:2rem;
        border-radius: 100%;
        background-color:#008000;
    }
    .el-icon-microphone{
        margin-left:0.4rem;
    }
    .el-avatar--circle{
        margin-left:8rem;
    }
    .el-avatar--circle:hover{
        cursor: pointer;
    }
    .username-config{
        margin-left:0.5rem;
        display: flex;
        color:rgba(255, 255, 255, 0.562);
        font-size:14px;
    }
    .username-config:hover{
        color:#fff;
    }
    .el-icon-caret-bottom{
        color:rgba(255, 255, 255, 0.562);
        &:hover{
        color:#fff;
        }
    }
    .button-group{
        margin-left:4rem;
        display:flex;

        i {
          cursor: pointer;
          margin-left:2rem;
          color:rgba(255, 255, 255, 0.562);
        &:hover{
            color:#fff;
            cursor: pointer;
        }
        }
    }
    i{
        cursor: pointer;
    }
}
</style>

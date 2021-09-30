<template>
    <div class="block">
        <el-avatar shape="square" :size="50" src="https://tse1-mm.cn.bing.net/th/id/R-C.f04da22541e40129c241ef452099e85e?rik=IOfSBKyrzNsnxQ&riu=http%3a%2f%2fwww.echangwang.com%2fup%2fimgs%2f1911%2f5-19110F95352U8.jpg&ehk=jw5sEz7QmyuuoHiojjaUott%2fVt3Unmj0u7FLUMvdKBw%3d&risl=&pid=ImgRaw&r=0"></el-avatar>
        <div class="box">
            <div class="title">嚣张<i class="iconfont icon-xihuan" v-if="!love" @click="change"></i>
            <i class="iconfont icon-aixin" @click="change" v-else></i></div>
            <div>en</div>
        </div>
        <div class="control">
            <div class="smallicon">
                <i class="iconfont icon-huaban"></i>
                <i class="iconfont icon-shangyishou"></i>
                <i class="iconfont icon-zanting" v-if="playstatus" @click="play"></i>
                <i class="iconfont icon-24gl-playCircle" v-else @click="play"></i>
                <i class="iconfont icon-xiayishou"></i>
                <i class="iconfont icon-geciweidianji" ></i>
            </div>
            <div class="pro">{{dataFont}}&nbsp;<el-progress :percentage="10" :stroke-width= "5" :format="format" color="#0d8e22"></el-progress></div>
        </div>
         <div class="supplement">
                <i class="iconfont icon-xinzengtubiao-13"></i>
                <div class="all" @mouseleave="setSlider">
                <el-slider
                    v-show="slider"
                    v-model="value"
                    vertical
                    height="50px">
                </el-slider>
                <i class="iconfont icon-yinliang" @mouseover="setSlider" @click="init"></i>
                </div>
                <i class="iconfont icon-pengyou"></i>
                <i class="iconfont icon-24gf-playlist"></i>
        </div>
    </div>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({
})
export default class Footer extends Vue {
    dataFont= '00.18'
    dataBehind= '04:06'
    love=false;
    playstatus=true;
    slider=false;
    value=50;// 音量调节

    format () {
      return this.dataBehind
    }
    change () {
      if (this.love) {
        this.love = false
      } else { this.love = true }
    }
    play () {
      if (this.playstatus) {
        this.playstatus = false
      } else { this.playstatus = true }
    }
    setSlider () {
      if (this.slider) {
        this.slider = false
      } else { this.slider = true }
    }
    init () {
      this.value = 0
    }
}
</script>
<style lang="scss" scoped>
.block {
    display:flex;
}
.box {
    margin-left:10px;
    display: flex;
    flex-direction: column;
}
.title {
    font-size:14px;
}
i.iconfont.icon-xihuan,i.iconfont.icon-aixin{
    cursor: pointer;
    margin-left:5px;
}
i.iconfont.icon-aixin{
    color:red;
}
.control{
    height:auto;
    margin-left:300px;
    display:flex;
    flex-direction: column;
}
.smallicon{
    margin-left:50px;
    display: flex;
    flex-direction: row;
    height:auto;
}
.smallicon i{
    margin-left:20px;
    width:40px;
}
.supplement{
    margin-top:20px;
    margin-left:130px;
    display:flex;
    flex-direction: row;
}
.supplement i{
    margin-left:20px;
    width:40px;
}
.pro{
    margin-top:10px;
    display: flex;
    font-size:10px;
    color:gray;
    flex-direction: row;
}
.el-progress.el-progress--line{
    width:400px;
}
 /deep/ .el-progress__text {
    font-size:10px !important;
    color:gray !important;
}
/deep/ .el-slider__runway{
    position: absolute;
    left:10px;
    top:-50px;
    z-index:99;
}
/deep/ .el-slider__button{
    width:10px;
    height:10px;
    color:#0d8e22;
    border: 1px solid #0d8e22;
    background-color:#0d8e22;
}
/deep/ .el-slider__bar{
    background-color: #0d8e22;
}
.iconfont{
    cursor:pointer;
    font-size:20px;
}
i.iconfont.icon-zanting,i.icon-24gl-playCircle{
    margin-top:-5px;
    font-size: 30px;
}
.all{
    width:50px;
    height:auto;
}

</style>

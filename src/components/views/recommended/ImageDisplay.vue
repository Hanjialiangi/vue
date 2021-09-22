<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <div v-for="item in 7" :key="item" >
    <el-carousel-item :style="{backgroundImage:'url(' + require('@/assets/carousel/wang'+item+'.jpg') + ')',backgroundSize: '100% auto'}">
    </el-carousel-item>
    </div>
  </el-carousel>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class ImageDisplay extends Vue {

}
</script>
<style lang="scss">
  .el-carousel__item:nth-child(2n) {
     border-radius: 10px;
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    border-radius: 10px;
    background-color: #d3dce6;
  }
  .el-carousel__indicator.is-active button{
    background-color:#008000 !important;
  }
  button.el-carousel__button{
    width:10px;
    height:10px;
    border-radius: 50%;
  }
</style>

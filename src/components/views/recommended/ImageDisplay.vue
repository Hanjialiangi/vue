<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <div v-for="(item,index) in carousel" :key="index" >
    <el-carousel-item :style="{backgroundImage:'url(' + item.url + ')',backgroundSize: '100% auto'}">
    </el-carousel-item>
    </div>
  </el-carousel>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component
export default class ImageDisplay extends Vue {
  carousel=[{}]

  mounted () {
    this.$axios.get('/api/shuffing/figure').then(res => {
      if (res.data) {
        this.carousel = res.data
      }
    })
  }
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

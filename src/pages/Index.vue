<template>
    <el-container>
  <el-header><HeaderBar /></el-header>
  <el-container>
    <el-aside width="12rem"><LeftNarBar/></el-aside>
    <el-main><router-view/></el-main>
  </el-container>
  <el-divider></el-divider>
  <el-footer height="4rem"><Footer/></el-footer>
</el-container>
</template>
<script type="ts">
import { Vue, Component } from 'vue-property-decorator'
import HeaderBar from '@/components/views/narbar/HeaderBar.vue'
import LeftNarBar from '@/components/views/narbar/LeftNarBar.vue'
import Footer from '@/components/views/narbar/Footer.vue'

@Component({
  components: {
    HeaderBar,
    LeftNarBar,
    Footer
  }
})
export default class Index extends Vue {

}
</script>
<style scoped>
header.el-header{
    padding: 0;
}
.el-aside{
    height:40rem;
    margin-top: 10px;
}
/* .el-footer{
  position: fixed;
  bottom: 0;
  z-index: 999;
} */
</style>

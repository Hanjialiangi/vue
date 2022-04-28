<template>
<Barrage></Barrage>
</template>
<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import Barrage from '@/components/views/danmu/BarrageAccomplish'
@Component({
  components: {
    Barrage
  }
})
export default class PlayCustomer extends Vue {

}
</script>
<style scoped>
</style>

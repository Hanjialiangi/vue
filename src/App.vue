<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
import Index from '@/pages/Index.vue'
@Component({
  components: {
    Index
  }
})
export default class App extends Vue {
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>

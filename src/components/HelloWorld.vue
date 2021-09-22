<template>
  <div class="hello">
   <ul>
     <li v-for="(item,index) in music" :key="index" :class="{active:index===i}" @click="goclick(index)">{{item}}</li>
   </ul>
   <p v-cloak>{{fulluser}}</p>
  </div>
</template>

<script type="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component({})
export default class HelloWorld extends Vue {
      msg= 'Welcome to Your Vue.js App';
      music= ['多余的解释', '灰色头像', '庐州月', '宿敌'];
      i= 0;

      goclick (index) {
        this.i = index
      }
      get fulluser () {
        return 'sad'
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
.active {
  color: #42b983;
}
[v-cloak]{
  display: none;
}
</style>

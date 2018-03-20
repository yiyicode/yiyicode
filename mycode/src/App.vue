<template>
  <div id="app">
    <img src="./assets/logo.png" @click="csFn">
    <div v-for="el in jsonD">{{el.id}}</div>
    <router-view/>


  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
// console.log(mapGetters)
  // console.log(mapActions)
export default {
  name: 'app',

  computed:mapGetters([
      'jsonD'
    ]),
  /*methods:{
    csFn:function (){
      alert(6)
    }
  }*/
  methods: mapActions([
    'csFn'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

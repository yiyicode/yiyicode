<template>
  <div id="box">
    
    <div>{{a}}</div>
    <child :message="Fn"></child>
    <button @click="clickFn">按钮</button>
  </div>
</template>

<script>
import child from '@/components/child'
export default {
  name: 'parent',
  data () {
    return {
      a:'parent-aaa',
      Fn:'abcdef'
    }
  },
  components:{
    child
  },
  methods:{
    clickFn: function(argument) {
      this.Fn='999999999999999'
    }
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
}

a {
  color: #42b983;
}
</style>

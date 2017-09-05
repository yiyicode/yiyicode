<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import Vue from 'vue'
import head from './components/header.vue'
import child from './components/child.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
export default {
  components: {
    headbox: head,
    child:child
  },
  data () {
    return {
      componetsCur:child,
      slideWidth:900,//定义slide宽度的传值,Number or String String时只能为100%，数字时不需要加PX
      slides: [
        {
          src: require('@/assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('@/assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('@/assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('@/assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
    }
  },
  methods: {
    parentFn(e){
      alert(e+'加上父级')
    },
    tag: function () {
      this.$router.push('Hello2')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>

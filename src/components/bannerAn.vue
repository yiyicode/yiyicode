<template>
  <div>
    <!-- <router-view></router-view> -->
    <banner2 :slideData="slides" :slideWidth="slideWidth" @childFn="parentFn">

    </banner2>
  </div>
</template>

<script>
import Vue from 'vue'
import banner2 from '@/components/banner2.vue'

export default {
  components: {
    banner2:banner2
  },
  data () {
    return {
      componetsCur:banner2,
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

</style>

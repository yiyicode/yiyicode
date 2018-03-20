import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import ss from '@/vuex/json.json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'json',
      component: HelloWorld
    }
  ]
})

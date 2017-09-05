import Vue from 'vue'
import Router from 'vue-router'

import banner from '@/components/banner'
import banner1 from '@/components/banner1'
import transition1 from '@/components/transition1'
import animation from '@/components/animation'
import parent from '@/components/parent'
import bannerAn from '@/components/bannerAn'
import banner2 from '@/components/banner2'
import child from '@/components/child'

Vue.use(Router)

const routes = [
	{ path: '/', component: banner },
	{ path: '/banner1', component: banner1 },
	{ path: '/transition1', component: transition1 },
	{ path: '/animation', component: animation },
	{ path: '/parent', component: parent },
	{ path: '/bannerAn', component: bannerAn },
	{ path: '/child', component: child },
	{ path: '/banner2', component: banner2 },
]
export default new Router({
  routes
})

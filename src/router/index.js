import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import * as database from 'database'

import VuelogHome from '../views/VuelogHome'
import VuelogOops from '../views/VuelogOops'
import VuelogArchive from '../views/VuelogArchive'
import VuelogPosts from '../views/VuelogPosts'
import VuelogPost from '../views/VuelogPost'
import VuelogPage from '../views/VuelogPage'
import VuelogContent from '../views/VuelogContent'

/* Lazy load components if interested (I don't think necessary though). */
// const VuelogHome = resolve => require(['../views/VuelogHome'], resolve)
// const VuelogOops = resolve => require(['../views/VuelogOops'], resolve)
// const VuelogArchive = resolve => require(['../views/VuelogArchive'], resolve)
// const VuelogPosts = resolve => require(['../views/VuelogPosts'], resolve)
// const VuelogPost = resolve => require(['../views/VuelogPost'], resolve)
// const VuelogPage = resolve => require(['../views/VuelogPage'], resolve)
// const VuelogContent = resolve => require(['../views/VuelogContent'], resolve)

/* Or even give a name to each chunk. */
// const VuelogHome = resolve => require.ensure([], () => resolve(require('../views/VuelogHome')), 'home-view')
// const VuelogOops = resolve => require.ensure([], () => resolve(require('../views/VuelogOops')), 'oops-view')
// const VuelogArchive = resolve => require.ensure([], () => resolve(require('../views/VuelogArchive')), 'archive-view')
// const VuelogPosts = resolve => require.ensure([], () => resolve(require('../views/VuelogPosts')), 'posts-view')
// const VuelogPost = resolve => require.ensure([], () => resolve(require('../views/VuelogPost')), 'post-view')
// const VuelogPage = resolve => require.ensure([], () => resolve(require('../views/VuelogPage')), 'page-view')
// const VuelogContent = resolve => require.ensure([], () => resolve(require('../views/VuelogContent')), 'content-view')

Vue.use(VueMeta)
Vue.use(VueRouter)

function contentRoutes (name) {
  return [
    { path: '', name: name, component: VuelogContent },
    { path: ':part', name: `${name}-part`, component: VuelogContent }
  ]
}

var routes = [
  { path: '/archive', name: 'archive', component: VuelogArchive },
  { path: '/archive/category/:category', name: 'archive-category', component: VuelogArchive },
  { path: '/archive/year/:year', name: 'archive-year', component: VuelogArchive },
  { path: '/blog', name: 'posts', component: VuelogPosts },
  { path: '/blog/p/:p', name: 'posts-more', component: VuelogPosts },
  { path: '/blog/:category', name: 'category', component: VuelogPosts },
  { path: '/blog/:category/p/:p', name: 'category-more', component: VuelogPosts },
  { path: '/blog/:category/:year/:slug', component: VuelogPost, children: contentRoutes('post') },
  { path: '/page/:page', component: VuelogPage, children: contentRoutes('page') },
  { path: '/oops', name: 'oops', component: VuelogOops }
]

if (database.config.defaultPath === '/home') {
  routes.push({ path: '/home', name: 'home', component: VuelogHome })
} else {
  routes.push({ path: '/home', redirect: database.config.defaultPath })
}
routes.push({ path: '/', redirect: database.config.defaultPath })
routes.push({ path: '/p/:p', redirect: '/blog/p/:p' })
routes.push({ path: '*', redirect: '/oops' })

const router = new VueRouter({
  routes,
  mode: 'hash',
  base: database.config.base
})

router.beforeEach((to, from, next) => {
  var modified = false
  var route = Object.assign({}, to)

  // Param `part` is presented but not a natural number
  if (to.params.part) {
    let natural = Number.parseInt(to.params.part, 10)
    if (!Number.isNaN(natural) && `${natural}` !== to.params.part) {
      route.params.part = `${natural}`
      modified = true
    }
  }

  // Locale set could be missing
  if (from.query.lang && !to.query.lang) {
    route.query.lang = from.query.lang
    modified = true
  }

  if (modified) {
    next(route)
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2a105ae1 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _63451053 = () => interopDefault(import('../pages/companies/_companies.vue' /* webpackChunkName: "pages/companies/_companies" */))
const _8caa66d4 = () => interopDefault(import('../pages/companies/_companies/index.vue' /* webpackChunkName: "pages/companies/_companies/index" */))
const _1233a8ac = () => interopDefault(import('../pages/companies/_companies/business.vue' /* webpackChunkName: "pages/companies/_companies/business" */))
const _3ec78ff6 = () => interopDefault(import('../pages/companies/_companies/hr.vue' /* webpackChunkName: "pages/companies/_companies/hr" */))
const _31fe0782 = () => interopDefault(import('../pages/companies/_companies/news.vue' /* webpackChunkName: "pages/companies/_companies/news" */))
const _653fe667 = () => interopDefault(import('../pages/search/_term.vue' /* webpackChunkName: "pages/search/_term" */))
const _336f811f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/si/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/list",
      component: _2a105ae1,
      name: "list"
    }, {
      path: "/companies/:companies?",
      component: _63451053,
      children: [{
        path: "",
        component: _8caa66d4,
        name: "companies-companies"
      }, {
        path: "business",
        component: _1233a8ac,
        name: "companies-companies-business"
      }, {
        path: "hr",
        component: _3ec78ff6,
        name: "companies-companies-hr"
      }, {
        path: "news",
        component: _31fe0782,
        name: "companies-companies-news"
      }]
    }, {
      path: "/search/:term?",
      component: _653fe667,
      name: "search-term"
    }, {
      path: "/",
      component: _336f811f,
      name: "index"
    }],

    fallback: false
  })
}

import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import IndexView from './components/IndexView.vue'

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
  '/': {
    component: IndexView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')

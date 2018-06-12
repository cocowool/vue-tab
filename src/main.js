import Vue from 'vue'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  watch : {
    currentRoute (to, from){
      to = routes[to] ? routes[to] : routes['/']
      from = routes[from] ? routes[from] : routes['/']
      if(to.meta.index > from.meta.index){
        this.transitionName = "slide-left"
      }else{
        this.transitionName = "slide-right"
      }
    }
  },
  methods : {
  },
  computed: {
    ViewComponent () {
      //console.log(bsuser)
      const matchingView = routes[this.currentRoute] ? routes[this.currentRoute].name : 'Home'
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/Home.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
    // return h(require('./pages/About.vue'))
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})

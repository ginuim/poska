import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import IndexView from '../views/IndexView.vue'
import CardListView from '../views/CardListView'
import CardView from '../views/CardView'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: CardListView },
    { path: '/card/add', component: CardView },
    { path: '/card', component: CardView },
    { path: '*', redirect: '/' }
  ],
  alias: ({
    // '/home': '/home/best'
  })
})

// import utils from './utils/utils'
// import config from './utils/config'
import store from './store'

exports.install = function (Vue, options) {
  // set card list
  Vue.prototype.$setCardList = function (data) {
    store.dispatch('setCardList', data)
  }

  Vue.prototype.$setGalleryList = function (data) {
    store.dispatch('setGalleryList', data)
  }

  Vue.prototype.$setLayoutList = function (data) {
    store.dispatch('setLayoutList', data)
  }

  Vue.prototype.$setCurrentCard = function (data) {
    store.dispatch('setCurrentCard', data)
  }

  Vue.prototype.$setCurrentLayout = function (data) {
    store.dispatch('setCurrentLayout', data)
  }

  Vue.prototype.$setCurrentImage = function (data) {
    store.dispatch('setCurrentImage', data)
  }

  Vue.prototype.$getCardList = function () {
    return store.getters.getCardList
  }

  Vue.prototype.$getGalleryList = function () {
    return store.getters.getGalleryList
  }

  Vue.prototype.$getLayoutList = function () {
    return store.getters.getLayoutList
  }

  Vue.prototype.$getCurrentCard = function () {
    return store.getters.getCurrentCard
  }

  Vue.prototype.$getCurrentLayout = function () {
    return store.getters.getCurrentLayout
  }

  Vue.prototype.$getCurrentImage = function () {
    return store.getters.getCurrentImage
  }
}

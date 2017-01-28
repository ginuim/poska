// import {
//   SET_CARD_LIST,
//   SET_GALLERY_LIST,
//   SET_LAYOUT_LIST,
//   SET_CURRENT_CARD,
//   SET_CURRENT_LAYOUT,
//   SET_CURRENT_IMAGE
// } from '../mutation-types'

const state = {
  cardList: [
    {
      cover: 'http://77fz43.com1.z0.glb.clouddn.com/cover1.png-800'
    },
    {
      cover: 'http://77fz43.com1.z0.glb.clouddn.com/cover2.png-800'
    }
  ],
  galleryList: [
    { src: 'http://77fz43.com1.z0.glb.clouddn.com/cover1.png-800' },
    { src: 'http://77fz43.com1.z0.glb.clouddn.com/cover2.png-800' }
  ],
  layoutList: [],
  currentCard: {},
  currentLayout: {},
  currentImage: {}
}

// const mutations = {
//
//   [SET_CARD_LIST] (state, status) {
//     state.cardList = status
//   },
//
//   [SET_GALLERY_LIST] (state, status) {
//     state.galleryList = status
//   },
//
//   [SET_LAYOUT_LIST] (state, status) {
//     state.layoutList = status
//   },
//
//   [SET_CURRENT_CARD] (state, status) {
//     state.currentCard = status
//   },
//
//   [SET_CURRENT_LAYOUT] (state, status) {
//     state.currentLayout = status
//   },
//
//   [SET_CURRENT_IMAGE] (state, status) {
//     state.currentImage = status
//   }
// }

export default {
  state
  // mutations
}

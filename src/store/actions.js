// set card list
export const setCardList = ({ commit }, data) => {
  commit('SET_CARD_LIST', data)
}

// set layout list
export const setLayoutList = ({ commit }, data) => {
  commit('SET_LAYOUT_LIST', data)
}

// set gallery list
export const setGalleryList = ({ commit }, data) => {
  commit('SET_GALLERY_LIST', data)
}

// set current card
export const setCurrentCard = ({ commit }, data) => {
  commit('SET_CURRENT_CARD', data)
}

// set current layout
export const setCurrentLayout = ({ commit }, data) => {
  commit('SET_CURRENT_LAYOUT', data)
}

// set current image
export const setCurrentImage = ({ commit }, data) => {
  commit('SET_CURRENT_IMAGE', data)
}

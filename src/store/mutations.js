// set card list
const SET_CARD_LIST = (state, data) => {
  state.global.cardList = data
}

// set gallery list
const SET_GALLERY_LIST = (state, data) => {
  state.global.galleryList = data
}

// set layout list
const SET_LAYOUT_LIST = (state, data) => {
  state.global.layoutList = data
}

// set current card
const SET_CURRENT_CARD = (state, data) => {
  state.global.currentCard = data
}

// set current layout
const SET_CURRENT_LAYOUT = (state, data) => {
  state.global.currentLayout = data
}

// set current image
const SET_CURRENT_IMAGE = (state, data) => {
  state.global.currentImage = data
}

export {
  SET_CARD_LIST,
  SET_GALLERY_LIST,
  SET_LAYOUT_LIST,
  SET_CURRENT_CARD,
  SET_CURRENT_LAYOUT,
  SET_CURRENT_IMAGE
}

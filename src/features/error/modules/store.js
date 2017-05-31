import * as types from './mutationTypes'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  classmate: {
    list: [],
    scroll: 0
  },
  error: {
    list: [],
    subjectId: 2,
    offset: '',
    scroll: 0
  }
}

const mutations = {
  [types.ERROR_CLASSMATE] (state, payload) {
    state.classmate.list = payload.data
  },
  [types.ERROR_CLASSMATE_SCROLL] (state, payload) {
    state.classmate.scroll = payload.height
  },
  [types.ERROR_CLASSMATE_RELOAD] (state) {
    state.classmate.list = []
    state.classmate.scroll = 0
  },
  [types.ERROR] (state, payload) {
    state.error.offset = payload.data.offset
    if (state.error.list) {
      state.error.list = state.error.list.concat(payload.data.list)
    } else {
      state.error.list = state.error.list
    }
  },
  [types.ERROR_SCROLL] (state, payload) {
    state.error.scroll = payload.height
  },
  [types.ERROR_RELOAD] (state, payload) {
    state.error.list = []
    state.error.offset = ''
    state.error.scroll = 0
  },
  [types.ERROR_ERROR_TYPE] (state, payload) {
    state['error']['list'][payload.index]['errorType'] = Number(payload.type)
  }
  // [types.ERROR_COMMENT] (state, payload) {
  //   state['error']['list'][payload.index]['errorType'] = Number(payload.type)
  // }
}

export default {
  state,
  mutations,
  getters,
  actions
}

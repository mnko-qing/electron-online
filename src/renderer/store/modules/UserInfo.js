const state = {
  userInfo: {}
}

const getters = {
  userInfo: state => state.userInfo
}

const mutations = {
  UPDATE_USERINFO(state, user) {
    state.userInfo = user
  },
}

const actions = {
  updateUser({ commit },user) {
    commit('UPDATE_USERINFO',user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

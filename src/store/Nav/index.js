
const state = {
  openSer: false,
  nav: false
}

const actions = {
  getSer ({ commit }, req) {
    commit('runSer', req)
  },
  getNav ({ commit }, req) {
    commit('runNav', req)
  }
}

const mutations = {
  runSer (state, req) {
    state.openSer = !(req)
  },
  runNav (state, req) {
    state.nav = !(req)
  }
}

const getters = {
  getopenSer: state => state.openSer, // 取得state裡面的內容
  getopenNav: state => state.nav

}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}

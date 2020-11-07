import Vue from 'vue'
import Vuex from 'vuex'

// events
import Events from './Events/index'
import Nav from './Nav/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  // getters:{},
  modules: {
    Events,
    Nav
  }
})

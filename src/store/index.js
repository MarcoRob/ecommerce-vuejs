import Vue from 'vue'
import Vuex from 'vuex'
import { productGetters, manufacturerGetters } from './getters'
import { cartMutations, manufacturerMutations, productMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
      // bought items
      cart: [],
      // ajax loader
      showLoader: false,
      // selected product
      product: {},
      // all products
      products: [],
      // all manufacturers
      manufacturers: []
    },
    // GETTERS
    getters: Object.assign({}, productGetters, manufacturerGetters),

    mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),

    actions: Object.assign({}, productActions, manufacturerActions),
  })
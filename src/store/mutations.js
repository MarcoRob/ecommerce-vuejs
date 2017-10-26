import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS
  } from './mutation-types'


  export const productMutations = {
    [ALL_PRODUCTS] (state) {
      // Called when fetching products
      state.showLoader = true
    },
    [ALL_PRODUCTS_SUCCESS] (state, payload) {
      // Called when products have been fetched
      state.showLoader = false
      // Updates state products
      state.products = payload
    },
    [PRODUCT_BY_ID] (state) {
      // Called when fetching products by ID
      state.showLoader = true
    },
    [PRODUCT_BY_ID_SUCCESS] (state, payload) {
      // Called when product is fetched
      state.showLoader = false
      // Updates state product
      state.product = payload
    },
    [ADD_PRODUCT]: (state, payload) => {
      // ...Same pattern
      state.showLoader = true
    },
    [ADD_PRODUCT_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.products.push(payload)
    },
    [UPDATE_PRODUCT]: (state, payload) => {
      state.showLoader = true
    },
    [UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
      state.showLoader = false
      state.products = state.products.map(p => {
        if (p._id === payload._id) {
          payload = {...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]}
          return payload
        }
        return p
      })
    },
    [REMOVE_PRODUCT]: (state, payload) => {
      state.showLoader = true
    },
    [REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
      state.showLoader = false
      const index = state.products.findIndex(p => p._id === payload)
      console.debug('index', index)
      state.products.splice(index, 1)
    }
  }

  export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
      const index = state.cart.findIndex(p => p._id === payload)
      state.cart.splice(index, 1)
      console.log(state.cart, state.cart.length, index)
    }
  }
  
  export const manufacturerMutations = {
    [ALL_MANUFACTURERS] (state) {
      state.showLoader = true
    },
    [ALL_MANUFACTURERS_SUCCESS] (state, payload) {
      state.showLoader = false
      state.manufacturers = payload
    }
  }
import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import base from './base'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const store = new Vuex.Store({
    modules: {
        auth,
        base
    }
})
export default store

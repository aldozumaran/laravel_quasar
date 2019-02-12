import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'
import {sync} from 'vuex-router-sync'
import routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import auth from '@websanova/vue-auth'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function () {
    const Router = new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes,

        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    })

    sync(store(), Router)
    Vue.router = Router
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = '/api'

    Vue.use(auth, {
        auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
        http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
        router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
    })
    return Router
}

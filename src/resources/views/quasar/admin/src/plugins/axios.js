import axios from 'axios'
import {Service} from 'axios-middleware'
import {Loading} from 'quasar'
// Then register your middleware instances.

export default ({Vue, app, router}) => {
    Vue.prototype.$axios = axios
    const service = new Service(Vue.prototype.$axios)
    service.register([
        {
            onRequest(request) {
                if (request.url !== '/api/auth/refresh' && request.url !== '/api/auth/user') {
                    Loading.show()
                }
                return request
            },
            onResponse(response) {
                Loading.hide()
                return response
            },
            onResponseError(error) {
                let response = JSON.parse(JSON.stringify(error)).response
                if (response.status === 401) {
                    router.push({name: 'login'})
                }
                Loading.hide()
                return Promise.reject(error)
            }
        }
    ])
}

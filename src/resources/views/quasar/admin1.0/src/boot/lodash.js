import _ from 'lodash'

export default async ({ app, Vue }) => {
    Vue.prototype.$lodash = _
}

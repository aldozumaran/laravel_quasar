import { mapGetters, mapMutations } from 'vuex'

// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
    Vue.mixin({
        computed: {
            ...mapGetters('auth', [
                'getUser',
                'getName'
                // ...
            ])
        },
        methods: {
            ...mapMutations('auth', [
                'setUser',
                'setName'
            ])
        }
    })
}

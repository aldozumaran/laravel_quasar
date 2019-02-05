import { mapGetters, mapMutations } from 'vuex'

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
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
        // watch: {
        //     '$user': {
        //         deep: true,
        //         handler (val) {
        //             this.$user = val
        //         }
        //     }
        // }
    })
}

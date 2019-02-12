<template>
    <div class="fixed fixed-center bg-grey-1 text-white">
        <form v-on:submit.prevent="onSubmit()">
            <q-card square class="flex-center text-center" style="width: 400px; padding: 20px;">
                <div>
                    <img src="/statics/quasar-logo.png" style='max-width:300px; padding-top:30px; padding-bottom:50px'>
                </div>
                <div class="text-left">
                    <q-input id="email" type="text" v-model.trim="form.email" float-label="Email" required autocomplete="off"
                             autofocus dense class="q-my-sm" label="Email" stack-label/>
                    <q-input id="password" type="password"   label="Password" stack-label dense class="q-my-sm" v-model="form.password" float-label="Password" required autocomplete="off"/>
                    <br>
                </div>
                <q-card-actions class="no-padding">
                    <q-btn type="submit" class="fit" color="primary" dense>Login</q-btn>
                </q-card-actions>
            </q-card>
        </form>
    </div>
</template>

<style>
</style>

<script>
export default {
    data () {
        return {
            drawerState: true,
            rememberMe: true,
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$auth.login({
                fetchUser: false,
                data: this.form,
                rememberMe: this.rememberMe
            }).then(response => {
            }, (res) => {
            })
        }
    }
}
</script>

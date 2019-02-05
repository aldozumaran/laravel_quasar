<template>
    <q-layout view="lHh LpR lFf">
        <q-layout-header>
            <q-toolbar>
                <img src="statics/logo-white.png" alt="" style="height: 25px; margin-right: 10px;">
                <q-btn flat fab-mini @click="leftDrawerOpen = !leftDrawerOpen">
                    <q-icon name="menu" size="30px"/>
                </q-btn>
                <q-toolbar-title class="flex justify-between items-center">
                    <div class="uppercase ">{{ $t(`menu.${$route.name}`) }}</div>
                    <div class="q-caption ">
                        <span class="text-weight-bold">{{ getName }}</span>
                    </div>
                </q-toolbar-title>
                <q-btn flat fab-mini>
                    <q-icon name="account_circle" size="30px"/>
                    <q-popover anchor="bottom left" self="top left">
                        <q-list link style="min-width: 200px" highlight class="q-pa-none">
                            <q-list-header class="text-center q-pa-sm">
                                <q-icon size="100px" name="account_circle"></q-icon>
                                <br/>
                                <span class="text-weight-bold text-primary">{{ getName }}</span><br/>
                                {{ getUser.email }}
                            </q-list-header>
                            <q-item-separator class="q-ma-none"/>
                            <q-item v-close-overlay class=" q-px-sm primary-hover">
                                <q-item-side icon="person_outline" color="primary"></q-item-side>
                                <q-item-main class="text-primary">Account</q-item-main>
                            </q-item>
                            <q-item-separator class="q-ma-none"/>
                            <q-item @click.native="logout" class="q-px-sm negative-hover">
                                <q-item-side icon="exit_to_app" color="red"></q-item-side>
                                <q-item-main class="text-red">Logout</q-item-main>
                            </q-item>
                        </q-list>
                    </q-popover>
                </q-btn>
            </q-toolbar>
        </q-layout-header>

        <q-layout-drawer
                v-model="leftDrawerOpen"
                content-class="bg-grey-2"
        >
            <q-list
                    no-border
                    link
                    inset-delimiter
                    id="mainMenu"
                    v-if="refreshed"
            >
                <q-list-header>Essential Links</q-list-header>
                <template v-for="( m, i ) in menu">
                    <q-item-separator v-if="m.separator" :key="i"></q-item-separator>
                    <template v-else>
                        <template v-if="m.children">
                            <q-collapsible v-model="m.open" indent :icon="m.icon" :label="$t(m.name)" :key="i" class="text-primary">
                                <q-item  dense :to="{name:mc.route}" :exact="true" :key="ic" v-for="( mc, ic ) in m.children" @click.native="refreshMenu(mc)">
                                    <q-item-main class="text-primary" :label="$t(mc.name)"/>
                                </q-item>
                            </q-collapsible>
                        </template>
                        <template v-else>
                            <q-item :to="{name:m.route}" :exact="true" :key="i"  @click.native="refreshMenu(m)">
                                <q-item-side :icon="m.icon" color="primary"/>
                                <q-item-main class="text-primary" :label="$t(m.name)"/>
                            </q-item>
                        </template>
                    </template>
                </template>
            </q-list>
        </q-layout-drawer>

        <q-page-container>
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
                <router-view/>
            </transition>
        </q-page-container>

        <q-layout-footer>
            <q-toolbar class="q-mihh-25">
                <q-toolbar-title class="flex justify-between items-center q-f-12 q-lh-12">
                    © 2018 Company
                </q-toolbar-title>
            </q-toolbar>
        </q-layout-footer>
    </q-layout>
</template>

<script>
import menu from '../includes/menu'

export default {
    name: 'LayoutDefault',
    data() {
        return {
            menu,
            leftDrawerOpen: false,
            leftOverlay: false,
            refreshed: true,
            leftBreakpoint: 992
        }
    },

    methods: {
        isChildrenCollapsible(collapsible) {
            return this.$lodash.find(collapsible.children, o => {
                return o.route === this.$route.name
            }) !== undefined
        },
        refreshMenu() {
            this.$lodash.each(this.menu, (m) => {
                if (m.collapsible) {
                    m.open = this.isChildrenCollapsible(m)
                }
            })
        },
        logout() {
            this.$auth.logout({
                makeRequest: true,
                redirect: '/login',
                success() {
                },
                error() {
                }
            })
        }
    },
    beforeCreate() {
        this.$i18n.locale = this.$q.i18n.lang
    },
    mounted: function () {
        this.$auth.fetch({})
            .then(response => {
                this.setUser(response.data)
            })
        this.refreshMenu()
    },
    created() {
    },
    watch: {
        '$route': {
            deep: true,
            handler() {
                this.refreshMenu()
            }
        }
    }
}
</script>

<style lang="stylus">
    .q-item-section + .q-item-section
        margin-left: 0;
</style>

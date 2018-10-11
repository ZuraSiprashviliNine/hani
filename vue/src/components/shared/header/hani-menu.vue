<template>
    <hani-menu
        ref="haniMenuWrap"
        @routeChange="routeChange"
        menu-class-name="hani-header-menu">
        <hani-menu-item
            v-for="route in Routes"
            :key="route.path"
            :title="route.title"
            :link="route.path"
            :active="RoutePath === route.path || PageName(RoutePath) === PageName(route.path)"
            :has-sub="route.sub !== undefined"
            @routeChange="routeChange"
            item-class-name="hani-header-menu-item"
            link-class-name="hani-header-menu-item-link"
            slot="menu-item">
            <hani-menu
                v-if="route.sub !== undefined"
                menu-class-name="hani-header-sub-menu"
                @routeChange="routeChange"
                slot="sub-menu">
                <hani-menu-item
                    v-for="_route in route.sub"
                    :key="_route.path"
                    :title="_route.title"
                    @routeChange="routeChange"
                    :link="_route.path"
                    :active="RoutePath === _route.path"
                    item-class-name="hani-header-sub-menu-item"
                    link-class-name="hani-header-sub-menu-item-link hani-header-menu-item-link"
                    slot="menu-item"/>
            </hani-menu>
        </hani-menu-item>
    </hani-menu>
</template>

<script>

import {
    mapGetters
} from 'vuex';

import haniMenuItem from './menu-item';
import haniMenu from './menu';

export default {
    components: {
        haniMenuItem,
        haniMenu
    },
    computed: {
        ...mapGetters({
            Routes: 'Navigation/Routes'
        }),
        PageName(path){
            return (path) => {
                return path.substring(1, path.indexOf('/', 1) !== -1 ? path.indexOf('/', 1) : path.length)
            }
        },
        RoutePath(){
            return this.$store.state.route.path;
        }
    },
    methods: {
        routeChange(){
            this.$emit('routeChange');
        }
    }
}
</script>

<style>

</style>

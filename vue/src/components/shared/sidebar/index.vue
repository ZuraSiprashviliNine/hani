<template>
    <div 
        class="hani-sidebar" 
        id="hani-sidebar">
        <div 
            class="hani-sidebar-wrap"
            data-simplebar>
            <div class="hani-sidebar-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12 p-2">
                            <div class="hani-sidebar-header-wrap">
                                <hani-logo />
                                <div 
                                    @click="_Sidebar(!Sidebar)"
                                    class="hani-header-sidebar-trigger">
                                    <span class="fa fa-angle-down"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hani-sidebar-content">
                <div class="container">
                    <div class="row">
                        <div class="col-12 p-0">
                            <hani-menu 
                                @routeChange="_Sidebar(false)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hani-sidebar-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-12 p-2">
                            <div class="hani-sidebar-creditionals">
                                <div class="p-1">
                                    {{'designed by HaNi.Tech' | lang}}
                                </div>
                                <div class="p-1">
                                    &copy; 2018 {{'copyright' | lang}}
                                </div>
                            </div>
                            <social-networks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import haniLogo from '../header/logo';
import socialNetworks from '../socials';
import haniMenu from '../header/hani-menu';

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    components: {
        haniLogo,
        socialNetworks,
        haniMenu
    },
    computed: {
        ...mapGetters({
            Sidebar: 'Common/Sidebar'
        })
    },
    methods: {
        ...mapActions({
            _Sidebar: 'Common/sidebar'
        })
    },
}
</script>

<style>

</style>

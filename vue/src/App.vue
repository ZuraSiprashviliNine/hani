<template>
    <div 
        id="application" 
        class="application"
        ref="application"
        @scroll="Scroll"
        :class="{scrolled: scrolled}">
        <hani-header />
        <transition
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutDown">
            <hani-sidebar v-if="Sidebar"/>
        </transition>
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex';

import haniHeader from './components/shared/header';
import haniSidebar from './components/shared/sidebar';

export default {
    components: {
        haniHeader,
        haniSidebar
    },
    computed: {
        ...mapGetters({
            Sidebar: 'Common/Sidebar'
        })
    },
    data(){
        return {
            scrolled: false
        }
    },
    methods: {
        ...mapActions({
            _getRoutes: 'Navigation/getRoutes',
            _initLangs: 'Lang/langs'
        }),
        Scroll(event){
            if(event.target.scrollTop > 0){
                if(this.scrolled === false){
                    this.scrolled = true;
                }
            }else{
                if(this.scrolled === true){
                    this.scrolled = false;
                }
            }
        }
    },
    watch: {
    },
    created(){
        this._getRoutes();
        this._initLangs();
    }
}
</script>

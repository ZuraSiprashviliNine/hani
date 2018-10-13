<template>
    <div 
        id="application" 
        class="application"
        ref="application"
        :class="{scrolled: scrolled}"
        @scroll="scroll">
        <hani-toolbar />
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

import {getScrollbarWidth} from './helpers/functions';

import haniToolbar from './components/shared/toolbar';

export default {
    components: {
        haniToolbar
    },
    computed: {
    },
    data(){
        return {
            scrolled: false
        }
    },
    mounted(){
        this.$refs.application.style.width = `calc(100vw + ${getScrollbarWidth()}px)`
    },
    methods: {
        ...mapActions({
            _getRoutes: 'Navigation/getRoutes',
            _initLangs: 'Lang/langs'
        }),
        scroll(event){
            if(event.target.scrollTop > 0){
                if(!this.scrolled){
                    this.scrolled = true;
                }
            }else{
                if(this.scrolled){
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

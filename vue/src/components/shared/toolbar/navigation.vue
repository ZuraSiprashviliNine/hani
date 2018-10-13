<template>
    <div class="toolbar-navigation navigation" id="toobar-navigation">
        <div class="navigation-items">
            <navigation-item
                v-for="route in Routes"
                :key="route.path"
                :link="route.path"
                :dropped="Dropped === route.path"
                :has-sub="route.sub !== undefined"
                :drop="_Drop"
                :active="ActivePage(route.path) || ActiveRoute(route.path)">
                <span slot="title">
                    {{route.title | lang}}
                </span>
                <transition 
                    slot="sub"
                    enter-active-class="animated flipInY"
                    leave-active-class="animated flipOutY">
                    <div 
                        v-if="route.sub !== undefined && Dropped === route.path"
                        class="navigation-sub-menu">
                        <navigation-item
                            v-for="_route in route.sub"
                            :key="_route.path"
                            :active="ActiveRoute(_route.path)"
                            :link="_route.path"
                            :drop="_Drop">
                            <span slot="title">
                                {{_route.title | lang}}
                            </span>
                        </navigation-item>
                    </div>
                </transition>
            </navigation-item>
        </div>
        <div class="navigation-language navigation-items">
            languages
        </div>
    </div>
</template>

<script>

import navigationItem from './navigation-item';

import {
    mapGetters, mapActions
} from 'vuex';

export default {
    components: {
        navigationItem,
    },
    methods: {
        ...mapActions({
            _Drop: 'Navigation/drop',
            _SetLang: 'Lang/set'
        })
    },
    computed: {
        ...mapGetters({
            Routes: 'Navigation/Routes',
            Dropped: 'Navigation/Dropped',
            Languages: 'Lang/languages',
            CurrentLanguage: 'Lang/ref'
        }),
        ActiveRoute(path){
            return path => this.$store.state.route.path === path;
        },
        ActivePage(path){
            return path => this.$store.state.route.path.substring(0, this.$store.state.route.path.indexOf('/', 1)) === path;
        }
    }
}
</script>

<style>

</style>

<template>
    <header 
        id="hani-header" class="hani-header">
        <div class="container">
            <div class="row">
                <div class="col-12 p-0">
                    <div class="hani-header-content">
                        <div class="hani-header-left">
                            <hani-logo />
                        </div>
                        <div class="hani-header-right">
                            <hani-header-menu />
                            <div 
                                @click="_Sidebar(!Sidebar)"
                                class="hani-header-sidebar-trigger">
                                <span class="fa fa-bars"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import haniLogo from './logo';
import haniHeaderMenu from './hani-menu';

import {
    mapActions,
    mapGetters
} from 'vuex';

export default {
    components: {
        haniLogo,
        haniHeaderMenu
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
    }
}
</script>


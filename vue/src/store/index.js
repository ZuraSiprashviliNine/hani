
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import Common from './modules/common';
import Navigation from './modules/navigation';
import Lang from './modules/lang';

export default new Vuex.Store({
    modules: {
        Navigation,
        Lang,
        Common
    }
});
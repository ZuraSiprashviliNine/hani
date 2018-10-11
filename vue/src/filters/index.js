
import Vue from 'vue';
import {translate} from './lang';

import store from '../store';

Vue.filter('lang', (_data, _to) => {
    let _keywords = store.getters['Lang/keywords'];
    let _ref = store.getters['Lang/ref'];
    return translate(_data, _keywords, _ref, _to);
});

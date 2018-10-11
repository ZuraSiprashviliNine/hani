
import Vue from 'vue';
import App from './App';

import 'es6-promise';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css';
import './stylesheets/bootstrap.scss';

import 'swiper/dist/css/swiper.css';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

import './stylesheets/style.scss';

import router from './router';
import store from './store';

import {sync} from 'vuex-router-sync';

import './filters';

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
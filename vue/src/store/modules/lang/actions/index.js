
import {langs} from '../api';

export default {
    langs({commit}){
        langs(payload => {
            commit('setLangs', payload);
        })
    },
    set({commit}, payload){
        commit('setRef', payload);
    }
}
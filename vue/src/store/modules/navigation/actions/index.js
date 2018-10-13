
import {getRoutes} from '../api';

export default {
    getRoutes({commit}){
        getRoutes(routes => {
            commit('setRoutes', routes);
        })
    },
    drop({commit}, path){
        commit('drop', path);
    }
}
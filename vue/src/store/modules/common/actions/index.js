
export default {
    sidebar({commit}, value){
        commit('setSidebar', value);
    },
    openSidebar({commit}){
        commit('setSidebar', true);
    },
    closeSidebar({commit}){
        commit('setSidebar', false);
    }
}
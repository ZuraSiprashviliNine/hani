
export default {
    Routes(state){
        return state.routes;
    },
    SubOf(state, route){
        return (route) => {
            return state.routes.find(_route => _route.path === route).sub || []
        };
    }
}

export default { 
    setRoutes(state, payload){
        state.routes = payload;
    },
    drop(state, payload){
        state.dropped = payload;
    }
}

export default {
    setLangs(state, payload){
        state.languages = payload.languages;
        state.keywords = payload.keywords;
        state.ref = payload.ref;
    },
    setRef(state, payload){
        state.ref = payload;
    }
}
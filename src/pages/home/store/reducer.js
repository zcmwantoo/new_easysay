import * as types from './actionTypes'

const defaultState = {
    data:1
}
export default (state = defaultState , action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case types.ADD_NUM:
            newState.data = state.data + 1 ;
            return newState ;
        case types.JS_NUM:
            newState.data = state.data - 1 ;
            return newState ;
        default:
            return state ;
    }
}
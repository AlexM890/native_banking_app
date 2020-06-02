const defaultState = 0
export default (state=defaultState, action) => {
    switch(action.type){
        case "ADD_MONEY":
            return state + action.amount
        case "SUBTRACT_MONEY":
            return state - action.amount
        default:
            return state
    }
}
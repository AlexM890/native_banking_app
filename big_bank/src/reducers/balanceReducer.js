const defaultState = parseFloat(0.00)
export default (state=defaultState, action) => {
    switch(action.type){
        case "ADD_MONEY":
            return parseFloat(state) + parseFloat(action.amount)
        case "SUBTRACT_MONEY":
            return state - action.amount
        default:
            return state
    }
}
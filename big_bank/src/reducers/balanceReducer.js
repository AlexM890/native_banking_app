const defaultState = parseFloat(0.00)
export default (state=defaultState, action) => {
    switch(action.type){
        case "ADD_MONEY":
            return parseFloat((state + action.amount).toFixed(2))
        case "SUBTRACT_MONEY":
            return parseFloat((state - action.amount).toFixed(2))
        default:
            return state
    }
}
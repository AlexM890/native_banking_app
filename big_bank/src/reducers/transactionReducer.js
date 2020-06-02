const initState = [];
export default ( state = initState, action) => {
    switch(action.type){
        case 'ADD_TRANSACTION':
            return [...state, action.transaction]
        case 'DELETE_TRANSACTION':
            return state.filter(item=>action.id !== item.id)
        case 'EDIT_TRANSACTION':
            return state.map(item => {
                if (item.id === action.id){
                    return {
                        ...item, 
                        memo: action.memo
                    }
                } 
                return item
            })
        default:
            return state
    }
}
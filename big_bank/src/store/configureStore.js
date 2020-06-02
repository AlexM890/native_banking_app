import { combineReducers, createStore } from 'redux'
import transactionReducers from '../reducers/transactionReducer'
import balanceReducers from '../reducers/balanceReducer'
export default () => {
    return createStore(
        combineReducers({
            transactions: transactionReducers,
            balance: balanceReducers
        })
    )
}
import { v1 as uuidv1 } from 'uuid'
import moment from 'moment'
export const addTransaction = ({ amount = 0, memo = '', to, transactionType}) => ({
    type: 'ADD_TRANSACTION',
    transaction: {
        id: uuidv1(),
        amount,
        memo,
        to,
        transactionType,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
})
export const deleteTransaction = (id) => ({
    type: 'DELETE_TRANSACTION',
    id
})
export const editTransaction = (id, memo) => ({
    type: 'EDIT_TRANSACTION',
    id,
    memo
})
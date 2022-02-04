import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":1,"category":"Clothes","type":"Expense","date":"2022-02-03","id":"09356034-2805-440b-bf61-d4328b034455"}];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState );

    // Action Creators
    const deleteTransaction = (id) => {
        dispatch({type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => {
        return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    }, 0);

    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}
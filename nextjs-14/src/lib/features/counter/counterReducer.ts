import { count } from 'console'
import {createAction, handleActions } from 'redux-actions'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'
//^ +-와 같은 역할

export const increase : any = createAction(INCREASE)
export const decrease : any = createAction(DECREASE)

const initialState = {count : 0}


const counterReducer = handleActions(
    {
        [INCREASE] : (state,action) => ({count : state.count+1}),
        [DECREASE] : (state,action) => ({count : state.count-1}),
    },
    initialState
)

export default counterReducer;
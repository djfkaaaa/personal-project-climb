import { createSlice } from "@reduxjs/toolkit"
import { getBoards } from "./board-service"
import { initialState } from "./board-init"

const articleThunks = [getBoards]

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}



const handlePending = (state:any) => {
    
}


const handleRejected = (state:any) => {
    
}

const handleFulfilled = (state:any,{payload}:any) => {
    console.log('--------conclusion--------')
    state.array = payload
    console.log(state.array)
}



export const boardSlice = createSlice({
    name : "board",
    initialState,
    reducers:{},
    extraReducers: builder => {
        const {pending,rejected} = status;

        builder
        .addCase(getBoards.fulfilled, handleFulfilled)
    }
})

export const getAllBoards = (state : any) => {
    console.log('------------Before useSelector--------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array;
}

export const {} = boardSlice.actions

export default boardSlice.reducer;
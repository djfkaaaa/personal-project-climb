import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user-init";
import { fetchAllUsers, fetchOneUser } from "./user-service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => { 
    console.log('------------------ conclusion ---------------')
    state.array = payload 
    console.log(state.array)

}

// const handlePending = (state: any) => {
    
// }
  
//   const handleRejected = (state: any) => {
   
// }


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;
        builder 
        .addCase(fetchAllUsers.fulfilled, handleFulfilled) 
        .addCase(fetchOneUser.fulfilled,handleFulfilled)
    }
})

export const getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array; 
}

export const getUserById = (state: any) => {
    console.log('------------------ id test ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array; 
}


export const { } = userSlice.actions

export default userSlice.reducer;

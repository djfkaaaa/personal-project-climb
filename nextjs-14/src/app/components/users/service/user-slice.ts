import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user-init";
import { fetchAllUsers, fetchCount, fetchOneUser, modifyUser } from "./user-service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reHandleClickPw: (state:any, {payload}) => {state.json.password = payload},
        reHandleClickPn: (state:any, {payload}) => {state.json.phoneNumber = payload},
        reHandleClickJob: (state:any, {payload}) => {state.json.job = payload}
    },
    extraReducers: builder => {
        builder 
        .addCase(fetchAllUsers.fulfilled, (state: any, {payload}: any) => {state.array=payload}) 
        .addCase(fetchOneUser.fulfilled, (state: any, {payload}: any) => {state.json=payload})
        .addCase(fetchCount.fulfilled,(state: any, {payload}:any)=>{state.count=payload})
        .addCase(modifyUser.fulfilled,()=>{})
    }})

export const getAllUsers = (state: any) => state.user.array;
export const getUserById = (state: any) => state.user.json; 
export const getUserCount = (state: any) => state.user.count;

export const {reHandleClickPw, reHandleClickPn, reHandleClickJob  } = userSlice.actions

export default userSlice.reducer;

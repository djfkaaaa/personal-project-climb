import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI, fetchOneUserAPI } from "./user-api";




export const fetchAllUsers: any = createAsyncThunk(
    'users/fetchAllUsers',
    async (page: number) => {
        console.log('fetchAllUsers page : ' + page)
        const data:any = await fetchAllUsersAPI(1);
        return data
    }
)

export const fetchOneUser: any = createAsyncThunk(
    'users/fetchOneUser',
    async (id: number) => {
        const data : any = await fetchOneUserAPI(id);
        return data
    }
)
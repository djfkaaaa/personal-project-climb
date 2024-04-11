import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI, fetchCountUserAPI, fetchDeleteUserAPI, fetchModiUserAPI, fetchOneUserAPI } from "./user-api";
import { IUser } from "../model/user-model";

export const fetchAllUsers: any = createAsyncThunk(
    'users/fetchAllUsers',
    async (page: number) => {
        const data:any = await fetchAllUsersAPI(1);
        return data
    })

export const fetchOneUser: any = createAsyncThunk(
    'users/fetchOneUser',
    async (id: number) => 
        (await fetchOneUserAPI(id)))

export const modifyUser : any = createAsyncThunk(
    'users/modifyUser',
    async (user:IUser)=>
        (await fetchModiUserAPI(user)))

export const reHandleClickChange : any = createAsyncThunk(
    'users/reHandleClickChange',
    async (user:IUser)=>
        (await fetchModiUserAPI(user)))

export const fetchCount: any = createAsyncThunk(
    'users/fetchCount',
    async ()=>
        (await fetchCountUserAPI()))

export const deleteUser : any = createAsyncThunk(
    'users/deleteUser',
    async (id : number) => 
        (await fetchDeleteUserAPI(id)))



//slice는 dispatch를 위한 페이지, selector는 slice를 위한 페이지
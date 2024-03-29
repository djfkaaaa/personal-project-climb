import { createSlice } from "@reduxjs/toolkit"; 

interface Iuser{
    id : number,
    username : string,
    password : string,
    name : string,
    phoneNumber : string,
    addressId : number,
    job : string,
    height : number,
    weight : number
}

const initialState:Iuser = {
    id : 0,
    username : "",
    password : "",
    name : "",
    phoneNumber : "",
    addressId : 0,
    job : "",
    height : 0,
    weight : 0
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers:{}
});

export const {} = userSlice.actions

export default userSlice.reducer;


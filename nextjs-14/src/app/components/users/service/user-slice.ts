import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./user-init";
import { fetchAllUsers, fetchCount, fetchOneUser, modifyUser, reHandleClickChange } from "./user-service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
    //rejected는 error
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        const {pending, rejected} = status;
        builder 
        .addCase(fetchAllUsers.fulfilled, (state: any, {payload}: any) => {state.array=payload}) 
        .addCase(fetchOneUser.fulfilled, (state: any, {payload}: any) => {state.json=payload})
        .addCase(modifyUser.fulfilled,(state: any,{payload}:any)=>{})
        .addCase(fetchCount.fulfilled,(state: any, {payload}:any)=>{state.count=payload})
        .addCase(reHandleClickChange.fulfilled,(state: any,{payload}:any)=>{state.json.password,state.json.phoneNumber,state.json.job = payload})
        // addCase가 api를 통해 날린 통신에 대한 응답을 기다리는 역할?
        // 자바로 따지면 위 구문은 switch case문, ex fetchAllUsers가 fulfilled이면 hanleFulfilled 실행

        // 이영역에 handleFulfilled는 이 user-slice안에 있기에 userstate를 갖고 단순히 state.array = payload
        // handleFullfilled 를 없애고 위와같이 바로 그자리에 람다식을 때린 이유는 payload 데이터 형식을 위와같이 원하는대로 바꾸고자할때
        // hanldeFullfilled가 있다면 데이터의 형식마다 새로운 fullfiled를 만들어줘야하기에 비효율적 바로 위에서 선언하는게 낫다.
    }
})

export const getAllUsers = (state: any) => {
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array; 
}
// ^ 의미론 적으로 state가 없다?? state가 없다하면, supplier(getter)

//^ 이 userstate안이 아닌 밖으로 내보낼때는 어떤 데이터인지 명시해 줘야기에 state.user.array

export const getUserById = (state: any) => state.user.json; 
export const getUserCount = (state: any) => state.user.count;


export const getFixUser = (state: any) => {
    console.log('------------------ get change fix user db ---------------')
    console.log(JSON.stringify(state.user.array))
    return state.user.array; 
}

export const {  } = userSlice.actions

export default userSlice.reducer;

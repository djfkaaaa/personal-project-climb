'use client'

import { fetchOneUser } from "@/app/components/users/service/user-service"
import { getUserById } from "@/app/components/users/service/user-slice"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UsersPage(props:any){

    const dispatch = useDispatch()
    const getUsers = useSelector(getUserById)
    

    useEffect(()=>{
        dispatch(fetchOneUser(props.params.id))
    },[])

    

    return(
        <>
          <h2>사용자 목록</h2>
          <span>Num : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.id}</Typography>
          <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.username}</Typography>
          <span>PW : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.password}</Typography>
          <span>NAME : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.name}</Typography>
          <span>PHONE NUMBER : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.phoneNumber}</Typography>
          <span>JOB : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.job}</Typography>
        </>
       
        
       
    )
    //user-column.tsx 파일에서 내가 id 파라미터 효과주고싶은곳
    //이번의 경우 username에 link 참조
}




// export const findUserById:any = createAsyncThunk(
//     'users/findUserById',
//     async(id: number) =>{
//         return id
//     }
// )





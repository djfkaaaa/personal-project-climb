'use client'

import { IUser } from "@/app/components/users/model/user-model"
import { deleteUser, fetchOneUser, modifyUser, reHandleClickChange } from "@/app/components/users/service/user-service"
import { getUserById,  } from "@/app/components/users/service/user-slice"
import { PG } from "@/redux/common/enums/PG"
import { Typography } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UsersPage({params}:any){

    const router = useRouter()
    const dispatch = useDispatch()
    const getUsers:IUser = useSelector(getUserById)
    // getter(suplier)
    
    useEffect(()=>{
        dispatch(fetchOneUser(params.id))
    },[])

    const handleDelete = () => {
        dispatch(deleteUser(params.id))
        alert("삭제 완료")
        router.replace(`${PG.USER}/findUsers`)
    }
    
    const handleClickChange = (e: any) => (dispatch(reHandleClickChange(e.target.value)))
    
    const postJava = () => {
        dispatch(modifyUser(getUsers))
    }
    


    
    return(
        <>
          <h2>사용자 목록</h2>
          <span>Num : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.id}</Typography>
          <span>ID : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.username}</Typography> <br />
          <span>비밀번호 :</span><input type="text" onChange={handleClickChange} placeholder={getUsers.password}/><br />
          <span>NAME : </span><Typography textAlign="center" sx={{fontSize:"1.2rem"}}>{getUsers.name}</Typography><br />
          <span>전화번호 : </span><input type="text" onChange={handleClickChange} placeholder={getUsers.phoneNumber}/><br />
          <span>직업 : </span><input type="text" onChange={handleClickChange} placeholder={getUsers.job}/><br />
          <button onClick={postJava}>수정</button> <br />
          <button onClick={handleDelete}>삭제</button>
        </>
       
        
       
    );
    //user-column.tsx 파일에서 내가 id 파라미터 효과주고싶은곳
    //이번의 경우 username에 link 참조
}









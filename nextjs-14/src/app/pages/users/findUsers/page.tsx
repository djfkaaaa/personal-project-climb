'use client'

import UserColumns from "@/app/components/users/module/user-column"
import { IUser } from "@/app/components/users/model/user-model"
import { fetchAllUsers } from "@/app/components/users/service/user-service"
import { getAllUsers } from "@/app/components/users/service/user-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { StripedDataGrid } from "@/app/components/common/style/board-style"

const UsersPage: NextPage = () => {

    // const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch()
    // useDispatch hook을 통해 액션을 발생시키고 값 변경 < useDispatch는 보통 dispatch라는 변수명에 담김
    
    const allUsers: [] = useSelector(getAllUsers)
    // useSelector hook을 통해 초기 값 지정

    if(allUsers !== undefined){
        console.log('allUsers is not undefined')

        console.log('length is ' + allUsers.length)
        for(let i=0; i<allUsers.length; i++){
            console.log(JSON.stringify(allUsers[i]))
        }
    }else{
        console.log('allUsers is undefined')
    }

    useEffect(()=>{
        dispatch(fetchAllUsers(1))
    },[])

    
    return(<>
    <h2>사용자 목록</h2>

    <div style={{ height: "100%", width: "100%" }}>
    {allUsers && <DataGrid
        rows={allUsers}
        columns={UserColumns()}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
    />}
   </div>
   </>
    )
    // 이 코드 상에서 무상태의 개념을 적용시키면, 값이 바뀔때 컴포넌트 함수가 새로 실행되며 
    // 새로운 리턴 값이 만들어진다한다, 이 말은 기존의 리턴값이 있다는 것이고 이 코드상 return은 기존에 있던
    // 리턴값, useEffect가 실행되어 값이 바뀌면? 새로운 return 값이 생김?
    // return 안에 있는 usercolumns 함수가 먼저 실행
}

export default UsersPage;
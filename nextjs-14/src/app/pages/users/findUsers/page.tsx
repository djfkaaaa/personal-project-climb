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

const UsersPage: NextPage = () => {

    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch()
    
    const allUsers: [] = useSelector(getAllUsers)

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

    <div style={{ height: 400, width: "100%" }}>
    <DataGrid
        rows={allUsers || []}
        columns={UserColumns()}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
    />
   </div>
   </>
    )
}

export default UsersPage;
'use client'

import UserColumns from "@/app/components/users/module/user-column"
import { IUser } from "@/app/components/users/model/user-model"
import { fetchAllUsers } from "@/app/components/users/service/user-service"
import { getAllUsers } from "@/app/components/users/service/user-slice"
import { DataGrid } from "@mui/x-data-grid"
import { NextPage } from "next"
import { JSX, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

export default function UsersPage(props:any) {

    return(
        <div>
            <h1>상세 유저 출력</h1>
           <h1>parameter = {props.params.id}</h1> 
        </div>
    )
    //user-column.tsx 파일에서 내가 id 파라미터 효과주고싶은곳
    //이번의 경우 username에 link 참조
}





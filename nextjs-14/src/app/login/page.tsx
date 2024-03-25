'use client';

import axios from "axios";
import { url } from "inspector";
import Link from "next/link";
import { config } from "process";
import { useState } from "react";

const SERVER = 'http://localhost:8080'
export default function Login(){

    const [username,setName] = useState('') 

    const handleUserName = (e : any) =>  {
        setName(e.target.value)
    }

    const [password,setPassword] = useState('')

    const hanlePW = (e: any) => {
        setPassword(e.target.value)
    }
    const handleClick = () => {
        
        const url = `${SERVER}/api/login`
        const data = {username, password} // {'name':username, 'password':password}의 축약
        const config = {
            headers:{
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                 Authorization: `Bearer blah ~` ,
                "Access-Control-Allow-Origin": "*",
            }
        }
        axios.post(url,data,config)
        // .then(res=>{alert("로그인 결과 = " + JSON.stringify(res.data))}) < 이건 단순이 값을 출력이고 내부를 보고싶으면 아래와같이 변경 (json.stringfy 가 tostring 같은 느낌)
        .then(res=>{
            const message = res.data.message
            alert((message))
        })

    }
    
    return(
        <>  
            <div>로그인창</div>
            <h2>ID</h2>
            <input type="text" onChange={handleUserName}/> 
            <h2>PW</h2>
            <input type="text" onChange={hanlePW}/> <br />
            <button onClick={handleClick}>Login</button> <br />
        </>
    );
}
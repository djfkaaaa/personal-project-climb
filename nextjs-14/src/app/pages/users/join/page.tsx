'use client';


import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";
import { PG } from "@/app/atoms/enums/PG";
 
export default function join(){

    const [inputs, setInputs] = useState({
        username : "",
        password : "",
        name : "",
        phoneNumber : "",
        job : "",
        height : "",
        weight : ""
    })
    const {username,password,name,phoneNumber,job,height,weight} = inputs;
    const onChange = (e:any) => {
        const {value, name : fieldName } = e.target;
        setInputs(
             ({
                ...inputs,
                [fieldName]: value
            })
        );
    }
    const router = useRouter();

    const onClick = (e : any) => {
    e.preventDefault()
        alert('리스트가 가져가는 이름 = ' + username + ' '+ password + ' ' +name + ' ' +phoneNumber + ' ' +' ' +job + ' '+height +' ' +weight)
    const url = `${API.SERVER}/api/user` 
    const data = {username,password,name,phoneNumber,job,height,weight} // 자바의 requestbody
    const config = AxiosConfig()
    axios.post(url,data,config)
    .then(res=>
        {alert(JSON.stringify(res.data)) // 자바의 responsebody < return하는 map에 담기는놈
        router.push(`${PG.USER}/login`)
        })
    }

    return(
        <>
        <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label htmlFor="username"><b>username</b></label>
    <input type="text" placeholder="Enter username" name="username" onChange={onChange} required/> <br />

    <label htmlFor="password"><b>password</b></label>
    <input type="text" placeholder="Enter password" name="password" onChange={onChange} required/> <br />

    <label htmlFor="name"><b>name</b></label>
    <input type="text" placeholder="Enter name" name="name" onChange={onChange} required/> <br />
    
    <label htmlFor="phoneNumber"><b>phone</b></label>
    <input type="text" placeholder="Enter phone" name="phoneNumber" onChange={onChange} required/> <br />

    <label htmlFor="job"><b>job</b></label>
    <input type="text" placeholder="Enter job" name="job" onChange={onChange} required/> <br />

    <label htmlFor="height"><b>height</b></label>
    <input type="text" placeholder="Enter height" name="height" onChange={onChange} required/> <br />  

    <label htmlFor="weight"><b>weight</b></label>
    <input type="text" placeholder="Enter weight" name="weight" onChange={onChange} required/>     

    <label>
      <input type="checkbox" checked={true} name="remember" style={{marginBottom:"15px"}}/> 
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button onClick={onClick} type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
        </>
    );
}
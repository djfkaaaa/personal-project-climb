import { instance } from '@/redux/common/configs/axios-config'
import { use } from 'react'

export const fetchAllUsersAPI = async (page: number) =>{
    try{
        const response = await instance.get('/users/list',{ 

            params: {page, limit: 20}
        })
        console.log("-----")
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
    
}
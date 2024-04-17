import {instance} from '@/redux/common/configs/axios-config'

export const findAllArticlesAPI = async (page : number) => {
    try{
        const response = await instance.get('/articles/list',{
            params: {page, limit: 10}
        })
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}

export const findOneArticleAPI = async (id:number) => {
    try{
        const response = await instance.get('/articles/detail',{
            params: {id}
        })
        return response.data
    }catch(error){
        return error
    }
}

export const findarticlebyAPI = async (id:number) => {
    try{
        const response = await instance.get('/articles/byBoardId',{
            params:{id}
        })
        return response.data
    }catch(error){
        return error
    }
}

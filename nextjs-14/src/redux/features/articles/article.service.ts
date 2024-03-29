import {createAsyncThunk} from '@reduxjs/toolkit';
import { IArticles } from './article.model';
import { getAllArticlesAPI } from './article.api';
import axios from 'axios';
import { API } from '@/redux/common/enums/API';
import AxiosConfig, { instance } from '@/redux/common/configs/axios-config';

export const getArticles : any = createAsyncThunk(
    'articles/getAllArticles',
    async(page : number) => {
        console.log('getArticles page : ' + page)
        const {message,result}:any = await getAllArticlesAPI(0);
        console.log('------api 사용한 경우---------')
        console.log('message')
        console.log(JSON.stringify(result))
    }
)


// try{
    //     // const {allArticles}: any =  getAllArticlesAPI(page)
    //     // return allArticles
    //     instance(`/all-articles`,AxiosConfig())
    //     .then(res => {
    //         const {message,result} = res.data
    //         console.log((message))
    //         if (message === 'SUCCESS') {
    //             console.log("게시글이 있습니다.")
    //             const arr = res.data.result
    //             for (const i of arr) {
    //                 console.log(i);
    //             }
    //         } else if (message === 'FAIL') {
    //             console.log("게시글이 없습니다.");
    //         } else {
    //             console.log("지정되지 않은값");
    //         }
    //         return res.data
    //     })
    // } catch(error){
    //     console.log('getArticles error : ' + error)
    //     return rejectWithValue(error)
    // }
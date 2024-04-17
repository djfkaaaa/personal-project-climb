import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article-init";
import { fetchOneArticle, findarticlebyboard, getArticles } from "./article-service";
import { Pending } from "@mui/icons-material";
import { findAllArticlesAPI} from "./article-api";

const status = {
    pending : 'pending',
    fulfilled : 'fulfilled',
    rejected : 'rejected'
}




const handleFulfilled = (state:any,{payload}:any) => {
    console.log('--------conclusion--------')
    state.array = payload
    console.log(state.array)
}



export const articleSlice = createSlice({
    name : "article",
    initialState,
    reducers:{},
    extraReducers: builder => {
        const {pending,rejected} = status;

        builder
        .addCase(getArticles.fulfilled, handleFulfilled)
        .addCase(fetchOneArticle.fulfilled, handleFulfilled)
        .addCase(findarticlebyboard.fulfilled, handleFulfilled)
    }
})

export const getAllArticles = (state : any) => {
    console.log('------------Before useSelector--------------')
    console.log(JSON.stringify(state.article.array))
    return state.article.array;
}

export const getArticleById = (state : any) => {
    return state.article.array;
}



export const {} = articleSlice.actions

export default articleSlice.reducer;
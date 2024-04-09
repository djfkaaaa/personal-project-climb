import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllBoardsAPI } from "./board-api";

export const getBoards : any = createAsyncThunk(
    'boards/findAllBoards',
    async(page : number) => {
        console.log('findBoards page : ' + page)
        const data:any = await findAllBoardsAPI(1);
        const {message,result} : any = data
        return data
    }
)
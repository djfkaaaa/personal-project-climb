'use client';
import { IArticles } from "@/app/components/articles/model/article-model";
import Columns from "@/app/components/articles/module/article-columns";
import { findarticlebyboard } from "@/app/components/articles/service/article-service";
import { getAllArticles } from "@/app/components/articles/service/article-slice";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function getBoardsId(props:any){

    const dispatch = useDispatch()
    const allArticles: [] = useSelector(getAllArticles)
    useEffect(()=>{
        dispatch(findarticlebyboard(props.params.id))
    },[])

    return(<>
    Board ID별 목록 출력
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={allArticles}
        columns={Columns()}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    </>)

}
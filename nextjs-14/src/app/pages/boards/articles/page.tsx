'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import {Button,Input} from '@mui/material';
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";
import ArticleRow from "@/app/organisms/rows/articles-rows";



export default function articles() {

    const [contentlists, setContentlists] = useState([])

    const url = `${API.SERVER}/api/articles`
    const config = AxiosConfig()

    useEffect(() => {
        axios.get(url, config)
            .then(res => {
                const message = res.data.message
                console.log((message))
                if (message === 'SUCCESS') {
                    const arr = res.data.result
                    for (const i of arr) {
                        console.log(i);
                    }
                    setContentlists(res.data.result)
                } else if (message === 'FAIL') {
                    console.log("게시글이 없습니다.");
                } else {
                    console.log("지정되지 않은값");
                }
            })
    }, [])

    return (
        <div>

            <h2>게시글 목록</h2>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={ArticleRow()}
                    columns={columns}
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

        </div>
        //^ 내부함수 역할
    );
}


'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import {Button,Input} from '@mui/material';
import { API } from "@/redux/common/enums/API";
import AxiosConfig from "@/redux/common/configs/axios-config";
import ArticleRow from "@/app/components/rows/articles-rows";
import { NextPage } from "next";
import { getArticles } from "@/redux/features/articles/article.service";
import { useSelector, useDispatch } from 'react-redux'




interface IArticle {
    title: string,
    content: string,
    writer: string,
    registerDate: string,
    id: number
}

const articlesPage:NextPage = () => {

    const dispatch = useDispatch()
    const [contentlists, setContentlists] = useState([])

    useEffect(() => {
        dispatch(getArticles())
    }, [])

    
    return (<>
        <h2>개인페이지 Article</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>writer</th>
                    <th>registerDate</th>
                </tr>
            </thead>
            <tbody>
                {contentlists.map((props: IArticle) => (
                    <tr key={props.id}>
                        <td>{props.title}</td>
                        <td>{props.content}</td>
                        <td>{props.writer}</td>
                        <td>{props.registerDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}
export default articlesPage;

'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { DataGrid } from '@mui/x-data-grid';



const SERVER = 'http://localhost:8080'

interface IArticles {
    title: string,
    content: string,
    writer: string,
    registerDate: string,
    id: number
}

export default function articles() {

    const [contentlists, setContentlists] = useState([])

    const url = `${SERVER}/api/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }

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
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>내용</th>
                        <th>작성자</th>
                        <th>등록일</th>
                    </tr>
                </thead>
                <tbody >
                    {contentlists.map((props: IArticles) => (
                        <tr key={props.id}>
                            <td>{props.title}</td>
                            <td>{props.content}</td>
                            <td>{props.writer}</td>
                            <td>{props.registerDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        //^ 내부함수 역할
    );
}
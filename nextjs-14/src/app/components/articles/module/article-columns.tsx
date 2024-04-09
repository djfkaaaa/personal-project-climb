import { GridColDef } from "@mui/x-data-grid";
import { ArticleColumn } from "../model/article-column";
import { Typography } from "@mui/material";

interface CellType{
    row : ArticleColumn
}

export default function Columns() : GridColDef[]{
    return[
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'id', // field값은 자바에서 넘어온 속성값이여야함
            headerName: 'No',
            renderCell: ({row}:CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.id}</Typography>
            
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'title',
            headerName: 'Title',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.title}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'content',
            headerName: 'Content',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.content}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'writerId',
            headerName: '작가 아이디',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.writerId}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'boardId',
            headerName: '게시판 아이디',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.boardId}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'regDate',
            headerName: '작성일',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.modDate}</Typography>
        }
    ]
}
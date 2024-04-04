import { GridColDef } from "@mui/x-data-grid";

export default function Columns() : GridColDef[]{
    return[
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'id', // field값은 자바에서 넘어온 속성값이여야함
            headerName: 'ID',
            renderCell: () =>{
                return<></>
            }
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'title',
            headerName: 'ID',
            renderCell: () =>{
                return<></>
            }
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'content',
            headerName: 'ID',
            renderCell: () =>{
                return<></>
            }
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'registerDate',
            headerName: 'ID',
            renderCell: () =>{
                return<></>
            }
        },
    ]
}
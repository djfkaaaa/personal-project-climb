import { PG } from "@/redux/common/enums/PG";
import Link from "next/link";
import path from "path";
import { title } from "process";

interface ILinkButton{
    id: number,
    title: string,
    path: string
}

export default function LinkButton({id,title,path}:ILinkButton){
    return(<li>
    <Link key={id} href={`${path}`} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
     md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
       dark:border-gray-700" aria-current="page">{title}</Link>
    </li>
    )
}

export const linkButtonTiltes = [
    {id: 0, title:'사용자목록', path:`${PG.USER}/findUsers`},
    {id: 1, title:'게시글목록', path:`${PG.ARTICLE}`},
    {id: 2, title:'게시판목록', path:`${PG.BOARD}`},
    {id: 3, title:'카운터', path:`${PG.COUNT}/demos/redux-counter`},
    {id: 4, title:'보드아이디 아티클 테스트', path:`${PG.ARTICLE}/getBoardId`}
]

export const settings = []
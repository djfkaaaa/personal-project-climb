'use client';


import { IBoards } from "@/app/components/boards/model/board-model";
import { getBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deflateRaw } from "zlib";


// export default function boardCards(){

//     const dispatch = useDispatch()
//     const allBoards = useSelector(getAllBoards)
//     useEffect(() => {
//         dispatch(getBoards(1))
//     },[dispatch])

//     return(<>
//     {allBoards.map((board: IBoards)=>(<CardButton id={board.id} title={board.title} description={board.description}/>))}
//     </>)
// }



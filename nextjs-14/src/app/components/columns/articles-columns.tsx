import { useState } from "react"

export default function ArticleColumns(props:IArticles) {
    return  {.map((props: IArticles) => (
        <tr key={props.id}>
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>
    ))}
}
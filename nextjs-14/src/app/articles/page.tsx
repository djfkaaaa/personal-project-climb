
interface IArticles{
    title : string,
    content : string,
    writer : string,
    registerDate : string,
    id : number
}

const Article = (props:IArticles) => {

    return(
        <tr key={props.id}>
            {/* ^ td 꺽새는 사용자에게 보여지는 공간, tr 공간은 숨겨지는 공간 */}
            <td>{props.title}</td>
            <td>{props.content}</td>
            <td>{props.writer}</td>
            <td>{props.registerDate}</td>
        </tr>
    );
};
// ^ 자바 엔티티에 해당

export default function articles(){
    // ^ 자바 자료구조에 해당, 순서함수 구조, 판에 해당

        
        
        const contentlists = [ 
            // ^ [] < json 타입이며 array라 부르자
            {id:0, title:"" ,content:"" ,writer:"" ,registerDate:""}
        ]
        const articlelists = contentlists.map((v) => 
        (<Article  {...v}/>))
        
        return(
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
                <tbody>
                    {articlelists}
                </tbody>
                </table>
            </div>
        );
}
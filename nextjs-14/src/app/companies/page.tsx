// 샘플 코드 


interface ICompanies{
    company : string,
    contact : string,
    country : string
}

const Company = (props:ICompanies) => {

    return(
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};
// ^ 자바 엔티티에 해당

export default function companies(){
    // ^ 자바 자료구조에 해당, 순서함수 구조, 판에 해당
        const contentlists = [ 
            // ^ [] < json 타입이며 array라 부르자
            {company: "Alfreds Futterkiste", contact: "Maria Anders", country : "Germany"},
            {company: "Centro comercial Moctezuma", contact: "Maria Anders", country : "Mexico"},
            {company: "Ernst Handel", contact: "Roland Mendel", country : "Austria"},
            {company: "Island Trading", contact: "Helen Bennett", country : "Uk"},
            {company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country : "Canada"},
            {company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country : "Italy"}
        ]
        const articlelists = contentlists.map((v,i) => 
        (<Company key={i} {...v}/>))
        
        return(
            <div>
                <table>
                <thead>
                <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                </tr>
                </thead>
                <tbody>
                    {articlelists}
                </tbody>
                </table>
            </div>
        );
}
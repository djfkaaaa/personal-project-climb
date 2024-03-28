// 샘플 코드 

import CompaniesColumns from "@/app/organisms/columns/companies-columns";
import CompaniesRow from "@/app/organisms/rows/companies-rows";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


export default function companies() {
    // ^ 자바 자료구조에 해당, 순서함수 구조, 판에 해당
 
    

    return (
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
                          {CompaniesRow().map((v,i) => 
                (<CompaniesColumns key={i} {...v}/>))
        }
                        </tbody>
                        </table>
                    </div>
            
          );
}
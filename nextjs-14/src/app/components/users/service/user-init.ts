import { IUser } from "../model/user-model";

export const initialState: IUser = {
    id: 0,
    username: "",
    password: "",
    name: "",
    phone: "",
    job: "",
    articles: "",
    regDate: "",
    modDate: "",
    array: []
}
// 데이터 컬럼값 초기화부
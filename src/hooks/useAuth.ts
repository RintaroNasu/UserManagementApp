import axios from "axios"
import { useCallback, useState } from "react"
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";

export const UserAuth = () =>{
    const navigate = useNavigate();
    const [loading,setloading] = useState(false);
    const {setLoginUser} = useLoginUser();

    
    const login = useCallback((id:string) =>{ 
        setloading(true);
        axios.get<User> (`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                const isAdmin =res.data.id === 10 ? true :false;
                setLoginUser({...res.data,isAdmin})
                navigate("/home");
            }else {
                alert("ユーザーが見つかりません");
            }
        }).catch(() => {
            alert("ログインできません");
        }).finally(() =>  {
            setloading(false);
        })
    },[navigate]);
    return{login,loading,setLoginUser}
}

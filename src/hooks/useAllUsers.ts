import axios from "axios";
import { useCallback, useState } from "react"
import { User } from "../types/api/user";

// カスタムフックに変換
export const useAllUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<Array<User>>([]);

    const getUsers = useCallback(() =>{
        setLoading(true);
        axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch(() => {
            alert("ユーザーログインに失敗しました");
        }).finally(() => setLoading(false))
    },[])

    return { getUsers,users,loading };
}

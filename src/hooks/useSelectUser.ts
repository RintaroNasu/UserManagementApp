import { useCallback, useState } from "react"
import { User } from "../types/api/user";

type Props = {
    id:number;
    users: Array<User>
    onOpen:() => void
}
export const useSelectUser = () => {
    const[selectedUser, setSelectedUser] = useState<User | null>();

    const onSelectedUser = useCallback((props: Props) =>{
        const {id,users,onOpen} = props;
        const targetUser = users.find((user) => user.id === id)
        setSelectedUser(targetUser);
        onOpen()
    },[])
    return{onSelectedUser,selectedUser}
}
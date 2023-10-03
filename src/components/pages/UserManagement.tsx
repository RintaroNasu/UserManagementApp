/* eslint-disable react-hooks/exhaustive-deps */
import { Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback, useEffect } from "react"
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement:FC = memo(() => {
    const {isOpen,onOpen,onClose} = useDisclosure();
    const {getUsers, users, loading} = useAllUsers();
    const {onSelectedUser,selectedUser} = useSelectUser();
    const {loginUser} = useLoginUser();
    console.log(loginUser)

    useEffect(() => getUsers(),[])

    const onClickUser = useCallback((id:number) => {
        onSelectedUser({id,users,onOpen})},[users,onSelectedUser,onOpen]);
    
    return(
        <>
            {loading ? 
            <Center h="100vh">
                <Spinner />
            </Center> : (
            <Wrap p={{base:4,md:10}}>
                {users.map((user) => {
                return(
                    <WrapItem key={user.id} mx="auto">
                        <UserCard id={user.id}imageUrl="https://source.unsplash.com/random" userName={user.username} fullName={user.name} onClick={onClickUser}/>
                    </WrapItem>
                )
                })}
            </Wrap>)}
            {loginUser &&
            <UserDetailModal user={selectedUser || null} isOpen={isOpen} isAdmin={loginUser.isAdmin} onClose={onClose} />
            }
        </>
    )
});
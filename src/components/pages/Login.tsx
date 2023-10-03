import { Box, Divider, Flex, Heading, Input, Stack} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { UserAuth } from "../../hooks/useAuth";

export const Login:FC = memo(() => {
    const {login, loading} = UserAuth();
    const [userId,setUserId] = useState("");
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>  setUserId(e.target.value);
    const onClickLogin = () => login(userId);
    return(
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderEndRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider my={4}/>
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId}/>

                    {/* disabledが反映されない！！！ */}
                    <PrimaryButton loading = {loading}　onClick={onClickLogin} disabled={userId === " "} >ログイン</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
});
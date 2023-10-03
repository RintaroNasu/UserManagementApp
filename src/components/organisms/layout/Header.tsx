import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import { FC, memo, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import { MenuIconButton } from "../../atoms/button/MenuIconButton"
import { MenuDrawer } from "../../molecules/MenuDrawer"

export const Header:FC = memo(() =>{
    const {isOpen,onClose,onOpen} = useDisclosure();
    const navigate = useNavigate();
    const onClickHome = useCallback(() => navigate("/home"), [navigate]);
    const onClickUserManagement = useCallback(() => navigate("/home/user_management"), [navigate]);
    const onClickSetting = useCallback(() => navigate("/home/setting"), [navigate]);

    return(
        <>
            <Flex 
                as="nav" 
                bg="teal.500" 
                color="gray.50" 
                align="center" 
                justify="space-between"
                padding={{base:3,md:5}}
                >  
                <Flex as="a" onClick={onClickHome}>
                    <Heading as="h1" fontSize={{ base:"md", md:"lg"}}>
                        ユーザー管理アプリ
                    </Heading>
                </Flex>
                <Flex align="center" fontSize="sm" display={{base:"none", md: "flex"}}>
                    <Box pr={6}>
                        <Link to="/home/user_management">ユーザー一覧</Link>
                    </Box>
                    <Link to="/home/setting">設定</Link>
                </Flex>
                <MenuIconButton onOpen={onOpen}/>
            </Flex>
            <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickUserManagement={onClickUserManagement} onClickSetting={onClickSetting}/>
        </>
    )
})
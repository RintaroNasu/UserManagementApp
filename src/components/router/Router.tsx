import { FC, memo } from "react"
import { Route, Routes } from "react-router-dom"

import { Login } from "../pages/Login"
import { UserManagement } from "../pages/UserManagement"
import { Home } from "../pages/Home"
import { Setting } from "../pages/Setting"
import { Page404 } from "../pages/Page404"
import { LoginUserProvider } from "../../providers/LoginUserProvider"

export const Router:FC = memo(() =>{
    return(
        <LoginUserProvider>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/user_management" element={<UserManagement />} />
                <Route path="/home/setting" element={<Setting />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </LoginUserProvider>
    )
})
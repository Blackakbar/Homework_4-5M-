import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import UsersListPage from "./pages/userListPage/UserListPage";
import Menu from "./components/Menu";

export default function App() {
  return(
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<UserRegisterPage />}/>
        <Route path={'/users'} element={<UsersListPage />} />
      </Routes>
    </BrowserRouter>
  )
}
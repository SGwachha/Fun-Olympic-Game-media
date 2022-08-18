import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "./component/login/Login"
import Signup from './component/signUp/SignUp'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default Router
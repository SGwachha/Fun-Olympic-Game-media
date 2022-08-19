import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './component/dashboard/Dashboard'
import Login from "./component/login/Login"
import Signup from './component/signUp/SignUp'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default Router
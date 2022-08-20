import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forgotpassword from './component/authentication/forgetpassword/ForgetPassword.js'
import QuestionSet from './component/authentication/questions/QuestionSet.js'
import ResetPassword from './component/authentication/resetpassword/ResetPassword.js'
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
        <Route path='/forget' element={<Forgotpassword />} />
        <Route path='/question' element={<QuestionSet />} />
        <Route path='/reset' element={<ResetPassword />} />
    </Routes>
    </>
  )
}

export default Router
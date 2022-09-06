import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Forgotpassword from './authentication/forgetpassword/ForgetPassword.js'
import QuestionSet from './authentication/questions/QuestionSet.js'
import ResetPassword from './authentication/resetpassword/ResetPassword.js'
import Dashboard from './component/dashboard/Dashboard'
import Login from "./component/login/Login"
import Home from './home/Home.js'
import Signup from './component/signUp/SignUp'
import Cards from './component/cards/Cards.js'
import Description from './component/dashboard/description/Description.js'
import News from './component/news/News.js'
import AdminPage from './authentication/admin/AdminPage.js'
import User from './authentication/user/User.js'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/forget' element={<Forgotpassword />} />
        <Route path='/question' element={<QuestionSet />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/description' element={<Description />} />
        <Route path='/news' element={<News />} />	
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<h1 style={{fontSize : '40px'}}>404 Not Found</h1>} />
    </Routes>
    </>
  )
}

export default Router
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserContext from "./context/UserContext";
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import DashboardHome from './pages/dashboardHome'


const App = () => {
  return ( 
    <UserContext>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboardHome' element={
          <UserProtectedWrapper>
            <DashboardHome />
          </UserProtectedWrapper>
        } />
      </Routes>
    </UserContext>
  )
}

export default App

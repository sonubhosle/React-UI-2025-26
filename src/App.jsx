import React, { Suspense } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Category_Details from './Pages/Category_Details'
import Login from './Pages/Authentication/Login'
import Signup from './Pages/Authentication/Signup'

const App = () => {
   const  location = useLocation()

   const hideLayout = location.pathname === '/login';
  return (
    <Suspense>
     {!hideLayout &&  <Header />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/category/:name' element={<Category_Details />}></Route>
      </Routes>
      <Footer />
    </Suspense>
  )
}

export default App
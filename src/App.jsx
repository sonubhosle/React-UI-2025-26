import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'

const App = () => {

  return (
     <BrowserRouter>
     <Header/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product/:id'  element={<ProductDetails/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
  )
}

export default App
import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Heart from './pages/Heart'
import Cart from './pages/Cart'
import Header from './components/Header'
import { useDispatch } from 'react-redux'
import { getPath } from './store/slices/getPathName'
import Detail from './pages/Detail'
const App = () => {
  const dispatch=useDispatch()
  const location=useLocation()
  useEffect(()=>{
dispatch(getPath(location.pathname))
  },[location.pathname,window.location.pathname])
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/heart' element={<Heart/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id/:name' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
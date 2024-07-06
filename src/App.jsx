import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import Cart from './components/Cart'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' exact element = {<Home />} />
            <Route path='/cart' exact element = {<Cart />} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

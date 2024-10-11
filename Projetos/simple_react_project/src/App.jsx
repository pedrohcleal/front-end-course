import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from './Titulo'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contato' element={<Contato/>} />
        </Routes>
      </BrowserRouter>
      {/* <h2>
        App.jsx
        <p>
          Lorem ipsum dolor sit amet consectetur. - App.jsx
        </p>
        <Titulo cor = 'blue'/>
        <Titulo cor = 'red'/>
        <Titulo cor = 'green'/>
      </h2> */}
    </div>
  )
}

export default App

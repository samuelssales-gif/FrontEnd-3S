import { useState } from 'react'
import './App.css'
import HomePage from './components/pages/home/homepage'
import QuemSomosPage from './components/pages/quemsomos/quemsomos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import CadastroFrutaPage from './components/pages/cadastrofrutas/cadastrofrutapage'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<QuemSomosPage />} path="/quemsomos" />
      <Route element={<CadastroFrutaPage />} path="/cadastrofruta" />
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App

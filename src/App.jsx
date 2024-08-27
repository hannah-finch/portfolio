// import { useState } from 'react'

import { Outlet } from 'react-router-dom';

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App

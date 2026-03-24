import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import './App.css'
import Footer from './components/Footer/Footer'
import NewsletterModal from './components/NewsletterModal/NewsletterModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
      <NewsletterModal /> {/* It handles its own visibility logic */}
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App

import { Route, Routes, useLocation } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarDetails from "./pages/CarDetails";
import MyBooking from "./pages/MyBooking";
import React, { useState } from 'react'
import Cars from './pages/Cars';

export default function App() {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/my-bookings' element={<MyBooking />} />
         <Route path='/CarDetails/:id' element={<CarDetails />} />
         <Route path ='/cars' element = {<Cars/>} />
      </Routes>
     {!isOwnerPath && <Footer setShowLogin={setShowLogin} />}
    </>
  )
}

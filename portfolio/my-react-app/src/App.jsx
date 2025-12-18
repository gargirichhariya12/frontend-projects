import { useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'


import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'


export default function App() {
  const vantaRef = useRef(null)


  useEffect(() => {
    const vanta = NET({
      el: vantaRef.current,
      THREE,
      color: 0x8150de,
      backgroundColor: 0x000000,
      maxDistance: 14.0,
      spacing: 13.0,
      showDots: false,
    })


    return () => vanta.destroy()
  }, [])


  return (
    <div ref={vantaRef} className="min-h-screen bg-black text-gray-300">
      <Navbar />
     
      <About />
      <Projects />
      
    </div>
  )
}
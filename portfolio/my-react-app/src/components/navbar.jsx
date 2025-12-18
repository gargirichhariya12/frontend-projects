import { useState } from 'react'


export default function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-purple-400 font-bold text-xl">GR</div>


        <ul className="hidden md:flex gap-10 text-gray-400">
          <li className="text-purple-400">Home</li>
          <li><a href="#work">Works</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>


        <a
          href="/assets/Gargi-Richhariya.pdf"
          target="_blank"
          className="hidden md:block bg-purple-400 text-white px-6 py-2 rounded-md"
        >
          Resume
        </a>


        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>


      {open && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-4">
          <a href="#home">Home</a>
          <a href="#work">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}
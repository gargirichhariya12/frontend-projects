import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import VantaBackground from "./components/VantaBackground";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <VantaBackground />
      <Routes>
        <Route path = "/" element = {<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

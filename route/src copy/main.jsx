import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Navbar",
        element: <Navbar />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/footer",
        element: <Footer />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router = {router}/>
  </StrictMode>,
)
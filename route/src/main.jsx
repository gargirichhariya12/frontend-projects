import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import User from './User/User.jsx'
import About from './components/About/About.jsx'
import ContactUs from "./components/ContactUs/ContactUs.jsx"
import Github, { GithubInfoLoader } from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import './index.css'
//create the route
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//        path:"About",
//        element:<About/>
//       },
//       {
//         path:"ContactUs",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>} />
      <Route path ='User/:userid' element ={<User/>}/>
      <Route path ='Github' element ={<Github/>}/>
      <Route loader={GithubInfoLoader} path="/github" element={<Github/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router = {router}/>
  </StrictMode>,
)

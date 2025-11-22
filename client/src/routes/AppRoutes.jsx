import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { PublicLayouts } from '../layouts/PublicLayouts'
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"))
const Skills = lazy (() => import("../pages/Skills/Skills"))
const Projects = lazy(() => import("../pages/Projects/Projects"))
const Contact = lazy(() => import ("../pages/Contact/Contact"))
export const AppRoutes = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<PublicLayouts/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/projects' element={<Projects/>}/>
                <Route path="contact" element={<Contact/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

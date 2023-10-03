import './App.css'
import './index.css'
import About from './components/About'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Events from './components/Events'
import Projects from './components/Projects'
import Media from './components/Media'
import Donate from './components/Donate'
import WhatWeDo from './components/WhatWeDo'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/events' exact element={<Events/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
        <Route path='/media' exact element={<Media/>}/>
        <Route path='/donate' exact element={<Donate/>}/>
        <Route path='/whatwedo' exact element={<WhatWeDo/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

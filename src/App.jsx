import './App.css'
import './index.css'
import About from './components/About'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Events from './components/Events'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<About/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/events' exact element={<Events/>}/>
        <Route path='/projects' exact element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

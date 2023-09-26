import './App.css'
import './index.css'
import About from './components/About'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<About/>}/>
      </Routes>
    </>
  )
}

export default App

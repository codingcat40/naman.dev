import AboutMe from './Components/AboutMe'
import { Landing } from './Components/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'


function App() {
  
  return (
   <Router>
    
      <Navbar />

    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
   </Router>
  )
}

export default App

import AboutMe from './Components/AboutMe'
import DropDown from './Components/DropDown'
import { Landing } from './Components/Landing'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './Components/Projects'
function App() {

  return (
   <Router>
    <div className="fixed top-0 right-0 h-16 px-6 flex items-center justify-between bg-black/40 backdrop-blur-md z-50">

      <DropDown />
    </div>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/projects' element={<Projects />}/>
    </Routes>
    <Landing />  
   </Router>
  )
}

export default App

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Pages/About'
import Education from './Pages/Education'
import Work from './Pages/Work'
import Projects from './Pages/Projects'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element = {<HomePage />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/education" element = {<Education />}></Route>
        <Route path="/work" element = {<Work />}></Route>
        <Route path="/projects" element = {<Projects />}></Route>
      </Routes>
    </main>
  )
}

export default App

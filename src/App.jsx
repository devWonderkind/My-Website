// import './App.css'
import {Navbar} from "./components/Navbar/Navbar"
import {Hero} from "./components/Hero/Hero"
// import {About} from './components/About/About'
import {Skill} from './components/Skills/Skill'
import { Project } from "./components/Projects/Project"
import Contact from "./components/Contact/Contact"


function App() {
  
  return (
    <>

     <div className='bg-custom-gradient-3 m-0 p-0'>
      <Navbar />
      <Hero />
      <Skill />
      <Project />
      <Contact />
     </div>
    </>
  )
}

export default App

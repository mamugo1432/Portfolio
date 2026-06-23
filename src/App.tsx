import Header from './components/Header/Header'
import './App.css'
import AboutMe from './components/AboutMe/AboutMe'
import Tecnologies from './components/Tecnologies/Tecnologies'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

function App() {


  return (
    <>
      <Header/>
      <main>
        <hr />
      <AboutMe/>
      <Tecnologies/>
      <Experience/>
      <Projects/>
      </main>
    </>
  )
}

export default App

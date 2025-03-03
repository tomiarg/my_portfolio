
import { RealProjects, NavBar, Header, Practices, WorkExperience } from "./components"

function App() {
  return (
    <>
      <NavBar/>
      <div className="contenedor">
        <Header/>
        <RealProjects/>
        <Practices/>
        <WorkExperience/>

      </div>
      
    </>
  )
}

export default App

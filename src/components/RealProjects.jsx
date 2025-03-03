import "../styles/realprojects.css"
import { ProjectCard } from './ProjectCard'
import { baseDatos } from "../dataBase/dataBase"

const reales = baseDatos.filter(e => e.project === true)



export const RealProjects = () => {
  return (
    <>
        <h3 className='realProjects__heading'>RealProjects</h3>
        <p>I've developed three websites. Two of them were built using only HTML, CSS, and Vanilla JavaScript. The third one was made with React.js, but by the time I finished it, my client had already found a job, so we just uploaded it to Netlify</p>
        <div className="projects">
          {
            reales.map(real =>
              (
                <ProjectCard key={real.id} name={real.name} link={real.link} image={real.image} tech={real.technologies}/>

              )
            )
          }
        
          {/*este div es el que tiene que hacer el .map para las 3 webs y los diferentes proyectos q hice en los cursos.  */}
        </div>

    </>
  )
}

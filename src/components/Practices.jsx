
import "../styles/practices.css"
import { ProjectCard } from './ProjectCard'
import { baseDatos } from "../dataBase/dataBase"


const irreales = baseDatos.filter(e => e.project === false)

export const Practices = () => {
  return (
    <>
        <h2 className='practices__header'>Practices</h2>
        <p>I've taken several courses, starting with C, and recently, I've been working with React. Most of these courses included coding practice and building different websites. Here are a few projects I've worked on:</p>
        <div className='practices__card'>
            {
                        irreales.map(real =>
                          (
                            <ProjectCard key={real.id} name={real.name} link={real.link} image={real.image} tech={real.technologies}/>
            
                          )
                        )
                      }
        </div>
    </>
    
  )
}


import { LinkSVG } from '../assets/LinkSVG'
import "../styles/realprojects.css"


export const ProjectCard = ({name, link, tech, image}) => {
  return (
    <div className='card'>
        <img src={image} alt="Imagen Primer Proyecto" className='card__img' />
         
        <h5 className='card__head'>Technologies</h5>
        <div className='card__tecn'>
            <p>{tech}</p>
        </div>  
        <h4 className='card__link'><a href={link} target='_blank'>{name} <LinkSVG/></a> </h4>          
    </div>
  )
}

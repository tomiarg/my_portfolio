import React from 'react'
import "../styles/header.css"
import LinkedinSVG from '../assets/linkedinSVG'
import MailSVG from '../assets/MailSVG'
import WhatsappSVG from '../assets/WhatsappSVG'
import tomiChina from "../assets/img/tomi-iii.png"


export const Header = () => {
  return (
    <header className="contenidoHeader">       
        
          <div className='contenidoHeader__text'>
              <div>
                <h1>Hola, Soy <span className='celeste'>Tomás</span>.</h1>
            </div>
            <div>
                    <a href="#" target='_blank' className='header_link'>Linkedin <LinkedinSVG/></a>                    
                  <a href="#" target='_blank' className='header_link'>Mail <MailSVG/></a>            
                  <a href="#" target='_blank' className='header_link'>Whatsapp <WhatsappSVG/></a>            
              </div>
              <div>
                  <p>
                  I’m a freelance web developer focusing on React.js. I’ve built various front-end projects using HTML, CSS, JavaScript, React.js, and SEO, while also learning how to deploy them on purchased domains with different hosting services.
              </p>            
            </div>

          </div>
        
          <div>
            <img src={tomiChina} alt="" srcset="" />
          </div>

         
         
    
    </header>
  )
}

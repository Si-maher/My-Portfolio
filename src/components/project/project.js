import React from 'react'
import './styles.css'
import Img from 'gatsby-image'
import Button from '../Button'


const Projects = ({image, title, link}) => {
    return(
<figure className="portfolio__photos">
         <div className="inside">
           <a className="inside__link" href={link} target='_blank' rel='noopener noreferrer'>
             <Img
               className="inside__pic"
               fixed={image}
               alt={title}
             />
             <span className="portfolio__hidden-title">
              <a href={link} target='_blank' rel='noopener noreferrer'>
                <Button text={title} styleClass='btn-primary small-button'/>
              </a>
             </span>
           </a>
         </div>
       </figure>
    )
}
export default Projects
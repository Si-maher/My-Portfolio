import React from "react"
import Project from '../project/project'
import './styles.css'
import {useStaticQuery, graphql} from 'gatsby'





const ProjectList = () => {


  const getProject = useStaticQuery(graphql `{
  allProject : allContentfulProject(sort:{fields:[order], order:ASC}) {
    edges {
      node {
        
        title
        order
        image { 
          fixed(height:240,width:320) { 
            base64
            
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            
            
            
          }
        }
      }
    }
  }
}`)



return (
<section id="portfolio-page" className="portfolio">
      <div className="heading-container">
        <div>
          <h3 className="heading-title heading-title--dark">My Latest Work</h3>
          <p>Take a look at some my recent projects</p>
        </div>
        <a className="portfolio__button" href="#">View All</a>
      </div>
      <div className="portfolio__container">
    {
      getProject.allProject.edges.slice(0,6).map(({node:item}) => {
      return (
      <Project image={item.image.fixed} title={item.title} />

      )
    })
    }
      </div>
    </section>
    )
}

export default ProjectList
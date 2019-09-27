import React from "react"
import Project from '../project/project'
import './styles.css'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Button from '../Button'
import './styles.css'





const ProjectList = () => {


  const getProject = useStaticQuery(graphql `{
  allProject : allContentfulProject(sort:{fields:[order], order:ASC}) {
    edges {
      node {
        
        title
        order
        link
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
/* <section id="portfolio-page" className="portfolio">
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
    </section> */

    <section className="section portfolio-section" id="portfolio">
    <div className="container">
      <p className="portfolio-text">
        I provide <span className="gold-text">high quality</span> Front-end solutions to improve and enhance user experience. <br/>
        Here is some of my <span className="gold-text">most recent</span> work.
      </p>

      <div className="portfolio__container">
    {
      getProject.allProject.edges.slice(0,6).map(({node:item}) => {
      return (
      <Project image={item.image.fixed} title={item.title} link={item.link} />

      )
    })
    }
      </div>
      <div className="button-wrapper">
        <Link to="/en/portfolio">
          <Button styleClass="btn-primary" text="Learn more" />
        </Link>
      </div>
    </div>
  </section>
    )
}

export default ProjectList
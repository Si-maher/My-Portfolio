import React from 'react'

import {useStaticQuery, graphql} from 'gatsby'
import Project from '../components/project/project'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubPageHeader from '../components/subPageHeader/subPageHeader'
import {Title2} from '../components/Title'


const Portfolio = () => {
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
    <>
      <Layout>
        <SEO title="Portfolio" />
        <SubPageHeader>
        <Title2 text='My latest work' styleClass='title-h2-light'/>

        </SubPageHeader>
        <section id="portfolio-page" class="portfolio">
                   <div class="portfolio__container">
                       {getProject.allProject.edges.map(({ node: item }) => {
                           return (
                               <Project image={item.image.fixed} title={item.title} link={item.link} />
                           )
                       })}
                   </div>
               </section>
      </Layout>
    </>
  )
}

export default Portfolio

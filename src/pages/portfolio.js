import React from 'react'

import {useStaticQuery, graphql} from 'gatsby'
import Project from '../components/project/project'
import Layout from "../components/layout"
import SEO from "../components/seo"


const Portfolio = () => {
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
    <>
      <Layout>
        <SEO title="Portfolio" />
        {
      getProject.allProject.edges.slice(0,6).map(({node:item}) => {
      return (
      <Project image={item.image.fixed} title={item.title} />

      )
    })
    }
      </Layout>
    </>
  )
}

export default Portfolio

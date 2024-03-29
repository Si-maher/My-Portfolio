import React from "react"
import Button from "../Button"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./styles.css"
const AboutMe = ({ image, text, title1, title2, title3 }) => {
  const imgStyles = { backgroundImage: `url(${image})` }
  return (
    <section className="section about-me" id="about">
      <div className="container">
        <div className="about-me-wrapper">
          <div className="about-me-text">
            <h1>
              {title1} <br /> <span className="highlight">{title2} </span>
              {title3}
            </h1>
            <p>{text}</p>
            <div>
              <a href = 'https://drive.google.com/open?id=19r-mRzM8RTN5u30DkCu0ioQlg4B-qA4y'  target='_blank' rel='noopener noreferrer'>
                <Button styleClass="btn-secondary" text="My Resume" />
              </a>
            </div>
          </div>
          <BackgroundImage className="about_me_image" fluid={image} />
          {/* <div style={imgStyles} className="about_me_image"></div> */}
        </div>
      </div>
    </section>
  )
}
export default AboutMe
import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from "../assets/brand-github.svg";
import MailIcon from "../assets/mail.svg";
import TwitterIcon from "../assets/brand-twitter.svg";
import WorldIcon from "../assets/world.svg";

import "../styles/cv.css";

export const query = graphql`
  query {
    profilePhoto: file(relativePath: { eq: "profile-photo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function Cv({ data }) {
  const { profilePhoto } = data;

  return (
    <div className="cv-container">
      <section className="cv-presentation">
        <div className="cv-image">
          <Img
            fluid={profilePhoto.childImageSharp.fluid}
            alt="Profile photo"
          />
          <div className="cv-image-description">
            <h2>Hader Cardona Suarez</h2>
            <ul>
              <li>
                <GithubIcon />
                haderman
              </li>
              <li>
                <MailIcon />
                cardona.hader@gmail.com
              </li>
              <li>
                <TwitterIcon />
                haderman7
              </li>
            </ul>
          </div>
        </div>
        <article>
          <h1>PROFILE</h1>
          <p>
            I'm a Front End Developer, I am very adaptative to different ways to work because
            I think the most important thing is to learn the basics very well and figure out what is the best approach
            for the team and the product. That's why in my side projects I try to use fewer libraries possible and try
            to understand how things work. I really love what I do and that's why I am learning always and one of my professional
            dreams is to have a personal product in Product Hunt
          </p>
          <h1>SKILLS</h1>
          <ul className="skill-list">
            <li>React</li>
            <li>Html</li>
            <li>Css</li>
            <li>Redux</li>
            <li>Nextjs</li>
            <li>Gatsbyjs</li>
          </ul>
        </article>
      </section>
      <section className="cv-side-projects-container">
        <h1>SIDE PROJECTS</h1>
        <ul className="cv-side-projects-list">
          <li className="cv-side-project-item cv-border-top-blue">
            <h2>Personal Site</h2>
            <p>
              Personal site developed with Gatsby
            </p>
            <p className="cv-project-skills">
              <h3>Skills: </h3>
              <ul>
                <li>Gatsby</li>
                <li>React</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </p>
            <ul className="cv-side-project-links">
              <li>
                <GithubIcon />
                <span>https://github.com/haderman/haderman-site</span>
              </li>
              <li>
                <WorldIcon />
                <span>https://haderman.netlify.app</span>
              </li>
            </ul>
          </li>
          <li className="cv-side-project-item cv-border-top-green">
            <h2>COVID-19 Tracker</h2>
            <p>
              Dashboard to see the Covid-19 stats
            </p>
            <p className="cv-project-skills">
              <h3>Skills: </h3>
              <ul>
                <li>Nextjs</li>
                <li>React</li>
                <li>Html</li>
                <li>Css</li>
              </ul>
            </p>
            <ul className="cv-side-project-links">
              <li>
                <GithubIcon />
                <span>https://github.com/haderman/nextjs-covid-19</span>
              </li>
              <li>
                <WorldIcon />
                <span>https://covidx19.vercel.app</span>
              </li>
            </ul>
          </li>
          <li className="cv-side-project-item cv-border-top-purple">
            <h2>Woki</h2>
            <p>
              Google Chrome extension to manage the tabs
            </p>
            <p className="cv-project-skills">
              <h3>Skills: </h3>
              <ul>
                <li>Elm</li>
                <li>Javascript</li>
                <li>Css</li>
              </ul>
            </p>
            <ul className="cv-side-project-links">
              <li>
                <GithubIcon />
                <span>https://github.com/haderman/woki-extension</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="cv-experience">
        <h1>EXPERIENCE</h1>
        <div className="cv-timeline">
          {/* <div className="cv-timeline-line" /> */}
          <ul>
            <li>
              <article className="cv-experience-item">
                <h4>2015 - 2016</h4>
                <p>
                  Unity Develiper Junior at <strong>Brainz.</strong> (Medellín, Colombia)
                </p>
                <p>
                  I helped to develop some components to the UI of the game like the store, modals and rewards
                </p>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2016</h4>
                <p>
                  Front End Developer at <strong>Equitel.</strong> (Medellín, Colombia)
                </p>
                <p>
                  I built a module for Artimo (a platform of the company) using React and Redux
                </p>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2016 - 2018</h4>
                <p>
                  Front End Develiper at <strong>Firebase S.A.S</strong> (Medellín, Colombia / Remote)
                </p>
                <ul>
                  <li>I built the whole front end for a web app using react and redux</li>
                  <li>I build an Electron web app using react and redux</li>
                  <li>I build the the whole front end for the web app of https://www.lobbieapp.com/</li>
                </ul>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2019</h4>
                <p>
                  Traveling and working as volunter in different hostels in Ecuador and Peru to learn english
                </p>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section className="cv-education">
        <h1>EDUCATION</h1>
        <p>
          Institución Universitaria de Envigado, Systems Engineer JAN 2008 - DEC 2014, MEDELLÍN (Colombia)
        </p>
      </section>
    </div>
  );
}

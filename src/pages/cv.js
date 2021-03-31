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
          <h1>Who I am</h1>
          <p>
            I’m a Front End Developer and I am very adaptive to different ways of working.
            I believe that the most important thing is to learn the basics very well and
            determine the best approach for the team and the product overall. I love to have
            side projects to experiment with new technologies and to practice new things that
            I learn on my way. I really love what I do and I am continuously
            learning and developing my skills.
          </p>
          <h1>Skills</h1>
          <ul className="skill-list">
            <li>React</li>
            <li>Html</li>
            <li>Css</li>
            <li>Redux</li>
            <li>Nextjs</li>
            <li>Gatsbyjs</li>
            <li>Storybook</li>
            <li>Github actions</li>
            <li>Electron</li>
            <li>Typescript</li>
          </ul>
        </article>
      </section>
      <section className="cv-side-projects-container">
        <h1>Side Projects</h1>
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
                <GithubIcon  width={20} />
                <span>https://github.com/haderman/haderman-site</span>
              </li>
              <li>
                <WorldIcon  width={20} />
                <span>https://haderman.netlify.app</span>
              </li>
            </ul>
          </li>
          <li className="cv-side-project-item cv-border-top-green">
            <h2>COVID-19 Tracker</h2>
            <p>
              Dashboard to monitor the covid 19 stats
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
                <GithubIcon width={20} />
                <span>https://github.com/haderman/nextjs-covid-19</span>
              </li>
              <li>
                <WorldIcon  width={20} />
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
                <GithubIcon width={20} />
                <span>https://github.com/haderman/woki-extension</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="cv-experience">
        <h1>Experience</h1>
        <div className="cv-timeline">
          <ul>
            <li>
              <article className="cv-experience-item">
                <h4>2015 - 2016</h4>
                <p>
                  Unity Developer Junior at <strong>Brainz.</strong> (Medellín, Colombia)
                </p>
                <ul>
                  <li>
                    I helped to develop several components of the ui of the game including the store, modals and rewards
                  </li>
                </ul>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2016</h4>
                <p>
                  Front End Developer at <strong>Equitel.</strong> (Medellín, Colombia)
                </p>
                <ul>
                  <li>
                    I built a module for Artimo (a platform of the company) using React and Redux
                  </li>
                </ul>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2016 - 2018</h4>
                <p>
                  Front End Developer at <strong>Firebase S.A.S</strong> (Medellín, Colombia / Remote)
                </p>
                <ul>
                  <li>I built the entire front end for a web app using react and redux.</li>
                  <li>I built an electron web app using react and redux.</li>
                  <li>I built the entire front end for the web app of https://www.lobbieapp.com/</li>
                </ul>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2019</h4>
                <ul>
                  <li>
                    I was traveling as a backpacker and working as a volunteer in different places to practice English 
                  </li>
                </ul>
              </article>
            </li>
            <li>
              <article className="cv-experience-item">
                <h4>2021</h4>
                <p>Front End Developer at <strong>Somoglobal</strong> (present)</p>
                <ul>
                  <li>
                    Create components for mettrr project using React and Nextjs
                  </li>
                  <li>
                    Update Somoglobal website to the new design using React and Gatsby
                  </li>
                </ul>
              </article>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

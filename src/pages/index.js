import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import SEO from "../components/seo"
import GithubIcon from "../assets/brand-github.svg"
import MailIcon from "../assets/mail.svg"
import FileTextIcon from "../assets/file-text.svg"
import TwitterIcon from "../assets/brand-twitter.svg"

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

export default function IndexPage({ data }) {
  return (
    <div className="stack:m flex column h-min-screen">
      <header className="inset:m">
        <nav className="flex justify-end">
          <AniLink cover to="/projects" bg="#0e0f0f">
            <span className="inset:xs">My Projects</span>
          </AniLink>
        </nav>
      </header>
      <main className="flex-1 justify-space-between">
        <SEO title="Home" />
        <Greeting />
        <div className="w-full relative">
          <Img
            fluid={data.profilePhoto.childImageSharp.fluid}
            alt="Profile photo"
          />
        </div>
        <SocialLinks />
      </main>
    </div>
  );
};

function Greeting() {
  return (
    <h1 className="inset:m greeting text-center">
      Hi, I'm <span> Hader Cardona </span> and
      I'm <span> Front-End Developer</span>
    </h1>
  )
}

function SocialLinks() {
  return (
    <ul className="inline:xl inset:l w-full fixed social-buttons-list">
      <li>
        <a href="https://github.com/haderman" target="_blank">
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/haderman7" target="_blank">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a>
          <FileTextIcon />
        </a>
      </li>
      <li>
        <a href="mailto:cardona.hader@gmail.com">
          <MailIcon />
        </a>
      </li>
    </ul>
  );
};

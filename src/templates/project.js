import React from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";
import SEO from "../components/seo";
import ArrowLeftIcon from "../assets/arrow-left.svg";
import GithubIcon from "../assets/brand-github.svg";
import ExternalLinkIcon from "../assets/external-link.svg";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      frontmatter {
        title
        skills
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`;

export default function Project({ data }) {
  const project = data.markdownRemark;
  return (
    <>
      <SEO title={project.frontmatter.title} description={project.excerpt} />
      <div className="stack:m">
        <header className="inline:l inset:m">
          <AniLink cover to="/projects" hex="#0e0f0f">
            <ArrowLeftIcon />
          </AniLink>
          <h1>{project.frontmatter.title}</h1>
        </header>
        <div className="max-w-screen-md">
          <Img
            fluid={{ ...project.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 4/3 }}
            alt="Covid 19 tracker screenshot"
          />
        </div>
        <footer className="inset:m flex align-center inline:l">
          <Actions />
        </footer>
      </div>
    </>
  )
}

function Actions() {
  return (
    <>
      <LinkButton href="">
        <ExternalLinkIcon />
        <span>View Site</span>
      </LinkButton>
      <LinkButton href="">
        <GithubIcon />
        <span>View Source</span>
      </LinkButton>
    </>
  )
}

function LinkButton({ href, children }) {
  return (
    <a href={href} className="flex:1 inset:s border:s rounded flex align-center inline:s justify-center">
      {children}
    </a>
  )
}

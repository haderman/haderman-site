import React from "react"
import { graphql } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import ArrowLeftIcon from "../assets/arrow-left.svg";

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            skills
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default function Projects({ data }) {
  return (
    <div className="stack:l inset:m">
      <SEO title="Home" />
      <header className="inline:m">
        <AniLink cover to="/" hex="#0e0f0f">
          <ArrowLeftIcon />
        </AniLink>
        <h1>Projects</h1>
      </header>
      <ProjectsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <AniLink key={node.id} paintDrip to={node.fields.slug} duration={0.5} hex="#0e0f0f">
            <Project
              name={node.frontmatter.title}
              description={node.frontmatter.description}
              tags={node.frontmatter.skills}
            />
          </AniLink>
        )}
      </ProjectsContainer>
    </div>
  )
}


function ProjectsContainer({ children }) {
  return (
    <section className="stack:m w-full max-w-screen-sm">
      <h2>Side Projects</h2>
      {children}
    </section>
  );
};

function Project({ name, description, tags }) {
  return (
    <article className="stack:s inset:m border:s border-color:gray rounded">
      <h4>{name}</h4>
      <p>{description}</p>
      <div className="inline:s">
        {tags.map(text =>
          <Tag key={text} text={text} />
        )}
      </div>
    </article>
  );
};

function Tag({ text }) {
  return (
    <span className="inset:xs border:s border-color:gray rounded-md">
      {text}
    </span>
  );
};

import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PersonalCard from "../components/personalCard/personalCard"

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
`

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <PersonalCard />
      <ProjectsContainer>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <AniLink key={node.id} paintDrip to={"projects" + node.fields.slug} duration={0.5} hex="#0e0f0f">
            <Project
              name={node.frontmatter.title}
              description={node.frontmatter.description}
              tags={node.frontmatter.skills}
            />
          </AniLink>
        )}
      </ProjectsContainer>
    </Layout>
  )
}

function ProjectsContainer({ children }) {
  return (
    <section className="stack:m w-full max-w-screen-sm">
      <h2>Side Projects</h2>
      {children}
    </section>
  )
}

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
  )
}

function Tag({ text }) {
  return (
    <span className="inset:xs border:s border-color:gray rounded-md">
      {text}
    </span>
  )
}

export default IndexPage

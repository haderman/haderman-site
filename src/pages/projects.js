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
          }
          excerpt
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
    <div className="stack: squish-inset:m">
      <SEO title="Home" />
      <header className="inline:m">
        <AniLink cover to="/" bg="#0e0f0f">
          <span className="flex justify-center align-center inset:s rounded-full">
            <ArrowLeftIcon />
          </span>
        </AniLink>
        <h1>Projects</h1>
      </header>
      <section className="stack:xl squish-inset:m w-full max-w-screen-sm">
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <AniLink key={node.id} paintDrip to={node.fields.slug} duration={0.5} hex="#0e0f0f">
            <Project
              name={node.frontmatter.title}
              description={node.excerpt}
              tags={node.frontmatter.skills}
            />
          </AniLink>
        )}
      </section>
    </div>
  )
}

function Project({ name, description, tags }) {
  return (
    <article className="stack:s inset:m border:xl bg:secondary border-color:accent rounded:xl shadow-inset">
      <h4>{name}</h4>
      <p className="color:gray-neutral two-lines">{description}</p>
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
    <span className="squish-inset:xs bg:tertiary rounded:m">
      {text}
    </span>
  );
};

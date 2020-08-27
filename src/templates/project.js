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
      html
      frontmatter {
        title
        skills
        source
        website
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
      <div className="stack">
        <header className="inline:l squish-inset:m">
          <AniLink cover to="/projects" bg="#0e0f0f">
            <span className="flex justify-center align-center inset:s rounded-full">
              <ArrowLeftIcon />
            </span>
          </AniLink>
          <h1>{project.frontmatter.title}</h1>
        </header>
        <div className="max-w-screen-md">
          <Img
            fluid={{ ...project.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16/9 }}
            alt="Covid 19 tracker screenshot"
          />
        </div>
        <Actions
          source={project.frontmatter.source}
          website={project.frontmatter.website}
        />
        <div
          className="stack:m inset:m color:gray-neutral"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <div className="inline:s inset:m">
          {project.frontmatter.skills.map(text =>
            <Tag key={text} text={text} />
          )}
        </div>
      </div>
    </>
  )
}

function Actions({ source, website }) {
  return (
    <div className="inset:l flex align-center inline:xl">
      <LinkButton href={website}>
        <ExternalLinkIcon />
        <span>View Site</span>
      </LinkButton>
      <LinkButton href={source}>
        <GithubIcon />
        <span>View Source</span>
      </LinkButton>
    </div>
  )
}

function LinkButton({ href, children }) {
  const style = [
    "flex:1",
    "inset:xs",
    "flex",
    "align-center",
    "inline:s",
    "justify-center",
    "border:m",
    "bg:secondary",
    "border-color:accent",
    "rounded:xl"
  ].join(" ");

  return (
    <a href={href} className={style} target="_blank">
      {children}
    </a>
  );
}

function Tag({ text }) {
  return (
    <span className="squish-inset:xs bg:tertiary rounded:m">
      {text}
    </span>
  );
};

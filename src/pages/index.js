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
import ExternalLinkIcon from "../assets/external-link.svg";

export const query = graphql`
  query {
    profilePhoto: file(relativePath: { eq: "profile-photo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cv: file(relativePath: { eq: "cv.pdf" }) {
      publicURL
    }
    projects: allMarkdownRemark {
      edges {
        node {
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
        }
      }
    }
  }
`;

export default function IndexPage({ data }) {
  const { profilePhoto, cv, projects } = data;
  return (
    <div className="stack:m flex column h-min-screen">
      <header className="inset:m">
        <nav className="flex justify-end">
          <AniLink cover to="/projects" bg="#0e0f0f">
            <span className="inset:xs">My Projects</span>
          </AniLink>
        </nav>
      </header>
      <main className="layout flex-1 justify-space-between">
        <SEO title="Home" />
        <Greeting />
        <div id="image" className="w-full max-w-400 relative">
          <Img
            fluid={profilePhoto.childImageSharp.fluid}
            alt="Profile photo"
          />
        </div>
        <SocialLinks cvUrl={cv.publicURL} />
        <section id="projects" className="stack:l squish-inset:xl column">
          <h1>My Projects</h1>
          <div className="desktop-projects-grid">
            {projects.edges.map(({ node }) =>
              <ProjectCard
                key={node.id}
                project={node}
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

function Greeting() {
  return (
    <h1 id="greeting" className="inset:m greeting text-center">
      Hi, I'm <span> Hader Cardona </span> and
      I'm <span> Front-End Developer</span>
    </h1>
  )
}

function SocialLinks({ cvUrl }) {
  return (
    <ul id="social-links" className="inline:xl inset:l w-full fixed social-buttons-list">
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
        <a href={cvUrl} target="_blank">
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

function ProjectCard({ project }) {
  return (
    <article className="rounded:m overflow:hidden border:s border-color:tertiary">
      <h2 className="inset:m text:l">{project.frontmatter.title}</h2>
      <div className="max-w-screen-md">
        <Img
          fluid={{ ...project.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16/9 }}
          alt="Covid 19 tracker screenshot"
        />
      </div>
      <div className="stack:m inset:m">
        <Actions
          source={project.frontmatter.source}
          website={project.frontmatter.website}
        />
        <div
          className="stack:m color:gray-neutral"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <div className="inline:s">
          {project.frontmatter.skills.map(text =>
            <Tag key={text} text={text} />
          )}
        </div>
      </div>
    </article>
  )
}

function Tag({ text }) {
  return (
    <span className="squish-inset:xs bg:tertiary rounded:m">
      {text}
    </span>
  );
};

function Actions({ source, website }) {
  return (
    <div className="flex align-center inline:xl">
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

import React from "react"
import GithubIcon from "../../assets/brand-github.svg"
import MailIcon from "../../assets/mail.svg"
import FileTextIcon from "../../assets/file-text.svg"
import TwitterIcon from "../../assets/brand-twitter.svg"

import "./personalCard.css"

function PersonalCard() {
  return (
    <article className="personal-card inset:s">
      <h1>Hader Cardona</h1>
      <h2>Front-End Developer</h2>
      <ul>
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
          <a>
            <MailIcon />
          </a>
        </li>
      </ul>
    </article>
  )
}

export default PersonalCard

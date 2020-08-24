/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Universe from "./universe"
import City from "./city"

import "../styles/utils.css";
import "../styles/site.css";

function Layout({ children }) {
  return (
    <div className="layout">
      {/* <div className="absolute full-width full-height">
        <Universe />
        <City />
      </div> */}
      <main className="stack:m relative">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

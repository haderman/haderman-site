import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Universe from '../components/universe'
import City from "../components/city";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Universe />
    <City />
  </Layout>
)

export default IndexPage

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      date
      body {
        json
      }
    }
  }
`
const Project = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Layout>
      <SEO title={`${props.data.contentfulProject.title}`} />
      <h1>{props.data.contentfulProject.title}</h1>
      <h1>{props.data.contentfulProject.date}</h1>
      {documentToReactComponents(
        props.data.contentfulProject.body.json,
        options
      )}
    </Layout>
  )
}

export default Project

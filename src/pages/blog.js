import React from "react"
import Layout from "../components/layout"
import Blogs from "../components/Blog"

const Blog = (props) => {
  return (
    <Layout path={props.location.pathname}>
      <Blogs />
    </Layout>
  )
}
export default Blog

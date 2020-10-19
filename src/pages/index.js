import React from "react"
import Landing from "../components/landing"
import Layout from "../components/layout"

const Home = props => {
  return (
    <Layout path={props.location.pathname} LandingPage={true} >
      <Landing path={props.location.pathname} />
    </Layout>
  )
}
export default Home

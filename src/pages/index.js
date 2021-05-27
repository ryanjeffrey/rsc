import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import AppContainer from "../components/AppContainer"



const index = () => {
  return (
      <Layout>
        <Hero />
        <AppContainer />
        <Grid />
      </Layout>
  )
}

export default index

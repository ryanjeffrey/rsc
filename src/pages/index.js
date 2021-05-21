import React from "react"
import Layout from "../components/Layout"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Cards from "../components/Cards"



const index = () => {
  return (
      <Layout>
        <Hero />
        <Grid />
        <Cards />
      </Layout>
  )
}

export default index

import React from "react"
import Navbar from "../components/Navbar"
import "../assets/css/main.css"


const index = () => {
  return (
      <div>
        <Navbar />
        <div className="hero-section">
          <h1>Beautiful design.</h1>
          <h2>Eloquent development.</h2>
          <h2>Dope websites.</h2>
        </div>
      </div>
  )
}

export default index

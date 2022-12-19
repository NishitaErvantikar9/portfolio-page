import React from 'react'
import {Link } from 'react-router-dom';


function HomePage() {
    return (
        <div className="homepage">
          <div className="intro">
          <h2>Hello I am</h2>
          <h1>Harley Jones</h1>
          <h5>FRONTEND DEVELOPER</h5>
      <Link to="/portfolio"><button>See My Works</button></Link>
          
          </div>
          <div className="homeImg">
           <img src="https://ingeniouswebster.netlify.app/assets/imG/SERVICE.png" alt="img"/>

          </div>
        </div>
    )
}

export default HomePage

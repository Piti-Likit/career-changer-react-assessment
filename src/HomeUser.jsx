// import React, { useState } from "react"
import NavBar from "./NavBar"
import './Style.css'
import ButtonBar from "./ButtonBar"
// import mockEmployees from "./Home"
const HomeUser = () => {
    
    return (
        <div>
            <div>
            <NavBar />
            </div>
            <div>
        <div className="textCenter">
      <h2>Generation Thailand<br /> 
      Home - User Sector</h2>
      </div>

      <br></br>
            <ButtonBar /> <br /> <br />

<table className="centerTable"> 
  <tr>
    <th>Name</th>
    <th>Last Name</th>
    <th>Position</th>
  </tr>
  
  <tr>
    <td> .</td>
    <td> .</td>
    <td> .</td>
  </tr>
  <tr>
    <td>.</td>
    <td>.</td>
    <td>.</td>
  </tr>
</table>
        </div>
        </div>
    )
}

export default HomeUser
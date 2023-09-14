import React, {useState} from "react"
import ButtonBar from "./ButtonBar"
import NavBar from "./NavBar"
import './Style.css'
import HomeAdmin from "./HomeAdmin"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [sector, setSector] = useState ("")
  return (
    <div>
      <div>
      <NavBar />
      </div>

      <div className="textCenter">
      <h2>Generation Thailand<br />
      React - Assesstment</h2>
      </div>

      {/* <div className="home">
        <div className="btnSelect">
          <button className="secterBtn" onClick={() => setSecter("User")}>User Home Sector</button>
          <button className="secterBtn" onClick={() => setSecter("Admin")}>Admin Home Sector</button>
        </div>
        
      </div> */}

      <br></br>
      <ButtonBar />
      
    </div>
  )
}

export default Home

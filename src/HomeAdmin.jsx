import { useState } from "react"
import ButtonBar from "./ButtonBar"
import NavBar from "./NavBar"
import './Style.css'

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
const HomeAdmin = () => {
    const [infos, setInfo] = useState (mockEmployees)
    const [name, setName] = useState ('')
    const [lastname, setLastname] = useState ('')
    const [position, setPosition] = useState ('')
    const addInfo = () => {
        const newInfo = {
            name:name,
            lastname:lastname,
            position:position,
        }
        setInfo((infos)=>[...infos, newInfo])
    }
    return (
    <div>
        <NavBar />
         <div className="textCenter">
            <h2>Generation Thailand<br/>
             Home - Admin Sector</h2> <br />
         </div>
            <div>
             <ButtonBar /><br />
            </div>
      
         <table className="centerTable">
            <tr>
               <th>Name</th>
               <th>Last Name</th>
               <th>Position</th>
            </tr>
            {infos.map((info)=>(
             <tr>
              <td>{info.name}</td>
              <td>{info.lastname}</td>
              <td>{info.position}</td>
             </tr>
            ))}
                
         </table>

         <h2>Create User Here</h2>
         <input onChange={(e)=> setName(e.target.value)}
         value = {name}
             type="text" 
             name="name" 
             required="required" 
             placeholder="Name" 
         />
         <input onChange={(e)=> setLastname(e.target.value)}
         value = {lastname}
             type="text" 
             name="lastname" 
             required="required" 
             placeholder="Last Name" 
         />
         <input onChange={(e)=> setPosition(e.target.value)}
         value = {position}
             type="text" 
             name="position" 
             required="required" 
             placeholder="Position" 
         />
         <button onClick={addInfo}>Save</button>
    </div>
        
    )
}
export default HomeAdmin
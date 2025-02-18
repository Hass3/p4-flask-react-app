import { NavLink } from "react-router-dom";
import "./index.css"

function NavBar(){

  return(
   
   <nav className="navbar">
    <NavLink 
    to= '/'
    className = 'logo'>
        Home
    </NavLink>
    <NavLink 
    to= '/owners'
    className = 'logo'>
        Owners
    </NavLink>
    <NavLink 
    to= '/vehicles'
    className = 'logo'>
        Vehicles
    </NavLink>
   </nav>



  )




}


export default NavBar
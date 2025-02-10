import { NavLink } from "react-router-dom";
import "./NavBar.css"

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
        owners
    </NavLink>
    <NavLink 
    to= '/vehicles'
    className = 'logo'>
        vehicles
    </NavLink>
   </nav>



  )




}


export default NavBar
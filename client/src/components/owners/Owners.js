import React from "react";
import { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import NavBar from "../NavBar";

function OwnerPage(){
  const [owners, setOwners] = useState([])



   useEffect(()=>{
    fetch('/owners')
    .then(r=>r.json())
    .then(o => setOwners(o))
   }, [])
   
   
    return(
        <>
        <NavBar />
        <h1>Click on any vehicle owner</h1>
        {owners.map((o)=>
         <OwnerCard 
         key={o.id}
         id = {o.id}
         name ={o.name}
         dob={o.date_of_birth}
         />
        )}
        </>


    )
}




export default OwnerPage
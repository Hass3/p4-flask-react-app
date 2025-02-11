import React from "react";
import { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import NavBar from "../NavBar";
import OwnerForm from "./OwnerForm";
function OwnerPage(){
  const [owners, setOwners] = useState([])
  const [isFormOn, setIsFormOn] = useState(false)


   useEffect(()=>{
    fetch('/owners')
    .then(r=>r.json())
    .then(o => setOwners(o))
   }, [])
   
   function addOwner(newOwner){
       setOwners([...owners,newOwner])
   }
   
    return(
        <>
        <NavBar />
        <button onClick={()=>setIsFormOn((on)=>!on)}>{!isFormOn? "register owner": "back"}</button>
        {!isFormOn ?
        <>
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
         : <OwnerForm onAddOwner={addOwner}/> }
        </>


    )
}




export default OwnerPage
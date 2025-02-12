import React from "react";
import { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import NavBar from "../NavBar";
import OwnerForm from "./OwnerForm";
function OwnerPage(){
  const [owners, setOwners] = useState()
  const [isFormOn, setIsFormOn] = useState(false)


   useEffect(()=>{
    fetch('/owners')
    .then(r=>r.json())
    .then(o => setOwners(o))
   }, [])
    
   function editOwner(updatedO){
     const updatedOwners = owners.map((o)=>{
         if(o.id === updatedO.id){
            return updatedO
         }else{
            return o
         }
     })
    setOwners(updatedOwners)
   }

   function deleteOwner(deletedOwner){
     const updatedOnwers = owners.filter((o)=>o.id !== deletedOwner.id)
     setOwners(updatedOnwers)
   }


   function addOwner(newOwner){
       setOwners([...owners,newOwner])
   }
   if (!owners){return <h2 style={{fontSize:'100px'}}>Loading...</h2>}
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
         owner={o}
         onEditOwner={editOwner}
         onDeleteOwner={deleteOwner}
         />
        )}
        </>
         : <OwnerForm onAddOwner={addOwner}/> }
        </>


    )
}




export default OwnerPage
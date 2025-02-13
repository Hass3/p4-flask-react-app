import React from "react";
import { useState, useEffect } from "react";
import OwnerCard from "./OwnerCard";
import NavBar from "../NavBar";
import OwnerForm from "./OwnerForm";
import './owner.css'
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
        <div>
        <NavBar />
        <button className={!isFormOn?'reg-btn' :'back-btn'} onClick={()=>setIsFormOn((on)=>!on)}>{!isFormOn? "register owner": "back"}</button>
        {!isFormOn ? null: <OwnerForm onAddOwner={addOwner}/> }
        <>
        <h1 className="o-title">Registerd Vehicle Owners:</h1>
        {owners.map((o)=>
         <OwnerCard 
         key={o.id}
         owner={o}
         onEditOwner={editOwner}
         onDeleteOwner={deleteOwner}
         />
        )}
        </>
        
        </div>


    )
}




export default OwnerPage
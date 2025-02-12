
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditOwnerForm from "./EditOwnerForm";

function OwnerCard({owner, onDeleteOwner, onEditOwner}){
    const [isEditOn,setIsEditOn] = useState(false)

    function handelDeleteClick(){
        fetch(`/owners/${owner.id}`,{
            method:"DELETE"
        })
        .then(r=>r)
        .then(()=>onDeleteOwner(owner))
    }

    

    return(
    
        <>
        <button onClick={handelDeleteClick}>Delete</button>
        <button onClick={()=>setIsEditOn(on=>!on)}>{!isEditOn?'Edit': 'Back' }</button>
        {!isEditOn ? 
        <Link to = {`/owners/${owner.id}`}>
        <h1>{owner.name}</h1>
        </Link>
        : <EditOwnerForm owner={owner} onEditOwner={onEditOwner} setIsEditOn={setIsEditOn} />}
        </>


    )



}




export default OwnerCard
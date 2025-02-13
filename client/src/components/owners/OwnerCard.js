
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
    
        <div className="o-contanier">
            <p className="o-card-btn-instr">Click to Edit Or Delete</p>
        <button className='o-delete' onClick={handelDeleteClick}>🗑</button>
        <button className={isEditOn?"o-back": "o-edit"} onClick={()=>setIsEditOn(on=>!on)}>{!isEditOn?'✎': '←' }</button>
        {!isEditOn ? 
        <div className="o-card">
        <Link to = {`/owners/${owner.id}`}>
        <h1>{owner.name}</h1>
        </Link>
        </div>
        : <EditOwnerForm owner={owner} onEditOwner={onEditOwner} setIsEditOn={setIsEditOn} />}
        </div>


    )



}




export default OwnerCard
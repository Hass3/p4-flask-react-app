import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function OwnerDetails(){
   const[owner, setOwner] = useState(null)
   const params = useParams()
   const ownerId = params.id
    useEffect(()=>{
        fetch(`/owners/${ownerId}`)
        .then(r => r.json())
        .then(o=> setOwner(o))
    }, [ownerId])
    
    if (!owner){return <h2>Loading...</h2>}
    
    return(
     
        <>
        <NavBar />
        <h1>{owner.name} {owner.date_of_birth}</h1>
        {owner.vehicles.map((c)=> <li key={c.id}>{c.make}{c.model}{c.year}</li>)}
        </>


    )
}

export default OwnerDetails
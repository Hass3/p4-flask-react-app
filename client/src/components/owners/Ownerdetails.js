import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function OwnerDetails(){
   const[owner, setOwner] = useState({})
   const params = useParams()
   const ownerId = params.id
   const {name, date_of_birth, address} = owner
    useEffect(()=>{
        fetch(`/owners/${ownerId}`)
        .then(r => r.json())
        .then(o=> setOwner(o))
    }, [ownerId])


    return(
     
        <>
        <NavBar />
        <h1>{name} {date_of_birth}</h1>
    
        </>


    )
}

export default OwnerDetails
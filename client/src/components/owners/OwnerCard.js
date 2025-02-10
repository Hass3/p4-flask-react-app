
import React from "react";
import { Link } from "react-router-dom";


function OwnerCard({id, name, dob}){


    return(
    
        <>
        <Link to = {`/owners/${id}`}>
        <h1>{name}</h1>
        </Link>
        </>


    )



}




export default OwnerCard
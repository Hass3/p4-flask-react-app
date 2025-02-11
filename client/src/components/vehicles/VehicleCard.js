import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VehicleCard({id,make,year,model,img_url,price} ){
   const[isEditOn, setIsEditOn]= useState(false)


    return(
    
    <div className="car-card">
    <h3 className="v-model">{make} {model}</h3>
    <Link to ={`/vehicles/${id}`}>
    <img className="v-img" src={img_url} alt={model}/>
    </Link>
    <button>Delete</button>
    <button key="edit btn" onClick={()=>setIsEditOn((on)=>!on)}>{!isEditOn?'Edit': 'Back'}</button>
    </div>

    )



}



export default VehicleCard
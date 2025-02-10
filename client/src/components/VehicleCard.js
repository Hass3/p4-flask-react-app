import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VehicleCard({id,make,year,model,img_url,price} ){



    return(
    
    <div className="car-card">
    <h3 className="v-model">{make} {model}</h3>
    <Link to ={`/vehicles/${id}`}>
    <img className="v-img" src={img_url} alt={model}/>
    </Link>
    </div>
    

    )



}



export default VehicleCard
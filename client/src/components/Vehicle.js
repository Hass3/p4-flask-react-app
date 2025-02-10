import React from "react";
import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import "./index.css"
import NavBar from "./NavBar";
function Vehicle(){
const  [cars, setCars] = useState([])
    
    useEffect(()=>{
        fetch("/vehicles")
        .then(r=>r.json())
        .then(c => setCars(c))
    },[])




    return(
    
    <>
    <NavBar/>
    <div className="card-container">
        <h1 className="v-h1">Click Vehicle For More Info</h1>
        

       {cars.map((car)=>
       <VehicleCard
       key={car.id}
       id={car.id}
       make={car.make}
       year={car.year}
       model={car.model}
       img_url={car.img_url}
       price = {car.price}
       />
       )}
    </div>
    </>
    )
}


export default Vehicle
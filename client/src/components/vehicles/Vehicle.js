import React from "react";
import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import "./vehicles.css"
import NavBar from "../NavBar";
import VehicleForm from "./VehicleForm";
function Vehicle(){
const  [cars, setCars] = useState([])
const [isFormOn, setIsFormOn]= useState(false)
    useEffect(()=>{
        fetch("/vehicles")
        .then(r=>r.json())
        .then(c => setCars(c))
    },[])

    function addCar(newCar){
        setCars([...cars,newCar])
    }


    if (!cars){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}
    return(
    
    <>
    <NavBar/>
    <div className="card-container">
    <button className={!isFormOn ? "v-page-btn" : "v-form-btn"} onClick={()=>setIsFormOn(on => !on)}>{!isFormOn ?"Register Vehicle" : "Back"}</button>
        {!isFormOn ? 
        <>
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
       </>
      : <VehicleForm onAddCar={addCar} /> } 
    </div>
    </>
    )
}


export default Vehicle
import React from "react";
import { useEffect, useState } from "react";
import VehicleCard from "./VehicleCard";
import "./vehicles.css"
import NavBar from "../NavBar";
import VehicleForm from "./VehicleForm";
function Vehicle(){
const  [cars, setCars] = useState(null)
const [isFormOn, setIsFormOn]= useState(false)

    useEffect(()=>{
        fetch("/vehicles")
        .then(r=>r.json())
        .then(c => setCars(c))
    },[])

    function addCar(newCar){
        setCars([...cars,newCar])
    }

    function updateCar(updatedCar){
        const updatedCars = cars.map((c)=>{
            if(c.id === updatedCar.id){
                return updatedCar
            }else{
                return c
            }
        })
        setCars(updatedCars)
    }
    
    function deleteCar(deletedCar){
        const updatedCars = cars.filter(car=> car.id !== deletedCar.id)
        setCars(updatedCars)
    }

    if (!cars){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}
    
    return(
    
    <>
    <NavBar/>
    <div className="card-container">
    <button className={isFormOn ? "v-back-btn" : "v-form-btn"} onClick={()=>setIsFormOn(on => !on)}>{!isFormOn ?"Register Vehicle" : "Back"}</button>
        {!isFormOn ? null  : <VehicleForm setIsFormOn={setIsFormOn} onAddCar={addCar}/> } 
        <>
        <h1 className="v-h1">Registerd Vehicles</h1>
       {cars.map((car)=>
       <VehicleCard
       key={car.id}
       car ={car}
       handelEditCar={updateCar}
       onDeleteCar={deleteCar}
       />
       )}
       </>
     
    </div>
    </>
    )
}


export default Vehicle

import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditVehicleForm from "./EditVehicleForm";
function VehicleCard( {car,handelEditCar,onDeleteCar} ){
   const[isEditOn, setIsEditOn]= useState(false)
    const {id,make,year,model,img_url,price} = car
    
    function handelDeleteClick(){
        fetch(`/vehicles/${id}`, {
            method: "DELETE"
        })
        .then(r=>r)
        .then(()=>onDeleteCar(car))
    }



    return(
    <div className="v-container">
    <button className="v-delete-btn" onClick={handelDeleteClick}>🗑</button>
    <button className={!isEditOn? "v-edit-btn": 'v-back-btn'} key="edit btn" onClick={()=>setIsEditOn((on)=>!on)}>{!isEditOn?'✎': '←'}</button>
    <h3 className="v-h3">CLICK IMAGE FOR MORE INFO</h3>
    <div className="v-card">
    {!isEditOn ?
    <div className="car-card">
    <h3 className="v-model">{make} {model}</h3>
    <Link to ={`/vehicles/${id}`}>
    <img className="v-img" src={img_url} alt={model}/>
    </Link>

    </div>
    : <EditVehicleForm setIsEditOn={setIsEditOn} car={car} onEditCar={handelEditCar}/>
        }
    </div>


    </div>

    
    )
     


}



export default VehicleCard
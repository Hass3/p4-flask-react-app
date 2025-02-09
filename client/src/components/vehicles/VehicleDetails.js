import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";



function VehicleDetails(){
    const [car, setCar] = useState({})
    const params = useParams()
    const vehicleId = params.id
    const{make,model,img_url,year,price} = car



    useEffect(()=>{
        fetch(`/vehicles/${vehicleId}`)
        .then(r=>r.json())
        .then(c=>{
            setCar(c)
            console.log(c)

        })
    }, [vehicleId])
   
    return(
   
    <>
    <NavBar/>
    <h1>{model}</h1>
    
    
    </>



    )



}


export default VehicleDetails
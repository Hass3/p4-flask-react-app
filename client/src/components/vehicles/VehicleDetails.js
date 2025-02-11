import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";


function VehicleDetails(){
    const [car, setCar] = useState(null)
    const[isEditOn, setIsEditOn]= useState(false)
    const params = useParams()
    const vehicleId = params.id
    
   


    useEffect(()=>{
        fetch(`/vehicles/${vehicleId}`)
        .then(r=>r.json())
        .then(c=>setCar(c))
    }, [vehicleId])
   
    if(!car){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}

    return(
    
    <>
    <NavBar/>
    <div className="car-card">
    <h3 className="v-model">{car.make} {car.model}</h3>
    <img className="v-img" src={car.img_url} alt={car.model}/>
    <p>year: {car.year} price: {car.price} </p>
    </div>
      <button>Delete</button>
      <button>Edit</button>
    <h3>Previous Owners:</h3>
    <h4>click to see more info and previous vehicles of the owner</h4>
    {car.owners.map((o)=>
      <Link to={`/owners/${o.id}`}>
      <li>name:{o.name}|| DOB:{o.date_of_birth}|| address:{o.address}</li>
      </Link>
    )}
    
    
    </>



    )



}


export default VehicleDetails
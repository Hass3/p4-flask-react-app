import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import TransferForm from "./TranseferForm";

function VehicleDetails(){
    const [car, setCar] = useState(null)
    const[transferFromOn, setTransferFormOn] = useState(false)
    const params = useParams()
    const vehicleId = params.id
    const [owner, setOwner] = useState(null)
    useEffect(()=>{
        fetch(`/vehicles/${vehicleId}`)
        .then(r=>r.json())
        .then(c=>setCar(c))
    }, [vehicleId])
   

    if(!car){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}
    const currentTitle = car.titles.length > 0?
     car.titles.sort((a,b)=>new Date(b.transfer_date) - new Date(a.transfer_date))[0]
     : null
    const currentOwner = currentTitle? currentTitle.owner : null

    return(
    <>

    <NavBar/>
  
    <button onClick={()=>setTransferFormOn(on=>!on)}>{!transferFromOn?'Title Transfer':'Back'}</button>
    {!transferFromOn?
    <>
    <div key={car.id} className="car-card">
    <h3 className="v-model">{car.make} {car.model}</h3>
    <img className="v-img" src={car.img_url} alt={car.model}/>
    <p>year: {car.year} price: {car.price} </p>
    </div>
    <h2>Current Owner:</h2>   
    {currentOwner?(
    <p>name:{currentOwner.name}|| DOB:{currentOwner.date_of_birth}|| address:{currentOwner.address}</p>
    ): <h1>No owner found</h1>}
    
    <h3>Vehicle Owner Records:</h3>
    <h4>Click to see more info of owners of this vehicle</h4>
    {car.owners.map((o)=>
      <Link to={`/owners/${o.id}`}>
      <li key={o.id}>name:{o.name}|| DOB:{o.date_of_birth}|| address:{o.address}</li>
      </Link>
    )}
    </>
   :<TransferForm vehicle={car} setTransferFormOn = {setTransferFormOn} setOwner={setOwner}/>}


    </>



    )



}


export default VehicleDetails
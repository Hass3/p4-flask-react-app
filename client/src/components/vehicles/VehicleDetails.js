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
    const [owner, setOwner] = useState({})
    useEffect(()=>{
        fetch(`/vehicles/${vehicleId}`)
        .then(r=>r.json())
        .then(c=>{
          setCar(c)
          if (c.titles.length >0){
            const currentTitle =  c.titles.sort((a, b) => new Date(b.transfer_date) - new Date(a.transfer_date))[0];
            setOwner(currentTitle.owner)
          }
        })
    }, [vehicleId])
   

    if(!car){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}
   
    return(
    <>

    <NavBar/>
  
    <button className={!transferFromOn?"title-transfer-btn": 'back-btn'} onClick={()=>setTransferFormOn(on=>!on)}>{!transferFromOn?'Title Transfer':'Back'}</button>
    {!transferFromOn? null:<TransferForm vehicle={car} setTransferFormOn = {setTransferFormOn} setOwner={setOwner}/>}
    <>
    <div key={car.id} className="car-de-card">
    <h3 className="v-model">Make: {car.make}</h3>
    <h4>Model: {car.model}</h4>
    <img className="v-img" src={car.img_url} alt={car.model}/>
    <p>year: {car.year} price: {car.price} </p>
    </div>
    
    <h2>Current Owner:</h2>   
    {owner.name ?
    <p>name:{owner.name}|| DOB:{owner.date_of_birth}|| address:{owner.address}</p>
      : 
      <p>No regestired owners</p>}
    <h3>Vehicle Owner Records:</h3>
    <h4>Click to see more info of owners of this vehicle</h4>
    
    {car.owners.map((o)=>
      <Link key={o.id} to={`/owners/${o.id}`}>
      <li key={o.id}>name:{o.name}|| DOB:{o.date_of_birth}|| address:{o.address}</li>
      </Link>
    )}
    
    </>
   


    </>



    )



}


export default VehicleDetails
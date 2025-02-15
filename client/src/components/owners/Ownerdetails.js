import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
function OwnerDetails(){
   const[owner, setOwner] = useState(null)
   const params = useParams()
   const ownerId = params.id
    useEffect(()=>{
        fetch(`/owners/${ownerId}`)
        .then(r => r.json())
        .then(o=> setOwner(o))
    }, [ownerId])
    
    if (!owner){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}
    const currentTitle = owner.titles.length > 0 ? 
    owner.titles.sort((a,b)=>new Date(b.transfer_date) - new Date(a.transfer_date))[0]: null
    const currentVehicle = currentTitle? currentTitle.vehicle : null
    return(
        
        <>
        <NavBar />
        <h1 style={{justifySelf: 'center',fontSize: "40px"}}>ALL ABOUT {owner.name.toUpperCase()}</h1>
        <h1>Name: {owner.name}</h1> 
        <h1>Birth Date: {owner.date_of_birth}</h1>
        <h1>Address: {owner.address}</h1>
        <h2>Current Vehicle:</h2>
        { currentVehicle?
        <p>{currentVehicle.year}|{currentVehicle.make}|{currentVehicle.model}</p>
        : <h1 style={{color: 'firebrick'}}>No Regestierd Vehicle Found</h1>}
        <h2>Owned Vehicles:</h2>
        <h4>Click to see more info of {owner.name}'s owned vehicles</h4>
      
        {owner.vehicles.map((c)=> 
        <div id={c.id} className="car-card">
          <h3 className="v-model">{c.make} {c.model}</h3>
          <Link to={`/vehicles/${c.id}`}>
          <img className="v-img" src={c.img_url} alt={c.model}/>
          </Link>
          <p>year: {c.year} Purchased For: {c.price} </p>
        </div>
        
        )}
        </>


    )
}

export default OwnerDetails
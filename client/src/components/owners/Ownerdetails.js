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
    
    return(
     
        <>
        <NavBar />
        <h1>Name: {owner.name}</h1> 
        <h1>Birth Date: {owner.date_of_birth}</h1>
        <h1>Address: {owner.address}</h1>

        <h2>Previous Owned Vehicles:</h2>
        <h4>click to see more info and previous owners of the vehicle</h4>
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
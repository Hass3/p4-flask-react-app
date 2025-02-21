import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
function OwnerDetails(){
   const[owner, setOwner] = useState(null)
   const [car, setCar] = useState({})
   const params = useParams()
   const ownerId = params.id
    useEffect(()=>{
        fetch(`/owners/${ownerId}`)
        .then(r => r.json())
        .then(o=> {
          setOwner(o)
          if (o.titles.length >0){
            const currentTitle =  o.titles.sort((a, b) => new Date(b.transfer_date) - new Date(a.transfer_date))[0];
            setCar(currentTitle.vehicle)
          }
        })
    }, [ownerId])
    
    if (!owner){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}

    return(
        
        <>
        <NavBar />
        <h1 style={{justifySelf: 'center',fontSize: "40px"}}>ALL ABOUT {owner.name.toUpperCase()}</h1>
        <h1>Name: {owner.name}</h1> 
        <h1>Birth Date: {owner.date_of_birth}</h1>
        <h1>Address: {owner.address}</h1>
        <h2>Current Vehicle:</h2>
        { car.make?
        <p>Year: {car.year}| Make: {car.make}| Model: {car.model}</p>
        : <p>No regestired Vehicles</p>}
        <h2 style={{justifySelf:'center'}}>Owned Vehicles:</h2>
        <h4 style={{justifySelf: 'center'}}>Click to see more info of {owner.name}'s owned vehicles</h4>
      <div className="car-container">
        {owner.vehicles.map((c)=> 
        <div key={c.id} id={c.id} className="car-card-details">
          <h3 className="v-model">{c.make} {c.model}</h3>
          <Link key={c.id}  to={`/vehicles/${c.id}`}>
          <img key={c.id} className="v-img" src={c.img_url} alt={c.model}/>
          </Link>
          <p >year: {c.year} Purchased For: {c.price} </p>
        </div>
        
      )}
      </div>
        </>


    )
}

export default OwnerDetails
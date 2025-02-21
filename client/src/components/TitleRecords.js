import { useEffect,useState } from 'react'
import NavBar from './NavBar'
import './index.css'


function TitleRecords(){
   const [titles,setTitles] = useState(null)
   
   
    useEffect(()=> {
        fetch('/titles')
        .then(r=>r.json())
        .then((t)=>setTitles(t))
    }, [])

    if (!titles){return <h1 style={{fontSize:'100px'}}>Loading...</h1>}

    return(
        <>
        <NavBar/>
        <div className='title-container'>
        <h1 className='title-title'>Title Records</h1>
        
        {titles.map((t)=>
        <div key={t.id} className='title-card'>
            <h2>Owner: {t.owner.name}</h2>

            <h2>Vehicle:</h2>
            <h3>Make:{t.vehicle.make}</h3> 
            <h3>Model: {t.vehicle.model}</h3>
            <h3>Year: {t.vehicle.year}</h3>
            <h4>Purchased For: {t.vehicle.price}</h4>
            <p>Transfer Date: {t.transfer_date}</p>
            <p>Notes: {t.notes}</p>
        </div>
        )}
    </div>
    </>
    )
}


export default TitleRecords


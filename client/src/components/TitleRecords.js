import { useEffect,useState } from 'react'
import NavBar from './NavBar'
import './index.css'


function TitleRecords(){
   const [titles,setTitles] = useState(null)
   
   
    useEffect(()=> {
        fetch('./titles')
        .then(r=>r.json())
        .then((t)=>setTitles(t))
    }, [])

    

    return(
        <>
        <NavBar/>
        <div className='title-container'>
        <li>
            hello
        </li>
    </div>
    </>
    )
}


export default TitleRecords


import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import './index.css'

function HomePage(){


    return(
        <div className='background'>
        <h1 className="title">Welcome to WheelWise</h1>
        <h2>This site is to help you track and manage vehicle ownership with ease
        while staying organized and up-to-date with your vehicle ownership history.</h2>

        <h2>Chose of the following</h2>
         
        <h1>Click To Browse Through Registerd Owners</h1>
        <Link to='/owners'>
        <div className="icon-select-o">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZYXenNBu55mBBd5USdhyLmEzsZKtBBu1zg&s"/>
        </div>
        </Link>  
        <h1>Click To Browse Through Registerd Vehicles</h1>
        <Link to='/vehicles'>
        <div className="icon-select-v">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN93WKOGeJvlcN9evkvD9gphQxl2vGjpMxGg&s"/>
        </div>
        </Link>  
        
       
        
         <>  </>
        </div>
    )



}





export default HomePage
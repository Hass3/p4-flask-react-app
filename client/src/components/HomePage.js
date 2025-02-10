import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


function HomePage(){


    return(
        <>
        <h1>Welcome to WheelWise</h1>
        <h2>This site is to help you track and manage vehicle ownership with ease
        while staying organized and up-to-date with your vehicle ownership history.</h2>

        <h2>Chose of the following</h2>

        <Link to='/owners'>
        <>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZYXenNBu55mBBd5USdhyLmEzsZKtBBu1zg&s"/>
        </>
        </Link>  
        <Link to='/vehicles'>
        <>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN93WKOGeJvlcN9evkvD9gphQxl2vGjpMxGg&s"/>
        </>
        </Link>  
        
       
        
         <>  </>
        </>
    )



}





export default HomePage
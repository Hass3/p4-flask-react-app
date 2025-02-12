import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import './index.css'

function HomePage(){


    return(
        <div>
        <img className="hp-img" src="https://www.shutterstock.com/image-vector/car-wheel-icon-fast-speed-260nw-1218494995.jpg"/>
        <h1 className="title">WHEEL WISE</h1>
        <h2 className="Hp-description">Wheel Wise is a dedicated program in which allows hard working people like yourself to Browse through 
        regestired vehicles/owners,regester a vehicle/owner and transfer ownership of a vehicle WITH EASE!!</h2>
        
        <h3 className="hp-p">please choose of the following:</h3>
        <h1 className="icon-title">Click To Browse Through Registerd Owners</h1>
        <Link to='/owners'>
        <div className="icon-select-o">
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZYXenNBu55mBBd5USdhyLmEzsZKtBBu1zg&s"/>
        </div>
        </Link>  
        <h1 className="icon-title">Click To Browse Through Registerd Vehicles</h1>
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
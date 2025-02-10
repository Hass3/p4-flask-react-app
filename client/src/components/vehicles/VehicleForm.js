import NavBar from "../NavBar";
import { useState } from "react";
import {useFormik} from 'formik'
import * as yup from "yup";



function VehicleForm(){
   

   const formSchema =  yup.object().shape({
      make: yup.string().required("Must Enter Vehicle Make").max(15),
      model: yup.string().required("Must Enter Vehicle Model"),
      year: yup.number().positive().integer().required("Must Enter Vehicle Year").typeError("Please enter an Integer").max(2025),
      price: yup.number().positive().integer().required("Must Enter Price").typeError("Please enter an Integer"),
      img_url: yup.string().required("Must Insert Image Address")
   })

   const formik = useFormik({
      initialValues :{
         make:"",
         model:"",
         year: "",
         price: "",
         img_url: ""
      },
      validationSchema: formSchema,
      onSubmit:(values) =>{
         fetch('/vehicles', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(values)
         })
      }
   })

   return (
   <div>
    
    <form onSubmit={formik.onSubmit}>

    <input  onChange  = {formik.handleChange}  value={formik.values.make} placeholder="enter make" />
    <input  onChange  ={formik.handleChange}  value={formik.values.model} placeholder="enter model" />
    <input  onChange  ={formik.handleChange}  value={formik.values.year} placeholder="enter year" />
    <input  onChange  ={formik.handleChange}  value={formik.values.price}  placeholder="enter price"/>
    <input  onChange  ={formik.handleChange}  value={formik.values.img_url} placeholder="enter img address" />
    <button>Submit</button>
    </form>



   </div>


   )



}

export default VehicleForm
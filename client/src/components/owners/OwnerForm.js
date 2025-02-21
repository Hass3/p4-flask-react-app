import { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";


function OwnerForm({onAddOwner, setIsFormOn}){

   const formSchema = yup.object().shape({
      name:yup.string().required("Must Fill In Name").max(15),
      dateOfBirth:yup.string().required("Must Enter Date Of Birth"),
      address: yup.string().required("Must Enter In Address")
   })
   
   const formik = useFormik({
      initialValues: {
         name:"",
         dateOfBirth:"",
         address:""
      },
      validationSchema: formSchema,
      onSubmit: (values)=>{
         const formJson={
            'name': values.name,
            'date_of_birth': values.dateOfBirth,
            'address': values.address
         }
         fetch("/owners", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(formJson)
         })
         .then(r=>r.json())
         .then(owner=> onAddOwner(owner)) 
         setIsFormOn(on =>!on) 
      }
   })
    

   return(
    <div className="o-form-contanier" >
    <form className="o-form" onSubmit={formik.handleSubmit}>
    <h4>Regester Owner Here</h4>
    <p>{formik.errors.name}</p>
    <input className="form-input" name="name" onChange={formik.handleChange}  value={formik.values.name} placeholder="enter name"/>
    <br/>
    <p>{formik.errors.dateOfBirth}</p>
    <input className="form-input"  name="dateOfBirth" onChange={formik.handleChange}  value={formik.values.dateOfBirth} placeholder="enter date of birth" />
    <br/>
    <p>{formik.errors.address}</p>
    <input className="form-input"  name="address" onChange={formik.handleChange}  value={formik.values.address} placeholder="enter address"/> 
    <br/>
    <button className="form-btn">Register</button>
    </form>

    
    </div>

   )


}

export default OwnerForm
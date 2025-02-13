import { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";


function OwnerForm({onAddOwner}){

   const formSchema = yup.object().shape({
      name:yup.string().required("Must Fill In Name").max(15),
      date_of_birth:yup.string().required("Must Enter Date Of Birth"),
      address: yup.string().required("Must Enter In Address")
   })
   
   const formik = useFormik({
      initialValues: {
         name:"",
         date_of_birth:"",
         address:""
      },
      validationSchema: formSchema,
      onSubmit: (values)=>{
         fetch("/owners", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(values)
         })
         .then(r=>r.json())
         .then(owner=> onAddOwner(owner)) 
      }
   })
    

   return(
    <div className="o-form-contanier" >
    <form className="o-form" onSubmit={formik.handleSubmit}>
    <input className="form-input" name="name" onChange={formik.handleChange}  value={formik.values.name} placeholder="enter name"/>
    <br/>
    <input className="form-input"  name="date_of_birth" onChange={formik.handleChange}  value={formik.values.date_of_birth} placeholder="enter date of birth" />
    <br/>
    <input className="form-input"  name="address" onChange={formik.handleChange}  value={formik.values.address} placeholder="enter address"/> 
    <br/>
    <button className="form-btn">Register</button>
    </form>
    </div>

   )


}

export default OwnerForm
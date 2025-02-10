import { useState } from "react";
import * as yup from "yup"
import { useFormik } from "formik";


function OwnerForm(){

   const formSchema = yup.object().shape({
      name:yup.string().required("Must Fill In Name").max(15),
      date_of_birth:yup.string().required("Must Enter Date Of Birth"),
      address: yup.string().required("Must Enter In Address")
   })
   
   const formik = useFormik({
      values: {
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
      }
   })
    
   
   return(
    <>
    <form onSubmit={formik.handleSubmit}>
    <input onChange={formik.handleChange}  value={formik.values.name} placeholder="enter name"/>
    <input onChange={formik.handleChange}  value={formik.values.date_of_birth} placeholder="enter date of birth" />
    <input onChange={formik.handleChange}  value={formik.values.address} placeholder="enter address"/> 
    <button>Register</button>

    </form>
    </>

   )


}

export default OwnerForm
import { useState,useEffect } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'



function TransferForm({vehicle}){
const [owners,setOwners] = useState([])
    useEffect(()=>{
    fetch('/owners')
    .then(r=>r.json())
    .then(o=>setOwners(o))
   },[])
    
   const formSchema = yup.object().shape({
    ownerId: yup.string().required("Must choose owner"),
    notes:yup.string().required("Must Add Descirption").max(15)
   })
   
   const formik = useFormik({
    initialValues:{ 
    ownerId: '',
    transferDate: new Date().toDateString(),
    notes: ''
    },
    validationSchema: formSchema,
    onSubmit:(values)=>{
        fetch('/titles',{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                owner_id: values.ownerId,
                transfer_date: values.transferDate,
                notes: values.notes
            })
        })
        .then(r=>r.json())
    }
   })


    return(
     <>
     <form>
     <select>
        {}
     </select>

     </form>
     
     </>

    )


}

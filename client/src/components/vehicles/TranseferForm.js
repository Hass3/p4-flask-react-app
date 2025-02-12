import { useState,useEffect } from "react";
import { useFormik } from "formik";
import * as yup from 'yup'



function TransferForm({vehicle, setTransferFormOn, setOwner}){
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
    transferDate: new Date().toISOString().split("T")[0],
    notes: ''
    },
    validationSchema: formSchema,
    onSubmit:(values)=>{
        const newTitle = {
            'transfer_date': values.transferDate,
            'notes': values.notes,
            'owner_id':values.ownerId,
            'vehicle_id': vehicle.id
        }
        console.log(newTitle)
        fetch('/titles',{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTitle)
        })
        .then(r=>r.json(newTitle))
        .then(t=> {    
            console.log(t.owner)
            const owner = t.owner
            setOwner(owner)
            setTransferFormOn(on=>!on)})
    }
   })


    return(
     <>
     <form onSubmit={formik.handleSubmit}>
     <select 
     name="ownerId"
     value={formik.values.ownerId}
     onChange={formik.handleChange}
     >
    <option value=''>Select Onwer</option>
      {owners.map((o)=>
      <option key={o.id} value={o.id}>{o.name}</option>
      )}
     </select>
    <input 
    type="date"
    name="transferDate"
    onChange={formik.handleChange} 
    value={formik.values.transferDate} />
    
    <label>Notes:</label>
    <textarea 
    name="notes"
    value={formik.values.notes}
    onChange={formik.handleChange}
    />
   
    <button type="submit">Transfer Ownership</button>


     </form>
     
     </>

    )


}


export default TransferForm
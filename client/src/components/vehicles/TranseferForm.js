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
    notes:yup.string().required("Must Fill In Notes").max(15)
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
        .then(r=>r.json())
        .then(t=> {    
            setOwner(t.owner)
            setTransferFormOn(on=>!on)})
    }
   })


    return(
     <div className="title-contianer">
     <form className="title-form" onSubmit={formik.handleSubmit}>
        <h3>Transfer Ownership Here</h3>
     <label>New Owner</label>
     <br/>
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
     <br/>
     <label>Transfer Date</label>
     <br/>
    <input 
    type="date"
    name="transferDate"
    onChange={formik.handleChange} 
    value={formik.values.transferDate} />
    <br/>
    
    <label>Notes:</label>
    <br/>
    <textarea 
    name="notes"
    value={formik.values.notes}
    onChange={formik.handleChange}
    />
    <p>{formik.errors.ownerId}</p>
    <p>{formik.errors.transferDate}</p>
    <p>{formik.errors.notes}</p>
    <button className="title-btn-submit" type="submit">Transfer Ownership</button>
    

     </form>
     
     </div>

    )


}


export default TransferForm
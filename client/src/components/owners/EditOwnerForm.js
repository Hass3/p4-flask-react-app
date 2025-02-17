import * as yup from 'yup'
import { useFormik } from 'formik'

function EditOwnerForm({owner, onEditOwner,setIsEditOn}){
    const {id,name,date_of_birth,address} = owner



    const formSchema = yup.object().shape({
          name:yup.string().required("Must Fill In Name").max(15),
          date_of_birth:yup.string().required("Must Enter Date Of Birth"),
          address: yup.string().required("Must Enter In Address")
       })

       
       const formik = useFormik({
          initialValues: {
             name:`${name}`,
             date_of_birth:`${date_of_birth}`,
             address:`${address}`
          },
          validationSchema: formSchema,
          onSubmit: (values)=>{
             fetch(`/owners/${id}`, {
                method: "PATCH",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(values)
             })
             .then(r=>r.json())
             .then(o=> onEditOwner(o)) 
             setIsEditOn(on=>!on)
          }
       })
        
    
       return(
        <>
        <form onSubmit={formik.handleSubmit}>
        <input name="name" onChange={formik.handleChange}  value={formik.values.name} placeholder="enter name"/>
        <br/>
        <input name="date_of_birth" onChange={formik.handleChange}  value={formik.values.date_of_birth} placeholder="enter date of birth" />
        <br/>
        <input name="address" onChange={formik.handleChange}  value={formik.values.address} placeholder="enter address"/> 
        <button type='submit'>Edit Owner</button>
        </form>
        </>
    
       )
}




export default EditOwnerForm

import {useFormik} from "formik"
import * as yup from 'yup'


function EditVehicleForm({car, onEditCar}){
  

      const formSchema =  yup.object().shape({
         make: yup.string().required("Must Enter Vehicle Make").max(15),
         model: yup.string().required("Must Enter Vehicle Model"),
         year: yup.number().positive().integer().required("Must Enter Vehicle Year").typeError("Please enter an Integer").max(2025),
         price: yup.number().positive().integer().required("Must Enter Price").typeError("Please enter an Integer"),
         img_url: yup.string().required("Must Insert Image Address")
      })
      const formik = useFormik({
         initialValues :{
            make: `${car.make}`,
            model:`${car.model}`,
            year: `${car.year}`,
            price: `${car.price}`,
            img_url: `${car.img_url}`
         },
         validationSchema: formSchema,
         onSubmit:(values) =>{
            fetch(`/vehicles/${car.id}`, {
               method: "PATCH",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify(values)
            })
            .then(r=>r.json())    
            .then((car)=>onEditCar(car))
         }
      })
   return(
    
    <>
    <form onSubmit={formik.handleSubmit}>
        <input name="make"  onChange={formik.handleChange} value={formik.values.make}/>
        <input name="model"onChange={formik.handleChange} value={formik.values.model} />
        <input name="year"onChange={formik.handleChange} value={formik.values.year} />
        <input name="price" onChange={formik.handleChange} value={formik.values.price}/>
        <input name="img_url" onChange={formik.handleChange} value={formik.values.img_url}/>
        <button type="submit">Edit Vehicle</button>
    </form>
    
    </>


   )





}



export default EditVehicleForm
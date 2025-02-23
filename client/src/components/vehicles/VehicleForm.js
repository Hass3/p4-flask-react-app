
import {useFormik} from 'formik'
import * as yup from "yup";

function VehicleForm({onAddCar,setIsFormOn}){

   const formSchema =  yup.object().shape({
      make: yup.string().required("Must Enter Vehicle Make").max(15),
      model: yup.string().required("Must Enter Vehicle Model"),
      year: yup.number().positive().integer().required("Must Enter Vehicle Year").typeError("Please enter an Integer").max(2025),
      price: yup.number().positive().integer().required("Must Enter Price").typeError("Please enter an Integer"),
      imgUrl: yup.string().required("Must Insert Image Address")
   })

   
   const formik = useFormik({
      initialValues :{
         make:"",
         model:"",
         year: "",
         price: "",
         imgUrl: ""
      },

      validationSchema: formSchema,
      onSubmit:(values) =>{
         const formJson = {
            'make': values.make,
            'model':values.model,
            'year': values.year,
            'price':values.price,
            'img_url':values.imgUrl
         }
         fetch('/vehicles', {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(formJson)
         })
         .then(r=>r.json())
         .then(car=> onAddCar(car))
         setIsFormOn(on => !on)
      }
   })

   return (
   <div className="v-form-contanier">

    <form className='v-form'onSubmit={formik.handleSubmit}>
    
    <h4>Register Vehicle Here</h4>
    <p>{formik.errors.make}</p>
    <input className="form-input" name="make"  onChange  = {formik.handleChange}  value={formik.values.make} placeholder="enter make" />
    <p>{formik.errors.model}</p>
    <input className="form-input" name="model"  onChange  ={formik.handleChange}  value={formik.values.model} placeholder="enter model" />
    <p>{formik.errors.year}</p>
    <input className="form-input" name="year"  onChange  ={formik.handleChange}  value={formik.values.year} placeholder="enter year" />
    <p>{formik.errors.price}</p>
    <input className="form-input" name="price"  onChange  ={formik.handleChange}  value={formik.values.price}  placeholder="enter price"/>
    <p>{formik.errors.imgUrl}</p>
    <input className="form-input" name="imgUrl"  onChange  ={formik.handleChange}  value={formik.values.imgUrl} placeholder="enter img address" />
    <button className="form-btn" type="submit">Register</button>
    </form>

   </div>

   )

}

export default VehicleForm
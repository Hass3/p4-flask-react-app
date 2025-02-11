import {useFormik} from "formik"
import * as yup from 'yup'


function EditVehicleForm(){
  

      const formSchema =  yup.object().shape({
         make: yup.string().required("Must Enter Vehicle Make").max(15),
         model: yup.string().required("Must Enter Vehicle Model"),
         year: yup.number().positive().integer().required("Must Enter Vehicle Year").typeError("Please enter an Integer").max(2025),
         price: yup.number().positive().integer().required("Must Enter Price").typeError("Please enter an Integer"),
         img_url: yup.string().required("Must Insert Image Address")
      })

      const formik = useFormik({
         initialValues :{
            make:{},
            model:{},
            year: {},
            price: {},
            img_url: {}
         },
   
         validationSchema: formSchema,
         onSubmit:(values) =>{
            fetch('/vehicles', {
               method: "PATCH",
               headers:{"Content-Type": "application/json"},
               body: JSON.stringify(values)
            })
            .then(r=>r.json())
            .then(car=> onUpdateCar(car))
         }
      })
   
   return(
    
    <>
    <form>.
        <input />

    </form>
    
    
    
    </>


   )





}



export default EditVehicleForm
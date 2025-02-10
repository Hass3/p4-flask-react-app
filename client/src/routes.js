import HomePage from "./components/HomePage";
import OwnerPage from "./components/owners/Owners";

import Vehicle from "./components/vehicles/Vehicle";
import VehicleDetails from "./components/vehicles/VehicleDetails";
const routes = [
{
   path: "/",
   element: <HomePage />
},
{
  path:"/vehicles", 
  element: <Vehicle/>
},
{
    path:"/owners", 
    element: <OwnerPage/>
},
{
  path:"/vehicles/:id", 
  element: <VehicleDetails />
}

]

export default routes
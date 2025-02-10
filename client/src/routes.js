import HomePage from "./components/HomePage";
import OwnerPage from "./components/owners/Owners";

import Vehicle from "./components/vehicles/Vehicle";
import VehicleDetails from "./components/vehicles/VehicleDetails";
import OwnerDetails from "./components/owners/Ownerdetails";
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
},
{
  path:"/owners/:id",
  element:<OwnerDetails />
}

]

export default routes
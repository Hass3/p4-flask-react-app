import HomePage from "./components/HomePage";
import OwnerPage from "./components/Owners";

import Vehicle from "./components/Vehicle";
import VehicleDetails from "./components/VehicleDetails";
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
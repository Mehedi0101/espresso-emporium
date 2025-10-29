import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://espresso-emporium-server-k6f3xpr0u-mehedih2909s-projects.vercel.app/coffees'),
                element: <Home></Home>
            },
            {
                path: '/add-coffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/coffee-details/:id',
                loader: ({params}) => fetch(`https://espresso-emporium-server-k6f3xpr0u-mehedih2909s-projects.vercel.app/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>
            }
        ]
    }
])

export default router;
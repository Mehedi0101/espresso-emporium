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
                loader: () => fetch('http://localhost:5000/coffees'),
                element: <Home></Home>
            },
            {
                path: '/add-coffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/coffee-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>
            }
        ]
    }
])

export default router;
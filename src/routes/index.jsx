import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Home";
import Menu from "../pages/menu";
import Orders from "../pages/order";
import Checkout from "../pages/checkout";
import PaymentSuccess from "../pages/paymentSuccess";
import Profile from "../pages/profile";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Reset from "../pages/passwordReset";

//pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order",
    element: <Orders />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/PaymentSuccess",
    element: <PaymentSuccess />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/Auth",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/passwordReset",
    element: <Reset />,
  },
]);
export default router;

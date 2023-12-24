import { useRoutes } from "react-router-dom";
import Product from "../pages/product/product";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Account from "../pages/account/account";
import Cart from "../pages/cart/cart";
import Paypal from "../pages/paypal/paypal";

const useRouterElement = () => {
  const routerElement = useRoutes([
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/about",
      element: <Account/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/paypal",
      element: <Paypal/>
    },
    {
      path: "account",
      element: <Account/>
    }
  ]);
  return routerElement;
};

export default useRouterElement;

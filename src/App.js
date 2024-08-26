import { ThemeProvider,createTheme,CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import InterFace from "./components/interface/InterFace";
import Login from "./components/login/Login";
import ListPage from "./components/list/List";
import NewAccount from "./components/NewAccount/NewAccount";
import CartPage from "./components/cartpage/CartPage";
import Categories from "./components/category/Categories";
import Purchases from "./components/purchases/Purchases";
import Products from "./components/product/Product";
import Details from "./components/details/Details";

const App = () => {
  const [MyMOde, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
    ? "light"
    :localStorage.getItem("currentMode") === "light"
    ? "light"
    : "dark"
  )
  const darktheme = createTheme({
    palette: {
      mode:MyMOde,
    },
  })
  const productsRouter = [
    {
      path: '',
      element: <InterFace setmyMOde={setmyMOde} />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/list',
      element: <ListPage setmyMOde={setmyMOde}/>
    },
    {
      path: '/newaccount',
      element : <NewAccount/>
    },
    {
      path: '/cart',
      element: <CartPage/>
    },
    {
      path: '/categories',
      element: <Categories/>
    },
    {
      path: '/purchases',
      element: <Purchases/>
    },
    {
      path: '/products/:category_id',
      element: <Products/>
    },
    {
      path: '/details',
      element: <Details/>
    }


    
  ]
  const router = createBrowserRouter([
    ...productsRouter
  ])
  return (
    <div className="App">
      <ThemeProvider theme={darktheme}>
        <CssBaseline/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;

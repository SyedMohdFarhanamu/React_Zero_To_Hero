import React, { lazy, Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
// import Grocery from "./components/Grocery"

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On demand Loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    // console.log(<Body/>)  // Virtual DOM - Object

    // React Context
    const [userName, setUserName] = useState()
    // Authentication
    useEffect(() => {
        // Make a API Call and Send Username and Password
        const data = {
            name: "Syed Farhan"
        }
        setUserName(data.name)
    },[])

    return(
        <Provider store={appStore}>
        {/* // Override the Context Value
        // bind userContext to the State Variable */}
        <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
        <div className="app">
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            
            {
                path: "/grocery",
                element: <Suspense> <Grocery /> </Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)





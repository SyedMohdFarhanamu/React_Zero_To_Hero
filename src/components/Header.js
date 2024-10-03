import { LOGO_URL } from "../utils/constant";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState("Login")
    console.log("Header Render") // Whenever render again-2 printed 

    const onlineStatus = useOnlineStatus()

    // React Context
    const {loggedInUser} = useContext(UserContext)
    console.log(loggedInUser)

    useEffect(() => {
        console.log("useEffect Rendered")
    })

// Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)


    return(
        <div className="flex justify-between m-1 p-1 bg-yellow-200 shadow-lg  sm:bg-green-200 lg:bg-pink-200">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} alt="logo-file"/>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link" to="/about" >About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link className="link" to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link className="link" to="/cart">Cart-({cartItems.length} items)</Link>
                        </li>
                    
                    <button className="btn-login"
                    onClick={() => {
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    }}>{btnNameReact}</button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
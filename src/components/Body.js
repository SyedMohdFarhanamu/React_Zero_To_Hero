import RestaurantCard, {withOfferLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

// State Variable - SuperPowerful Variable - For that we use 'Hooks'
const [listOfRestaurants, setListOfRestaurants] = useState([])

const [filteredRestaurant, setFilteredRestaurant] = useState([])

const [searchText, setsearchText] = useState("")

// const arr = useState(resList)
// const [listOfRestaurants, setListOfRestaurants] = arr    // Array Destructuring

const RestaurantCardOffered = withOfferLabel(RestaurantCard)


// A CallBack func inside the useEffect() is getting called after the whole component(Body Component) get rendered.
useEffect(() => {
  fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await data.json()

  // console.log(json)
  // Optional Chaining
  setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)  // Re-Render the data
  setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
// Conditional Rendering
// if(listOfRestaurants.length === 0){
//   return <Shimmer />
// }


// Whenever state var is update, react triggers a reconcilation cycle(re-render the component)
// console.log("Body Rendered!",listOfRestaurants)

// Normal JavaScript Variable
let listOfRestaurantsJS = [
    {"info":
        {
                     "id": "201224",
                     "name": "Asha Tiffins",
                     "cloudinaryImageId": "n15vckntsiboiod3gpco",
                     "costForTwo": "₹200 for two",
                     "cuisines": [
                       "Chinese",
                       "Desserts",
                       "Beverages",
                       "North Indian"
                     ],
                     "avgRating": 4.5,
                     "sla": {
                       "deliveryTime": 22}}
                     },
                     {"info":
                        {
                                     "id": "201222",
                                     "name": "Tunday Kababi",
                                     "cloudinaryImageId": "n15vckntsiboiod3gpco",
                                     "costForTwo": "₹200 for two",
                                     "cuisines": [
                                       "Chinese",
                                       "Desserts",
                                       "Beverages",
                                       "North Indian"
                                     ],
                                     "avgRating": 3.5,
                                     "sla": {
                                       "deliveryTime": 22}}
                                     },
                                     {"info":
                                        {
                                                     "id": "201225",
                                                     "name": "Mubeen Hotel",
                                                     "cloudinaryImageId": "n15vckntsiboiod3gpco",
                                                     "costForTwo": "₹200 for two",
                                                     "cuisines": [
                                                       "Chinese",
                                                       "Desserts",
                                                       "Beverages",
                                                       "North Indian"
                                                     ],
                                                     "avgRating": 4.2,
                                                     "sla": {
                                                       "deliveryTime": 22}}
                                                     }
]


const onlineStatus = useOnlineStatus()
if(onlineStatus === false)
  return(
<h1>
  Looks like you're offline!! Please check your internet connection.
</h1>)


const {loggedInUser, setUserName} = useContext(UserContext)


return listOfRestaurants.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex justify-center">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black rounded" value={searchText} 
                onChange={(e) =>{
                  setsearchText(e.target.value)
                }}/>
                <button className="px-4 py-1 bg-gray-300 m-4 rounded-full hover:bg-blue-200 ring-2 ring-pink-300 ring-inset"
                onClick={() => {
                  // Filter the restaurant cards and update the UI
                  // searchText
                  console.log(searchText)

                  const filteredRestaurant = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                  setFilteredRestaurant(filteredRestaurant)
                }}>
                  Search</button>


              </div>
              <div className="m-4 p-4 flex items-center">
              <button className="px-4 py-1 bg-gray-300 m-4 rounded-full hover:bg-blue-200 ring-2 ring-pink-300 ring-inset"
                onClick={() => {
                    const filteredList = 
                    listOfRestaurants.filter((res) => res.info.avgRating >4.5)
                    setFilteredRestaurant(filteredList)            
                } 
                }
                >Top Rated Restaurants</button>
              </div>

              <div className="m-6 p-6 ">
                <label className="px-1">UserName</label>
                <input className=" bg-gray-300 rounded-full ring-2 ring-pink-300 ring-inset p-2"
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)} />
              </div>
                
            </div>
            
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link className="link" key={restaurant.info.id}
                        to={"/restaurant/" +restaurant.info.id}>
                           {/* if the restaurant has offer then show it on cards. */}
                          {restaurant.info.avgRating>4.3 ?( <RestaurantCardOffered resData={restaurant} />) :
                          (<RestaurantCard  resData={restaurant}/>)}</Link>
                    )) // Optimized code


                    // not using key(not acceptable) <<<<< index as key <<<<<<< unique id(best practices)


                }                
                {/* <RestaurantCard resData ={resList[0]} />
                <RestaurantCard resData ={resList[1]} />
                <RestaurantCard resData ={resList[2]} />
                <RestaurantCard resData ={resList[3]} />
                */}
                
                
            </div>
        </div>
    )
}

export default Body;
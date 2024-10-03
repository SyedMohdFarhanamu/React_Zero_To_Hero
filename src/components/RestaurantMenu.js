import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { MENU_API_URL } from "../utils/constant"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
    const {resId} = useParams()

    const dummy = "Dummy Data"

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(null)

   
    
    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[2]?.card?.card?.info
    

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
    // console.log(itemCards)

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    // console.log(categories)

    return (
        <div className="text-center">
            <h1 className="m-2 p-2 font-bold text-2xl">{name}</h1>
            <p className="m-2 p-2 font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}, AvgRating - {avgRating} </p>

            {/* categories accordions 
            Controlled Component */}
            {categories.map((category, index) => (
                <RestaurantCategory 
                key={category?.card?.card?.title} 
                data={category?.card?.card} 
                showItems = {index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}/>
            ))}
            
        </div>
    )
}

export default RestaurantMenu
import { CDN_URL } from "../utils/constant"
import { useContext } from "react"
import UserContext from "../utils/UserContext"

// const styleCard = {
//     backgroundColor : "#ede8d0",
// }
// style attribute uses JAVASCRIPT OBJECT


// Props is just JAVASCRIPT OBJECT.
const RestaurantCard = (props) => {
    const {resData} = props     // Destructring Of OBJECT

    const {loggedInUser} = useContext(UserContext)


    // For OPTIMIZED CODE we use DESTRUCTURING OBJECT
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
        } = resData?.info  
    return(
        <div className="m-2 p-2 w-[200px] bg-gray-100 hover:bg-gray-300 rounded-lg" >
            <img className="rounded-lg"  src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
            <h3 className="font-semibold py-3 text-lg">{name}</h3>
            <div className="res-card-details">
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>User :{loggedInUser}</h4>
        </div>
            </div>
    )
}


// Higher Order Component

// input - RestaurantCard(component)  ==> RETURN RestaurantCardOffered(New component)

export const withOfferLabel = (RestaurantCard) => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )

    }
}

export default RestaurantCard;
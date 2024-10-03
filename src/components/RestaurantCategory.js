import { useState , useEffect} from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems, setShowIndex, dummy}) => {
    // console.log(data)

    // const [showItems, setShowItems] = useState(false)
    const [rotateIcon , setRotateIcon] = useState(false)

    const handleClick = () => {
        setShowIndex()
        // setRotateclick(!rotateclick)
        setRotateIcon(!rotateIcon)
    }

    

    return(
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>{!rotateIcon ? "🔽" : "🔼"}</span>
                </div>

                  {/* Accordions Body */}
                {rotateIcon && showItems && <ItemList items={data.itemCards} 
                dummy={dummy} />}
            </div>
          
        </div>
    )
}

export default RestaurantCategory;
import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constant"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items, dummy}) => {
    // console.log(dummy)
    // console.log(items)

    const dispatch = useDispatch()

    const handleAddItem = (item) =>{
        // Dispatch and Action
        dispatch(addItem(item))
    }
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-400 text-left font-bold flex justify-between">
                    
                    <div className="w-9/12">
                    <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span>- ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice/100 :item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs font-normal">{item.card.info.description}</p>

                    </div>

                    <div className="w-3/12 p-4">
                    <div className="absolute">
                    <button className="p-2 mx-8 bottom-0 rounded-lg bg-black text-white text-sm shadow-lg m-auto" 
                    onClick={() => handleAddItem(item)}>
                        ADD +</button>
                    </div>
                    
                        <img src={CDN_URL + item.card.info.imageId}  />
                        </div>
                </div>
                
            ))}
            
        </div>
    )
}

export default ItemList
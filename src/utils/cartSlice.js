import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState : {
        items: []
    },
    reducers:{
        addItem:(state,action) => {
            // Redux Toolkit uses immer BTS
            // Mutating the state here
            state.items.push(action.payload)
        },
        // Remove last element so that action argument not needed.
        removeItem:(state) => {
            state.items.pop()
        },
        clearCart:(state) => {
            state.items.length = 0
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer;
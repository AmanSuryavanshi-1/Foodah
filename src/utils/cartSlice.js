import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[],
        // restaurants:{},
    },
    reducers: {
        addItem: (state,action) => {
            state.items.push(action.payload);

            // Taking Info of restaurantName, deliveryTime & deliveryCharge while adding item in cart
            // if (!state.restaurants[action.payload.restaurantId]) {
            //     state.restaurants[action.payload.restaurantId] = {
            //       name: action.payload.restaurantName,
            //       deliveryTime: action.payload.deliveryTime,
            //       deliveryCharge: action.payload.deliveryCharge,
            //     };
            //   }
        },
        clearCart: (state,action) =>{
            state.items.length = 0;
        },
        removeItem: (state,action) => {
            state.items.splice(action.payload,1);
        },
    },
});

export const {addItem,clearCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;
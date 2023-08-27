import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []

};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        toggleIncrease(state){

        },
        toggleDecrease(state){

        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
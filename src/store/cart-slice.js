import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []

};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addCartItem(state, action){
         const existingItem = state.items.find((i)=>i.id ==action.payload.id);
         if(!existingItem){
            state.items.push({...action.payload,quantity:1, total:action.payload.price})
         }else{
            existingItem.quantity++;
            existingItem.total = existingItem.total + action.payload.price;
         }
        },
        toggleQuantity(state,action){
          const eleId = action.payload.id;
          const item = state.items.find((i)=>i.id === eleId);
          if(action.payload.quantity === 'inc'){
            item.quantity++;
            item.total += action.payload.price;
          }else if(action.payload.quantity === 'dec'){
              if(item.quantity == 1){
                const filtered = state.items.filter((i)=> i.id !==eleId)
                state.items = filtered;
                          }else{
                            item.quantity--;
                            item.total -= action.payload.price;
                          }
          }
        },
        onRefresh(state,action){
          state.items = action.payload;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
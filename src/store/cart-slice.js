import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


const initialState = {
    items: [],
   initialNotification: false
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
        toggleQuantity(state, action){
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
          state.initialNotification= true;
        },
    },
});

export const addCartToDb =(cart)=>{
  return async (dispatch)=>{
    dispatch(
    uiActions.showNotification({
      status: "pending",
      title:"Sending",
      message:" Sending to cart",
    })
);
const sendingRequest = async ()=>{
  const res = await fetch (
    "https://shopping-app-724cb-default-rtdb.firebaseio.com/cart.json",
    {
      method: "PUT",
      body:JSON.stringify(cart),
    }
  );
  if(!res.ok){
    throw new Error ("Unable to add");
  }
  dispatch(
    uiActions.showNotification({
      status:"success",
      title: "Success!",
      message:"Succesfully send to cart",
    })
  );
};
try{
  sendingRequest();
}catch(error){
  dispatch(
    uiActions.showNotification({
      status: "error",
      title: "Error!",
      message:"Sending to cart failed",
    })
  );
}
};
};
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
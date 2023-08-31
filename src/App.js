import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { Fragment, useEffect, useState } from 'react';
import { addCartToDb, cartActions } from './store/cart-slice';
import { uiActions } from './store/ui-slice';

let initialState = true;

function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state)=>state.ui.isCartVisible);
  const cart = useSelector((state)=>state.cart.items);
  const notification = useSelector((state)=>state.ui.notification);
  const initialNotifiaction =useSelector((state)=>
   state.cart.initialNotifiaction);
   console.log(notification);

  useEffect(()=>{
      if(initialState){
        initialState = false;
        const restoreCart = async()=>{
        const cartRes = await fetch("https://shopping-app-724cb-default-rtdb.firebaseio.com/cart.json")
          const data = await cartRes.json();
          if(cartRes.ok && data !== null){
            dispatch(cartActions.onRefresh(data));
          }
          else if (!cart.ok){
            throw new Error('Unable to load cart')
          }
        }
        try{
          restoreCart();
        }catch(error){
          alert(error);
        }
        return;
      }
      dispatch(addCartToDb(cart));
  },[cart,dispatch]);
  return (
    <Fragment>
      {initialNotifiaction && notification &&(
        <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
        />
      )}
    <Layout>
      {isCartVisible && <Cart/>}
      {!isCartVisible && <Products/>}
    </Layout>
    </Fragment>
  );
}

export default App;

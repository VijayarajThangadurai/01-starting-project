import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  // const { title, quantity, total, price } = props.item;
const cartItems = useSelector(state=> state.cart.items);
const dispatch = useDispatch();

const decreaseHandler =(item)=>{
  dispatch(cartActions.toggleQuantity({id: item.id,quantity: 'dec',price:item.price}))
};
const increaseHandler = (item)=>{
  dispatch(cartActions.toggleQuantity({id: item.id, quantity:'inc', price:item.price}))
};
  return (
    <ul>
      {cartItems.map((i)=>(
    <li className={classes.item}>
      <header>
        <h3>{i.title}</h3>
        <div className={classes.price}>
          ${i.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${i.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{i.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler(i)}>-</button>
          <button onClick={increaseHandler(i)}>+</button>
        </div>
      </div>
    </li>
    ))}
    </ul>
  );
};

export default CartItem;

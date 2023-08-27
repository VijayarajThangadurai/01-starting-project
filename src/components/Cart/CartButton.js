import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state=> state.cart.items)

  const clickCartHandler = ()=>{
    dispatch(uiActions.toggleCart());
  }
  let totalItem = 0
  cartItems.forEach(element => {
    totalItem+= Number(element.quantity);
    
  });
  return (
    <button className={classes.button} onClick={clickCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;

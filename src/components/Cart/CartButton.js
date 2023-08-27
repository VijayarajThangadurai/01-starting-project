import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const clickCartHandler = ()=>{
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={clickCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const isCartVisible = useSelector((state)=>state.ui.isCartVisible);
  return (
    <Layout>
      {isCartVisible && <Cart />}
      {isCartVisible && <Products />}
    </Layout>
  );
}

export default App;

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/living' element={<ShopCategory category="living"/>}/>
  <Route path='/bedroom' element={<ShopCategory category="bedroom"/>}/>
  <Route path='/dining' element={<ShopCategory category="dining"/>}/>
  <Route path='/decor' element={<ShopCategory category="decor"/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>

      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

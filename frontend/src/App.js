import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import ShopAll from './Pages/ShopAll';
import AboutPage from './Pages/AboutPage';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Checkout from './Pages/Checkout';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/shop' element={<ShopAll/>}/>
  <Route path='/collection' element={<ShopAll/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='/living' element={<ShopCategory category="living"/>}/>
  <Route path='/bedroom' element={<ShopCategory category="bedroom"/>}/>
  <Route path='/dining' element={<ShopCategory category="dining"/>}/>
  <Route path='/decor' element={<ShopCategory category="decor"/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/checkout' element={<Checkout/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>

      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

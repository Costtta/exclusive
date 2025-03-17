import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import ErrorPage from './components/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Account from './pages/Account';
import WishList from './pages/WishList';
import ProductsDetails from './components/ProductsDetails';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signIn' element={<SignIn />}/>
      <Route path='/signUp' element={<SignUp />}/>
      <Route path='/error' element={<ErrorPage />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />} />
      <Route path='/account' element={<Account />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/:homeId' element={<ProductsDetails />}/>
    </Routes>
  );
}

export default App;

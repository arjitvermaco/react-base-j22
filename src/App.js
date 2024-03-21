import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <>
    <HeaderComponent/>
    <Routes>
      <Route index Component={HomePage} />
      <Route path='category/:id' Component={CategoryPage}/>
      <Route path='product/:id' Component={ProductPage}/>
      <Route path='cart' Component={CartPage}/>
    </Routes>
    <FooterComponent/>
    </>
  );
}

export default App;

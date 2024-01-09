import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './assets/css/style.css'
import CategoryPage from "./pages/website/CategoryPage";
import ProductPage from './pages/website/ProductPage';
import CartPage from './pages/website/CartPage';
import OrderPage from './pages/website/OrderPage';


function App() {
  return (
    <Router>
          <Routes>
            <Route index element={<CategoryPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Router>
  );
}

export default App;

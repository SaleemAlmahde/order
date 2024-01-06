import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './assets/css/style.css'
import CategoryPage from "./pages/website/CategoryPage";


function App() {
  return (
    <Router>
          <Routes>
            <Route index element={<CategoryPage />} />
            {/* <Route path="/products" element={<ProductsPage />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/page" element={<Page />} />
            <Route path="/admin" element={<DashboardHomePage />} /> */}
          </Routes>
        </Router>
  );
}

export default App;

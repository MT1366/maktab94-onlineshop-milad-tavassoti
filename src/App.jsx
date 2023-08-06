import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin-panel/AdminDashboard";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login";
import PaymentPage from "./pages/payment-page/PaymentPage";
import Product from "./pages/product/Product";
import ProductBascket from "./pages/product-bascket/ProductBascket";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/app-layout/AppLayout";
import Orders from "./pages/admin-panel/Orders";
import PricingInventory from "./pages/admin-panel/PricingInventory";
import Products from "./pages/admin-panel/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="dashboard" element={<AdminDashboard />}>
            {/* <Route index element={<Products />} /> */}
            <Route index path="products" element={<Products />} />
            <Route path="inventory" element={<PricingInventory />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="loginpage" element={<Login />} />
          <Route path="paymentpage" element={<PaymentPage />} />
          <Route path="product" element={<Product />} />
          <Route path="productbascket" element={<ProductBascket />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

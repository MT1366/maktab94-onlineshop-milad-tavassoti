import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin-panel/AdminDashboard";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login";
import PaymentPage from "./pages/payment-page/PaymentPage";
import Product from "./pages/product/Product";
import ProductBascket from "./pages/product-bascket/ProductBascket";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dashboard" element={<AdminDashboard />} />
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

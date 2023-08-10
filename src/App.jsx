// import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin-panel/AdminDashboard";
import HomePage from "./pages/home-page/HomePage";
import Login from "./pages/login-page/Login";
import PaymentPage from "./pages/payment-page/PaymentPage";
import Product from "./pages/product/Product";
import ProductBascket from "./pages/product-bascket/ProductBascket";
// import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/app-layout/AppLayout";
import Orders from "./pages/admin-panel/Orders";
import PricingInventory from "./pages/admin-panel/PricingInventory";
import Products from "./pages/admin-panel/Products";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "app",
    element: <AppLayout />,
  },

  {
    path: "dashboard",
    element: <AdminDashboard />,

    children: [
      {
        path: "products",
        element: <Products />,
        index: true,
      },
      {
        path: "inventory",
        element: <PricingInventory />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "loginpage",
    element: <Login />,
  },

  {
    path: "paymentpage",
    element: <PaymentPage />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "productbascket",
    element: <ProductBascket />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

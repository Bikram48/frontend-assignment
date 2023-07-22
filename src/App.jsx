import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchProducts } from "./redux/apis";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProductData(await fetchProducts()));
    };

    fetchData();
  });

  const Layout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sidebar />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

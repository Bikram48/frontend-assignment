import React, { useEffect } from "react";
import Navbar, { NavbarWithSearch } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchProducts } from "./redux/apis";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/actions";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";
import ProductSearch from "./components/Products/ProductSearch";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProductData(await fetchProducts()));
    };

    fetchData();
  });

  const isSearchPage = () => {
    const location = useLocation();
    return location.pathname.includes("/search");
  };

  const Layout = ({ children }) => {
    return (
      <div>
        {isSearchPage() ? <NavbarWithSearch /> : <Navbar />}
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
            <Route path="/search" element={<ProductSearch />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

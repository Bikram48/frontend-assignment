import React, { useEffect } from "react";
import Navbar, { NavbarWithSearch } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchProducts } from "./redux/apis";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/actions";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "./components/Products/ProductDetail";
import ProductSearch from "./components/Products/ProductSearch";
import ProductList from "./components/Products/ProductList";

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
          <div className="flex items-start mt-8">
            <Sidebar />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/search" element={<ProductSearch />} />
            </Routes>
          </div>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchProducts } from "./redux/apis";
import { useDispatch } from "react-redux";
import { fetchProductData } from "./redux/actions/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchProductData(await fetchProducts()));
    };

    fetchData();
  });

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

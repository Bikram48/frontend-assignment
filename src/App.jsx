import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { fetchProducts } from "./redux/apis";

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
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

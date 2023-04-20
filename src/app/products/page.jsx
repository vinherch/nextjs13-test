"use client";

import { useState, useEffect } from "react";
import LoadingPage from "../loading";

import Products from "../components/Products";
import ProductSearch from "../components/ProductSearch";

/* Client component */
const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  /* state for loading page. Must be controlled manually in a client component */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* fetching products */
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = res.ok ? await res.json() : [];
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <ProductSearch getSearchResults={(results) => setProducts(results)} />
      <Products products={products} />
    </>
  );
};

export default ProductsPage;

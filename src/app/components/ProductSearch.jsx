"use client";

import React from "react";
import { useState } from "react";

const ProductSearch = ({ getSearchResults }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/products/search?q=${search}`);
    const results = res.ok ? await res.json() : null;
    if (results) getSearchResults(results);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search for products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default ProductSearch;

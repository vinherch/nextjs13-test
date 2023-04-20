"use client";

import React from "react";

const Products = ({ products }) => {
  return (
    products.length > 0 && (
      <div className="courses">
        {products.map((p) => (
          <div key={p.id} className="card">
            <div>ID: {p.id}</div>
            <h3>{p.title}</h3>
            <div>{p.description}</div>
          </div>
        ))}
      </div>
    )
  );
};

export default Products;

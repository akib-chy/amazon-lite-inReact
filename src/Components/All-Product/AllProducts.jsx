import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {products.map((product) => (
          <Product
            setCartCount={props.setcount}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

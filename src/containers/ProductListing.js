import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  // This is how a state is accessed in redux
  const products = useSelector((state) => state);
  // console.log(products);

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error ", err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products : ", products);
  return (
    <div className="ui grid container">
      {/* <h1>Product Listing</h1> */}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

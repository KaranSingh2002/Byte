import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../../components/Styles/AllProducts.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from the API
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      if (data?.success) {
        setProducts(data.products);
      } else {
        toast.error(data?.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Something went wrong while fetching products");
    } finally {
      setLoading(false); // Ensure loading indicator is turned off
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"All Products List"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : products.length > 0 ? (
              <div className="row">
                {products?.map((p) => (
                  <div className="col-md-4 mb-4" key={p._id}>
                    <Link
                      to={`/dashboard/admin/product/${p.slug}`} // Navigate to UpdateProduct page with product ID as URL param
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <div className="card">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                          <p className="card-text">
                            {p.description.substring(0, 30)}...
                          </p>
                          <p className="card-text">₹{p.price}</p>
                          <p className="card-text">
                            {p.quantity} items in stock
                          </p>
                          <p className="card-text">
                            Shipping: {p.shipping ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">No products available</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;

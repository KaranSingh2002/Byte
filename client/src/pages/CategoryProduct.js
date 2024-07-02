import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/cart";
import "../components/Styles/Category.css";
import toast from "react-hot-toast";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.slug) getProductByCat();
  }, [params?.slug]);
  const getProductByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mt-3">
        <h1 className="text-center">Category - {category?.name}</h1>
        <h1 className="text-center">{products?.length} result found</h1>
        <div className="row">
          {" "}
          <div className="products-section5" style={{ flex: "3" }}>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div
                  className="product-card5"
                  key={p._id}
                  style={{ width: "calc(33.333% - 20px)", margin: "10px" }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body5">
                    <h5 className="card-title5">{p.name}</h5>
                    <p className="card-text5">
                      {p.description.substring(0, 20)}
                    </p>
                    <p className="card-text5">₹ {p.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setCart([...cart, products]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, products])
                        );
                        toast.success("Item Added To Your Cart");
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;

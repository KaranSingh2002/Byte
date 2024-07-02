import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../components/Styles/ProductDetails.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../components/Styles/Details.css";
import { Spin } from "antd";

const ProductDetails = () => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const perPage = 3;

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      setPage(1); // Reset the page when a new product is fetched
      getSimilarProducts(data?.product._id, data?.product.category?._id, 1); // Pass the initial page as 1
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProducts = async (pid, cid, page) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`,
        {
          params: {
            skip: (page - 1) * perPage,
            limit: perPage,
          },
        }
      );

      console.log("Fetched products: ", data.products);
      if (data.products.length < perPage) {
        setHasMore(false);
      }

      // Filter out duplicates
      const newProducts = data.products.filter(
        (product) => !relatedProducts.some((p) => p._id === product._id)
      );

      setRelatedProducts((prevProducts) =>
        page === 1 ? newProducts : [...prevProducts, ...newProducts]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const loadMore = async () => {
    try {
      setLoadingMore(true);
      const newPage = page + 1;
      console.log("Loading more, current page: ", newPage);
      await getSimilarProducts(product._id, product.category._id, newPage);
      setPage(newPage);
      setLoadingMore(false);
    } catch (error) {
      setLoadingMore(false);
      console.log(error);
    }
  };

  // Render product description in bullet points
  const renderDescriptionPoints = () => {
    if (!product.description) return null;

    const points = product.description.split(". ");
    return (
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    );
  };

  return (
    <Layout>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="card-img-top"
              alt={product.name}
            />
          </div>
          <div className="col-md-6 product-info">
            <h1 className="text-center">Product Details</h1>
            <h6>Name: {product.name}</h6>
            <div>
              <h6>Description:</h6>
              {renderDescriptionPoints()}
            </div>
            <h6>Price: ₹{product.price}</h6>
            <del>M.R.P ₹ {product.price + 1000}</del>
            <h6>Category: {product.category?.name}</h6>
            <button
              className="btn btn-secondary ms-1"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                toast.success("Item Added To Your Cart");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <h6>Similar Products</h6>
        {relatedProducts.length === 0 && (
          <p className="text-center">No Similar Products</p>
        )}
        <div className="wrap">
          {relatedProducts.map((p) => (
            <div className="product-card" key={p._id}>
              <div
                className="image-container"
                onClick={() => navigate(`/product/${p.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{p.name.slice(0, 23)}</h5>
                <div>
                  <h6>Description:</h6>
                  <p className="card-text">{p.description.slice(0, 50)}...</p>
                </div>
                <p className="card-text">
                  ₹ {p.price} <del>M.R.P ₹ {p.price + 2000}</del>
                </p>
                <button
                  className="btn btn-secondary ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
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
    </Layout>
  );
};

export default ProductDetails;

import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../components/Styles/Search.css";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div
                className="product-card"
                key={p._id}
                style={{ width: "calc(33.333% - 20px)", margin: "10px" }}
              >
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 20)}</p>
                  <p className="card-text">₹ {p.price}</p>
                  <button className="btn btn-primary">Details</button>
                  <button className="btn btn-secondary">Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

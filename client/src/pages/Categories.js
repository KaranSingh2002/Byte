import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../components/Styles/Categories.css";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container category-container">
        {categories.map((c) => (
          <div className="category-item2" key={c._id}>
            <Link to={`/category/${c.slug}`}>
              <h2>{c.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;

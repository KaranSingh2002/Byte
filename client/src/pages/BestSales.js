import React from "react";
import Layout from "../components/Layout/Layout";
import "../components/Styles/BestSales.css";
import { Link } from "react-router-dom";
import video1 from "../components/Videos/buds.mp4"; // Import the video
import video2 from "../components/Videos/trimmer.mp4"; // Import the video
import video3 from "../components/Videos/watch.mp4"; // Import the video

const categories = [
  {
    name: "Laptops",
    slug: "laptops",
    type: "video",
    source: video1,
  },
  {
    name: "Headphones",
    slug: "headphones",
    type: "video",
    source: video2,
  },
  {
    name: "Watches",
    slug: "watches",
    type: "video",
    source: video3,
  },
];

const BestSales = () => {
  return (
    <Layout title={"Best Sales • Z-Cart"}>
      <div className="row best-sales">
        <div className="col-md-12">
          <h1 className="bg-dark p-2 text-white text-center">BEST SALES</h1>
          <p className="text-justify mt-2">
            Welcome to the Best Sales section of Z Cart! Here, we bring you the
            hottest deals and discounts on a wide range of products. Don't miss
            out on these incredible offers and start saving today.
          </p>
          <div className="categories-grid">
            {categories.map((c) => (
              <div key={c.slug} className="category-card">
                <Link to={`/category/${c.slug}`}>
                  {c.type === "video" && (
                    <video
                      width="100%"
                      height="auto"
                      controls
                      muted // Ensure videos are muted
                    >
                      <source src={c.source} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <div className="category-name">{c.name}</div>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-justify mt-2">
            <strong>Exclusive Deals:</strong> Discover exclusive deals on top
            brands and products. From the latest electronics to fashionable
            clothing, we have everything you need at unbeatable prices.
          </p>
          <p className="text-justify mt-2">
            <strong>Limited Time Offers:</strong> Hurry and take advantage of
            our limited time offers. These deals won't last long, so make sure
            to grab your favorite items before they're gone.
          </p>
          <p className="text-justify mt-2">
            <strong>Seasonal Sales:</strong> Check out our seasonal sales for
            special discounts on seasonal products. Whether it's summer, winter,
            or any festive season, we have special offers tailored just for you.
          </p>
          <p className="text-justify mt-2">
            <strong>Customer Favorites:</strong> Browse through our customer
            favorites section to find the most popular items on sale. These
            products are loved by our customers for their quality and value.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing Z Cart. We hope you enjoy our best sales and
            save big on your purchases.
          </p>
          <p className="text-justify mt-2">
            <strong>The Z Cart Team 😄💖</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default BestSales;

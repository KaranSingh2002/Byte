import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio, Dropdown, Menu, Spin } from "antd";
import { Prices } from "../components/Prices";
import "../components/Styles/HomePage.css";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchInput from "../components/Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { startCountdown } from "./countDown";
import VideoBanner from "./VideoBanner";
import video from "../components/Images/television.mp4";
import banner1 from "../components/Images/pngegg (3).png";
import banner2 from "../components/Images/boult.jpg";
import banner3 from "../components/Images/sam.jpg";
import banner4 from "../components/Images/poco.jpg";
import deal1 from "../components/Images/samsung.webp";
import deal2 from "../components/Images/samsung2.webp";
import deal3 from "../components/Images/samsung3.webp";
import deal4 from "../components/Images/samsung4.webp";
import deal5 from "../components/Images/samsung5.webp";
import deal6 from "../components/Images/samsung6.webp";
import deal7 from "../components/Images/samsung7.webp";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoadingMore(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoadingMore(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoadingMore(false);
      console.log(error);
    }
  };

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  const handlePriceFilter = (e) => {
    const value = e.key;
    setRadio(value);
  };

  useEffect(() => {
    if (
      (Array.isArray(checked) && checked.length) ||
      (Array.isArray(radio) && radio.length)
    ) {
      filterProduct();
    }
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in filtering products");
    }
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow: <button className="slick-prev">←</button>,
    nextArrow: <button className="slick-next">→</button>,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev">←</button>,
    nextArrow: <button className="slick-next">→</button>,
  };
  const brandStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const logoStyle = {
    fontFamily: "Arial, sans-serif", // Replace with your preferred font
    fontSize: "24px", // Adjust size as needed
    fontWeight: "bold", // Ensure it stands out
    textDecoration: "none", // Remove default underline
    color: "#333", // Adjust color to fit your design
  };

  const categoryMenu = (
    <Menu className="category-menu">
      {categories &&
        categories?.map((c) => (
          <Menu.Item key={c._id}>
            <Checkbox onChange={(e) => handleFilter(e.target.checked, c._id)}>
              {c.name}
            </Checkbox>
          </Menu.Item>
        ))}
      <Menu.Divider />
      <Menu.Item>
        <button
          className="btn btn-danger"
          onClick={() => window.location.reload()}
        >
          Reset Filters
        </button>
      </Menu.Item>
    </Menu>
  );

  const priceMenu = (
    <Menu>
      <Menu.Item onChange={handlePriceFilter}>
        {Prices &&
          Prices?.map((p) => (
            <div key={p._id}>
              <Radio value={p.array}>{p.name}</Radio>
            </div>
          ))}
        <Menu.Item>
          <button
            className="btn btn-danger"
            onClick={() => window.location.reload()}
          >
            Reset Filters
          </button>
        </Menu.Item>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    startCountdown("Dec 31, 2030 23:59:59");
  }, []);
  return (
    <Layout title={"All Products • Best Offers"}>
      <header className="header">
        <div className="search-bar">
          <SearchInput />
        </div>
      </header>

      <li className="category-container dropdown">
        <ul className="dropdown-menu">
          <li>
            <Link className="category-item" to={"/categories"}>
              All Categories
            </Link>
          </li>
          {categories &&
            categories?.map((c) => (
              <li key={c._id}>
                <Link
                  className="category-item"
                  to={`/category/${c.slug}`}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                >
                  {c.name}
                </Link>
              </li>
            ))}
        </ul>
      </li>

      <div className="banner">
        <Slider {...settings}>
          <header>
            <div className="section__container header__container">
              <div className="header__content">
                <p>EXTRA 55% OFF ON DIWALI SALE</p>
                <h1>
                  Discover & Shop
                  <br />
                  Microsoft Laptop GO Touch Screen
                </h1>
                <Link to={`/category/laptops`} className="btn">
                  SHOP NOW
                </Link>
              </div>
              <div className="header__image">
                <img src={banner1} alt="header" />
              </div>
            </div>
          </header>
          <header>
            <div className="section__container header__container2">
              <div className="header__image2">
                <img src={banner2} alt="Banner 3" className="banner-img3" />
                <div className="header__content2">
                  <Link to="/category/headphones" className="btn">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <header>
            <div className="section__container header__container2">
              <div className="header__image2">
                <video className="video-banner__video" autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </header>
          <header>
            <div className="section__container header__container2">
              <div className="header__image2">
                <img src={banner4} alt="Banner 3" className="banner-img3" />
                <div className="header__content2">
                  <Link to="/category/mobiles" className="btn">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </Slider>
      </div>

      <div className="product-featured">
        <h2 className="title">Deal of the day</h2>
        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <Slider {...settings2}>
                  <img src={deal1} alt="Banner 1" className="banner-img" />
                  <img src={deal2} alt="Banner 2" className="banner-img" />
                  <div className="showcase-container">
                    <VideoBanner />
                  </div>
                  <img src={deal3} alt="Banner 3" className="banner-img" />
                  <img src={deal4} alt="Banner 4" className="banner-img" />
                  <img src={deal5} alt="Banner 5" className="banner-img" />
                  <img src={deal6} alt="Banner 6" className="banner-img" />
                  <img src={deal7} alt="Banner 7" className="banner-img" />
                </Slider>
              </div>
              <div className="showcase-content">
                <a href="#">
                  <Link to="/category/laptops" className="showcase-title">
                    Samsung Galaxy Book4
                  </Link>
                </a>
                <p className="showcase-desc">
                  Windows 11 Home39.62 cmIntel® Core™ 5 processor 120U8 GB512
                  GBGray
                </p>
                <div className="price-box">
                  <p className="price">₹65,000.00</p>
                  <del>M.R.P:₹80,000.00</del>
                </div>
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
                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold: <b>20</b>
                    </p>
                  </div>
                </div>
                <div className="countdown-box">
                  <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                  <div className="countdown">
                    <div id="days" className="time">
                      0
                    </div>
                    <div className="label">Days</div>
                    <div id="hours" className="time">
                      0
                    </div>
                    <div className="label">Hours</div>
                    <div id="minutes" className="time">
                      0
                    </div>
                    <div className="label">Minutes</div>
                    <div id="seconds" className="time">
                      0
                    </div>
                    <div className="label">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9 product-grid-container">
          <h1 className="title text-center mt-8">All Products</h1>
          <div className="product-grid">
            {products.map((p) => (
              <div className="showcase" key={p._id}>
                <div className="showcase-banner">
                  <Link to={`/product/${p.slug}`}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="product-img"
                      alt={p.name}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  </Link>
                </div>

                <div className="showcase-title">
                  <Link to={`/product/${p.slug}`} className="product-link">
                    {p.name.slice(0, 60)}
                  </Link>
                </div>
                <div className="showcase-price">
                  <div className="price-box">
                    <p className="price">₹{p.price}</p>
                    <del>
                      <p className="product-price" style={{ color: "red" }}>
                        ₹{p.price + 1000}
                      </p>
                    </del>
                  </div>
                  <div className="price-box">
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added To Your Cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center loadmore">
        {loadingMore ? (
          <Spin size="large" />
        ) : (
          products &&
          products.length < total && (
            <button
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? "Loading" : "Load More"}
            </button>
          )
        )}
      </div>
    </Layout>
  );
};

export default HomePage;

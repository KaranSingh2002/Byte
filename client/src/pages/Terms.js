import React from "react";
import Layout from "../components/Layout/Layout";
import "../components/Styles/About.css";

const Terms = () => {
  return (
    <Layout title={"Terms and Conditions • Z-Cart"}>
      <div className="row about">
        <div className="col-md-6">
          <img
            src="/images/about-us.png"
            alt="aboutus"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">
            TERMS AND CONDITIONS
          </h1>
          <p className="text-justify mt-2">
            Welcome to Z Cart, your ultimate online shopping destination! At Z
            Cart, we believe in bringing the world to your fingertips by
            offering a comprehensive selection of products that cater to all
            your needs and desires. From trendy fashion and cutting-edge gadgets
            to stylish footwear, elegant watches, and everyday groceries, we've
            got it all covered.
          </p>
          <p className="text-justify mt-2">
            <strong>Who We Are:</strong> Z Cart was founded with a vision to
            create a seamless and enjoyable shopping experience for everyone.
            Our mission is to provide high-quality products at competitive
            prices, backed by exceptional customer service. We understand the
            fast-paced nature of modern life and strive to make your shopping
            experience as convenient and efficient as possible.
          </p>
          <p className="text-justify mt-2">
            <strong>Customer Service:</strong> Your satisfaction is our top
            priority. Our dedicated customer service team is always here to
            assist you with any questions or concerns. Whether you need help
            finding the perfect product, tracking your order, or processing a
            return, we're here to help.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing Z Cart. We look forward to serving you and
            making your shopping experience exceptional.
          </p>
          <p className="text-justify mt-2">
            <strong>The Z Cart Team 😄💖</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;

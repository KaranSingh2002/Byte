import React from "react";
import Layout from "../components/Layout/Layout";
import { BiPhoneCall, BiMailSend, BiSupport } from "react-icons/bi";
import "../components/Styles/Customer.css";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:karansingh97622@gmail.com";
  };

  return (
    <Layout title={"Contact us • Z-Cart"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact-us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-4">
            Any Query & Info about the product feel free to call at anytime we
            are 24X7 available
          </p>
          <p className="mt-3 clickable" onClick={handleEmailClick}>
            <BiMailSend /> : <u>karansingh97622@gmail.com</u>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91-9557251XXX
          </p>
          <p className="mt-3">
            <BiSupport /> : +91-9557251XXX
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

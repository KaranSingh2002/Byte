import React from "react";
import Layout from "../components/Layout/Layout";
import "../components/Styles/Privacy.css";

const Policy = () => {
  return (
    <Layout title={"Policy • Z-Cart"}>
      <div className="row policy">
        <div className="col-12 text-center">
          <img
            src="/images/policy.png"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>

        <h2 className="mt-4">Privacy Policy</h2>
        <p className="text-justify">
          At Z Cart, we value your privacy and are committed to protecting your
          personal information. We collect and use your data to improve your
          shopping experience and provide personalized services. We do not share
          your information with third parties except as necessary to complete
          your order or comply with legal requirements. For more details, please
          read our full Privacy Policy.
        </p>

        <h2 className="mt-4">Return and Refund Policy</h2>
        <p className="text-justify">
          We want you to be completely satisfied with your purchase from Z Cart.
          If you are not happy with your order, you can return most items within
          30 days of receipt for a full refund or exchange. The item must be in
          its original condition, with all tags and packaging intact. Some
          items, such as perishable goods, custom products, and personal care
          items, are not eligible for returns. Please review our full Return and
          Refund Policy for detailed information on how to process a return.
        </p>

        <h2 className="mt-4">Shipping Policy</h2>
        <p className="text-justify">
          We offer fast and reliable shipping to ensure that your products reach
          you as quickly as possible. Orders are typically processed within 1-2
          business days and shipping times vary based on your location. We
          provide tracking information so you can monitor your shipment.
          Shipping charges are calculated at checkout based on the weight and
          destination of your order. For more details, please refer to our full
          Shipping Policy.
        </p>

        <h2 className="mt-4">Terms and Conditions</h2>
        <p className="text-justify">
          By using Z Cart, you agree to our terms and conditions. These terms
          govern your use of our website and services, including making
          purchases, creating an account, and participating in promotions. We
          reserve the right to update these terms at any time. Continued use of
          our site constitutes your acceptance of the updated terms. Please read
          our full Terms and Conditions for complete information.
        </p>

        <h2 className="mt-4">Contact Us</h2>
        <p className="text-justify">
          If you have any questions or concerns about our policies, please feel
          free to contact us. Our customer service team is available 24/7 to
          assist you. You can reach us by phone, email, or through our website's
          contact form. We are here to help and ensure that you have a positive
          shopping experience with Z Cart.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;

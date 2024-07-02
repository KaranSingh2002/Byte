import React from "react";
import Layout from "../components/Layout/Layout";
import "../components/Styles/About.css";

const LegalNotice = () => {
  return (
    <Layout title={"Legal Notice • Z-Cart"}>
      <div className="row legal-notice">
        <div className="col-md-6">
          <img
            src="/images/legal-notice.png"
            alt="legalnotice"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-md-6">
          <h1 className="bg-dark p-2 text-white text-center">LEGAL NOTICE</h1>
          <p className="text-justify mt-2">
            Welcome to Z Cart. This legal notice outlines the terms and
            conditions for using our website and services. By accessing or using
            Z Cart, you agree to be bound by these terms and conditions.
          </p>
          <p className="text-justify mt-2">
            <strong>1. Legal Information:</strong> Z Cart is operated by [Your
            Company Name], located at [Your Company Address]. Our contact email
            is [Your Contact Email].
          </p>
          <p className="text-justify mt-2">
            <strong>2. Intellectual Property:</strong> All content, trademarks,
            and data on this website, including but not limited to software,
            databases, text, graphics, icons, hyperlinks, private information,
            designs, and agreements, are the property of or licensed to Z Cart.
          </p>
          <p className="text-justify mt-2">
            <strong>3. Use of the Site:</strong> Users may view, download, and
            print content from this site for private and non-commercial purposes
            only. No part of this site may be reproduced or transmitted in any
            form without the prior written permission of Z Cart.
          </p>
          <p className="text-justify mt-2">
            <strong>4. Limitation of Liability:</strong> Z Cart shall not be
            held responsible for any damages or loss resulting from the use of
            this website. This includes direct, indirect, incidental, punitive,
            and consequential damages.
          </p>
          <p className="text-justify mt-2">
            <strong>5. Changes to the Legal Notice:</strong> Z Cart reserves the
            right to change or update this legal notice at any time without
            prior notice. It is the user's responsibility to regularly review
            these terms and conditions.
          </p>
          <p className="text-justify mt-2">
            Thank you for visiting Z Cart. We hope you enjoy your shopping
            experience.
          </p>
          <p className="text-justify mt-2">
            <strong>The Z Cart Team 😄💖</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LegalNotice;

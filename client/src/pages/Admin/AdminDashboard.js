import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import "../../components/Styles/Dashboard.css";

const AdminDashboard = () => {
  const { auth } = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-70 p-3">
              <h3>Admin Name : {auth?.user?.name}</h3>
              <h3>Admin Email-Id : {auth?.user?.email}</h3>
              <h3>Admin Contact.No : {auth?.user?.phone}</h3>
              <h3>Admin address : {auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;

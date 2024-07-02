import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const { auth } = useAuth();
  if (!auth || !auth.user) {
    return (
      <Layout title={"Dashboard - ZCart"}>
        <div className="container-fluid p-3 m-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <div className="alert alert-warning" role="alert">
                User data not available.
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const { name, email, address, gender, state, city, pincode } = auth.user;
  return (
    <Layout title={"Dashboard - ZCart"}>
      <div className="container-flui p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Name :- {auth?.user?.name}</h3>
              <h3>Email-id :- {auth?.user?.email}</h3>
              <h3>Address :- {auth?.user?.address}</h3>
              <h3>Gender :- {auth?.user?.gender}</h3>
              <h3>State :- {auth?.user?.state}</h3>
              <h3>City :- {auth?.user?.city}</h3>
              <h3>Pincode :- {auth?.user?.pincode}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

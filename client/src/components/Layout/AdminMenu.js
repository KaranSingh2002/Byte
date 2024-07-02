import React from "react";
import { NavLink } from "react-router-dom";
import "../Layout/Styles/AdminMenu.css"; // Import your custom CSS file for AdminMenu styling
import { useAuth } from "../../context/auth";

const AdminMenu = () => {
  const { auth } = useAuth();
  return (
    <div className="admin-menu bg-gray-100 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        {" "}
        <div className="ml-4">
          <h4 className="text-2xl font-bold text-gray-800 uppercase">
            <h3>{auth?.user?.name}</h3>
          </h4>
        </div>
      </div>
      <div className="list-group1">
        <NavLink
          to="/dashboard/admin/create-category"
          className="list-group-item1 list-group-item-action"
          activeClassName="active-item" // Add activeClassName for styling active link
        >
          Create Category
        </NavLink>
        <NavLink
          to="/dashboard/admin/create-product"
          className="list-group-item1 list-group-item-action"
          activeClassName="active-item"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/dashboard/admin/products"
          className="list-group-item1 list-group-item-action"
          activeClassName="active-item"
        >
          Products
        </NavLink>
        <NavLink
          to="/dashboard/admin/orders"
          className="list-group-item1 list-group-item-action"
          activeClassName="active-item"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/admin/users"
          className="list-group-item1 list-group-item-action"
          activeClassName="active-item"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
};

export default AdminMenu;

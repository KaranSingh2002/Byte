import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Layout/Styles/Spinner.css";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => {
        if (prevValue <= 1) {
          clearInterval(interval);
          navigate(`/${path}`, { state: location.pathname });
          return 0;
        }
        return prevValue - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw" }}
    >
      <div className="text-center">
        <h1>
          Redirecting you in {count} second{count !== 1 ? "s" : ""}
        </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;

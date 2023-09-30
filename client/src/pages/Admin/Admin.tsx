import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Admin.style.scss";
// import useEffect from 'react'

function Admin() {
  const { loggedIn } = useAccountContext();
  const navigate = useNavigate();

  
  useEffect(() => {
    if (loggedIn() !== true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="admin-page">
        <h1>Admin</h1>
        {loggedIn() === false ? (
          <div>Login to access admin</div>
        ) : (
          <div>
            <h2>Admin Actions:</h2>
            <Link to="/admin/create-product">Create Product</Link>
          </div>
        )}
      </div>
    </Page>
  );
}

export default Admin;

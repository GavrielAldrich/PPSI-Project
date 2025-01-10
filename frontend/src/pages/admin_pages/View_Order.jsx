import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function View_Order() {
  const [orderData, setOrderData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const token = Cookies.get("auth_token");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_KEY;
        const response = await axios.get(`${API_BASE_URL}/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrderData(response.data.data);
      } catch (error) {
        console.log("Error while fetching order data", error);
      }
    };
    fetchOrder();
  }, [id, token]);

  // Handle logout
  const handleLogout = () => {
    Cookies.remove("auth_token"); // Correct cookie removal
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div id="admin">
      <header>
        <div className="logosec">
          <div className="logo">ADMIN PANEL</div>
        </div>
      </header>

      <div className="main-container">
        <div className="navcontainer">
          <nav className="nav">
            <div className="nav-upper-options">
              {/* Active class for navigation */}
              <div
                className={`nav-option ${
                  window.location.pathname === "/orders" ? "active" : ""
                }`}
                onClick={() => navigate("/orders")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                  className="nav-img"
                  alt="dashboard"
                />
                <h3>Orders Tabel</h3>
              </div>

              <div
                className={`nav-option ${
                  window.location.pathname === "/menus" ? "active" : ""
                }`}
                onClick={() => navigate("/menus")}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
                  className="nav-img"
                  alt="menus"
                />
                <h3>Menus Tabel</h3>
              </div>

              <div className="nav-option logout" onClick={handleLogout}>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
                  className="nav-img"
                  alt="logout"
                />
                <h3>Logout</h3>
              </div>
            </div>
          </nav>
        </div>
        <div className="main">
          <div className="report-container">
            <div className="report-header">
              <h1 className="recent-Articles">View Order</h1>
            </div>

            <div className="form-group">
              <label htmlFor="name">Nama pembeli: </label>
              <input
                type="text"
                value={orderData ? orderData.customer : "Loading"}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Status: </label>
              <input
                type="text"
                value={orderData ? orderData.status : "Loading"}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Daftar belanjaan: </label>
              <div className="order-items">
                {orderData?.items?.map((item, index) => (
                  <div key={index} className="item">
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-details">
                      <p>Name: {item.name}</p>
                      <p>
                        Price: Rp{" "}
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="total">Total: </label>
              <input
                type="text"
                value={
                  orderData
                    ? `Rp ${orderData.total
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
                    : "Loading"
                }
                disabled
              />
            </div>
          </div>
        </div>
      </div>

      <script src="./index.js"></script>
    </div>
  );
}

import React from "react";
import { Layout } from "antd";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./footer.scss";
import { useNavigate } from "react-router-dom";

const { Footer } = Layout;

const FooterFixed = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Contact Us</h3>
          <p>📍 Address: 123 Main Street, New York, USA</p>
          <p>📞 Mobile: +1 234 567 890</p>
          <p>📧 Email: contact@myapp.com</p>
          <p>
            🌍 Google Maps:{" "}
            <a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </p>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>

          </div>
          <h3>Follow Us</h3>
          <button
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/");
        }}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Logout
      </button>
        </div>
      </div>
      <p className="footer-bottom">© 2025 MyApp. All Rights Reserved.</p>
    </Footer>

  );
};

export default FooterFixed;

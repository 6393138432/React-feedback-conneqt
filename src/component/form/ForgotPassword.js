import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Typography, message } from "antd";
import { Link } from "react-router-dom";
import { users } from "../../data/uses";  // Import the dummy data
import "./feedbackForm.scss";
import "./form.scss";

const { Title } = Typography;

const ForgetPassword = () => {
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setEmailError("Check your email for the reset password link."); // Reset error state

    // Check if email exists in the dummy list
    const userExists = users.some((user) => user.email === values.email); 
    
    if (userExists) {
      // Show success message that the reset link has been sent
      message.success("Check your email for the reset password link.");

      // After 30 seconds, redirect to the login page
      setTimeout(() => {
        message.success("It has been sent to your registered email address.");
        navigate("/"); // Redirect to the login page
      }, 1000); // 0 seconds (30000 ms)

    } else {
      setEmailError("Email not found or invalid");
      message.error("Email not found or invalid");
    }
  };

  return (
    <div className="login-form">
      <Title level={2} className="text-center">Reset Password</Title>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        name="reset-password-form"
        autoComplete="on"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true, message: "Please enter a valid email!" }] }
        >
          <Input placeholder="Enter your email" autoComplete="email" />
        </Form.Item>
        {emailError && <p className="text-red-500 text-sm mb-2">{emailError}</p>}
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </Form.Item>
      </Form>
      <Link type="link" className="w-100" to="/">
        Back to Login
      </Link>
    </div>
  );
};

export default ForgetPassword;

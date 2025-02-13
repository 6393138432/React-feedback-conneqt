import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography, Flex, message } from "antd";
import { Link } from "react-router-dom";
import "./feedbackForm.scss";
import "./form.scss";
import { users } from "../../data/uses"; // Importing dummy user data

const { Title } = Typography;

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    setLoginError(""); // Reset error state

    // Check if user exists in dummy data
    const user = users.find((u) => u.email === values.email && u.password === values.password);
    
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/home"); // Redirect to home page on successful login
    } else {
      // message.error("Invalid email or password"); // Show popup error message
      setLoginError("Invalid email or password");

    }
  };

  return (
    <div className="login-form">
      <Title level={2} className="text-center">Login</Title>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        name="login-form"
        initialValues={{ remember: true }}
        autoComplete="on"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: "email", required: true, message: "Please enter a valid email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        {loginError && <p className="text-red-500 text-sm mb-2">{loginError}</p>}
        <Flex gap="small" className="forgetpassword">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Link to="/reset-password">Forget password</Link>
        </Flex>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link type="link" className="w-100" to="/create-new-account">
        Create New Account
      </Link>
    </div>
  );
};

export default Login;

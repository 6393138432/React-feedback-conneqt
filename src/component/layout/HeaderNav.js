import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./header.scss";

const HeaderNav = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">MyApp</Link>
      </div>

      {/* Desktop Menu */}
      <Menu className="nav-menu" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/feature">Feature</Link>
        </Menu.Item>
        <Menu.Item key="/services">
          <Link to="/training-feed-back">Training Feedback</Link>
        </Menu.Item>
        <Menu.Item key="/contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>

      {/* Mobile Menu Button */}
      <Button className="menu-toggle" onClick={showDrawer} icon={<MenuOutlined />} />

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={visible}
      >
        <Menu mode="vertical" selectedKeys={[location.pathname]} onClick={closeDrawer}>
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="/services">
            <Link to="/services">Services</Link>
          </Menu.Item>
          <Menu.Item key="/contact">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default HeaderNav;

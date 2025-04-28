import React from "react";
import { Button, Flex } from "antd";
import {
  AppstoreAddOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const HeaderComponent = ({ collapsed, setCollapsed }) => {
  return (
    <header
      style={{
        padding: 0,
        background: "inherit",
        display: 'flex'
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </header>
  );
};

export default HeaderComponent;

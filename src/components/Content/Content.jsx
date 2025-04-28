import React from "react";
import { Layout, theme } from "antd";

const { Content } = Layout;

const ContentComponent = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        borderRadius: borderRadiusLG,
        background: "#000 !important",
      }}
    >
      Content
    </Content>
  );
};

export default ContentComponent;

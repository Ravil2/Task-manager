import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  FileDoneOutlined,
  AppstoreAddOutlined,
  FieldTimeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="h-full">
        <Menu defaultSelectedKeys={["1"]} className="custom-sidebar">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link to="/high-priority">Главные задачи</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileDoneOutlined />}>
            <Link to="/completed">Выполненные задачи</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreAddOutlined />}>
            <Link to="/add-task">Добавить задачу</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FieldTimeOutlined />}>
            <Link to="/in-progress">Выполняются</Link>
          </Menu.Item>
        </Menu>
      </aside>
    </>
  );
};

export default Sidebar;

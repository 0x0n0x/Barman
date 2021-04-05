import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

import { CREATE_PATH, INDEX_PATH } from "../constants/RouterConstants";
import { HomeOutlined, FileAddOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = () => (
  <Header className={"Header"}>
    <div className={"logo"}>
      <Menu theme={"dark"} mode={"horizontal"} defaultSelectedKeys={"1"}>
        <Menu.Item key={"1"} icon={<HomeOutlined />}>
          <Link to={INDEX_PATH}>Home</Link>
        </Menu.Item>
        <Menu.Item key={"2"} icon={<FileAddOutlined />}>
          <Link to={CREATE_PATH}>Insert Data</Link>
        </Menu.Item>
      </Menu>
    </div>
  </Header>
);

export default HeaderComponent;

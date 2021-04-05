import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";

import HeaderComponent from "./components/HeaderComponent";
import HomeContainer from "./components/HomeContainer";
import CreateContainer from "./components/CreateContainer";
import NotFound from "./components/NotFound";

import { CREATE_PATH, INDEX_PATH } from "./constants/RouterConstants";

const { Content, Footer } = Layout;

ReactDOM.render(
  <BrowserRouter>
    <Layout className="layout">
      <Route component={HeaderComponent} />
      <Content className="layout">
        <Switch>
          <Route exact path={INDEX_PATH} component={HomeContainer} />
          <Route exact path={CREATE_PATH} component={CreateContainer} />
          <Route component={NotFound} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Editor ©{new Date().getFullYear()} Created by Mihkel Joll
      </Footer>
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

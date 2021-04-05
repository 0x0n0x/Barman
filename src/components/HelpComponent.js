import React from "react";
import { Button, Result } from "antd";
import { CREATE_PATH } from "../constants/RouterConstants";
import { Link } from "react-router-dom";

const HelpComponent = () => {
  return (
    <Result
      title={"You need to add data"}
      extra={
        <Link to={CREATE_PATH}>
          <Button type="primary" key="console">
            Create Data
          </Button>
        </Link>
      }
    />
  );
};

export default HelpComponent;

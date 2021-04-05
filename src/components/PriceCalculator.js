import React, { useEffect, useState } from "react";
import { Button, Card, Col, InputNumber, Row, Space } from "antd";

const PriceCalculator = (props) => {
  const [money, setMoney] = useState(0);

  return (
    <Card title={"Price Calculator"}>
      <Row justify="center">
        <Col span={4}>
          Money:
          <InputNumber onChange={setMoney} step={0.1} size={"small"} />
        </Col>

        <Col span={4}>Price: {parseFloat(props.price).toFixed(2)}</Col>

        <Col span={4}>
          payback: {parseFloat(money - props.price).toFixed(2)}
        </Col>

        <Col span={4}>
          <Button
            type="primary"
            onClick={() => {
              localStorage.setItem("Price", 0);
              props.setPrice(0);
            }}
          >
            Pay
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default PriceCalculator;

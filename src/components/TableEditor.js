import React, { useEffect, useState } from "react";
import {Button, notification, Pagination, Space, Table} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const TableEditor = (props) => {
  const [data, setData] = useState(loadData(props.use));

  function add(column) {
    if (!column["taken"]) column["taken"] = 0;
    if (!column["taken"] - 1 >= 0)
      return notification.error({ message: "Cannot add" });
    column["count"] += 1;
    column["taken"] -= 1;
    setData([...data]);
    props.setPrice(props.price - column.price);
    localStorage.setItem("Price", props.price);
    localStorage.setItem(props.use, JSON.stringify(data));
    notification.success({
      message: `Added ${column.name}`,
      duration: 2,
    });
  }

  useEffect(() => {}, [data]);

  function loadData(name) {
    const parseData = JSON.parse(localStorage.getItem(name));
    if (!parseData) return undefined;
    return parseData.filter(function (element) {
      return element.count !== 0 || element.taken !== 0;
    });
  }

  function sub(column) {
    if (!column["taken"]) column["taken"] = 0;
    if (column["count"] - 1 >= 0) {
      column["count"] -= 1;
      column["taken"] += 1;
      setData([...data]);
      localStorage.setItem(props.use, JSON.stringify(data));
      localStorage.setItem("Price", props.price + column.price);
      props.setPrice(props.price + column.price);
      notification.success({
        message: `Removed ${column.name}`,
        duration: 2,
      });
      return;
    }
    notification.error({
      message: "There is no more of this drink",
      duration: 2,
    });
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "20%",
      key: "name",
    },
    {
      title: "Stock",
      dataIndex: "count",
      width: "20%",
      key: "name",
    },
    {
      title: "Taken",
      dataIndex: "taken",
      width: "20%",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      width: "20%",
      key: "price",
      render: (price) => <>{price} €</>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (name) => {
        return (
          <div>
            <Space>
              <Button onClick={() => add(name)} icon={<PlusOutlined />} />
              <Button onClick={() => sub(name)} icon={<MinusOutlined />} />
            </Space>
          </div>
        );
      },
    },
  ];

  return <Table dataSource={data} columns={columns} bordered size={"small"} pagination={<Pagination pageSize={50} />} />;
};

export default TableEditor;

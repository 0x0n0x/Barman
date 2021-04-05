import React, { useState } from "react";
import {
  Button,
  Form,
  InputNumber,
  notification,
  Popconfirm,
  Space,
} from "antd";

const AddDrinksTable = (props) => {
  const [data, setData] = useState(loadData);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    let newData = [];
    for (const valuesKey in values) {
      for (const dataKey in props.data) {
        if (props.data[dataKey]["name"] === valuesKey) {
          newData.push({
            name: valuesKey,
            count: values[valuesKey],
            taken: 0,
            price: props.data[dataKey]["price"],
          });
        }
      }
    }
    localStorage.setItem(props.name, JSON.stringify(newData));
    notification.success({ message: "Success" });
  };

  const onFinishFailed = (errorInfo) => {
    notification.error({ message: errorInfo.message });
  };

  function loadData() {
    const parseData = JSON.parse(localStorage.getItem(props.name));
    if (!parseData) return props.data;
    return parseData;
  }

  return (
    <Form
      form={form}
      name={props.name}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout={"horizontal"}
    >
      {data.map((data) => {
        return (
          <Form.Item
            label={data.name}
            name={data.name}
            initialValue={data.count}
          >
            <InputNumber min={0} />
          </Form.Item>
        );
      })}

      <Space size={"large"}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Popconfirm
            title={`Are you sure to delete all ${props.name} data?`}
            onConfirm={() => {
              localStorage.removeItem(props.name);
              setData([...props.data]);
              form.resetFields();
              notification.success({ message: "Cleared!" });
            }}
            onCancel={() => {
              notification.success({ message: "Didn't delete" });
            }}
            okText={"Yes"}
            cancelText={"Cancel"}
          >
            <Button danger>Clear</Button>
          </Popconfirm>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default AddDrinksTable;

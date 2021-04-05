import React from "react";
import { Card, PageHeader, Tabs } from "antd";
import AddDrinksTable from "./AddDrinksTable";
import { alcohol } from "../data/alcohol";
import { food } from "../data/food";
import { softDrinks } from "../data/softDrinks";
import { tobaccoProducts } from "../data/tobaccoProducts";

const { TabPane } = Tabs;

const CreateContainer = () => {
  return (
    <div className={"CreateContainer"}>
      <PageHeader className="create-page-header" title="Insert data" />
      <Card>
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Alcohol" key="1">
            <Card>
              <AddDrinksTable data={alcohol} name={"alcohol"} />
            </Card>
          </TabPane>
          <TabPane tab="Food" key="2">
            <Card>
              <AddDrinksTable data={food} name={"food"} />
            </Card>
          </TabPane>
          <TabPane tab="Soft drinks" key="3">
            <Card>
              <AddDrinksTable data={softDrinks} name={"softDrinks"} />
            </Card>
          </TabPane>
          <TabPane tab="Tobacco" key="4">
            <Card>
              <AddDrinksTable data={tobaccoProducts} name={"tobaccoProducts"} />
            </Card>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default CreateContainer;
